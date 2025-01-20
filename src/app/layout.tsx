import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import { CartContextProvider } from '@/app/context/CartContext';
import { ProductContextProvider } from '@/app/context/ProductContext';
import { QueryProvider } from '@/app/context/QueryClientProvider';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tashka.cz',
  description: 'Handbags fashion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <QueryProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-grow flex flex-col">{children}</main>
                <Footer />
              </div>
            </ProductContextProvider>
          </CartContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
