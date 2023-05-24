import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";

const BodyContent = styled.div`
  width: 390px;
  height: 500px;
`;

const HeartPage = () => {
  return (
    <>
      <Header />
      <BodyContent></BodyContent>
      <Footer />
    </>
  );
};

export default HeartPage;
