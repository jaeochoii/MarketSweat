import React from "react";
import styled from "styled-components";
import Pancake from "../assets/Product.png";
import Macaron from "../assets/macarons.png";
import Donuts from "../assets/LikedIMG.png";
import SaleProduct from "../assets/saleProduct.png";
import { useNavigate } from "react-router-dom";

const BodyContent = styled.div`
  width: 390px;
  height: 500px;
`;

const TextWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 700;
  font-size: 15px;
  padding-top: 15px;
  padding-left: 18px;
  padding-bottom: 5px;
`;

const SaleWrapper = styled.img`
  width: 358px;
  height: 215px;
  padding-left: 18px;
`;

const RecWrapper = styled.div`
  width: 358px;
  height: 135px;
  border: 3px solid none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 18px;
`;

const RecContent = styled.img`
  width: 110px;
  height: 125px;
  border: 1px solid #d8cb93;
  border-radius: 2px;
`;

const Body = () => {
  const navigate = useNavigate();

  const onClickProduct = () => {
    navigate("/ProductDetailPage");
  };

  return (
    <BodyContent>
      <TextWrapper>스윗 행사 상품</TextWrapper>
      <SaleWrapper src={SaleProduct} />
      <TextWrapper>스윗 추천 상품</TextWrapper>
      <RecWrapper>
        <RecContent src={Pancake} onClick={onClickProduct} />
        <RecContent src={Macaron} />
        <RecContent src={Donuts} />
      </RecWrapper>
      <TextWrapper>일일 특가 상품</TextWrapper>
    </BodyContent>
  );
};

export default Body;
