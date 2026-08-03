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
            Tuyên bố & và cam kết vận hành
          </h3>
          <div className="space-y-2 text-xs md:text-sm text-neutral-700 leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Dịch vụ:</strong> cung cấp tư vấn, định hướng phương án xử lý và hỗ trợ chuẩn bị hồ sơ khiếu nại hoặc khôi phục tài khoản theo quy trình chính thức.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Hướng dẫn chuyên môn:</strong> tư vấn cách thu thập bằng chứng, sắp xếp tài liệu và trình bày nội dung phù hợp với từng nền tảng và từng tình huống cụ thể.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Giới hạn trách nhiệm:</strong> không can thiệp kỹ thuật trái phép, không mua bán tài khoản, không sử dụng công cụ giả mạo và không thay thế vai trò của cơ quan chức năng.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Bảo mật:</strong> mọi tài liệu, thông tin và trao đổi được bảo quản nội bộ, chỉ sử dụng cho mục đích xử lý sự cố trừ khi có yêu cầu pháp lý hoặc đồng ý của khách hàng.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Giới hạn cam kết:</strong> chúng tôi không cam kết 100% xử lý thành công; quyết định cuối cùng thuộc về nền tảng.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}