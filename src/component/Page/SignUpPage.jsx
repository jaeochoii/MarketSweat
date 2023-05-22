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
  padding-top: 29px;
`;

const QIDWrapper = styled.div`
  width: 149px;
  height: 14px;
  font-size: 12px;
  letter-spacing: 1px;
  padding-left: 17px;
  color: red;
`;

const QPWWrapper = styled.div`
  width: 149px;
  height: 14px;
  font-size: 12px;
  letter-spacing: 1px;
  padding-top: 45px;
  padding-left: 17px;
  color: red;
`;

const QWrapper = styled.div`
  width: 149px;
  height: 14px;
  font-size: 12px;
  letter-spacing: 1px;
  padding-top: 15px;
  padding-left: 17px;
  color: red;
`;

const InputWrapper = styled.div`
  width: 390px;
  height: 20px;
  display: flex;
`;

const InputBox = styled.input`
  width: 249px;
  height: 43px;
  border-radius: 5px;
  border: 1px solid black;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 6px;
  margin-left: 17px;
`;

const InputBox2 = styled.input`
  width: 349px;
  height: 43px;
  border-radius: 5px;
  border: 1px solid black;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 6px;
  margin-left: 17px;
`;

const InputBut = styled.button`
  width: 80px;
  height: 47px;
  background-color: #f6f2dd;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  letter-spacing: 1px;
  padding-left: 10px;
  margin-top: 6px;
  margin-left: 17px;
`;

const SignUpBut = styled.button`
  width: 365px;
  height: 43px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f6f2dd;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;
  padding-left: 10px;
  margin-top: 35px;
  margin-left: 17px;
`;

const SignUpPage = () => {
  return (
    <>
      <Header />
      <BodyContent>
        <TextWrapper>SignUp</TextWrapper>
        <QIDWrapper>아이디*</QIDWrapper>
        <InputWrapper>
          <InputBox placeholder="아이디를 입력해주세요" />
          <InputBut>중복확인</InputBut>
        </InputWrapper>
        <QPWWrapper>비밀번호*</QPWWrapper>
        <InputBox2 placeholder="비밀번호를 입력해주세요" />
        <QWrapper>비밀번호 확인*</QWrapper>
        <InputBox2 placeholder="비밀번호를 한번 더 입력해주세요" />
        <QWrapper>이름*</QWrapper>
        <InputBox2 placeholder="이름을 입력해주세요" />
        <SignUpBut>가입하기</SignUpBut>
      </BodyContent>
      <Footer />
    </>
  );
};

export default SignUpPage;
