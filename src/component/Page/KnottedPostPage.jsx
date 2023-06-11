import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import { useState } from "react";

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

const RecommendDiv = styled.div`
  width: 85px;
  height: 35px;
  margin-left: 300px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const RecommendBut = styled.button`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 13px;
`;

const KnottedPostPage = () => {
  const [recommend1, setRecommend1] = useState(true);

  const handleRecommend1 = () => {
    setRecommend1(!recommend1);
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
          <RecommendDiv onClick={handleRecommend1}>
            {recommend1 ? (
              <RecommendBut
                style={{
                  color: "#d9d9d9",
                  border: "1px solid #d9d9d9",
                }}
              >
                도움돼요
              </RecommendBut>
            ) : (
              <RecommendBut
                style={{ color: "#110DE2", border: "1px solid #110DE2" }}
              >
                도움돼요
              </RecommendBut>
            )}
          </RecommendDiv>
        </ReviewWrapper>
      </BodyContent>
      <Footer />
    </>
  );
};

export default KnottedPostPage;
