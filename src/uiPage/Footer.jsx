import React from "react";
import styled from "styled-components";
import AHome from "../assets/RiHome2Line.png";
import BHome from "../assets/react-icons/ri/RiHome2Line.png";
import AHeart from "../assets/react-icons/ri/RiHeart3Line.png";
import BHeart from "../assets/RiHeart3Line.png";
import AMenu from "../assets/react-icons/ri/RiMenuLine.png";
import BMenu from "../assets/RiMenuLine.png";
import ASearch from "../assets/react-icons/ri/RiSearchLine.png";
import BSearch from "../assets/RiSearchLine.png";
import AUser from "../assets/react-icons/ri/RiUserLine.png";
import BUser from "../assets/RiUserLine.png";
import { useNavigate } from "react-router-dom";

const FootWrapper = styled.div`
  width: 390px;
  height: 90px;
  border-top: 3px solid #f6f2dd;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const ButtonWrapper = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
`;

const Footer = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/MainPage");
  };

  const onClickMenu = () => {
    navigate("/MenuPage");
  };

  const onClickUser = () => {
    navigate("/LogInPage");
  };

  const onClickSearch = () => {
    navigate("/SearchPage");
  };

  const onClickHeart = () => {
    navigate("/HeartPage");
  };

  return (
    <FootWrapper>
      <ButtonWrapper src={AHome} alt="" onClick={onClickHome} />
      <ButtonWrapper src={BHeart} alt="" onClick={onClickHeart} />
      <ButtonWrapper src={BMenu} alt="" onClick={onClickMenu} />
      <ButtonWrapper src={BSearch} alt="" onClick={onClickSearch} />
      <ButtonWrapper src={BUser} alt="" onClick={onClickUser} />
    </FootWrapper>
  );
};

export default Footer;
