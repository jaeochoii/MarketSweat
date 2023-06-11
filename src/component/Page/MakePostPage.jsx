import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import NoList from "../../assets/Nolist.png";

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

const ErrorWrapper = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 3px;
  padding-left: 142px;
  padding-top: 50px;
`;

const ErrorText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 20px;
  padding-top: 50px;
  padding-left: 80px;
`;

const MakePostPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Liked</TextWrapper>
        <ErrorWrapper src={NoList} />
        <ErrorText>아직 작성된 리뷰가 없습니다</ErrorText>
      </BodyContent>
      <Footer />
    </>
  );
};

export default MakePostPage;
