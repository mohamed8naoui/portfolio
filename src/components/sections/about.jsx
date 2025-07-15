"use client";
import Container from "../container";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight: "700" });

function About() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const split = new SplitText(".about-text", { type: "chars" });

    gsap.to(split.chars, {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
      color: "#000",
      stagger: 0.5,
      duration: 1,
      ease: "power2.out",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-dot",
        start: "top 40%",
        end: "+=500", // shorten scroll range to speed it up
        scrub: 0.3, // faster scrub, less laggy
        // ,
      },
      ease: "power4.inOut",
    });

    tl.to(".hero-dot", { opacity: 1, duration: 0.3 });

    tl.to(
      ".hero-dot",
      {
        clipPath: "circle(4px at 50% 60%)", // slight vertical offset for natural effect
        duration: 0.3,
        ease: "power2.out",
      },
      ">"
    );

    tl.to(
      ".hero-dot",
      {
        clipPath: "circle(150% at 50% 60%)", // cover entire viewport with margin
        duration: 0.5,
        ease: "power3.inOut",
      },
      ">"
    );
  });
  return (
    <>
      <Container className="mb-0">
        <div id="about">
          <p className={cn("about-text relative", oswald.className)}>
            I&apos;m Mohamed Naoui, a 27 year old photographer and web developer from
            Casablanca, Morocco. I&apos;m passionate about capturing moments through
            my lens and building websites on platforms like WordPress. In
            addition to photography, I sell digital products and am currently
            studying digital marketing to enhance my skills and grow my
            business. Whether it&apos;s behind the camera or on the web, I&apos;m
            dedicated to creating impactful content and experiences.
          </p>
        </div>
      </Container>
      <div className="hero-dot" />
    </>
  );
}

export default About;
