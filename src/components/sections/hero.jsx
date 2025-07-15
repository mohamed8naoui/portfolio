"use client";
import Image from "next/image";
import Container from "../container";
import { Amiri } from "next/font/google";
import Marquee from "../ui/marquee";
import ReactCountryFlag from "react-country-flag";
import { useRef } from "react";
import { RainbowButton } from "../ui/rainbow-button";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BackgroundMusic from "../ui/music-background";
import { useMediaQuery } from "react-responsive";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

const amiri = Amiri({ subsets: ["latin"], weight: "400" });

function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const audioRef = useRef(null);
  const musicRef = useRef(null);
  const masterTl = useRef(null);

  useGSAP(() => {
    document.body.classList.add("noscroll");
    const resetStates = () => {
      gsap.set(
        ".first-name, .last-name, .intro-paragraph, .btn-enter, .hero-firstname, .hero-lastname",
        {
          opacity: 0,
          yPercent: 100,
        }
      );
    };

    const UIAnimation = () => {
      const tl = gsap.timeline();

      if (!isMobile) {
        tl.to(".first-name", {
          opacity: 1,
          yPercent: 0,
        });

        tl.to(".last-name", {
          opacity: 1,
          yPercent: 0,
        });
      }

      tl.to(".intro-paragraph", {
        opacity: 1,
        yPercent: 0,
      });

      tl.to(".btn-enter", {
        opacity: 1,
        yPercent: 0,
      });

      return tl;
    };

    const UIHeroAnimation = () => {
      const tl = gsap.timeline();

      tl.to(".hero-firstname", {
        opacity: 1,
        yPercent: 0,
      });

      tl.to(".hero-lastname", {
        opacity: 1,
        yPercent: 0,
      });

      tl.to("#maskCircle", {
        attr: { r: 700 },
        duration: 1,
        ease: "power4.out",
      });

      tl.to("#hero-firstname", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom +=200",
          scrub: 1,
        },
        yPercent: -50,
        duration: 0.5,
        ease: "power4.out",
      });

      tl.to("#hero-lastname", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom 40%",
          scrub: 1,
        },
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
      });

      tl.to(".photo-container", {
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom +=200",
          scrub: 1,
        },
        rotation: 0,
        duration: 1,
        ease: "power4.out",
      });

      return tl;
    };

    const exitAnimation = () => {
      const exitTl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "expo.inOut",
        },
      });

      exitTl.to(
        [".first-name", ".last-name", ".intro-paragraph", ".btn-enter"],
        {
          opacity: 0,
          yPercent: -100,
          stagger: 0.1,
        }
      );

      exitTl.to(
        ".preloader",
        {
          yPercent: -200,
          pointerEvents: "none",
          duration: 1.6,
          ease: "power4.out",
          onComplete: () => {
            // Remove 'noscroll' to allow scroll again
            document.body.classList.remove("noscroll");
          },
        },
        "-=0.2"
      );

      return exitTl;
    };

    masterTl.current = gsap
      .timeline({
        defaults: {
          duration: 1.2,
          ease: "expo.out",
        },
      })
      .add(resetStates())
      .add(UIAnimation())
      .addPause()
      .add(exitAnimation())
      .add(UIHeroAnimation(), "-=1.4");
  }, []);

  useGSAP(() => {
    const introButton = document.querySelector(".btn-enter");

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
    });

    tl.to(".btn-enter div", {
      yPercent: -65,
      ease: "expo.out",
    });

    tl.to(
      ".btn-enter",
      {
        borderRadius: 50,
      },
      "<"
    );

    introButton.addEventListener("mouseenter", () => {
      tl.play();
    });

    introButton.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  });

  const resumeAnimation = () => {
    if (masterTl.current) {
      masterTl.current.play();
      musicRef.current?.playMusic();
    }
  };

  const playSong = () => {
    if (songRef.current) {
      // songRef.current.play();
      console.log("playing");
    }
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <BackgroundMusic ref={musicRef} />

      <div className={cn("preloader", spaceGrotesk.className)}>
        <div className="overflow-hidden">
          <h1 className="first-name">Mohamed</h1>
        </div>

        <div className="text-center space-y-5">
          <div className="overflow-hidden">
            <p className="intro-paragraph">Welcome to my portfolio</p>
          </div>
          <button className="btn-enter" onClick={resumeAnimation}>
            <div className="flex flex-col gap-5">
              <span>ENTER EXPERIENCE</span>
              <span>ENTER EXPERIENCE</span>
            </div>
          </button>
        </div>

        <div className="overflow-hidden self-end">
          <h1 className="last-name">Naoui</h1>
        </div>
      </div>

      <div
        id="hero"
        className="relative flex flex-col justify-between py-[5vh] md:py-[2vh] px-[5vw] h-dvh"
      >
        <div id="hero-firstname" className="overflow-hidden">
          <h1 className="hero-firstname stroke-heading">Photographer</h1>
        </div>

        <div className="photo-container">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="filter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.03"
                  numOctaves="10"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="100"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <mask id="circle">
                <circle
                  id="maskCircle"
                  cx="300"
                  cy="200"
                  r="0"
                  fill="white"
                  filter="url(#filter)"
                />
              </mask>
            </defs>

            <image
              href="/coverhero.png"
              mask="url(#circle)"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        <div id="hero-lastname" className="overflow-hidden self-end">
          <h1 className="hero-lastname">Developer</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
