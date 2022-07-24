import styled from "@emotion/styled";
import React from "react";
import { SMALL_WIDTH } from "styles/layouts.ts";

const Checkbox = ({ label, isChecked, onClick }) => {
  return (
    <Container isChecked={isChecked}>
      <input type="checkbox" checked={isChecked} onClick={onClick} id={label} />
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    background-color: ${({ isChecked }) => (isChecked ? "green" : "white")};
    overflow: hidden;
    margin-right: 12px;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    flex: 1;
    line-height: 1.5;
    font-size: 20px;
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    input {
      width: 14px;
      height: 14px;
    }

    label {
      font-size: 15px;
    }
  }
`;

export default Checkbox;
