import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'منصة بحر العرب | معيار · وثاق · eGov', description: 'منصة مؤسسية موحدة للحوكمة والعمل القانوني والعقود والتكاملات الحكومية.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
