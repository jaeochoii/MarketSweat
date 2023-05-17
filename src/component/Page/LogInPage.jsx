import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";

const BodyContent = styled.div`
  width: 390px;
  height: 500px;
`;

const TextWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

const InputId = styled.div`
  width: 310px;
  height: 33px;
  border-radius: 12px;
  border: 1px solid black;
  padding-top: 10px;
`;

const LogInPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>LogIn</TextWrapper>
        <InputId />
      </BodyContent>
      <Footer />
    </>
  );
};

export default LogInPage;
