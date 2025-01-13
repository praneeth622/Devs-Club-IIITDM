import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail, MapPin, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/DevClubIIITDM", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/developersclub-iiitdm-kancheepuram", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/dev.club.iiitdm", label: "Instagram" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:devclub@iiitdm.ac.in'", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 pixel-font">
              Vashisht Hackathon 2.0
            </h3>
            <p className="text-cyan-100/80 mb-4">
              Join us for an epic hackathon experience where innovation meets
              technology.
            </p>
            <div className="flex items-center gap-2 text-cyan-100/80">
              <MapPin className="w-5 h-5 text-cyan-400" />
              IIITDM Kancheepuram, Melakottaiyur, Chennai 600127 (Off Vandalur-Kelambakkam Road)
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#About" },
                { name: "Tracks", href: "#Tracks" },
                { name: "Rules", href: "#Rules" },
                { name: "Timeline", href: "#Timeline" },
                { name: "Register", href: "#Register" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="text-cyan-100/80 hover:text-cyan-400 cursor-pointer"
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-cyan-100/60">
          <p>© 2024 Vashisht Hackathon 2.0. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
