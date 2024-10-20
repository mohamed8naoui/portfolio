import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import SiteEffect from "@/components/site-effect";
import Footer from "@/components/sections/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Naoui - Photographer & Digital Products Seller",
  description: "Photographer & Digital Products Seller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased relative overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SiteEffect />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
