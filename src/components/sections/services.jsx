"use client";
import Container from "../container";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { LinkPreview } from "../ui/link-preview";
import ShineBorder from "../ui/shine-border";
import Title from "../ui/title";
import {
  FaCode,
  FaCartPlus,
  FaCameraRetro,
  FaCamera,
  FaSearch,
  FaMoneyBill,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const skills = [
  {
    logo: FaCamera,
    skill_name: "Photographer",
    skill_desc:
      "Experienced in capturing stunning images with a creative eye for composition and lighting.",
    bg: "bg-yellow-500",
    rotate: "rotate-3",
  },
  {
    logo: FaSearch,
    skill_name: "SEO",
    skill_desc:
      "Skilled in optimizing websites to rank higher on search engines, improving organic traffic and visibility.",
    bg: "bg-blue-500",
    rotate: "-rotate-3",
  },
  {
    logo: FaMoneyBill,
    skill_name: "Digital Marketing",
    skill_desc:
      "Expertise in Google SEO and social media ads to boost brand awareness and drive conversions.",
    bg: "bg-green-500",
    rotate: "rotate-3",
  },
  {
    logo: FaCode,
    skill_name: "Web Developer",
    skill_desc:
      "Proficient in building modern, responsive websites and web apps using current technologies and best practices.",
    bg: "bg-red-500",
    rotate: "-rotate-3",
  },
];

function Services() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".title, .skill-item", { opacity: 0, yPercent: 100 });
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#photography",
        start: "top top",
        end: "bottom +=200",
        scrub: 0.3,
        pin: true,
        
      },
    });

    masterTl.to("#photography", { background: "#000" });

    masterTl.to(".title", { opacity: 1, yPercent: 0, duration: 1 });

    masterTl.to(".skill-item", {
      opacity: 1,
      yPercent: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
  return (
    <div className="bg-[#000]">
      <Container className="my-0">
        <div className="space-y-20 p-5 md:p-10" id="photography">
          <div className="overflow-hidden">
            <h1 className="title">What I Offer</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
            {skills.map((skill) => (
              <SkillItem key={skill.skill_name} skill={skill} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

const SkillItem = ({ skill }) => {
  return (
    <div className={cn("skill-item", skill.bg, skill.rotate)}>
      <skill.logo className="text-[3.5vw]" />
      <div className="text-center space-y-10">
        <h3 className="font-bold text-[1.5vw] uppercase">{skill.skill_name}</h3>
        <p className="text-[1vw]">{skill.skill_desc}</p>
      </div>
    </div>
  );
};

export default Services;
