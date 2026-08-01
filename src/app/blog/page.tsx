'use client';

import { Calendar, User, Clock, ChevronRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import QuickContactCta from '@/components/QuickContactCta';

export default function BlogPage() {
  const posts = [
    {
      slug: 'khoi-phuc-tai-khoan-facebook-bi-khoa',
      title: 'Khôi phục tài khoản Facebook bị khóa/hack',
      excerpt: 'Hướng dẫn bước cốt lõi để khôi phục tài khoản Facebook khi bị khóa, bị chiếm quyền hoặc mất quyền truy cập.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      category: 'Account Recovery',
      date: '20/07/2026',
      readTime: '7 phút',
    },
    {
      slug: 'xu-ly-thong-tin-tieu-cuc-fb',
      title: 'Giải quyết vấn đề danh tiếng cho doanh nghiệp F&B',
      excerpt: 'Báo cáo xử lý đánh giá ảo và thông tin sai lệch trên Fanpage nhà hàng, khôi phục uy tín trên mạng xã hội.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      category: 'Case Study',
      date: '15/03/2024',
      readTime: '5 phút',
    },
    {
      slug: 'bao-ve-thuong-hieu-tiktok',
      title: 'Bảo vệ thương hiệu cá nhân bị giả mạo trên TikTok',
      excerpt: 'Quy trình khiếu nại và xử lý tài khoản giả mạo nhằm mục đích điều hướng khách hàng trái phép.',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800',
      category: 'Case Study',
      date: '12/03/2024',
      readTime: '8 phút',
    },
    {
      slug: 'xu-ly-tin-don-google',
      title: 'Xử lý tin đồn thất thiệt trên kết quả tìm kiếm Google',
      excerpt: 'Các bước xác minh căn cứ pháp lý để gỡ bỏ bài viết sai sự thật ảnh hưởng đến uy tín cá nhân chuyên gia.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      category: 'Case Study',
      date: '10/03/2024',
      readTime: '10 phút',
    },
    {
      slug: 'luat-an-ninh-mang',
      title: 'Luật An ninh mạng và khiếu nại nội dung tiêu cực',
      excerpt: 'Căn cứ pháp lý tại Việt Nam giúp cá nhân, tổ chức bảo vệ danh dự trên không gian mạng.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
      category: 'Pháp luật',
      date: '08/03/2024',
      readTime: '6 phút',
    },
    {
      slug: 'social-monitoring',
      title: 'Tầm quan trọng của giám sát truyền thông (Social Monitoring)',
      excerpt: 'Tại sao phát hiện sớm là chìa khóa để xử lý khủng hoảng truyền thông trước khi lan rộng.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c20e?auto=format&fit=crop&q=80&w=800',
      category: 'Kiến thức',
      date: '05/03/2024',
      readTime: '7 phút',
    },
    {
      slug: 'bao-ve-uy-tin-ca-nhan',
      title: 'Cách phòng ngừa khủng hoảng uy tín cá nhân trên môi trường số',
      excerpt: 'Xây dựng lá chắn phòng thủ cho danh tiếng cá nhân trước các cuộc tấn công có chủ đích.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
      category: 'Thương hiệu',
      date: '01/03/2024',
      readTime: '9 phút',
    },
  ];

  return (
    <div className="bg-neutral-50 pt-20">
      <section className="bg-primary-900 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-6">Kiến Thức & Case Study</h1>
        <p className="max-w-2xl mx-auto px-4 text-primary-200">
          Chia sẻ quy trình xử lý khủng hoảng, khôi phục tài khoản và các căn cứ pháp lý để bảo vệ danh tiếng.
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <QuickContactCta />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-md p-6 flex flex-col border">
              <span className="text-xs font-bold text-primary-800 bg-primary-50 px-3 py-1 rounded-lg w-max mb-4">{post.category}</span>
              <h2 className="text-xl font-bold mb-3 hover:text-primary-800"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="text-sm text-neutral-600 flex-1 mb-6">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary-800 font-bold text-sm flex items-center gap-1">Đọc bài <ChevronRight className="w-4 h-4"/></Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}