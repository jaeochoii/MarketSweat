import React from "react";
import styled from "styled-components";
import Error from "../../assets/UnHeart.png";
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

const ErrorWrapper = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 3px;
  padding-left: 130px;
  padding-top: 50px;
`;

const ErrorText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 20px;
  padding-top: 50px;
  padding-left: 85px;
`;

const NoneHeartPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Liked</TextWrapper>
        <ErrorWrapper src={Error} />
        <ErrorText>내가 찜한 상품이 없습니다</ErrorText>
      </BodyContent>
      <Footer name="heart" />
    </>
  );
};

export default NoneHeartPage;
