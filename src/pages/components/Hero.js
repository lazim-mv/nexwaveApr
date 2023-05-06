import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div 
    className="heroContainer">
      <div className="heroTextContainer">
        <h1 className="heroLine1">We Build Brands that</h1>
        <h1 className="heroLine2">Drive</h1>
        <h1 className="heroLine3">Change</h1>
      <div className="heroDesc">
      <p>
        We&apos;re a full-service UX design and branding agency that rolls up our
        sleeves and works closely with our clients. Together, we craft
        unforgettable user experiences that span all platforms and touchpoints
        of brands. We go through a detailed process of brainstorming, designing,
        and developing strategies that revamp how users interact with their
        products or services, delivering fantastic results.
      </p>
      </div>
      </div>
    </div>
  );
}

export default Hero;
