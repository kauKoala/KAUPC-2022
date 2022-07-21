import styled from "@emotion/styled";
import Section from "components/Section";
import React from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const RuleSection = () => {
  return (
    <Section>
      <Section.Title>대회 규정</Section.Title>
      <Section.SubTitle>
        대회 운영 및 평가와 관련된 안내로, 접수 전에 꼭 읽어주세요.
      </Section.SubTitle>
      <RuleList>
        <RuleItem>
          본 대회는 3인 1조로 진행되며, 약 3시간동안 주어진 프로그래밍 문제를
          해결하는 대회입니다.
        </RuleItem>
        <RuleItem>
          사용 가능 언어는 C11, C++14, Java (OpenJDK), Kotlin (JVM), Python 3,
          PyPy3 로 제한되며, 이외의 언어로는 참여가 어려울 수 있습니다.
        </RuleItem>
        <RuleItem>
          팀원이 아닌 사람과 문제에 대해 어떤 형태로든 커뮤니케이션하는 것은
          부정행위로 간주됩니다.
        </RuleItem>
        <RuleItem>
          위의 유의사항을 위반하는 경우 부정행위로 간주되어 실격되며,
          수상했더라도 수상이 취소될 수 있습니다.
        </RuleItem>
        <RuleItem>
          기타 명시되지 않은 사항은 운영진의 판단에 따라 결정할 수 있습니다.
        </RuleItem>
        <RuleItem>
          대회 전 과정은 온라인으로 진행되며, 대회 관련 문의는 대회 운영
          카카오톡 오픈채팅방을 통해 건의할 수 있습니다.
        </RuleItem>
      </RuleList>
    </Section>
  );
};

const RuleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    margin-top: 20px;
  }
`;

const RuleItem = styled.li`
  list-style: disc;
  list-style-position: inside;
  font-size: 20px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 15px;
    line-height: 1.6;
  }
`;

export default RuleSection;
