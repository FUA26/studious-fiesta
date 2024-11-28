import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malang Satu Login",
  description: "Portal SSO Kabupaten Malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar /> */}
            {/* <Header/> */}

            {children}
          </ThemeProvider>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
