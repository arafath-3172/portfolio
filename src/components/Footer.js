import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Arafath
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2024 Arafath.dev
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://github.com/arafath-3172"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <BsGithub />
        </a>
        <a
          href="https://x.com/arafathq9"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <RiTwitterXFill />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-arafathulla-qureshi-883340228/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/arafath3172/?next=%2F&hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillInstagram />
        </a>
      </span>
    </div>
  );
}

export default Footer;
