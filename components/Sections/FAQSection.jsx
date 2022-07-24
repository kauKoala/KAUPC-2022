import styled from "@emotion/styled";
import Checkbox from "components/Checkbox";
import Section from "components/Section";
import React from "react";
import { useState } from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const applyConditionList = [
  {
    label:
      "현재 한국항공대학교 학부 재학 / 휴학생으로, 대학원에 재학중이지 않습니다.",
    isChecked: false,
  },
  {
    label: "본 대회 일정이 대면으로 진행되는 점을 확인했습니다.",
    isChecked: false,
  },
  { label: "대회 진행과 유의사항을 모두 확인했습니다.", isChecked: false },
];

const FAQSection = () => {
  const [applyCondition, setApplyCondition] = useState(applyConditionList);

  const handleConditionCheck = (conditionIndex) => {
    const _applyCondition = applyCondition;
    _applyCondition[conditionIndex].isChecked =
      !_applyCondition[conditionIndex].isChecked;
    setApplyCondition([..._applyCondition]);
  };

  const openApplyForm = () => {
    window.open("");
  };

  return (
    <Section>
      <Section.Title><Second>KAUPC 2022</Second> 접수하기</Section.Title>
      <Content>
        <Section.SubTitle>
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
      </Content>
      <ApplyButton>지금 참여하기</ApplyButton>
    </Section>
  );
};

const Second = styled.span`
  color: #789fcf;
`;

const CheckboxList = styled.div`
  margin-top: 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Content = styled.div``;

const ApplyButton = styled.button`
  -webkit-box-shadow: 0px 0px 20px 1px #4847ff;
  box-shadow: 0px 0px 20px 1px #4847ff;
  width: 300px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 20px;
  padding: 20px 12px;
  border-radius: 12px;
  outline: none;
  border: none;
  font-size: 28px;
  font-weight: 700;
  background-color: #404096;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover {
    background-color: #000;
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    & {
      padding: 16px 10px;
      font-size: 22px;
    }
  }
`;

export default FAQSection;
