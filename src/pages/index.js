import { useEffect } from "react";
import Header from "./components/Header";
import Head from "next/head";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Heronew from "./components/Heronew";
import About from "./components/About";
import IntroContents from "./components/IntroContents";
import Services from "./components/Services";
import Process from "./components/Process";
import Form from "./components/Form";
import Footer from "./components/Footer";
import PrCard from "./components/PrCard";
import Clients from "./components/Clients";
import Testimaonials from "./components/Testimaonials";

export default function Home() {
  function startAnimation(e) {
    const keywords = [
      "SEO",
      "Analytics",
      "Conversion",
      "Optimization",
      "Landing",
      "Page",
      "CTA",
      "Funnel",
      "Tracking",
      "Remarketing",
    ];

    let wordIndex = 0;
    let prevWord = "";
    const interval = setInterval(() => {
      const currentWord = keywords[wordIndex];
      if (currentWord !== prevWord) {
        e.innerText = currentWord;
        prevWord = currentWord;
      }
      if (wordIndex === keywords.length - 1 && currentWord === prevWord) {
        clearInterval(interval);
      }
      wordIndex = (wordIndex + 1) % keywords.length;
    }, 200);
  }

  function openingAnimation() {
    const mainEl = document.querySelector(".main");
    const animateEl = document.querySelector(".animate");
    const topContainer = document.querySelector(".topContainer");

    const hideMain = () => {
      mainEl.classList.add("hide");
    };

    const removeStyles = () => {
      topContainer.style.height = "auto";
      // topContainer.style.overflow = "auto";
    };

    topContainer.style.height = "100vh";
    topContainer.style.overflow = "hidden";

    animateEl.addEventListener("animationend", hideMain);
    mainEl.addEventListener("animationend", () => {
      removeStyles();
      hideMain();
    });
    topContainer.addEventListener("animationend", removeStyles);
  }

  function showAfterCurtainAnimation() {
    const mainEl = document.querySelector(".main");
    const showingAfter = document.querySelector(".showingAfterAnimation");
    mainEl.addEventListener("animationend", () => {
      showingAfter.classList.add("showing");
    });
  }

  useEffect(() => {
    // preload images
    // const images = [
    //   "../../public/images/jellyFishLast.jpg",
    //   "../../public/images/matchStick.jpg",
    //   "../../public/images/jellyFishBlue.jpg",
    //   "../../public/images/dark.jpg",
    //   "../../public/images/bgDarkKid.png",
    //   "../../public/images/jellyFishBlack.jpg",
    // ];
    // images.forEach((image) => {
    //   const img = new Image();
    //   img.src = image;
    // });

    const elements = document.querySelectorAll(".animate");
    for (let i = 0; i < elements.length; i++) {
      startAnimation(elements[i]);
    }

    setTimeout(openingAnimation, 0);
    setTimeout(showAfterCurtainAnimation, 2600);

    return () => {
      const animateEl = document.querySelector(".animate");
      if (animateEl) {
        animateEl.removeEventListener("animationend", openingAnimation);
      }

      const mainEl = document.querySelector(".main");
      if (mainEl) {
        mainEl.removeEventListener("animationend", showAfterCurtainAnimation);
      }
    };
  }, [startAnimation, openingAnimation, showAfterCurtainAnimation]);



  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* <link rel="preload" href="/bgDarkKid.png" as="image" /> */}
      </Head>

      <div className="topContainer">
        <div className="main">
          <div className="loadingText">
            <div className="loadingH1Container">
              <h1 className="loadingH1">Nexwave</h1>
            </div>
            <div className="loadingH3Container">
              <h3 className="animate">Optimization</h3>
            </div>
            <div className="lineContainer">
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="showingAfterAnimation">
          <Header />
          <Heronew />
          <IntroContents />
          <About />
          <Services />
          <Process />
          <Clients />
          <Testimaonials />
          {/* <Form /> */}
          <Footer />
          {/* <Hero /> */}
          {/* <Cards /> */}
        </div>
      </div>
    </>
  );
}
