import { Amiri } from "next/font/google";
import Container from "../container";
import Title from "../ui/title";
import WordPullUp from "../ui/word-pull-up";

const amiri = Amiri({ subsets: ["latin"], weight: "400" });

function About() {
  return (
    <Container>
      <div className="space-y-8 p-5 md:p-0" id="about">
        <Title>Who I Am</Title>
        <WordPullUp
          className={`${amiri.className} text-left font-normal text-lg md:text-3xl text-black/80 dark:text-white/80 leading-9`}
          words="I'm Mohamed Naoui, a 27-year-old photographer and web developer from Casablanca Morocco. I'm passionate about capturing moments through my lens and building websites on platforms like WordPress. In addition to photography, I sell digital products and am currently studying digital marketing to enhance my skills and grow my business. Whether it's behind the camera or on the web, I'm dedicated to creating impactful content and experiences."
        />
        {/* <p className="text-lg md:text-2xl text-black/80 dark:text-white/80 leading-9">
          I'm Mohamed Naoui, a 27-year-old photographer and web developer from
          Casablanca, Morocco. I'm passionate about capturing moments through my
          lens and building websites on platforms like WordPress. In addition to
          photography, I sell digital products and am currently studying digital
          marketing to enhance my skills and grow my business. Whether it's
          behind the camera or on the web, I'm dedicated to creating impactful
          content and experiences.
        </p> */}
      </div>
    </Container>
  );
}

export default About;
