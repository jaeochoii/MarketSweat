import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import Liked from "../../assets/LikedIMG.png";

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

const ImgWrapper = styled.img`
  display: flex;
  width: 319px;
  height: 234px;
  border-radius: 3px;
  padding-left: 30px;
  padding-top: 8px;
`;
const InformBox = styled.div`
  width: 320px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
  padding-left: 30px;
`;
const TitleText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 20px;
`;

const PriceText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 20px;
`;

const HeartPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Liked</TextWrapper>
        <Text>내가 찜한 상품</Text>
        <ImgWrapper src={Liked} />
        <InformBox>
          <TitleText>Naughted Donut Set</TitleText>
          <PriceText>13900원</PriceText>
        </InformBox>
      </BodyContent>
      <Footer />
    </>
  );
};

export default HeartPage;
