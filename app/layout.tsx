import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/ThemeSwitch";
import Script from "next/script";

const acorn = localFont({
  src: "../public/fonts/acorn.woff",
  variable: "--font--acorn",
});

export const metadata: Metadata = {
  title: "Yogesh Singh | Personal Portfolio",
  description: "Yogesh Singh is a full-stack developer .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${acorn.variable} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
          <Script
            src="https://kit.fontawesome.com/f92bc5c027.js"
            crossOrigin="anonymous"
          />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
