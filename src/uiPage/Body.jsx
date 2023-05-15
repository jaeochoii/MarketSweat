import React from "react";
import styled from "styled-components";

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
  padding-left: 10px;
  padding-bottom: 5px;
`;

const SaleWrapper = styled.div`
  width: 390px;
  height: 215px;
  border: 3px solid black;
`;

const RecWrapper = styled.div`
  width: 390px;
  height: 135px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RecContent = styled.div`
  width: 120px;
  height: 125px;
  border: 1px solid blue;
`;

const Body = () => {
  return (
    <BodyContent>
      <TextWrapper>스윗 행사 상품</TextWrapper>
      <SaleWrapper />
      <TextWrapper>스윗 추천 상품</TextWrapper>
      <RecWrapper>
        <RecContent />
        <RecContent />
        <RecContent />
      </RecWrapper>
      <TextWrapper>일일 특가 상품</TextWrapper>
    </BodyContent>
  );
};

export default Body;
