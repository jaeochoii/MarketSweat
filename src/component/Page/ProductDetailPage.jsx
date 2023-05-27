import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import ProductImg from "../../assets/Product.png";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
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

const ProductWrapper = styled.img`
  display: flex;
  padding-top: 10px;
  padding-left: 18px;
  width: 358px;
  height: 260px;
`;

const ProductNameText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding-top: 18px;
  padding-left: 18px;
`;

const ProductPriceText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding-top: 7px;
  padding-left: 18px;
`;

const ProductDetailText = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Miriam+Libre&display=swap");
  font-family: "Miriam Libre", sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
  padding-left: 18px;
`;

const DivWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-left: 18px;
  margin-top: 18px;
`;

const ProductDetailPage = () => {
  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>Detail</TextWrapper>
        <ProductWrapper src={ProductImg} />
        <ProductNameText>[청수당] 수플레 팬케이크 2 Set</ProductNameText>
        <ProductPriceText>8,400 원</ProductPriceText>
        <ProductDetailText>
          익선동, 연남동을 점령한 21세기 최고의 수제 팬케이크!
          <br />
          청수당 쉐프가 구운 팬케이크! 이제는 가정에서도 만날보세요~
        </ProductDetailText>
        <DivWrap onClick={handleHeart}>
          {heart ? (
            <AiFillHeart style={{ color: "red", fontSize: "30px" }} />
          ) : (
            <AiOutlineHeart style={{ color: "red", fontSize: "30px" }} />
          )}
        </DivWrap>
      </BodyContent>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
