import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import { useNavigate } from "react-router-dom";

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

const ReviewWrapper = styled.div`
  width: 100%;
  height: 135px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 7px;
`;

const ProductText = styled.div`
  width: 165px;
  height: 17px;
  font-size: 13px;
  display: flex;
  padding-left: 15px;
  padding-top: 11px;
  color: #cecece;
`;

const ContentText1 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  padding-left: 15px;
  padding-top: 10px;
`;

const ContentText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 13px;
  display: flex;
  padding-left: 15px;
  padding-top: 15px;
`;

const PurchaseBut = styled.button`
  width: 80px;
  height: 34px;
  border: 2px solid red;
  background-color: white;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
  margin-top: 5px;
  margin-left: 5px;

  &:hover {
    background-color: pink;
  }
`;

const KnottedDelete = () => {
  const navigate = useNavigate();

  const onClickDelete = () => {
    navigate("/MakePostPage");
  };
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Post</TextWrapper>
        <ReviewWrapper>
          <ProductText>[Knotted] 우유 생크림 도넛</ProductText>
          <ContentText1>우유 생크림 도넛 정말 최고네요</ContentText1>
          <ContentText>맛있게 잘먹었습니다</ContentText>
        </ReviewWrapper>
        <PurchaseBut onClick={onClickDelete}>삭제하기</PurchaseBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default KnottedDelete;
