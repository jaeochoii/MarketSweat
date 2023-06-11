import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import ShakeShack from "../../assets/ShakeShack.png";
import BasBurger from "../../assets/BasBurger.png";
import Wendys from "../../assets/Wendys.svg";
import Downtowner from "../../assets/DownTowner.jpeg";
import McDonals from "../../assets/Mc Donals.png";
import FiveGuys from "../../assets/Five Guys.jpeg";

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
  padding-bottom: 60px;
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

const TexWrapper = styled.div`
  width: 358px;
  height: 45px;
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

const RecText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  width: 110px;
  height: 25px;
  border: 1px none black;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const SearchEnterPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>"Burger"</TextWrapper>
        <RecWrapper>
          <RecContent src={ShakeShack} />
          <RecContent src={BasBurger} />
          <RecContent src={Wendys} />
        </RecWrapper>
        <TexWrapper>
          <RecText>Shake Shack</RecText>
          <RecText>Bas Burger</RecText>
          <RecText>Wendy's</RecText>
        </TexWrapper>
        <RecWrapper>
          <RecContent src={Downtowner} />
          <RecContent src={McDonals} />
          <RecContent src={FiveGuys} />
        </RecWrapper>
        <TexWrapper>
          <RecText>Downtowner</RecText>
          <RecText>Mc Donalds</RecText>
          <RecText>Five Guys</RecText>
        </TexWrapper>
      </BodyContent>
      <Footer />
    </>
  );
};

export default SearchEnterPage;
