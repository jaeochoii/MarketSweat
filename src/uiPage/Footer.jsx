import React from "react";
import styled from "styled-components";
import Home from "../assets/RiHome2Line.png";
import Heart from "../assets/RiHeart3Line.png";
import Menu from "../assets/RiMenuLine.png";
import Search from "../assets/RiSearchLine.png";
import User from "../assets/RiUserLine.png";
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
      <ButtonWrapper src={Home} alt="" onClick={onClickHome} />
      <ButtonWrapper src={Heart} alt="" onClick={onClickHeart} />
      <ButtonWrapper src={Menu} alt="" onClick={onClickMenu} />
      <ButtonWrapper src={Search} alt="" onClick={onClickSearch} />
      <ButtonWrapper src={User} alt="" onClick={onClickUser} />
    </FootWrapper>
  );
};

export default Footer;
