import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./../components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Flow",
  description: "Connecting Blood Donors and Recipients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
