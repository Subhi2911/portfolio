import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Subhasmita Mishra | MERN Stack Developer",
  description: "MERN Stack Developer specializing in real-time applications, scalable full-stack systems, and modern web technologies. AI-900 Certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        {children}
      </body>

    </html>
  );
}
