import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavigationWrapper from './components/NavigationWrapper';
import Footer from './components/Footer';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Welcome to my website",
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
