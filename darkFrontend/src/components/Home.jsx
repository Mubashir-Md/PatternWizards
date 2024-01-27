/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import dotenv from "dotenv";
import styled from "styled-components";
import process from "process";
import NavBar from "./NavBar";
import Robot from "../assets/robot4.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const gotoPharma = () => navigate("/pharmacy");
  return (
    <Container>
      <NavBar />
      <HomePage>
        <div className="content">
          <h2>Pattern Wizards </h2>
            <h4>Think Before You Click!</h4>

          <button onClick={gotoPharma}>Explore now</button>
        </div>
        {/* <div className="img">
          <img src={Robot} alt="" />
        </div> */}
      </HomePage>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  // background: hsla(0, 0%, 0%, 1);
  // background: linear-gradient(135deg, hsla(0, 0%, 0%, 1) 0%, hsla(305, 46%, 47%, 1) 100%);
  // background: -moz-linear-gradient(135deg, hsla(0, 0%, 0%, 1) 0%, hsla(305, 46%, 47%, 1) 100%);
  // background: -webkit-linear-gradient(135deg, hsla(0, 0%, 0%, 1) 0%, hsla(305, 46%, 47%, 1) 100%);
  // filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#AE41A5", GradientType=1 );
  background: #000000;
  color: white;
  h1 {
    margin: 15px;
  }
`;

const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  min-height: 85vh;
  
    
  // width: 100%;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    width: 80%;
    height: 80%;
    h2 {
      // margin: 20px;
      font-size: 100px;
      font-weight: 600;
      text-align: center;
    }
    h4 {
      font-weight: 400;
      font-size: 80px;
      width: 100%;
      text-align: center;
      line-height: 2rem;
      // margin: 20px;
    }
    button {
      padding: 20px 30px;
      // margin: 25px;
      border-radius: 5px;
      border: 1px solid black;
      background: white;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
  .img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: ;

      aspect-ratio: 16/9;
      border-radius: 10px;
    }
  }
`;
