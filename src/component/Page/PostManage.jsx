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

const UserState = styled.div`
  width: 330px;
  height: 155px;
  border: 1px solid black;
  border-radius: 7px;
  margin-top: 31px;
  margin-left: 30px;
`;

const UserText = styled.div`
  width: 330px;
  height: 30px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IdText = styled.div`
  width: 50px;
  height: 12px;
  font-size: 13px;
  padding-left: 20px;
`;

const IdText2 = styled.div`
  width: 55px;
  height: 12px;
  font-size: 13px;
  padding-left: 10px;
`;

const PostManage = () => {
  const navigate = useNavigate();

  const onClickPost = () => {
    navigate("/KnottedDelete");
  };
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Post Manage</TextWrapper>
        <UserState>
          <UserText>
            <IdText>Post No</IdText>
            <IdText>&nbsp;내용</IdText>
            <IdText>작성자</IdText>
            <IdText>&nbsp;날짜</IdText>
          </UserText>
          <UserText>
            <IdText2>00000001</IdText2>
            <IdText2>&nbsp;아이가 ...</IdText2>
            <IdText2>&nbsp;&nbsp;김인하</IdText2>
            <IdText2>23.06.10</IdText2>
          </UserText>
          <UserText>
            <IdText2>00000002</IdText2>
            <IdText2>&nbsp;배송이 ...</IdText2>
            <IdText2>&nbsp;&nbsp;김인하</IdText2>
            <IdText2>23.06.10</IdText2>
          </UserText>
          <UserText>
            <IdText2>00000003</IdText2>
            <IdText2>&nbsp;맛있게 ...</IdText2>
            <IdText2>&nbsp;&nbsp;김인하</IdText2>
            <IdText2>23.06.10</IdText2>
          </UserText>
          <UserText>
            <IdText2 onClick={onClickPost}>00000004</IdText2>
            <IdText2 onClick={onClickPost}>&nbsp;맛있게...</IdText2>
            <IdText2 onClick={onClickPost}>&nbsp;&nbsp;최재오</IdText2>
            <IdText2>23.06.11</IdText2>
          </UserText>
        </UserState>
      </BodyContent>
      <Footer />
    </>
  );
};

export default PostManage;
