import styled from "@emotion/styled";
import React from "react";

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
  }
`;

export default Checkbox;
