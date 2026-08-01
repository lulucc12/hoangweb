import { Shield, MessageCircle, Clock, FileText, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'FAQ - Câu hỏi thường gặp | Crisis Shield',
  description:
    'Câu hỏi thường gặp về khôi phục tài khoản, khiếu nại nội dung vi phạm, quản trị danh tiếng và xử lý khủng hoảng truyền thông.',
};

const faqs = [
  {
    question: 'Làm sao biết tài khoản Facebook bị khóa hay bị hack?',
    answer:
      'Nếu bạn không thể đăng nhập, nhận thông báo tài khoản bị vô hiệu hóa, mã xác minh không hoạt động hoặc có hoạt động lạ trên tài khoản, đó là dấu hiệu tài khoản bị khóa/hack. Chúng tôi giúp phân tích tình huống và đề xuất bước xử lý tiếp theo.',
  },
  {
    question: 'Tôi cần chuẩn bị những thông tin nào để yêu cầu hỗ trợ?',
    answer:
      'Bạn chỉ cần cung cấp họ tên, số điện thoại/Zalo, mô tả ngắn tình huống và link tài khoản hoặc nội dung liên quan. Nếu có, hãy nêu rõ thời điểm sự cố và các bước bạn đã thử.',
  },
  {
    question: 'Thời gian tư vấn và xử lý mất bao lâu?',
    answer:
      'Chúng tôi phản hồi ngay, chậm nhất trong 30 phút sau khi nhận được yêu cầu, và bắt đầu phân tích tình huống trong cùng ngày. Thời gian xử lý tiếp theo phụ thuộc vào tính chất sự cố và phản hồi từ nền tảng, nhưng chúng tôi ưu tiên đẩy nhanh mọi bước để giải quyết trong thời gian ngắn nhất.',
  },
  {
    question: 'Có chắc chắn khôi phục được tài khoản không?',
    answer:
      'Không dịch vụ nào có thể đảm bảo 100% do phụ thuộc vào chính sách và quyết định của Facebook. Chúng tôi cam kết hỗ trợ theo quy trình chuyên nghiệp, tối ưu bằng chứng và thủ tục để tăng cơ hội thành công.',
  },
  {
    question: 'Dịch vụ này có hỗ trợ khiếu nại nội dung vi phạm hay tin xấu?',
    answer:
      'Có. Chúng tôi hỗ trợ soạn hồ sơ khiếu nại, yêu cầu gỡ bài sai sự thật, xử lý nội dung xuyên tạc và bảo vệ danh tiếng doanh nghiệp/cá nhân trên mạng xã hội.',
  },
  {
    question: 'Làm sao để liên hệ nhanh với đội ngũ của bạn?',
    answer:
      'Gọi hotline/Zalo 0877 852 153 hoặc gửi yêu cầu qua form trên website. Chúng tôi sẽ liên hệ lại ngay khi nhận được thông tin để hướng dẫn bước đầu tiên.',
  },
  {
    question: 'Chi phí dịch vụ được xác định thế nào?',
    answer:
      'Chi phí phụ thuộc vào mức độ phức tạp, số lượng kênh và loại sự cố. Sau khi nhận được mô tả tình huống, chúng tôi sẽ báo giá cụ thể và minh bạch trước khi bắt đầu.',
  },
  {
    question: 'Tại sao nên sử dụng dịch vụ chuyên môn thay vì tự xử lý?',
    answer:
      'Xử lý sai bước có thể khiến tình huống nghiêm trọng hơn hoặc mất bằng chứng. Đội ngũ chuyên môn giúp chọn kênh phù hợp, chuẩn bị hồ sơ chính xác và kiểm soát rủi ro truyền thông hiệu quả.',
  },
];

export default function FAQPage() {
  return (
    <div className="bg-neutral-50">
      <section className="bg-primary-900 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">FAQ - Câu hỏi thường gặp</h1>
          <p className="text-base sm:text-lg text-primary-200">
            Các trả lời nhanh về khôi phục tài khoản, khiếu nại nội dung và xử lý khủng hoảng truyền thông.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr]">
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-3xl border border-neutral-200 p-6 shadow-sm bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-primary-100 text-primary-800 grid place-items-center">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <h2 className="text-xl font-semibold text-primary-900">{item.question}</h2>
                </div>
                <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <aside className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-900 mb-3">
                <Shield className="w-4 h-4" />
                Hỗ trợ nhanh 24/7
              </div>
              <p className="text-neutral-700 mb-4">
                Nếu bạn không tìm thấy câu trả lời phù hợp, hãy liên hệ ngay để nhận tư vấn cá nhân hóa cho tình huống của mình.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white p-2 text-primary-700">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Nhắn Zalo</p>
                    <p className="font-semibold text-primary-900">0877 852 153</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white p-2 text-primary-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Thời gian</p>
                    <p className="font-semibold text-primary-900">Phản hồi nhanh trong ngày</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white p-2 text-primary-700">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Hồ sơ</p>
                    <p className="font-semibold text-primary-900">Hướng dẫn chuẩn bị chi tiết</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 border border-primary-200">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Nên làm gì tiếp theo?</h3>
              <p className="text-neutral-600 mb-4">
                Gửi mô tả ngắn tình huống, link tài khoản hoặc link nội dung vi phạm. Chúng tôi sẽ liên hệ lại và tư vấn bước xử lý tiếp theo.
              </p>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-primary-800 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(2,6,23,0.12)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-[0_16px_36px_rgba(2,6,23,0.16)]"
              >
                Đến trang liên hệ
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
