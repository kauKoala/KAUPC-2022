import styled from "@emotion/styled";
import Section from "components/Section";
import React from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";
import { MdOutlineMonitor } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import Strong from "components/Strong";
import { css } from "@emotion/react";

const KAKAO_HELP_URL = "https://open.kakao.com/o/sl1uxKqe";

const RuleSection = () => {
  return (
    <Section>
      <Section.Title>대회 규정</Section.Title>
      <Section.SubTitle>
        대회 운영 및 평가와 관련된 안내로, 접수 전에 꼭 읽어주세요.
      </Section.SubTitle>
      <RuleList>
        <RuleSubTitle>
          <MdOutlineMonitor />
          대회 진행
        </RuleSubTitle>
        <RuleItem>
          본 대회는 3인 1팀로 진행되며, 약 3시간동안 주어진 프로그래밍 문제를 해결하는 대회입니다.
        </RuleItem>
        <RuleItem>
          인터넷 검색을 이용하거나 미리 준비한 코드를 사용해도 됩니다. 다만 구글링으로 가져온 코드는 반드시 주석으로 출처를 표기해야 합니다.
        </RuleItem>
        <RuleItem style={{ zIndex: 10 }}>
          대회 과정은 오프라인으로 진행되며, 진행 관련 문의는 대회 운영{" "}
          <a href={KAKAO_HELP_URL} target="_blank" rel="noopener noreferrer" style={{ zIndex: 10 }}>
            <Strong
              css={css`
                color: #88a2cf;
                cursor: pointer;
              `}
            >
              카카오톡 오픈채팅방
            </Strong>
          </a>
          을 통해 건의할 수 있습니다.
        </RuleItem>
        <RuleItem>
          사용 가능 언어는 C, C++, Java, Python 3, PyPy3 으로 제한되며,
          이외의 언어로는 참여가 어려울 수 있습니다.
        </RuleItem>
        <RuleSubTitle>
          <RiErrorWarningLine />
          유의사항
        </RuleSubTitle>
        <RuleItem>
          대회가 종료된 후 소스코드 표절검사가 진행되며, 표절이 발견된 경우 관련 팀들은 실격됩니다.
        </RuleItem>
        <RuleItem>
          팀원이 아닌 사람과 문제에 대해 어떤 형태로든 커뮤니케이션하는 것은 부정행위로 간주됩니다.
        </RuleItem>
        <RuleItem>같은 팀원이 아닌 사람에게 대회용 계정의 정보를 공유해서는 안 됩니다.</RuleItem>
        <RuleItem>
          위의 유의사항을 위반하는 경우 부정행위로 간주되어 실격되며, 수상했더라도 수상이 취소될 수
          있습니다.
        </RuleItem>
        <RuleItem>기타 명시되지 않은 사항은 운영진의 판단에 따라 결정할 수 있습니다.</RuleItem>
      </RuleList>
    </Section>
  );
};

const RuleList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  padding: 16px 32px;
  border-radius: 12px;
  margin-top: 32px;
  -webkit-box-shadow: 2px 2px 4px 2px rgba(66, 66, 66, 0.1);
  box-shadow: 2px 2px 4px 2px rgba(66, 66, 66, 0.1);

  @media screen and (max-width: ${SMALL_WIDTH}) {
    padding: 16px 24px;
  }
`;

const RuleItem = styled.li`
  list-style: disc;
  list-style-position: inside;
  font-size: 20px;
  margin: 6px 0;
  line-height: 1.6;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 15px;
    line-height: 1.5;
  }
`;

const RuleSubTitle = styled(Section.SubTitle)`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 40px 0 16px 0;

  svg {
    margin-right: 12px;
  }

  &:first-child {
    margin-top: 16px;
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 22px;
    margin: 24px 0 12px 0;
    line-height: 1.5;
  }
`;

export default RuleSection;
