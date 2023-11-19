import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import NavBar from "./components/navbar/NavBar";

import "./globals.scss";
import { url } from "inspector";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Buzz",
  description: "The Future of Tattooing",
  icons: {
    icon:[
      {
      url: '/images/che-logo.webp',
      href: '/images/che-logo.webp'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
