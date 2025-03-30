"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Tables', href: '/tables' },
  { name: 'Customers', href: '/customers' },
  { name: 'Analytics', href: '/analytics' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col space-y-4">
      <div className="text-xl font-bold mb-4">Reservo</div>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`p-2 rounded ${pathname === item.href ? 'bg-gray-700' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  );
}
