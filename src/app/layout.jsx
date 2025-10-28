import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

export const metadata = {
  title: 'Handmade Haven',
  description: 'E-commerce application for handmade items',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-coconut-50" suppressHydrationWarning>
        <WishlistProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
