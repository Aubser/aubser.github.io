// app/layout.tsx
import './globals.css';
import Header from '@/components/header';

export const metadata = {
  title: 'SkyTech Drones',
  description: 'Advanced aerial technology for the future.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='no-scrollbar'>
        <Header />
        {children}
      </body>
    </html>
  );
}
