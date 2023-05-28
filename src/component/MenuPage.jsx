import React from "react";
import styled from "styled-components";
import Header from "../uiPage/Header";
import Footer from "../uiPage/Footer";
import { RiArrowDownSLine } from "react-icons/ri";
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
`;

const MenuPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Category</TextWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
        <CategoryWrapper></CategoryWrapper>
      </BodyContent>
      <Footer />
    </>
  );
};

export default MenuPage;
