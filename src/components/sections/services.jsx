import { Link } from "lucide-react";
import Container from "../container";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { LinkPreview } from "../ui/link-preview";
import ShineBorder from "../ui/shine-border";
import Title from "../ui/title";
import { FaCode, FaCartPlus, FaCameraRetro } from "react-icons/fa";

function Services() {
  return (
    <Container>
      <div className="space-y-8  p-5 md:p-0" id="photography">
        <div>
          <Title>What I Offer</Title>
          <p className="text-lg md:text-2xl font-normal text-muted-foreground leading-9">
            I&apos;m here to make waves in the digital space! Dive into my
            offerings and let&apos;s make some magic happen!
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          <BackgroundBeamsWithCollision className="relative h-[500px] bg-background md:shadow-xl rounded-lg flex items-center justify-center flex-col gap-4">
            <ShineBorder
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="size-full bg-transparent dark:bg-transparent border"
            >
              <FaCode className="text-7xl" />
              <span className="text-2xl">Web Development</span>
              <p className="text-center dark:text-white/85 text-black/85">
                Building visually appealing and high-performance websites to
                enhance your online presence.
              </p>
              <p className="z-10 text-center">
                i&apos;ve built couples of websites like{" "}
                <LinkPreview
                  url="https://www.fa2ida.blog/"
                  className="font-bold"
                >
                  Fa2ida
                </LinkPreview>{" "}
                and{" "}
                <LinkPreview
                  url="https://tailwindflex.com/storage/thumbnails/simple-coming-soon-page-2/canvas.min.webp?v=1"
                  className="font-bold"
                >
                  Store
                </LinkPreview>
              </p>
              <p className="dark:text-white/85 text-black/85 text-center">
                Tools : Wordpress, Blogger
              </p>
            </ShineBorder>
          </BackgroundBeamsWithCollision>
          <BackgroundBeamsWithCollision className="relative h-[500px] bg-background md:shadow-xl rounded-lg flex items-center justify-center flex-col gap-4">
            <ShineBorder
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="size-full bg-transparent dark:bg-transparent border"
            >
              <FaCartPlus className="text-7xl" />
              <span className="text-2xl">Digital Marketing</span>
              <p className="text-center dark:text-white/85 text-black/85">
                Driving targeted traffic and boosting engagement to grow your
                business and social media.
              </p>
              <p className="dark:text-white/85 text-black/85 text-center">
                Tools : Google Analytics, Meta Ads, MailChimp, Ahrefs.
              </p>
            </ShineBorder>
          </BackgroundBeamsWithCollision>
          <BackgroundBeamsWithCollision className="relative h-[500px] bg-background md:shadow-xl rounded-lg flex items-center justify-center flex-col gap-4">
            <ShineBorder
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="size-full bg-transparent dark:bg-transparent border"
            >
              <FaCameraRetro className="text-7xl" />
              <span className="text-2xl">Photography & Film Making</span>
              <p className="text-center dark:text-white/85 text-black/85">
                Capturing moments and creating stunning visuals for personal and
                commercial use.
              </p>
              <p className="dark:text-white/85 text-black/85 text-center">
                Tools : DSLR cameras, Adobe Photoshop, Lightroom.
              </p>
            </ShineBorder>
          </BackgroundBeamsWithCollision>
        </div>
      </div>
    </Container>
  );
}

export default Services;
