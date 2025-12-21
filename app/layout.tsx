import Navbar from "./(main)/_components/Navbar";
import "./globals.css";
import TransitionProvider from "./providers/TransitionProvider";
import { Genos } from "next/font/google";
const genos = Genos({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={genos.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
