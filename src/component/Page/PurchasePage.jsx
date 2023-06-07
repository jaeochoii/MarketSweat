import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import Pancake from "../../assets/Product.png";

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

const DateText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-weight: 700;
  font-size: 17px;
  border-bottom: 2px solid #cecece;
  width: 350px;
  height: 20px;
  padding-top: 30px;
  padding-bottom: 2px;
  margin-left: 20px;
`;

const PurchaseText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #cecece;
  width: 350px;
  height: 20px;
  padding-top: 15px;
  padding-bottom: 2px;
  margin-left: 20px;
`;

const RecContent = styled.img`
  width: 110px;
  height: 125px;
  border: 1px solid #d8cb93;
  border-radius: 2px;
  margin-left: 20px;
  margin-top: 15px;
`;

const PurchasePage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Purchase</TextWrapper>
        <DateText>2023.06.11</DateText>
        <PurchaseText>구매 확정</PurchaseText>
        <RecContent src={Pancake} />
      </BodyContent>
      <Footer />
    </>
  );
};

export default PurchasePage;
