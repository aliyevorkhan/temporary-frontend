import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";

const hovesFont = local({
  src: [
    {
      path: "../fonts/TTHoves/TTHoves-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TTHoves/TTHoves-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TTHoves/TTHoves-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/TTHoves/TTHoves-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hoves",
});

export const metadata: Metadata = {
  title: "Simic App",
  description: "Simic App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={hovesFont.className}>
          <div className="pb-10">
            <Header />
            {children}
            <ToastContainer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
