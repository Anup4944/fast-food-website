import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>The place for most tasty burger</p>
          <p>Explore the various type of food and burgers</p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div></div>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
