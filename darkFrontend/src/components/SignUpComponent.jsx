/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import dotenv from "dotenv";
import styled from "styled-components";

function SignUpComponent() {
  const googleAuth = () => {
    window.open("http://localhost:3000/auth/google/callback", "_self");
    // window.open(`https://backend-robofetch.onrender.com/auth/google/callback`, "_self");
  };
  return (
    <Container>
      <h1>SignUp</h1>
      <SignUp>
        <div className="img">
          <img src="" alt="" />
        </div>
        <button onClick={googleAuth}>Sign In with Google</button>
      </SignUp>
    </Container>
  );
}

export default SignUpComponent;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const SignUp = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .img {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .content {
    width: 50%;
    h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #333;
    }
    input {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 10px 0;
      font-size: 16px;
      &:focus {
        border-color: #007bff;
      }
    }
    button {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 10px 0;
      font-size: 16px;
      background: #007bff;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: #0069d9;
      }
    }
    p {
      margin: 10px 0;
      a {
        color: #007bff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .google {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border: 1px solid #ccc;
      color: #333;
      img {
        width: 30px;
        margin-right: 5px;
      }
      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;
