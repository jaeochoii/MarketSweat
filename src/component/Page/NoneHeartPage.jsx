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
  padding-top: 30px;
`;

const Text = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 700;
  font-size: 15px;
  padding-top: 20px;
  padding-left: 17px;
`;

const NoneHeartPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Liked</TextWrapper>
        <Text>내가 찜한 상품</Text>
      </BodyContent>
      <Footer />
    </>
  );
};

export default NoneHeartPage;
