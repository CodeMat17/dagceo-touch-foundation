import { ClerkProvider } from '@clerk/nextjs'
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { CircleDotDashed } from "lucide-react";


const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

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
      <body className={nunito.className}>
        <ThemeProvider attribute='class'>
          <ClerkProvider>
            <section>
              <NavBar />
              <Suspense
                fallback={
                  <div className='pt-20 flex items-center justify-center'>
                    <CircleDotDashed className='w-16 h-16 font-semibold text-2xl' />
                  </div>
                }>
                {children}
              </Suspense>

              <Footer />
            </section>
            <Toaster />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
