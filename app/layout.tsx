import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavigationWrapper from './components/NavigationWrapper';
import Footer from './components/Footer';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILIA MAHNS",
  description: "Ilia Mahns is a UX Designer and Visual Creative",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 637,
        alt: 'ILIA MAHNS',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <NavigationWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
