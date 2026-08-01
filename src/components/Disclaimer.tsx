'use client';

import { AlertCircle, CheckCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="bg-white/70 rounded-xl p-3 md:p-4 border border-white/50 shadow-sm">
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertCircle className="w-4 h-4 text-amber-600" />
        </div>
        <div>
          <h3 className="font-bold text-neutral-900 mb-2 text-sm md:text-base">
            Tuyên bố minh bạch và cam kết vận hành chuyên nghiệp
          </h3>
          <div className="space-y-1.5 text-xs md:text-sm text-neutral-700 leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Dịch vụ rõ ràng:</strong> tư vấn khiếu nại nội dung vi phạm và khôi phục tài khoản Facebook theo quy trình chính thức.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Hướng dẫn chuyên môn:</strong> chuẩn bị bằng chứng, hồ sơ và phương án trình duyệt phù hợp với từng nền tảng.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Giới hạn trách nhiệm:</strong> không can thiệp kỹ thuật trái phép, không mua/bán tài khoản và không sử dụng công cụ giả mạo.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Bảo mật:</strong> mọi tài liệu và thông tin chỉ dùng cho xử lý sự cố, trừ khi có yêu cầu pháp lý hoặc đồng ý của khách hàng.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}