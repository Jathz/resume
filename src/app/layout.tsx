import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Jathurson",
  description: "Jathursons site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className="bg-gradient-to-br from-[#131D3C] to-[#111728]">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Navbar/>
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
