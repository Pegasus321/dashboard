import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createGlobalStyle, styled } from "styled-components";

export default function SignUp() {
  return (
    <>
      <GlobalStyles />
      <Signup>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="Retype" />
        <Button>Register</Button>
      </Signup>
    </>
  );
}
const Signup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  padding: 0.7rem;
  margin: 20px;
  border: 2px solid #ccc;
  border-radius: 6px;
  width: 13rem;
`;

const Button = styled.button`
  background: rgba(113, 99, 186, 255);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: rgba(34, 15, 129, 255);
  }
`;
const GlobalStyles = createGlobalStyle`
body{
    justify-content:center;
    align-items:center;
    min-height:100vh;
    margin:0;   
    background-color:#f0f0f0;
}
`;
