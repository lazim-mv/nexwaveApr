import React, { useState } from "react";

function Services() {
  const [showDescription, setShowDescription] = useState(false);

  function toggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <div className="serviceHeight">
      <div className="whatsToExpectContainer reveal" onClick={toggleDescription}>
        <h1 className="whatWeDo">Whats to expect ?</h1>
      </div>
      <div className={`serviceTopContainer reveal ${showDescription ? "showDescription" : ""}`}>
        <div className="servicesContainer">
          <div className="serviceCard1">
            <div className="serviceInnerContianer">
              <div className="serviceH1Container">
                <h1 className="serviceH1">Curiosity</h1>
              </div>
              <div className="serviceDes">
                <p className="serviceP">
                  We are continually questioning and eternally curious, whether
                  watching the waves of the wider world, examining the technical
                  details of a production or getting inside the minds of
                  consumers.
                </p>
              </div>
            </div>
          </div>
          <div className="serviceCard1">
            <div className="serviceInnerContianer">
              <div className="serviceH1Container">
                <h1 className="serviceH1">Adrenaline</h1>
              </div>
              <div className="serviceDes">
                <p className="serviceP">
                  We approach the world with enthusiasm, agility, and quick
                  thinking, embracing both its beauty and chaos. Our goal is to
                  create work that inspires, surprises, and delights, igniting
                  conversations and resonating with people on a deep level.
                </p>
              </div>
            </div>
          </div>
          <div className="serviceCard1">
            <div className="serviceInnerContianer">
              <div className="serviceH1Container">
                <h1 className="serviceH1">Growth</h1>
              </div>
              <div className="serviceDes">
                <p className="serviceP">
                  Our success is gauged by our ability to deliver results and
                  drive commercial progress, yet growth goes beyond these
                  metrics. It involves embarking on new and uncharted paths, the
                  excitement of innovation, making a positive impact on a
                  greater number of people, and crafting novel experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
