import React, { useEffect } from "react";

function IntroContents() {
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
      var revealPoint = 40;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    <div>
      <div className="IntroContentsContainer reveal">
        <div className="IntroDesc">
          <p className="IntroP">
            We&apos;re a full-service UX design and branding agency that rolls up our
            sleeves and works closely with our clients. Together, we craft
            unforgettable  user experiences that span all platforms and
            touchpoints of brands. We go through a detailed process of
             brainstorming, designing, and developing strategies that revamp how
            users interact with their products or services, delivering fantastic
            results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroContents;
