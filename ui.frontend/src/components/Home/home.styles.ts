import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconsTemps = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 70px !important;
  height: 60px !important;
  margin: 0;
`;

export const LogoCompass = styled.img`
  width: 300px;
  height: 84px;
  padding: 0 !important;
  margin: 0 !important;

  @media screen and (max-width: 1024px) {
    width: 108px;
    height: 74px;
  }
`;

export const Timer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Hour = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 144px;
  line-height: 216px;
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
  color: #222222 !important;
`;

export const Day = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
  color: #222222 !important;
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

export const Local = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
  color: #222222;

  @media screen and (max-width: 1024px) {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px !important;
    text-align: center;
    color: #222222;
  }
`;

export const Temp = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
  color: #222222;

  @media screen and (max-width: 1024px) {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 30px !important;
    text-align: center;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 20px !important;
    color: #222222;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleH3 = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  text-align: right;
  padding: 0 !important;
  margin: 0 !important;
  color: #c12d18;
`;

export const SubTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  padding: 0 !important;
  margin: 0 !important;
  color: #222222 !important;
`;

export const TextBlock = styled.div`
  margin-left: auto;
  margin-right: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InnerText = styled.div`
  text-align: end;
`;

export const ImgAbsolute = styled.img`
  position: absolute;
  left: -250px;
  top: 250px;
  height: 74%;
  width: 45%;

  @media screen and (max-width: 1024px) {
    position: absolute;
    left: -196px;
    top: 130px;
    width: auto;
    height: auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
`;

export const InfoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  text-align: left;
  margin: 0 !important;
  padding-left: 20% !important;
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Intersection = styled.div`
  width: 61px;
  height: 0px;
  left: 930px;
  top: 998px;
  transform: rotate(90deg);
  border: 1px solid #ffffff;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Refresh = styled.div`
  display: flex;
  align-items: center;
  margin: 0 50px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InfoRefresh = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  padding-right: 10px;
  color: #ffffff;
  margin: 0;
`;

export const TimeBlock = styled.div`
  width: 40px;
  margin-top: 27px;
`;

export const Sec = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  padding-top: -10px !important;
  color: #ffffff;
`;

export const TokenTime = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;

export const Buttons = styled.div`
  display: flex;
  padding-left: 20%;
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
`;

export const Search = styled.div`
  padding: 30px;
  background: #ffffff;

  @media screen and (max-width: 1024px) {
    padding-right: 85px;
  }

  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #c13216;
    cursor: pointer;
  }
`;

export const Logout = styled.div`
  padding: 30px;
  @media screen and (max-width: 1024px) {
    margin-left: 10px;
  }

  a {
    cursor: pointer;
  }
`;
