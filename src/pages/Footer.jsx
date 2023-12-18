import React from "react";
import FooterLogo from "../assets/project-images/initial-ma-letter-logo-vector-template-abstract-letter-ma-logo-design-minimalist-linked-letter-trendy-business-logo-design-vector-template-2BC05DM-removebg-preview-transformed.png";
import { MdOutlineArrowUpward } from "react-icons/md";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img className="invert" src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a target="_blank" href="https://github.com/Muhammad32130">Github</a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/muhammadaskari/">LinkedIn</a>
        </div>
        <div>
          <a href="mailto:askari.muhammad321@gmail.com">Email</a>
        </div>
        <div>
          <a href="/resume.pdf">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2022 Muhammad Askari</div>
    </div>
  );
};

export default Footer;
