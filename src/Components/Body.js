import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 37px 37px;
  background-color: #eff0f2;

  height: 100vh;
`;

const JobAnnouncement = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const AnnouncementImg = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  background-image: url("https://recruit.navercorp.com/img/naver/img_method_04.jpg");
  position: relative;
`;

const AnnouncementText = styled.span`
  width: 100%;
  font-size: 3em;
  position: relative;
  top: -180px;
  text-align: center;
  color: white;
`;

const AnnouncementContents = styled.div`
  position: relative;
  top: -100px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(1, 80px);
  background-color: white;
`;
const AnnouncementContent = styled.div`
  width: 100%;
  height: 100%;
  &:not(:last-child) {
    border-right: 1px solid #eff0f2;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompanyInfo = styled.section`
  width: 100%;
`;

const Body = () => {
  return (
    <BodyContainer>
      <JobAnnouncement>
        <AnnouncementImg />
        <AnnouncementText>
          <p>수 많은 사용자의 목소리에서</p>
          <p>내 일의 자부심과 무게를 느낍니다.</p>
        </AnnouncementText>
        <AnnouncementContents>
          <AnnouncementContent>개발</AnnouncementContent>
          <AnnouncementContent>설계(디자인)</AnnouncementContent>
          <AnnouncementContent>콘텐츠{"&"}서비스</AnnouncementContent>
          <AnnouncementContent>경영지원</AnnouncementContent>
        </AnnouncementContents>
      </JobAnnouncement>
      <CompanyInfo></CompanyInfo>
    </BodyContainer>
  );
};

export default Body;
