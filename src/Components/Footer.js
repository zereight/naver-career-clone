import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
const FooterContainer = styled.footer`
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7em;
`;

const InfoText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;
`;

const PrivatePolicyText = styled.b``;

const CopyRightText = styled.span`
  margin-left: 9px;
  color: gray;
`;

const AboutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22%;
  border: 1px solid gray;
  padding: 10px 20px 10px 12px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Info>
        <InfoText>
          <PrivatePolicyText>개인정보 처리방침</PrivatePolicyText>
          <CopyRightText>
            {" "}
            <p>&copy; NAVER Corp. </p>
          </CopyRightText>
        </InfoText>
        <AboutBox>
          <p>관련사이트 </p>
          <AiOutlinePlus />
        </AboutBox>
      </Info>
    </FooterContainer>
  );
};

export default Footer;
