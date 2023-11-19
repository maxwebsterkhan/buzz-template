"use client";

import React from "react";
import { TextSpan } from "./TextSpan";
import "./hero.scss";

import { Bee } from "./Bee";
const title = "The Buzz".split("");

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <Bee />
        <div className="hero__main-text">
          {title.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          ))}
        </div>
        <p className="hero__sub-text">
          The Future of Tattoo Artistry At Your Fingertips.
        </p>
      </div>
      <div className="hero__right">
        <p className="hero__sub-text-2">
          Dedicated to the Craft of Safe, High-Quality Black & Grey Tattooing.
        </p>
        <div className="hero__cta">
          <div className="hero__cta-button-container">
            <span className="hero__cta-mask">Bookings</span>
            <button className="hero__cta-button" name="Bookings">
              Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
