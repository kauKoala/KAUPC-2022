import styled from "@emotion/styled";
import ApplySection from "components/Sections/ApplySection";
import FAQSection from "components/Sections/FAQSection";
import HeroSection from "components/Sections/HeroSection";
import RuleSection from "components/Sections/RuleSection";
import Spacing from "components/Spacing";
import Lottie from "lottie-web";
import SectionId from "constants/SectionId"
import { useEffect, useRef } from "react";

export default function Home() {
  const lottieContainer = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("public/lottie/hero.json"),
    });
    return () => Lottie.destroy();
  }, []);

  return (
    <>
      <LottieContainer ref={lottieContainer} />
      <HeroSection id={SectionId.HERO} />
      <Spacing />
      <ApplySection id={SectionId.INFO} />
      <RuleSection id={SectionId.RULE} />
      <FAQSection id={SectionId.APPLY} />
    </>
  );
}

const LottieContainer = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  display: inline-block;
  text-align: right;
  opacity: 0.32 !important;
  position: fixed;
  top: 0;
  left: 0;

  svg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh !important;
  }
`;
