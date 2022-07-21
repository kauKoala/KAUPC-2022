import styled from "@emotion/styled";
import React from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const Section = styled.section`
  min-height: 100vh;
  padding: 80px 60px 0 60px;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    padding: 40px 24px 0 24px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 700;
  margin-bottom: 42px;
  line-height: 1.2;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 12px;
  line-height: 1.2;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export default Object.assign(Section, { Title, SubTitle });
