import styled from "@emotion/styled";
import Section from "components/Section";
import React from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const ApplySection = () => {
  return (
    <Section>
      <Section.Title>누구든 주인공이 될 수 있어요</Section.Title>
      <Section.SubTitle>
        KAUPC의 목표는 단순히 1등을 가려내는 것이 아니라, 학우들의 프로그래밍
        역량을 점검하고 기르는 시간이에요.
      </Section.SubTitle>
      <Section.SubTitle>
        소프트웨어 전공자가 아니더라도, 2022년도 2학기 한국항공대학교 학부
        재학생이라면 누구나 도전할 수 있어요.
      </Section.SubTitle>
      <p>(※ 학부 휴학생 참가 가능 / 대학원생 참여 불가)</p>
      <ApplyInfoContainer>
        <ApplyInfo>
          <ApplyInfoTitle>대회 일정</ApplyInfoTitle>
          <ApplyInfoContent>
            <li>접수 마감 - 2021년 11월 3일 (수요일) 자정</li>
            <li>본대회 - 2021년 11월 6일 (토요일) 14:00 ~ 17:00 (3시간)</li>
            <li>스코어보드 발표 - 대회 종료 직후 공개</li>
          </ApplyInfoContent>
        </ApplyInfo>
        <ApplyInfo>
          <ApplyInfoTitle>대회 경품</ApplyInfoTitle>
          <ApplyInfoContent>
            <li>대상 (1팀) - 총장 명의의 상장 및 상금 100만원</li>
            <li>최우수상 (2팀) - 상금 50만원</li>
            <li>최우수상 (3팀) - 상금 30만원</li>
            <li>우수상 (4팀) - 상금 20만원</li>
          </ApplyInfoContent>
        </ApplyInfo>
      </ApplyInfoContainer>
    </Section>
  );
};

const ApplyInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
  gap: 40px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    margin-top: 60px;
    margin-bottom: 80px;
    flex-direction: column;
  }
`;

const ApplyInfo = styled.div`
  width: 100%;
  border-radius: 12px;
  /* background-color: #33333360; */
  padding: 24px;
  /* -webkit-box-shadow: 4px 4px 8px 4px rgba(0,0,0,0.3); */
  /* box-shadow: 4px 4px 8px 4px rgba(0,0,0,0.3); */
  /* backdrop-filter: blur(8px); */
  /* border: 1px solid #312a7c; */

  @media screen and (max-width: ${SMALL_WIDTH}) {
    padding: 0;
  }
`;

const ApplyInfoTitle = styled.h3`
  font-size: 24px;
  /* text-align: center; */
  text-shadow: 2px 2px 2px #333;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
`;

const ApplyInfoContent = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  list-style: disc;
  list-style-position: inside;
  gap: 20px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 15px;
    line-height: 1.5;
    gap: 8px;
  }
`;

export default ApplySection;
