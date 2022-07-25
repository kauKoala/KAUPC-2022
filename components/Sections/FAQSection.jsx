import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Checkbox from "components/Checkbox";
import Section from "components/Section";
import React, { useEffect } from "react";
import { useState } from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const applyConditionList = [
  {
    label: "현재 한국항공대학교 학부 재학 / 휴학생으로, 대학원에 재학중이지 않습니다.",
    isChecked: false,
  },
  {
    label: "본 대회 일정이 대면으로 진행되는 점을 확인했습니다.",
    isChecked: false,
  },
  { label: "대회 진행과 유의사항을 모두 확인했습니다.", isChecked: false },
];

const APPLY_FORM_URL = "https://forms.gle/YcAjzGCjY62X9Lx19";
const PREVIOUS_PROBLEM_URL = "https://www.acmicpc.net/category/detail/2838";
const PREVIOUS_SOLUTION_URL =
  "https://drive.google.com/file/d/1f8DSR4S6Q-PraI0tGUkgxdXRALGFVzXF/view";

const FAQSection = () => {
  const [applyCondition, setApplyCondition] = useState(applyConditionList);
  const [isApplyDisabled, setIsApplyDisabled] = useState(true);

  const handleConditionCheck = (conditionIndex) => {
    const _applyCondition = applyCondition;
    _applyCondition[conditionIndex].isChecked = !_applyCondition[conditionIndex].isChecked;
    setApplyCondition([..._applyCondition]);
  };

  useEffect(() => {
    const checkedCondition = applyCondition.filter((condition) => condition.isChecked === true);
    if (checkedCondition.length === applyConditionList.length) {
      setIsApplyDisabled(false);
    } else {
      setIsApplyDisabled(true);
    }
  }, [applyCondition]);

  const openApplyForm = () => {
    if (!isApplyDisabled) {
      window.open(APPLY_FORM_URL);
    }
  };

  const openPreviousProblem = () => {
    window.open(PREVIOUS_PROBLEM_URL);
  };

  const openPreviousSolution = () => {
    window.open(PREVIOUS_SOLUTION_URL);
  };

  return (
    <Section
      css={css`
        padding-top: 60px;
        margin-top: 80px;
      `}
    >
      <Section.Title
        css={css`
          text-align: center;
          @media screen and (max-width: ${SMALL_WIDTH}) {
            & {
              text-align: left;
            }
          }
        `}
      >
        <Second>KAUPC 2022</Second> 접수하기
      </Section.Title>
      <Content>
        <ContentItem>
          <Section.SubTitle
            css={css`
              font-size: 26px;
              @media screen and (max-width: ${SMALL_WIDTH}) {
                & {
                  font-size: 24px;
                }
              }
            `}
          >
            작년 기출문제 풀어보기
          </Section.SubTitle>
          <Info
            css={css`
              margin-bottom: 24px;
              line-height: 1.5;
              margin-top: 32px;
              @media screen and (max-width: ${SMALL_WIDTH}) {
                & {
                  font-size: 16px;
                  margin-top: 18px;
                }
              }
            `}
          >
            올해가 첫 번째 대회라면, 2021 KAUPC의 문제도 확인해 보세요.
          </Info>
          <PrevProblemButton
            css={css`
              margin-bottom: 80px;

              @media screen and (max-width: ${SMALL_WIDTH}) {
                & {
                  margin-bottom: 40px;
                }
              }
            `}
          >
            <PreviousButton
              onClick={openPreviousProblem}
              css={css`
                background-color: #2f3a9c;
                color: #fff;
              `}
            >
              작년 기출문제 풀어보기
            </PreviousButton>
            <PreviousButton
              onClick={openPreviousSolution}
              css={css`
                background-color: white;
                color: #333;

                &:hover {
                  background-color: rgba(192, 192, 192);
                }
              `}
            >
              {" "}
              작년 기출문제 해설 보기
            </PreviousButton>
          </PrevProblemButton>
        </ContentItem>
        <ContentItem>
          <Section.SubTitle
            css={css`
              font-size: 24px;
              @media screen and (max-width: ${SMALL_WIDTH}) {
                & {
                  font-size: 20px;
                }
              }
            `}
          >
            모든 준비가 끝났다면, 이제 마지막 단계에요!
          </Section.SubTitle>
          <CheckboxList>
            {applyConditionList.map((labelItem, index) => {
              const { label, isChecked } = labelItem;
              return (
                <Checkbox
                  label={label}
                  key={label}
                  isChecked={isChecked}
                  onClick={() => handleConditionCheck(index)}
                />
              );
            })}
          </CheckboxList>
          <div
            style={{ display: "flex" }}
            css={css`
              @media screen and (max-width: ${SMALL_WIDTH}) {
                & {
                  margin-bottom: 40px;
                }
              }
            `}
          >
            <ApplyButton onClick={openApplyForm} isDisabled={isApplyDisabled}>
              지금 참여하기
            </ApplyButton>
          </div>
        </ContentItem>
      </Content>
    </Section>
  );
};

const Second = styled.span`
  color: #789fcf;
`;

const CheckboxList = styled.div`
  margin: 24px 0 60px 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Info = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentItem = styled.div`
  flex: 1;
`;

const PrevProblemButton = styled.div`
  display: flex;
  gap: 24px;

  button {
    flex: 1;
    max-width: 300px;
    font-size: 20px;
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    & {
      flex-direction: column;
    }
    button {
      padding: 12px 16px;
      border-radius: 10px;
      font-size: 16px;
    }
  }
`;

const ApplyButton = styled.button`
  -webkit-box-shadow: 0px 0px 20px 1px #4847ff;
  box-shadow: 0px 0px 20px 1px #4847ff;
  box-shadow: ${({ isDisabled }) =>
    isDisabled ? "0px 0px 20px 1px rgba(99,99,99,0.8);" : "#404096"};
  width: 300px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-size: 20px;
  padding: 20px 12px;
  border-radius: 12px;
  outline: none;
  border: none;
  font-size: 28px;
  font-weight: 700;
  background-color: ${({ isDisabled }) => (isDisabled ? "rgba(99,99,99,0.8)" : "#404096")};
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;
  z-index: 100;

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "rgba(99,99,99,0.8)" : "#4040dd")};
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    & {
      padding: 16px 10px;
      font-size: 22px;
    }
  }
`;

const PreviousButton = styled(ApplyButton)`
  background-color: red;
  width: 400px;
  padding: 16px 20px;
`;

export default FAQSection;
