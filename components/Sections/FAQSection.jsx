import styled from "@emotion/styled";
import Checkbox from "components/Checkbox";
import Section from "components/Section";
import React from "react";
import { useState } from "react";

const applyConditionList = [
  {
    label: "현재 한국항공대학교 학부 재학 / 휴학생으로, 대학원에 재학중이지 않습니다.",
    isChecked: false,
  },
  { label: "본 대회 일정이 대면으로 진행되는 점을 확인했습니다.", isChecked: false },
  { label: "대회 진행과 유의사항을 모두 확인했습니다.", isChecked: false },
];

const FAQSection = () => {
  const [applyCondition, setApplyCondition] = useState(applyConditionList);

  const handleConditionCheck = (conditionIndex) => {
    const _applyCondition = applyCondition;
    _applyCondition[conditionIndex].isChecked = !_applyCondition[conditionIndex].isChecked;
    setApplyCondition([..._applyCondition]);
  };

  return (
    <Section>
      <Section.Title>KAUPC 2022 접수하기</Section.Title>
      <Section.SubTitle>모든 준비가 끝났다면, 이제 출발할 시간이에요!</Section.SubTitle>
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
    </Section>
  );
};

const Info = styled.p`
  font-size: 18px;
  margin: 12px 0;
`;

const CheckboxList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default FAQSection;
