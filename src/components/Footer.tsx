"use client";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 w-full  bottom-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">PropertyX</h2>
          <p className="text-sm text-gray-400">
            Your Real Estate Solution Platform
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PropertyX. All rights reserved.
          </p>
          <div className="flex gap-4 text-blue-400">
            <a
              href="https://x.com/propertyX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <XIcon fontSize="medium" />
            </a>
            <a
              href="https://www.facebook.com/propertyX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <FacebookIcon fontSize="medium" />
            </a>
            <a
              href="https://github.com/propertyX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="medium" />
            </a>
            <a
              href="https://www.youtube.com/propertyX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="YouTube"
            >
              <YouTubeIcon fontSize="medium" />
            </a>
            <a
              href="https://t.me/propertyX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Telegram"
            >
              <TelegramIcon fontSize="medium" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
