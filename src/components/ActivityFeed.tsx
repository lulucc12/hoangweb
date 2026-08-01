'use client';

import { useEffect, useState } from 'react';

interface ActivityItem {
  id: string;
  createdAt: string;
  title: string;
  detail: string;
  source: string;
  message?: string;
}

function formatTimeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'Vừa xong';
  if (minutes < 60) return `${minutes} phút trước`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  return `${days} ngày trước`;
}

export default function ActivityFeed() {
  const [items, setItems] = useState<ActivityItem[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/activity', { cache: 'no-store' });
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch {
        // ignore
      }
    };

    const handleActivityUpdate = () => {
      void load();
    };

    void load();
    const interval = window.setInterval(load, 10000);
    window.addEventListener('activity:updated', handleActivityUpdate);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('activity:updated', handleActivityUpdate);
    };
  }, []);

  return (
    <section className="mt-8 rounded-2xl border border-slate-100 bg-transparent p-2">
      <h3 className="text-sm font-medium text-slate-700 mb-2">Hoạt động gần đây</h3>

      {items.length === 0 ? (
        <p className="text-xs text-slate-500">Chưa có hoạt động nào.</p>
      ) : (
        <ul className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between text-sm text-slate-700 bg-white/60 rounded-lg px-3 py-2">
              <span className="truncate">{item.message || item.title}</span>
              <span className="ml-3 text-xs text-slate-400 whitespace-nowrap">{formatTimeAgo(item.createdAt)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
