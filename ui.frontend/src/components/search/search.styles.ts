import styled from "styled-components";

export const Login = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 90px;
  color: #e0e0e0;
  margin-left: 20%;

  @media screen and (max-width: 1024px) {
    font-size: 50px !important;
    margin-left: 30px !important;
    margin-top: 80px !important;
  }
`;

export const SubTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
  margin-left: 20%;

  @media screen and (max-width: 1024px) {
    font-size: 20px !important;
    margin-left: 25px !important;
    margin-top:0 !important;
    font-size: 14px;
  }
`;

export const Form = styled.div`
  width: 80%;
  height: 1000px;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  .inputNew {
    width: 400px;
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 100% !important;

    .inputNew {
    width: 100%;
    margin-right: 0;
  }
  }
`;

export const FormInner = styled.div`
  display: flex;
  margin: 10px auto;
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  width: 60%;
  padding:10px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 95%;
    padding: 2px;
    margin-left: 2px;
  }
`;

export const Button = styled.button`
  font-family: "Poppins";
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  width: 200px;
  height: 60px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-left: 40px !important;
    margin-bottom: 20px;
    width: 226px !important;
  }
`;

export const ButtonSee = styled.button`
  width: 85px;
  height: 27px;

  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin: 0;
  font-weight: 400;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    margin: 0 10px 0 0 !important;
    width: 85px !important;
  }
`;

export const ImgBg = styled.img`
  width: 40%;
  margin: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-left: 20%;
  margin-top: 5%;

  @media screen and (max-width: 1024px) {
    margin:0;
    flex-direction: column;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const Name = styled.p`
  margin: 0 !important;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  @media screen and (max-width: 1024px) {
    font-size: 15px !important;
    line-height: 13px !important;
  }
`;

export const SubName = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #8d8d8d;
`;

export const Avatar = styled.img`
  width: 93px;
  height: 93px;
  margin: 0;
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    width: 70px;
    height: 69px;
  }
`;

export const Back = styled.button`
  width: 136px;
  height: 47px;
  margin: 0 !important;
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 18px;

  // @media screen and (max-width: 1024px) {
  //  width: 100% !important;
    
 // }
`;

export const Logo = styled.img`
  position: absolute;
  width: 349px;
  height: 94px;
  top: 8px;
  right: 16px;

  @media screen and (max-width: 1024px) {
    position: absolute !important;
    width: 220px !important;
    height: 94px !important;
    left: 42px !important;
    top: -16px !important;
  }
`;
