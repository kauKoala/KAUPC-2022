import styled from "@emotion/styled";
import Section from "components/Section";
import React, { useRef } from "react";

const HeroSection = () => {
  return (
    <Section>
      <HeroContainer>
        <div>
          <HeroTitle>KAUPC 2022</HeroTitle>
          <HeroSubTitle>
            한국항공대학교 제 <Second>2</Second>회 프로그래밍 경진대회
          </HeroSubTitle>
          <Schedule>
            <Info>접수 : 08.01(수) ~ 08.15(금)</Info>
            <Info>대회 : 08.18(월)</Info>
          </Schedule>
        </div>
        <Content>
          <Info>주최 : 한국항공대학교 소프트웨어학과 & 한국항공대 알고리즘 동아리 KOALA</Info>
        </Content>
      </HeroContainer>
    </Section>
  );
};

const HeroContainer = styled.div`
  color: white;
  height: 90%;
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
  text-shadow: 2px 2px 2px #312a7c;
`;

const HeroSubTitle = styled.h1`
  font-size: 48px;
  text-shadow: 2px 2px 2px #312a7c;
  margin-bottom: 28px;
`;

const Content = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  margin: 12px 0;
  font-size: 24px;
`;

const Info = styled.p``;

export default HeroSection;
