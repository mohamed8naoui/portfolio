import { Amiri } from "next/font/google";
import Container from "../container";
import Title from "../ui/title";

const amiri = Amiri({ subsets: ["latin"], weight: "400" });

function About() {
  return (
    <Container>
      <div className="space-y-8 p-5 md:p-0" id="about">
        <Title>Who I Am</Title>
        <p className="text-lg md:text-2xl text-black/80 dark:text-white/80 leading-9">
          I&apos;m Mohamed Naoui, a 27-year-old photographer and web developer
          from Casablanca, Morocco. I&apos;m passionate about capturing moments
          through my lens and building websites on platforms like WordPress. In
          addition to photography, I sell digital products and am currently
          studying digital marketing to enhance my skills and grow my business.
          Whether it&apos;s behind the camera or on the web, I&apos;m dedicated
          to creating impactful content and experiences.
        </p>
      </div>
    </Container>
  );
}

export default About;
