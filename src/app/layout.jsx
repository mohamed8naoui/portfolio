import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import SiteEffect from "@/components/site-effect";
import Footer from "@/components/sections/footer";
import SmoothScroll from "@/components/smooth-scroll";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Naoui - Photographer & Digital Products Seller",
  description: "Photographer & Digital Products Seller",
};

export default function RootLayout({ children }) {
  return (
    <SmoothScroll root>
      <html lang="en">
        <body
          className={`${inter.className}  antialiased relative overflow-x-hidden min-h-screen`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {/* <Header /> */}
            {/* <SiteEffect /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </SmoothScroll>
  );
}
