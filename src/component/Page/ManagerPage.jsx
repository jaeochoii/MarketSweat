import React from "react";
import styled from "styled-components";
import Profile from "../../assets/profile.png";
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

const EnterBut = styled.button`
  width: 325px;
  height: 32px;
  border: 1px solid black;
  background-color: #f6f2dd;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 700;
  padding-left: 10px;
  margin-top: 45px;
  margin-left: 36px;
`;

const ManagerPage = () => {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate("/UserManage");
  };

  const onClickProduct = () => {
    navigate("/ProductManage");
  };

  const onClickPost = () => {
    navigate("/PostManage");
  };

  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Manage</TextWrapper>
        <ProfileWrapper src={Profile} />
        <UserText>
          <span style={{ fontWeight: 700 }}>최재오 매니저</span>&nbsp;님
        </UserText>
        <UserText>반갑습니다</UserText>
        <EnterBut onClick={onClickUser}>회원 관리</EnterBut>
        <EnterBut onClick={onClickProduct}>제품 관리</EnterBut>
        <EnterBut onClick={onClickPost}>게시글 관리</EnterBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default ManagerPage;
