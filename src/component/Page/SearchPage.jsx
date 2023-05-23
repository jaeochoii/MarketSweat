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

const SearchPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Search</TextWrapper>
        <SearchBox placeholder="검색어를 입력해주세요" />
        <Text>인기검색어</Text>
      </BodyContent>
      <Footer />
    </>
  );
};

export default SearchPage;
