import React from "react";
import styled from "styled-components";
import Home from "../assets/RiHome2Line.png";
import Heart from "../assets/RiHeart3Line.png";
import Menu from "../assets/RiMenuLine.png";
import Search from "../assets/RiSearchLine.png";
import User from "../assets/RiUserLine.png";

const FootWrapper = styled.div`
  width: 390px;
  height: 90px;
  border: 3px solid #f6f2dd;
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
  return (
    <FootWrapper>
      <ButtonWrapper src={Home} alt="" />
      <ButtonWrapper src={Heart} alt="" />
      <ButtonWrapper src={Menu} alt="" />
      <ButtonWrapper src={Search} alt="" />
      <ButtonWrapper src={User} alt="" />
    </FootWrapper>
  );
};

export default Footer;
