import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Container from "../container";

function Footer() {
  return (
    <Container className="mb-0">
      <footer className="h-[5rem] border-t border-slate-800 flex items-center justify-between flex-col md:flex-row">
        <div className="flex gap-5">
          <a href="#">
            <FaFacebook className="size-8 text-muted-foreground hover:text-blue-500" />
          </a>
          <a href="">
            <FaInstagram className="size-8 text-muted-foreground hover:text-[#f70c75]" />
          </a>
          <a href="#">
            <FaLinkedin className="size-8 text-muted-foreground hover:text-[#0585cc]" />
          </a>
          <a href="#">
            <FaTiktok className="size-8 text-muted-foreground hover:text-[#e71d4f]" />
          </a>
          <a href="#">
            <FaYoutube className="size-8 text-muted-foreground hover:text-[#f60002]" />
          </a>
          <a href="#">
            <FaWhatsapp className="size-8 text-muted-foreground hover:text-[#4cc85a]" />
          </a>
        </div>
        <div>
          <p>@ {new Date().getFullYear()} Mohamed Naoui 🥰</p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
