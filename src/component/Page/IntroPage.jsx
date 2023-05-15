import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const ImgWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
  font-family: "Mogra", cursive;
  font-size: 4rem;
  line-height: 55px;
`;

const Box = styled.div`
  width: 390px;
  height: 700px;
  background-color: #f6f2dd;
`;

const IntroPage = () => {
  const navigate = useNavigate();

  const timeout = () => {
    setTimeout(() => {
      navigate("/MainPage");
    }, 1800);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Box>
      <ImgWrapper>
        Market
        <br />
        Sweat
      </ImgWrapper>
    </Box>
  );
};

export default IntroPage;
