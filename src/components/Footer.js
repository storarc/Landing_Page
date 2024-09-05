// src/components/Footer.js
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between justify-center items-center px-6">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0 items-center flex gap-x-4 md:flex-col">
          <h2 className="text-lg font-bold mb-1 font-ubuntu">Contact Us</h2>
          <p className="text-sm font-grotesk">info@storarc.network</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0 items-center flex gap-x-4 md:flex-col">
          <h2 className="text-lg font-bold mb-1 font-ubuntu">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="#about" className="hover:underline font-grotesk">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="items-center flex gap-x-4 md:flex-col">
          <h2 className="text-lg font-bold mb-1 font-ubuntu hidden md:block ">Socials</h2>
          <div className="flex space-x-4">
            <a
              href="https://x.com/StorarcCompute"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 font-grotesk"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://github.com/storarc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithubSquare />
            </a>

            <a
              href="https://discord.gg/ZMXgrqSQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaDiscord />
            </a>
            {/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />

            </a> */}
          </div>
        </div>
      </div>
      <div className="text-center font-ubuntu mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Storarc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
