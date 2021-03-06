import React from "react";
import { CgCopyright } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "./footer.css";
export function Footer() {
  return (
    <div className="footer_container">
      <p className="info">
        7<span>th</span>Art guide
      </p>

      <ul className="footer_contact_list">
        <li>
          <p>@ Contact</p>
        </li>
        <li>
          <a
            href="https:www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </li>
        <li>
          <a
            href="https:www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaTwitter /> Twitter
          </a>
        </li>
        <li>
          <a
            href="https:www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
        </li>
        <li>
          <p className="info">
            <CgCopyright />
            7<span>th</span>Art guide
          </p>
        </li>
      </ul>
    </div>
  );
}
