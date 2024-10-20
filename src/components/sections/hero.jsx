"use client";
import Image from "next/image";
import Container from "../container";
import { Amiri } from "next/font/google";
import Marquee from "../ui/marquee";
import ReactCountryFlag from "react-country-flag";
import { useRef } from "react";
import { RainbowButton } from "../ui/rainbow-button";

const amiri = Amiri({ subsets: ["latin"], weight: "400" });

function Hero() {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <Container className="h-[calc(100vh-10vh)]">
      <div className="h-full grid grid-cols-1 md:grid-cols-[500px_1fr]">
        <div className="p-5 md:p-0 h-full flex items-center">
          <div className={`space-y-4`}>
            <h1 className={`text-5xl md:text-7xl ${amiri.className}`}>
              Photographer & Digital Products Seller
            </h1>
            <p className={`text-3xl md:text-4xl ${amiri.className}`}>
              Casablanca, Morocco{" "}
              <ReactCountryFlag countryCode="MA" svg title="MA" />
            </p>
            <RainbowButton
              href="mailto:email@example.com?subject=Hiring Inquiry"
              className="px-10 py-6 text-2xl font-normal"
            >
              Hire Me
            </RainbowButton>
          </div>
        </div>

        <div
          className="relative hidden md:flex h-full w-full
        mx-auto flex-row items-center justify-center overflow-hidden"
        >
          <div className="absolute top-0 z-10 w-full flex justify-center">
            <div className="h-2 w-16 bg-black/30 rounded-full animate-pulse"></div>
          </div>

          <Marquee
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg)",
            }}
            vertical
            className="scroll-smooth"
          >
            <div className="h-[300px] w-[300px] relative rounded-lg transform transition-transform hover:scale-105 duration-300">
              <div
                onMouseEnter={playSound}
                className="absolute inset-0 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300  border-4 border-black overflow-hidden"
              >
                <Image
                  src="/naoui.jpg"
                  alt="naoui"
                  fill
                  className="absolute object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
            <div className="h-[300px] w-[300px] relative rounded-lg transform transition-transform hover:scale-105 duration-300">
              <div
                onMouseEnter={playSound}
                className="absolute inset-0 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 rounded-lg border-4 border-black overflow-hidden"
              >
                <Image
                  src="/naoui2.jpg"
                  alt="naoui"
                  fill
                  className="absolute object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
            <div className="h-[300px] w-[300px] relative rounded-lg transform transition-transform hover:scale-105 duration-300">
              <div
                onMouseEnter={playSound}
                className="absolute inset-0 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 rounded-lg border-4 border-black overflow-hidden"
              >
                <Image
                  src="/naoui3.webp"
                  alt="naoui"
                  fill
                  className="absolute object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </Marquee>

          <Marquee
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) ",
            }}
            vertical
            reverse
            className="scroll-smooth"
          >
            <div className="h-[300px] w-[300px] relative rounded-lg transform transition-transform hover:scale-105 duration-300">
              <div
                onMouseEnter={playSound}
                className="absolute inset-0 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 rounded-lg border-4 border-black overflow-hidden"
              >
                <Image
                  src="/naoui4.webp"
                  alt="naoui"
                  fill
                  className="absolute object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
            <div className="h-[300px] w-[300px] relative rounded-lg transform transition-transform hover:scale-105 duration-300">
              <div
                onMouseEnter={playSound}
                className="absolute inset-0 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 rounded-lg border-4 border-black overflow-hidden"
              >
                <Image
                  src="/naoui5.webp"
                  alt="naoui"
                  fill
                  className="absolute object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
            <div
              onMouseEnter={playSound}
              className="h-[300px] w-[300px] relative rounded-lg transform transition-transform hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 rounded-lg border-4 border-black overflow-hidden">
                <Image
                  src="/naoui5.webp"
                  alt="naoui"
                  fill
                  className="absolute object-cover grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </Marquee>

          <audio src="/camera.wav" ref={audioRef} preload="auto" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
