import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import Liked from "../../assets/LikedIMG.png";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

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

const ImgDiv = styled.div`
  width: 350px;
  height: 250px;
`;
const ImgWrapper = styled.img`
  display: flex;
  width: 319px;
  height: 234px;
  border-radius: 3px;
  padding-left: 30px;
  padding-top: 8px;
`;
const DivWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f2dd;
  width: 35px;
  height: 35px;
  border: 2px solid black;
  border-radius: 50px;
  margin-left: 310px;
  margin-top: 4px;
`;

const InformBox = styled.div`
  width: 320px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
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
  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Liked</TextWrapper>
        <Text>내가 찜한 상품</Text>
        <ImgDiv>
          <ImgWrapper src={Liked} />
          <DivWrap onClick={handleHeart}>
            {heart ? (
              <AiFillHeart style={{ color: "red", fontSize: "30px" }} />
            ) : (
              <AiOutlineHeart style={{ fontSize: "30px" }} />
            )}
          </DivWrap>
        </ImgDiv>
        <InformBox>
          <TitleText>Knotted Donut Set</TitleText>
          <PriceText>13900 Won</PriceText>
        </InformBox>
      </BodyContent>
      <Footer />
    </>
  );
};

export default HeartPage;
