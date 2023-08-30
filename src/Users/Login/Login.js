import React, { useState } from "react";
import auth from "../firebaseConfig.js";
import { styled } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLoggedIn] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      setLoggedIn(true);
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user.email));
    } catch (error) {
      console.error(error);
    }
  };
  if (login) {
    return navigate("/dashboard");
  }
  return (
    <>
      <GlobalStyle />
      <div className="login">
        <form action="" onSubmit={handleLogin}>
          <Log>
            <label htmlFor="email">Email</label>
            <Input type="email" name="email" placeholder="email" />
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" placeholder="password" />
            <Button type="submit">Login</Button>
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
