import styled from "@emotion/styled";
import Section from "components/Section";
import SubTitle from "components/SubTitle";
import Title from "components/Title";
import React from "react";

const FAQSection = () => {
  return (
    <Section>
      <Title>자주 묻는 질문</Title>
      <SubTitle>궁금한 내용이 이곳에 없을 경우, KOALA@gmail.com 으로 문의해주세요.</SubTitle>
      <Info>(※ 학부 휴학생 참가 가능 / 대학원생 참여 불가)</Info>
    </Section>
  );
};

const Info = styled.p`
  font-size: 18px;
  margin: 12px 0;
`

export default FAQSection;
