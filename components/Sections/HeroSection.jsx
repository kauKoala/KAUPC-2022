import styled from "@emotion/styled";
import Section from "components/Section";
import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const HeroSection = () => {
  const lottieContainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("public/lottie/drone.json"),
    });
    return () => Lottie.destroy();
  }, []);

  return (
    <Section>
      <HeroContainer>
        <div>
          <HeroTitle><Second>KAUPC</Second> 2022</HeroTitle>
          <HeroSubTitle>
            한국항공대학교
            <br />제<Second>2</Second>회 프로그래밍 경진대회
          </HeroSubTitle>
          <Schedule>
            <Info>접수 : ~ 09.14(수)</Info>
            <Info>대회 : 09.17(토) 14:00 ~ 17:00</Info>
          </Schedule>
        </div>
        <LottieContainer ref={lottieContainer}></LottieContainer>
        <SponsorsContainer>
          <Sponsors>
            <SponsorTitle>주최</SponsorTitle>
            <Info>
              <Sponsor>한국항공대학교 소프트웨어학과</Sponsor>
              <Sponsor>한국항공대학교 알고리즘 학회 Koala</Sponsor>
            </Info>
          </Sponsors>
          <Sponsors>
            <SponsorTitle>후원</SponsorTitle>
            <Info>
              <a href="https://startlink.io/" target="_blank" rel="noreferrer">
                <SponsorImage src="startlink-logo-white.png" alt="후원처 1 - startlink" />
              </a>
            </Info>
          </Sponsors>
        </SponsorsContainer>
      </HeroContainer>
    </Section>
  );
};

const HeroContainer = styled.div`
  color: white;
  height: 80vh;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Second = styled.span`
  color: #789fcf;
`;

const HeroTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 20px;
  text-shadow: 4px 4px 4px #312a7c;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 72px;
  }
`;

const HeroSubTitle = styled.h1`
  font-size: 48px;
  text-shadow: 4px 4px 4px #312a7c;

  margin-bottom: 28px;
  line-height: 1.3;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 28px;
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  gap: 80px;
  justify-content: flex-start;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Sponsors = styled.div`
  align-items: center;
  justify-content: space-between;
`;

const SponsorTitle = styled.div`
  font-size: 28px;
  margin-bottom: 18px;
  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 22px;
  }
`;

const Sponsor = styled.div`
  font-size: 20px;
  margin: 12px 0;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 14px;
    margin: 4px 0;
  }
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  margin: 12px 0;
  font-size: 24px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    gap: 4px;
  }
`;

const Info = styled.div`
  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 18px;
    line-height: 1.5;
    gap: 8px;
  }
`;

const LottieContainer = styled.div`
  background-repeat: no-repeat;
  top: 100px;
  position: absolute;
  right: 100px;
  pointer-events: none;

  svg {
    height: 400px;
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    & {
      height: 240px;
      margin-top: 0px;
      margin-bottom: -50px;
      position: static;
    }

    svg {
      height: 600px;
    }
  }
`;

const SponsorImage = styled.img`
  max-height: 60px;
  margin-top: -24px;
`

export default HeroSection;
