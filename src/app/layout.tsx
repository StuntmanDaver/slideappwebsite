import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slideapp",
  description: "Slideapp - Connecting Consumers and Staff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-4 border-b flex justify-between items-center font-[family-name:var(--font-geist-sans)]">
          <Link href="/" className="text-xl font-bold">Home</Link>
          <div className="flex gap-4">
            <Link href="/consumer" className="hover:underline">Consumer</Link>
            <Link href="/staff" className="hover:underline">Staff</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
