
import QuickContactCta from '@/components/QuickContactCta';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-neutral-800">
      <h1 className="text-4xl font-bold mb-8">Chính sách Bảo mật Thông tin</h1>
      
      <div className="prose prose-lg max-w-none space-y-8">
        <p>Tại <strong>Crisis Shield</strong>, chúng tôi hiểu rằng thông tin của bạn là tài sản quý giá nhất. Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin khách hàng trong quá trình tư vấn và hỗ trợ thủ tục xử lý khủng hoảng truyền thông.</p>

        <h2 className="text-2xl font-bold">1. Phạm vi thu thập thông tin</h2>
        <p>Chúng tôi chỉ thu thập các thông tin cần thiết để phục vụ công tác tư vấn và lập hồ sơ khiếu nại, bao gồm:</p>
        <ul className="list-disc pl-6">
          <li>Thông tin liên hệ (Họ tên, số điện thoại, email).</li>
          <li>Thông tin về vụ việc (Link nội dung vi phạm, hình ảnh, tài liệu liên quan đến nội dung cần xử lý).</li>
          <li>Thông tin hỗ trợ khôi phục tài khoản (Email/SĐT liên kết, ảnh xác minh danh tính, màn hình báo lỗi khóa tài khoản).</li>
          <li>Giấy tờ pháp lý cần thiết để xác minh quyền sở hữu (CCCD/GPKD/Giấy chứng nhận thương hiệu).</li>
        </ul>

        <h2 className="text-2xl font-bold">2. Mục đích sử dụng</h2>
        <p>Thông tin của khách hàng chỉ được sử dụng cho các mục đích:</p>
        <ul className="list-disc pl-6">
          <li>Phân tích rủi ro và đánh giá căn cứ pháp lý.</li>
          <li>Xác minh danh tính để gửi yêu cầu khôi phục tài khoản và khiếu nại nội dung vi phạm.</li>
          <li>Soạn thảo hồ sơ khiếu nại gửi nền tảng hoặc cơ quan quản lý.</li>
          <li>Liên lạc cập nhật tiến độ xử lý hồ sơ.</li>
        </ul>

        <h2 className="text-2xl font-bold">3. Google Analytics và Google Ads</h2>
        <p>Chúng tôi sử dụng Google Analytics để theo dõi lượt truy cập, hành vi người dùng và hiệu quả nội dung trên website. Thông tin này giúp chúng tôi cải thiện trải nghiệm khách truy cập và tối ưu hóa nội dung, dịch vụ cung cấp.</p>
        <p>Chúng tôi cũng sử dụng Google Ads để theo dõi chuyển đổi và đánh giá hiệu quả chiến dịch quảng cáo. Dữ liệu thu thập bởi Google Ads có thể bao gồm tương tác với quảng cáo, nguồn truy cập và kết quả hành động như gửi yêu cầu liên hệ.</p>
        <p>Google có thể sử dụng cookie và các công nghệ theo dõi để phân tích và tối ưu hóa quảng cáo trên các nền tảng của họ. Nếu bạn không muốn bị theo dõi, bạn có thể tắt cookie trong trình duyệt hoặc sử dụng công cụ của Google để vô hiệu hóa theo dõi.</p>

        <h2 className="text-2xl font-bold">4. Quyền của bạn</h2>
        <ul className="list-disc pl-6">
          <li>Bạn có quyền biết chúng tôi thu thập thông tin nào và vì mục đích gì.</li>
          <li>Bạn có quyền từ chối hoặc vô hiệu hóa cookie quảng cáo và tracking.</li>
          <li>Bạn có quyền yêu cầu chúng tôi không sử dụng dữ liệu của bạn cho mục đích quảng cáo.</li>
          <li>Bạn có quyền yêu cầu truy cập, sửa đổi hoặc xoá dữ liệu cá nhân của mình.</li>
        </ul>
        <p>Nếu bạn có yêu cầu về quyền riêng tư hoặc dữ liệu, vui lòng liên hệ qua email: hoang.helpmedia@gmail.com.</p>

        <h2 className="text-2xl font-bold">5. Cam kết Bảo mật (NDA)</h2>
        <p>Mọi giao dịch và thông tin trao đổi đều được cam kết bảo mật tuyệt đối thông qua Hợp đồng Bảo mật Thông tin (NDA). Chúng tôi cam kết:</p>
        <ul className="list-disc pl-6">
          <li>Không tiết lộ danh tính khách hàng cho bất kỳ bên thứ ba nào.</li>
          <li>Sử dụng các biện pháp kỹ thuật an toàn để lưu trữ dữ liệu.</li>
          <li>Tiêu hủy toàn bộ tài liệu, dữ liệu ngay sau khi kết thúc công việc nếu khách hàng yêu cầu.</li>
        </ul>

        <h2 className="text-2xl font-bold">4. Chia sẻ thông tin</h2>
        <p>Chúng tôi chỉ chia sẻ thông tin trong phạm vi cần thiết với các nền tảng (Meta, TikTok, Google) hoặc cơ quan chức năng khi thực hiện thủ tục khiếu nại, và luôn đảm bảo có sự đồng ý của khách hàng trong từng bước thực hiện.</p>

        <h2 className="text-2xl font-bold">5. Liên hệ</h2>
        <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ:</p>
        <p>
          <strong>Hotline:</strong> 0877 852 153<br />
          <strong>Email:</strong> hoang.helpmedia@gmail.com
        </p>
      </div>

    </div>
  );
}