import Image from "next/image";
import React, { useEffect } from "react";
import jellyFish from "../../../public/images/jellyFishBlack.jpg";
import NemoFish from "../../../public/images/nemo.jpg";

function Cards() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    <div>
    <section>
      <div className="cardContainer reveal">
        <Image src={jellyFish} className="image" alt="JellyFish" />
        <div className="cardTextContainer">
          <div className="cardTittle">
            <h1 className="cardH1">Curiosity</h1>
          </div>
          <div className="cardDesc">
            <p className="cardP">
              We are continually questioning and eternally curious, whether
              watching the waves of the wider world, examining the technical
              details of a production or getting inside the minds of consumers.
            </p>
          </div>
        </div>
      </div>

      <div className="cardContainer reveal">
        <Image src={NemoFish} className="image" alt="JellyFish" />
        <div className="cardTextContainer">
          <div className="cardTittle">
            <h1 className="cardH1">Adrenaline</h1>
          </div>
          <div className="cardDesc">
            <p className="cardP">
              We approach the world with enthusiasm, agility, and quick
              thinking, embracing both its beauty and chaos. Our goal is to
              create work that inspires, surprises, and delights, igniting
              conversations and resonating with people on a deep level.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Cards;
