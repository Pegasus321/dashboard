import React from "react";
import { styled } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <GlobalStyle />
      <div className="login">
        <form action="">
          <Log>
            <Input type="email" value="email" placeholder="email" />
            <Input type="password" value="password" placeholder="password" />
            <Button className="login--button">Login</Button>
          </Log>
        </form>
        <SignUp>
          <Link to="/signup">Sign Up</Link>
          <p>/</p>
          <Link to="/singup">Sign Up with Mobile</Link>
        </SignUp>
      </div>
    </>
  );
}
const Log = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
const Input = styled.input`
  padding: 0.7rem;
  margin: 20px;
  border: 2px solid #ccc;
  border-radius: 6px;
  width: 13rem;
`;
const SignUp = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  a {
    text-decoration: none;
    color: rgba(113, 99, 186, 255);
  }
`;
const GlobalStyle = createGlobalStyle`
  body {
    justify-content:center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
  }`;
