import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, message, source } = body;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const missing: string[] = [];
    if (!TELEGRAM_BOT_TOKEN) missing.push('TELEGRAM_BOT_TOKEN');
    if (!TELEGRAM_CHAT_ID) missing.push('TELEGRAM_CHAT_ID');

    if (missing.length > 0) {
      console.error('Telegram credentials not configured, missing:', missing.join(', '));
      return NextResponse.json({ success: false, error: 'Configuration error', missing }, { status: 500 });
    }

    const text = `
🔔 **CÓ YÊU CẦU TƯ VẤN KHỦNG HOẢNG TRUYỀN THÔNG!**
━━━━━━━━━━━━━━━━━━
👤 **Họ tên:** ${name}
📞 **SĐT/Zalo:** ${phone}
🛠️ **Dịch vụ:** ${service || 'Tư vấn khiếu nại nội dung vi phạm'}
📝 **Nội dung:** ${message || 'Khách đăng ký từ trang chủ'}
🌐 **Nguồn:** ${source || 'Website Crisis Shield'}
━━━━━━━━━━━━━━━━━━
🚀 *Anh Hoàng ơi, check ngay để hỗ trợ khách nhé!*
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error Detail:', errorData);
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram Webhook Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send notification' }, { status: 500 });
  }
}