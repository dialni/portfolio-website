import type { Metadata } from "next";
import {Tomorrow} from 'next/font/google'
import "./globals.css";


const tomorrow = Tomorrow({
  weight: '400'
});

/*
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "dialni",
  description: "Portfolio website for Dimitri Alessandro Nielsen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tomorrow.className}>
      <body>
        <header className="navbar">
        <a href="/" className="navbarTitle"><h1>Dimitri Alessandro Nielsen</h1></a>
        <h2 className="navbarEmail">dimitri.anielsen@gmail.com</h2>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://github.com/dialni" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
        {children}
      <footer>
        <p>Font is Tomorrow by <a href="https://github.com/MonicaRizzolli/Tomorrow" target="_blank">Tony de Marco and Monica Rizzolli</a></p>
        <p>All other work by Dimitri Alessandro Nielsen</p>
      </footer>
      </body>
    </html>
  );
}
