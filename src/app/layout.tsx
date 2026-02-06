// app/layout.tsx
import './globals.css';
import Header from '../components/Header/header';

export const metadata = {
   title: 'Driftless Robotics',
   description: 'Cutting-edge drones for industry, security, and exploration.',
   icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen no-scrollbar'>
        <Header />
        {children}
      </body>
    </html>
  );
}
