import React from "react";
import styled from "styled-components";
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

const ContentText = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 400;
  font-size: 13px;
  display: flex;
  padding-left: 15px;
  padding-top: 24px;
`;

const PostPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Post</TextWrapper>
        <ReviewWrapper>
          <ProductText>[청수당] 수플레 팬케이크 2set</ProductText>
          <ContentText>맛있게 잘먹었습니다.</ContentText>
        </ReviewWrapper>
        <ReviewWrapper>
          <ProductText>[청수당] 수플레 팬케이크 2set</ProductText>
          <ContentText>
            배송이 너무 빨라서~~~ <br />
            맛있게 잘먹었습니다 ㅎㅎ 또 구매할래요~
          </ContentText>
        </ReviewWrapper>
        <ReviewWrapper>
          <ProductText>[청수당] 수플레 팬케이크 2set</ProductText>
          <ContentText>
            아이가 너무 맛있게 먹네요~ 하나 더 구매했어용
          </ContentText>
        </ReviewWrapper>
      </BodyContent>
      <Footer />
    </>
  );
};

export default PostPage;
