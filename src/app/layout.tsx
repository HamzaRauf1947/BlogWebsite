import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Comment from "@/components/Comment";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PICGAME The Blog App",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <Container>
          <Navbar />
          {children}
          </Container>
          <Comment/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
