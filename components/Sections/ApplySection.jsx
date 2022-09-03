import styled from "@emotion/styled";
import Section from "components/Section";
import Strong from "components/Strong";
import ToolTip from "components/ToolTip";
import React from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";
import { AiOutlineCalendar, AiOutlineTrophy } from "react-icons/ai";

const ApplySection = () => {
  return (
    <Section>
      <Section.Title>누구든 <Second>주인공</Second>이 될 수 있어요</Section.Title>
      <Section.SubTitle>
        KAUPC의 목표는 단순히 1등을 가려내는 것이 아니라, 학우들의 프로그래밍 역량을 점검하고 기르는
        시간이에요.
      </Section.SubTitle>
      <Section.SubTitle>
        소프트웨어 전공자가 아니더라도, 2022년도 2학기 한국항공대학교 학부 재학생이라면 누구나
        도전할 수 있어요.
      </Section.SubTitle>
      <p>(※ 학부 휴학생 참가 가능 / 대학원생 참여 불가)</p>
      <ApplyInfoContainer>
        <ApplyInfo>
          <ApplyInfoTitle>
            <AiOutlineCalendar />
            대회 일정
          </ApplyInfoTitle>
          <ApplyInfoContent>
            <li>접수 마감 : 2022년 9월 13일 (화요일) 자정</li>
            <li>대회 진행 : 2022년 9월 17일 (토요일) 14:00 ~ 17:00</li>
            <li>대회 장소 : 과학관 4층 전산실</li>
            <li>스코어보드 발표 : 대회 종료 직후 공개</li>
          </ApplyInfoContent>
        </ApplyInfo>
        <ApplyInfo>
          <ApplyInfoTitle>
            <AiOutlineTrophy />
            시상내역</ApplyInfoTitle>
          <ApplyInfoContent>
            <li>
              <Strong>총장상 (1팀)</Strong> : 상금 90만원
            </li>
            <li>
              <Strong>대상 (2팀)</Strong> : 상금 60만원
            </li>
            <li>
              <Strong>최우수상 (3팀)</Strong> : 상금 30만원
            </li>
            <li>
              <Strong>우수상 (4팀)</Strong> : 치킨 기프티콘
            </li>
            <li>
              <Strong>특별상</Strong> : 베스킨라빈스 싱글 기프티콘
            </li>
          </ApplyInfoContent>
          <ToolTip>
            <span style={{ display: "inline-block", marginRight: "12px" }}>🏆</span>상위 3팀에게는
            shake! 경인지역 6개대학 연합 프로그래밍 경시대회 본선 진출의 기회가 주어집니다.
          </ToolTip>
          <ToolTip style={{ marginTop: "16px" }}>
            <span style={{ display: "inline-block", marginRight: "12px" }}>🎈</span>참가자 전원에게는
            학생활동 마일리지가 지급됩니다.
          </ToolTip>
        </ApplyInfo>
      </ApplyInfoContainer>
    </Section>
  );
};

const Second = styled.span`
  color: #789fcf;
`;

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
  display: flex;
  align-items: center;
  font-size: 24px;
  /* text-align: center; */
  text-shadow: 2px 2px 2px #333;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;

  svg {
    margin-right: 12px;
  }
`;

const ApplyInfoContent = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  list-style: disc;
  list-style-position: inside;
  gap: 24px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 15px;
    line-height: 1.5;
    gap: 12px;
  }
`;

export default ApplySection;
