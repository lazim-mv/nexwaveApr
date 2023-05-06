import React from "react";

function Footer() {
  return (
    <div className="footerHeight">
      <div className="footerContainer reveal">
        <div className="ourServicesSection">
          <div className="ourServicesSectionH1">
            <h1>Our Services</h1>
          </div>
          <p>Clients</p>
          <p>Work</p>
          <p>About</p>
        </div>
        <div className="social">
          <div className="socialH1Container">
            <h1>Social</h1>
          </div>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
        <div className="getInTouch">
          <div className="getInTouchH1Container">
            <h1>Get In Touch</h1>
          </div>
          <p>New Bussiness:</p>
          <a href="">Inquire@nexwave.com</a>
          <p>Phone</p>
          <a href="">(090) 373-4495</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
