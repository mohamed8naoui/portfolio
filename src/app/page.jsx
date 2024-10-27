import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Photography from "@/components/sections/photography";
import Certificates from "@/components/sections/certificates";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Photography />
      <Certificates />
      <Contact />
    </>
  );
}
