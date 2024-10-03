import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/resuables/Header";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: {
    default: "Kautuka",
    template: `%s | Trullo`,
  },
  description: "The Thread of Trust",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} antialiased`}>
        {/* <div className="fixed -z-50  min-h-screen w-full dark:bg-black bg-zinc-200  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center">
        </div> */}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <main className="relative z-10 min-h-screen w-full dark:bg-black bg-zinc-200  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-50"></div>
            <Header />
            <section className="max-w-screen-2xl mx-auto">{children}</section>
            <footer className="w-full text-center py-3 bg-secondary">
              All rights reserved &copy; {new Date().getFullYear()} Kautuka
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
