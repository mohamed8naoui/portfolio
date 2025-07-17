"use client";
import Container from "../container";
import BlurFade from "../ui/blur-fade";
import MoreMessage from "../ui/more-message";
import Title from "../ui/title";
import { useRef } from "react";

function Photography() {
  return (
    <div className="bg-black py-48">
      <Container className="m-0">
        <div className="space-y-8 p-5 md:p-0" id="photography">
          <div>
            <Title>Photos Taking by me</Title>
            <p className="text-lg md:text-2xl font-normal text-white leading-9">
              Browse through some of my favorite shots. See the world through my
              lens!
            </p>
          </div>
          <div className="columns-2 gap-4 sm:columns-4 group">
            <BlurFade delay={0.25 + 1 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid1.jpg"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 2 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid2.jpg"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 3 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid3.webp"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 4 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid4.jpg"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 4 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid5.jpg"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 4 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid6.jpg"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 4 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid7.jpg"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 4 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid8.webp"
                alt="naoui"
              />
            </BlurFade>
            <BlurFade delay={0.25 + 4 * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-95 hover:!blur-none hover:!scale-100"
                src="/grid9.jpg"
                alt="naoui"
              />
            </BlurFade>
          </div>
          <MoreMessage>More photos coming soon...</MoreMessage>
        </div>
      </Container>
    </div>
  );
}

export default Photography;
