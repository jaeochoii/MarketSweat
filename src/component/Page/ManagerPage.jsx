import React from "react";
import styled from "styled-components";
import Profile from "../../assets/profile.png";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";

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

const ManagerPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Manage</TextWrapper>
        <ProfileWrapper src={Profile} />
      </BodyContent>
      <Footer />
    </>
  );
};

export default ManagerPage;
