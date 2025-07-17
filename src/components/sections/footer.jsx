import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Container from "../container";

function Footer() {
  return (
    <div className="bg-black">
    <Container className="my-0 pt-10">
      <footer className="py-5 md:py-0 md:h-[5rem] border-t border-slate-800 flex items-center justify-between flex-col gap-5 md:flex-row">
        <div className="flex gap-5">
          <a
            href=" https://www.instagram.com/mohamed8naoui/profilecard/?igsh=MWppNndkd2R5OXF1OA=="
            target="_blank"
          >
            <FaInstagram className="size-8 text-muted-foreground hover:text-[#f70c75]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-naoui-590333244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedin className="size-8 text-muted-foreground hover:text-[#0585cc]" />
          </a>
          <a href="https://x.com/MohamedNaha2?s=09" target="_blank">
            <FaTwitter className="size-8 text-muted-foreground hover:text-[#e71d4f]" />
          </a>
          <a href="https://www.tiktok.com/@camera4you" target="_blank">
            <FaTiktok className="size-8 text-muted-foreground hover:text-[#e71d4f]" />
          </a>
          <a
            href="https://youtube.com/@semopodcast?si=CBP6EyJ1J8UD9uEn"
            target="_blank"
          >
            <FaYoutube className="size-8 text-muted-foreground hover:text-[#f60002]" />
          </a>
          <a href="https://wa.me/message/QG6V5HBSINNIC1" target="_blank">
            <FaWhatsapp className="size-8 text-muted-foreground hover:text-[#4cc85a]" />
          </a>
        </div>
        <div>
          <p className="text-white">@ {new Date().getFullYear()} Mohamed Naoui 🥰</p>
        </div>
      </footer>
    </Container>
    </div>
  );
}

export default Footer;
