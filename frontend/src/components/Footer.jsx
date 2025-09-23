import React from "react";
import { Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      {/* Branding */}
      <aside>
        <p className="text-lg font-bold">
          MyBlogCMS <br />
          <span className="text-sm font-normal">
            A simple CMS-powered blog platform
          </span>
        </p>
      </aside>

      {/* Navigation Links */}
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
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
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Sticky footer */}
      <Footer />
    </div>
  );
};

export default Layout;
