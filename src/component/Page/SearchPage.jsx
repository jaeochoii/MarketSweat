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
  padding-top: 30px;
`;

const SearchBox = styled.input`
  width: 340px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #eeeded;
  background-color: #eeeded;
  letter-spacing: 1px;
  padding-left: 17px;
  margin-top: 10px;
  margin-left: 17px;
`;

const Text = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 700;
  font-size: 15px;
  padding-top: 50px;
  padding-left: 17px;
`;

const PopularBox = styled.div`
  width: 340px;
  height: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Mogra&display=swap");
  font-family: "Mogra", cursive;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 1px solid #eeeded;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-left: 17px;
  display: flex;
  align-items: end;
`;

const SearchPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Search</TextWrapper>
        <SearchBox placeholder="검색어를 입력해주세요" />
        <Text>인기검색어</Text>
        <PopularBox>1. 런던 베이글 뮤지엄</PopularBox>
        <PopularBox>2. 너티드 도넛</PopularBox>
        <PopularBox>3. 쉐이크 쉑</PopularBox>
        <PopularBox>4. 마카롱</PopularBox>
        <PopularBox>5. 블루보틀</PopularBox>
        <PopularBox>6. 랜디스 도넛</PopularBox>
        <PopularBox>7. 다운타우너 버거</PopularBox>
      </BodyContent>
      <Footer name="search" />
    </>
  );
};

export default SearchPage;
