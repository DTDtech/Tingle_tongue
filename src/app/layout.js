import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <Script src="/scripts/lite-yt-embed.js" />
        <link rel="stylesheet" href="/scripts/lite-yt-embed.css" />
      </head>
      <body className={inter.className}>
        <div className="flex justify-center py-5 bg-white h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
