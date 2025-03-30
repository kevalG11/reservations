import './globals.css';
import '@shadcn/ui/styles.css'; // Make sure to import this
import { ReactNode } from 'react';
import Sidebar from './sidebar';

export const metadata = {
  title: 'Reservo System',
  description: 'Restaurant Reservation System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar /> {/* Render the sidebar here */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
