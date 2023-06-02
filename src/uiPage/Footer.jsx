import React from "react";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
`;

const Footer = () => {
  const navigate = useNavigate();

  const [click, setClick] = useState("home");

  const onClickHome = () => {
    navigate("/MainPage");
    setClick("home");
  };

  const onClickMenu = () => {
    navigate("/MenuPage");
    setClick("menu");
  };

  const onClickUser = () => {
    navigate("/LogInPage");
    setClick("user");
  };

  const onClickSearch = () => {
    navigate("/SearchPage");
    setClick("search");
  };

  const onClickHeart = () => {
    navigate("/HeartPage");
    setClick("heart");
  };

  return (
    <FootWrapper>
      <ButtonWrapper onClick={onClickHome}></ButtonWrapper>
      <ButtonWrapper onClick={onClickHeart}></ButtonWrapper>
      <ButtonWrapper onClick={onClickMenu}></ButtonWrapper>
      <ButtonWrapper onClick={onClickSearch}></ButtonWrapper>
      <ButtonWrapper onClick={onClickUser}></ButtonWrapper>
    </FootWrapper>
  );
};

export default Footer;
