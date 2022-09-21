import React from "react";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger</h2>
        <p>We're the best burger maker ever existed</p>
        <br />
        <em>We give attention to feedbacks</em>
        <strong>All right received </strong>
      </div>

      <aside>
        <h4>Follow us</h4>
        <a href="www.facebook.com">
          <AiFillInstagram />
        </a>
        <a href="www.instagram.com">
          <AiFillFacebook />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
