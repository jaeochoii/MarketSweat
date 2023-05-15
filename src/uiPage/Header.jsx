import React from "react";
import styled from "styled-components";
import ShopLogo from "../assets/RiShoppingBasketLine.png";

const HeadWrapper = styled.div`
  width: 395px;
  height: 90px;
  background-color: #f6f2dd;
`;

const HeadLogo = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  display: flex;
  padding-left: 60px;
  justify-content: center;
  align-items: center;
  font-family: "Mogra", cursive;
  height: 18vh;
  font-size: 24px;
  line-height: 20px;
`;

const ShopWrapper = styled.img`
  display: flex;
  float: right;
  width: 30px;
  height: 30px;
  padding-top: 40px;
  padding-right: 20px;
`;

const Header = () => {
  return (
    <HeadWrapper>
      <ShopWrapper src={ShopLogo} alt="" />
      <HeadLogo>
        Market
        <br />
        Sweat
      </HeadLogo>
    </HeadWrapper>
  );
};

export default Header;
