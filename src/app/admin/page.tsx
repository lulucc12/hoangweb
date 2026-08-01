'use client';

import { useEffect, useState } from 'react';

interface ActivityItem {
  id: string;
  createdAt: string;
  title: string;
  detail: string;
  source: string;
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleString('vi-VN');
}

export default function AdminPage() {
  const [items, setItems] = useState<ActivityItem[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/activity', { cache: 'no-store' });
      const data = await res.json();
      setItems(data);
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Admin - Hoạt động tư vấn</h1>
        <p className="text-slate-600 mb-6">Xem toàn bộ lịch sử yêu cầu tư vấn và các sự kiện ghi nhận.</p>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          {items.length === 0 ? (
            <p className="text-slate-500">Chưa có dữ liệu.</p>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-neutral-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-semibold text-slate-900">{item.title}</h2>
                    <span className="text-sm text-slate-500">{formatTime(item.createdAt)}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">Nguồn: {item.source}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
