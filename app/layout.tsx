import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTF | Home",
  description:
    "Dagceo Touch Foundation is a non-profit organization dedicated to advancing social justice and equality worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
          <section>
            {/* <NavBar /> */}
            {children}
            {/* <Footer /> */}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
