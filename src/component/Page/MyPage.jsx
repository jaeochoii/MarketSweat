import React from "react";
import styled from "styled-components";
import Profile from "../../assets/profile.png";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import { useNavigate } from "react-router-dom";
import LogInPage from "./LogInPage";

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

const ProfileWrapper = styled.img`
  display: flex;
  padding-top: 20px;
  padding-left: 155px;
  width: 80px;
  height: 80px;
`;

const UserText = styled.div`
  width: 100%;
  height: 10px;
  font-size: 20px;
  padding-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LoginBut = styled.button`
  width: 325px;
  height: 32px;
  border: 1px solid black;
  background-color: #f6f2dd;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 700;
  padding-left: 10px;
  margin-top: 20px;
  margin-left: 36px;
`;

const MyPage = () => {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    navigate("/LogInPage");
  };

  const onClickHeart = () => {
    navigate("/HeartPage");
  };
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>MyPage</TextWrapper>
        <ProfileWrapper src={Profile} />
        <UserText>
          <span style={{ fontWeight: 700 }}>최재오</span>&nbsp;님
        </UserText>
        <UserText>안녕하세요?</UserText>
        <LoginBut>구매 내역</LoginBut>
        <LoginBut onClick={onClickHeart}>찜한 상품</LoginBut>
        <LoginBut>후기 작성</LoginBut>
        <LoginBut>관리자 페이지</LoginBut>
        <LoginBut onClick={onClickLogOut}>로그이웃</LoginBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default MyPage;
