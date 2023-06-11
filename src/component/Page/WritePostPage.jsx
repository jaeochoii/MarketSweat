import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";

const BodyContent = styled.div`
  width: 390px;
  height: 500px;
`;

const TitleText = styled.div`
  width: 330px;
  height: 30px;
  padding-top: 20px;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 18px;
`;

const SearchBox = styled.input`
  width: 340px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #eeeded;
  background-color: white;
  letter-spacing: 1px;
  padding-left: 17px;
  margin-top: 0px;
  margin-left: 17px;
`;

const SearchBox2 = styled.input`
  width: 340px;
  height: 230px;
  border-radius: 5px;
  border: 1px solid #eeeded;
  background-color: white;
  letter-spacing: 1px;
  padding-left: 17px;
  margin-left: 17px;
`;

const PurchaseBut = styled.button`
  width: 100px;
  height: 34px;
  border: 1px solid #f6f2dd;
  background-color: #f6f2dd;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 20px;
`;

const WritePostPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TitleText>제 목</TitleText>
        <SearchBox placeholder="제목을 작성해주세요" />
        <TitleText>내 용</TitleText>
        <SearchBox2 placeholder="내용을 작성해주세요" />
        <PurchaseBut>등록하기</PurchaseBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default WritePostPage;
