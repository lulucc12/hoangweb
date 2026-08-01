'use client';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { logActivity } from '@/lib/activity';

type ContactAction = 'call' | 'zalo';

type ContactActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  action: ContactAction;
  source?: string;
  children: ReactNode;
};

export function ContactActionLink({
  action,
  source = 'Website CTA',
  children,
  onClick,
  ...props
}: ContactActionLinkProps) {
  const href = action === 'call' ? 'tel:0877852153' : 'https://zalo.me/0877852153';

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();

    try {
      await logActivity({
        title: action === 'call' ? 'Nhấn gọi hotline' : 'Nhắn Zalo',
        source,
      });
    } catch {
      // ignore
    }

    if (action === 'call') {
      window.location.href = href;
      return;
    }

    const newWindow = window.open(href, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = href;
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
