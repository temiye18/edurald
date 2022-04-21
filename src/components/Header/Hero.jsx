import React from "react";
import classes from "./Hero.module.css";
import hero_image from "../../assets/hero.webp";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className="container">
        <div className={classes.hero__content}>
          <div className={classes.hero__message}>
            <h2>We build innovative software products</h2>
            <p>
              Edurald is a web and software development agency. We work with our
              clients to deliver digital experiences that create value for their
              customers and helps their businesses grow.
            </p>

            <a href="#contact">TALK TO US</a>
          </div>

          <div className={classes.hero__image}>
            <img src={hero_image} alt="hero_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
