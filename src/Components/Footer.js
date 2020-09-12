import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
const FooterContainer = styled.footer`
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
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

const AboutBox = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22%;
  border: 1px solid gray;
  padding: 10px 20px 10px 12px;
  cursor: pointer;
`;

const Footer = () => {
  const onClick = (e) => {};

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
        <AboutBox id="site">
          {/* <select id="lang"> */}
          <option value="select">관련 사이트</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          {/* </select> */}
          <AiOutlinePlus />
        </AboutBox>
      </Info>
    </FooterContainer>
  );
};

export default Footer;
