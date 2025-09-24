import React from "react";
import { Twitter, Instagram, Facebook } from "lucide-react";
import logo from "../assets/Addis.png";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      {/* Branding */}
      <aside>
        <p className="text-lg font-bold">
          <img src={logo} className="w-14" />
          <br />
          <span className="text-sm font-normal">A City you need to visity</span>
        </p>
      </aside>

      {/* Navigation Links */}
      <nav>
        <h6 className="footer-title">Quick Links</h6>

        <a href="#home" className="link link-hover">
          Home
        </a>
        <a href="#stats" className="link link-hover">
          Stats
        </a>
        <a href="#messages" className="link link-hover">
          Message
        </a>
        <a href="#service" className="link link-hover">
          Services
        </a>
      </nav>

      {/* Social Media */}
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex gap-4">
          <a className="hover:text-primary cursor-pointer">
            <Twitter size={22} />
          </a>
          <a className="hover:text-primary cursor-pointer">
            <Instagram size={22} />
          </a>
          <a className="hover:text-primary cursor-pointer">
            <Facebook size={22} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Sticky footer */}
      <Footer />
    </div>
  );
};

export default Layout;
