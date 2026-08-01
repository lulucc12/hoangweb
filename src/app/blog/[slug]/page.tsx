import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const content: Record<string, { title: string; image: string; content: string }> = {
    'khoi-phuc-tai-khoan-facebook-bi-khoa': {
      title: 'Khôi phục tài khoản Facebook bị khóa/hack',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      content: 'Tình trạng: Tài khoản Facebook bị khóa đột ngột, bị hack hoặc mất quyền truy cập khiến khách hàng không thể đăng nhập và giao tiếp với khách hàng.\n\nGiải pháp: \n1. Xác minh danh tính và thu thập bằng chứng: Chuẩn bị email/SĐT liên kết, ảnh giấy tờ, màn hình lỗi đăng nhập và các thông tin cần thiết. \n2. Soạn hồ sơ khôi phục: Xây dựng hồ sơ theo mẫu Meta và trình bày đúng nguyên nhân, bằng chứng và yêu cầu hỗ trợ. \n3. Theo dõi và phản hồi: Quản lý ticket, bổ sung thông tin khi nền tảng yêu cầu và theo dõi tiến độ tới khi có quyết định.\n\nKết quả: Quá trình khôi phục được triển khai đúng quy trình, tăng khả năng nhận phản hồi tích cực từ Meta và bảo toàn quyền truy cập cho khách hàng.'
    },
    'xu-ly-thong-tin-tieu-cuc-fb': {
      title: 'Giải quyết vấn đề danh tiếng cho doanh nghiệp F&B',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      content: 'Tình trạng: Khách hàng là một chuỗi nhà hàng nhận nhiều đánh giá ảo tiêu cực, ảnh hưởng trực tiếp đến lượng khách đặt bàn trên Facebook. \n\nGiải pháp: \n1. Phân tích dữ liệu bằng chứng: Tập hợp log, thời điểm đăng tải và các tài khoản nghi vấn. \n2. Soạn thảo hồ sơ khiếu nại: Xây dựng văn bản dựa trên "Chính sách về Spam & Hành vi không xác thực" của Meta. \n3. Thực thi: Gửi hồ sơ và làm việc trực tiếp với đội ngũ hỗ trợ qua các kênh chuyên biệt. \n\nKết quả: Sau 7 ngày, các đánh giá sai lệch đã được nền tảng xác minh và gỡ bỏ, khôi phục lại uy tín cho doanh nghiệp.'
    },
    'bao-ve-thuong-hieu-tiktok': {
      title: 'Bảo vệ thương hiệu cá nhân bị giả mạo trên TikTok',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800',
      content: 'Tình trạng: Thương hiệu của khách hàng bị kẻ xấu sao chép toàn bộ video để lập tài khoản giả mạo, điều hướng khách hàng. \n\nGiải pháp: \n1. Xác thực bằng chứng: Tổng hợp các bằng chứng sở hữu trí tuệ, thời điểm đăng tải video gốc. \n2. Soạn thảo hồ sơ: Thực hiện quy trình khiếu nại vi phạm quyền sở hữu trí tuệ chuẩn của TikTok. \n3. Theo dõi: Thúc đẩy quá trình xác minh từ phía nền tảng. \n\nKết quả: Tài khoản giả mạo bị khóa vĩnh viễn, bảo vệ quyền lợi và hình ảnh cho khách hàng.'
    },
    'xu-ly-tin-don-google': {
      title: 'Xử lý tin đồn thất thiệt trên kết quả tìm kiếm Google',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      content: 'Tình trạng: Khách hàng bị các bài viết trên blog lạ công kích với thông tin không có căn cứ, hiển thị ngay trên kết quả tìm kiếm Google. \n\nGiải pháp: \n1. Đánh giá tính pháp lý: Xác định mức độ vi phạm quyền cá nhân và xuyên tạc. \n2. Thực thi: Gửi yêu cầu gỡ bỏ nội dung tới đơn vị chủ quản dựa trên các chính sách hỗ trợ của Google. \n3. Quản trị: Tư vấn khách hàng các bước quản trị danh tiếng để đẩy lùi thông tin xấu trên công cụ tìm kiếm. \n\nKết quả: Thông tin sai lệch được gỡ bỏ khỏi kết quả tìm kiếm, khách hàng ổn định lại hoạt động.'
    },
    'luat-an-ninh-mang': {
        title: 'Luật An ninh mạng và khiếu nại nội dung tiêu cực',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
        content: 'Bài viết cung cấp các căn cứ pháp lý tại Việt Nam giúp cá nhân và tổ chức hiểu rõ quyền của mình khi bị công kích trên không gian mạng. Chúng tôi hướng dẫn cách thu thập chứng cứ số, lập vi bằng và quy trình làm việc với các cơ quan quản lý nhà nước khi cần thiết.'
    },
    'social-monitoring': {
        title: 'Tầm quan trọng của giám sát truyền thông (Social Monitoring)',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?auto=format&fit=crop&q=80&w=800',
        content: 'Phát hiện sớm là chìa khóa của xử lý khủng hoảng. Tìm hiểu cách thiết lập hệ thống cảnh báo sớm giúp doanh nghiệp phòng ngừa rủi ro từ những dấu hiệu nhỏ nhất trước khi lan rộng.'
    },
    'bao-ve-uy-tin-ca-nhan': {
        title: 'Cách phòng ngừa khủng hoảng uy tín cá nhân trên môi trường số',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
        content: 'Xây dựng lá chắn phòng thủ cho danh tiếng cá nhân trước những cuộc tấn công có chủ đích trên TikTok và Facebook. Các bước cần làm ngay để củng cố uy tín.'
    }
  };

  const post = content[slug];
  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-2xl mb-8" />
      <h1 className="text-4xl font-bold mb-6 text-primary-900">{post.title}</h1>
      <div className="prose prose-neutral text-lg leading-relaxed max-w-none text-neutral-700 whitespace-pre-line">{post.content}</div>
    </div>
  );
}