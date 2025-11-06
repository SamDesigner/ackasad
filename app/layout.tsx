import type { Metadata } from "next";
import { Geist, Geist_Mono, Kalnia  } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const kalnia = Kalnia({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ackasad",
  description:
    "A global company engaged in import-export across Turkey, South America, Africa, and Europe. We secure project funding and deliver turnkey solutions from design to implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalnia.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
