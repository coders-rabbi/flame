import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flame Street Wear",
  description:
    "কোয়ালিটি আর আভিজাত্যের অনন্য সমন্বয়—Flame। আমরা বিশ্বাস করি পোশাকেই আপনার পরিচয়। আমাদের এক্সক্লুসিভ ফ্যাশন ওয়্যার কালেকশন থেকে খুঁজে নিন আপনার ব্যক্তিত্বের সাথে মানানসই সেরা আউটফিটটি।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
