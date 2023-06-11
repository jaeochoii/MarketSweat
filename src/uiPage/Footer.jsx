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
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: -20px;
`;

const Footer = (props) => {
  const navigate = useNavigate();

  const [click, setClick] = useState(props.name);

  return (
    <FootWrapper>
      <ButtonWrapper
        name="home"
        onClick={() => {
          setClick(props.name);
          navigate("/MainPage");
        }}
      >
        {click === "home" ? (
          <HiOutlineHome style={{ color: "#D8CB93", fontSize: "30px" }} />
        ) : (
          <HiOutlineHome style={{ color: "black", fontSize: "30px" }} />
        )}
      </ButtonWrapper>
      <ButtonWrapper
        name="heart"
        onClick={() => {
          setClick(props.name);
          navigate("/NoneHeartPage");
        }}
      >
        {click === "heart" ? (
          <HiOutlineHeart style={{ color: "red", fontSize: "30px" }} />
        ) : (
          <HiOutlineHeart style={{ color: "black", fontSize: "30px" }} />
        )}
      </ButtonWrapper>
      <ButtonWrapper
        name="menu"
        onClick={() => {
          setClick(props.name);
          navigate("/MenuPage");
        }}
      >
        {click === "menu" ? (
          <HiOutlineMenu style={{ color: "#D8CB93", fontSize: "30px" }} />
        ) : (
          <HiOutlineMenu style={{ color: "black", fontSize: "30px" }} />
        )}
      </ButtonWrapper>
      <ButtonWrapper
        name="search"
        onClick={() => {
          setClick(props.name);
          navigate("/SearchPage");
        }}
      >
        {click === "search" ? (
          <HiOutlineSearch style={{ color: "#D8CB93", fontSize: "30px" }} />
        ) : (
          <HiOutlineSearch style={{ color: "black", fontSize: "30px" }} />
        )}
      </ButtonWrapper>
      <ButtonWrapper
        name="user"
        onClick={() => {
          setClick(props.user);
          navigate("/LogInPage");
        }}
      >
        {click === "user" ? (
          <HiOutlineUser style={{ color: "#D8CB93", fontSize: "30px" }} />
        ) : (
          <HiOutlineUser style={{ color: "black", fontSize: "30px" }} />
        )}
      </ButtonWrapper>
    </FootWrapper>
  );
};

export default Footer;
