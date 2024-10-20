"use client";
import Container from "./container";
import Link from "next/link";
import { ModeToggle } from "./ui/theme-toggle";
import { motion } from "framer-motion";
import { FaCameraRetro } from "react-icons/fa";
import { useRef } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Photography", href: "#photography" },
  { name: "Certs", href: "#certificates" },
];

function Header() {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  return (
    <Container className="mb-0">
      <header className="h-[10vh] flex justify-between items-center flex-col md:flex-row p-5 md:p-0 gap-3 md:gap-0">
        <div className="logo">
          <h1 className="font-bold text-2xl flex gap-4 items-center relative">
            <FaCameraRetro className="text-3xl" />
            <span>Mohamed Naoui</span>
            <div className="block md:hidden absolute -right-14">
              <ModeToggle />
            </div>
          </h1>
        </div>
        <nav className="flex items-center gap-2 flex-wrap md:gap-4 group">
          {links.map((link) => (
            <Link
              onMouseEnter={playSound}
              key={link.name}
              href={link.href}
              className="overflow-hidden group-hover:opacity-50 hover:!opacity-100 transition-opacity"
            >
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -24 }}
                className="flex flex-col h-5"
              >
                <span>{link.name}</span>
                <span>{link.name}</span>
              </motion.div>
            </Link>
          ))}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </nav>
      </header>
      <audio ref={audioRef} src="/header.wav" preload="auto" />
    </Container>
  );
}

export default Header;
