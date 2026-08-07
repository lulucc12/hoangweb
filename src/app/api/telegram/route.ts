import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Telegram webhook endpoint is alive' });
}

export async function POST(request: Request) {
  try {
    const secretToken = process.env.TELEGRAM_WEBHOOK_SECRET;
    const providedToken = request.headers.get('x-telegram-bot-api-secret-token');

    if (secretToken && providedToken !== secretToken) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
    }

    const update = await request.json();

    if (update?.message?.text) {
      console.log('Telegram update received:', update.message.text);
    }

    return new NextResponse('OK');
  } catch (error) {
    console.error('Telegram webhook error:', error);
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
  }
}
