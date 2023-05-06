import React from "react";

function Testimonials() {
  return (
    <div className="TestimonialsContainer">
      <div className="ourClientsContainer reveal">
        <h1 className="whatWeDo">This is what people say about us</h1>
      </div>
      <div className="flexcontainer reveal">
        <div className="flexbox">
          <div className="fheader"></div>
          <div className="fbody">
           The team at Procube was a pleasure to work with.
            Their expertise, and attention to detail were great.
            Exceeded our expectations and we highly recommend them.
            Thank you for your hard work and dedication!
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="text"><b>Rahoof</b>, <i>Ecpik</i></div>
        </div>

        <div className="flexbox">
          <div className="fheader"></div>
          <div className="fbody">
           I just wanted to give a shoutout to the team at Procube
            for being so easy to approach and work with. They were
            always available to answer my questions and were super
            patient with me, even when I had a million things going on.
            It was a pleasure working with such a friendly and
            approachable team. Thanks guys!
          </div>
          <br></br>
          <div className="text"><b>Raji Thomas</b>, <i>Alweena Perfumes</i></div>
        </div>

        <div className="flexbox">
          <div className="fheader"></div>
          <div className="fbody">
           Procube completely transformed our business with their
            careful redesign of my business. They helped us to not
            only improve the look of our brand, but also to streamline
            our processes and increase our profits. We&apos;ve seen
            tremendous growth since working with them and can&apos;t
            thank them enough for their help. Highly recommend!
          </div>
          <br></br>
          <div className="text"><b>Haris</b>, <i>Gazaal Perfumes</i></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
