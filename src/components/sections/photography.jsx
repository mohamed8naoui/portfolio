"use client";
import Container from "../container";
import BlurFade from "../ui/blur-fade";
import Title from "../ui/title";
import { useRef } from "react";

function Photography() {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  return (
    <Container>
      <div className="space-y-8 p-5 md:p-0" id="photography">
        <div>
          <Title>Photos Taking by me</Title>
          <p className="text-lg md:text-2xl font-normal text-muted-foreground leading-9">
            Browse through some of my favorite shots. See the world through my
            lens!
          </p>
        </div>
        <div className="columns-2 gap-4 sm:columns-4 group">
          <BlurFade delay={0.25 + 1 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid1.jpg"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 2 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid2.jpg"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 3 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid3.webp"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid4.jpg"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid5.jpg"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid6.jpg"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid7.jpg"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid8.webp"
              alt="naoui"
            />
          </BlurFade>
          <BlurFade delay={0.25 + 4 * 0.05} inView>
            <img
              onMouseEnter={playSound}
              className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
              src="/grid9.jpg"
              alt="naoui"
            />
          </BlurFade>
        </div>
        <audio ref={audioRef} src="/click.wav"></audio>
      </div>
    </Container>
  );
}

export default Photography;
