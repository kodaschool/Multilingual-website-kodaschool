import Header from "../components/header";
import { Inter } from "next/font/google";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen mx-auto max-w-6xl">
          <Header />
          <div className="flex-grow mt-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
