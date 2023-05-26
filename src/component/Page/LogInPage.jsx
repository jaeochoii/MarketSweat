import React from "react";
import styled from "styled-components";
import Header from "../../uiPage/Header";
import Footer from "../../uiPage/Footer";
import { useNavigate } from "react-router-dom";

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
  padding-top: 70px;
`;

const InputId = styled.input`
  width: 310px;
  height: 33px;
  border-radius: 12px;
  border: 1px solid black;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 43px;
  margin-left: 36px;
`;

const InputPw = styled.input`
  width: 310px;
  height: 33px;
  border-radius: 12px;
  border: 1px solid black;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 12px;
  margin-left: 36px;
`;

const LoginBut = styled.button`
  width: 325px;
  height: 43px;
  border: 1px solid black;
  background-color: #f6f2dd;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 29px;
  margin-left: 36px;
`;

const FindIdPwWrap = styled.div`
  width: 390px;
  height: 15px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

const SignUpBut = styled.button`
  width: 325px;
  height: 43px;
  border: 1px solid black;
  background-color: black;
  color: #f6f2dd;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 15px;
  margin-left: 36px;
`;
const LogInPage = () => {
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate("/SignUpPage");
  };

  const onClickMyPage = () => {
    navigate("/MyPage");
  };

  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>LogIn</TextWrapper>
        <InputId placeholder="아이디를 입력해주세요" />
        <InputPw type="password" placeholder="비밀번호를 입력해주세요" />
        <LoginBut onClick={onClickMyPage}>로그인</LoginBut>
        <FindIdPwWrap>아이디 찾기 | 비밀번호 찾기</FindIdPwWrap>
        <SignUpBut onClick={onClickSignUp}>회원가입</SignUpBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default LogInPage;
