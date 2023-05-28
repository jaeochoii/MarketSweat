import React from "react";
import styled from "styled-components";
import Header from "../uiPage/Header";
import Footer from "../uiPage/Footer";
import Arrow from "../assets/down-arrow.png";
import Coffee from "../assets/coffee.png";
import Bakery from "../assets/bakery.png";
import Macaron from "../assets/macaron.png";
import Pestury from "../assets/pastury.png";
import Cake from "../assets/cake.png";
import Bagle from "../assets/bagle.png";
import Candy from "../assets/candy.png";
import Cookie from "../assets/cookie.png";
import Sandwich from "../assets/sandwitch.png";

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
  padding-top: 20px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  width: 350px;
  height: 40px;
  border-bottom: 1px solid #cecece;
  margin-left: 22px;
  padding-top: 7px;
`;

const FoodWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-top: 15px;
  margin-left: 5px;
`;

const FoodText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-size: 20px;
  width: 100px;
  height: 25px;
  justify-content: left;
  align-items: center;
  margin-left: 17px;
  margin-top: 13px;
`;

const ArrowWrap = styled.img`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 18px;
  height: 18px;
  margin-left: 165px;
  margin-top: 15px;
`;

const MenuPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Category</TextWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Coffee} />
          <FoodText>커피</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Bakery} />
          <FoodText>베이커리</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Macaron} />
          <FoodText>마카롱</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Pestury} />
          <FoodText>패스츄리</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Cake} />
          <FoodText>케이크</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Bagle} />
          <FoodText>베이글</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Candy} />
          <FoodText>캔디</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Cookie} />
          <FoodText>쿠키</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
        <CategoryWrapper>
          <FoodWrapper src={Sandwich} />
          <FoodText>샌드위치</FoodText>
          <ArrowWrap src={Arrow} />
        </CategoryWrapper>
      </BodyContent>
      <Footer />
    </>
  );
};

export default MenuPage;
