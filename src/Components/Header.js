import React from "react";
import styled from "styled-components";
import Logo from "../Image/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-item: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

const Logos = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;

const LOGO_IMG = styled.img`
  width: 170px;
  object-fit: cover;
`;

const ComponentBox = styled.div`
  display: flex;
  align-item: center;
  margin-right: 14px;
`;

const UserLogo = styled(AiOutlineUser)`
  width: 30px;
  margin: 16px 0px;
`;

const PenLogo = styled(BsPencil)`
  width: 30px;
  margin: 16px 0px;
`;

const HeaderTextBold = styled.div`
  margin: 16px 0px;
  color: gray;
`;

const HeaderText = styled.div`
  margin: 16px 0px;
  color: gray;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LOGO_IMG src={Logo} />
      <Logos>
        <ComponentBox>
          <UserLogo />
          <HeaderTextBold>내 지원서</HeaderTextBold>
        </ComponentBox>
        <ComponentBox>
          <PenLogo />
          <HeaderTextBold>지원문의</HeaderTextBold>
        </ComponentBox>
        <HeaderText>English</HeaderText>
      </Logos>
    </HeaderContainer>
  );
};

export default Header;
