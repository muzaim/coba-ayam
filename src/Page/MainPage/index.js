import React, { useState } from "react";
import {
  Menu,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page12,
  Page13,
  Page14,
  Page15,
  Simple,
} from "../index";

const MainPage = () => {
  const [step, setStep] = useState("Menu");

  const goToPage2 = () => {
    setStep("Page2");
  };

  const goToPage3 = () => {
    setStep("Page3");
  };

  const goToPage4 = () => {
    setStep("Page4");
  };

  const goToPage5 = () => {
    setStep("Page5");
  };

  // MAP
  const goToPage6 = () => {
    setStep("Page6");
  };

  const goToPage7 = () => {
    setStep("Page7");
  };

  const goToPage8 = () => {
    setStep("Page8");
  };

  const goToPage9 = () => {
    setStep("Page9");
  };

  const goToPage12 = () => {
    setStep("Page12");
  };

  const goToPage13 = () => {
    setStep("Page13");
  };

  const goToPage14 = () => {
    setStep("Page14");
  };

  const goToPage15 = () => {
    setStep("Page15");
  };

  switch (step) {
    case "Menu":
      return <Menu Action1={goToPage2} />;
    case "Page2":
      return <Page2 Action1={goToPage3} />;
    case "Page3":
      return <Page3 Action1={goToPage4} />;
    case "Page4":
      return <Page4 Action1={goToPage5} />;
    case "Page5":
      return <Page5 Action1={goToPage6} />;
    case "Page6":
      return (
        <Page6
          Action1={goToPage5}
          Action2={goToPage7}
          Action3={goToPage13}
          Action4={goToPage15}
        />
      );
    case "Page7":
      return (
        <Page7 Action1={goToPage8} Action2={goToPage12} Action3={goToPage6} />
      );
    case "Page8":
      return (
        <Page8 Action1={goToPage7} Action2={goToPage12} Action3={goToPage6} />
      );
    case "Page9":
      return (
        <Page9 Action1={goToPage7} Action2={goToPage13} Action3={goToPage6} />
      );
    case "Page12":
      return <Page12 Action1={goToPage7} Action2={goToPage6} />;
    case "Page13":
      return <Page13 Action1={goToPage14} Action2={goToPage6} />;
    case "Page14":
      return <Page14 Action1={goToPage15} Action2={goToPage6} />;
    case "Page15":
      return <Page15 Action1={goToPage6} Action2={goToPage13} />;
    case "Simple":
      return <Simple deviceType={"desktop"} />;
    default:
      break;
  }
  return <div>MainPage</div>;
};

export default MainPage;
