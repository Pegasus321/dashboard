import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";
import auth from "../firebaseConfig.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePass(e.target.value);

    setPasswordMatch(e.target.value === password);
  };

  const handleRegisterClick = () => {
    if (password == retypePass) {
      try {
        const userCredential = createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        console.log(user);
      } catch (error) {
        alert(error);
      }
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Signup>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
        />
        <label htmlFor="password">Confirm Password</label>
        <Input
          type="password"
          value={retypePass}
          onChange={handleRetypePasswordChange}
          placeholder="Retype"
        />
        {!passwordMatch && <ErrorMessage>Password do not match</ErrorMessage>}
        <Button onClick={handleRegisterClick}>Register</Button>
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
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
