import styled from "styled-components/macro";


export const Login = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  height: 100%;
  

  @media screen and (max-width: 1024px) {
    height: 800px;
  }
`;

export const Back = styled.button`
  width: 136px;
  height: 47px;
  margin: 0;
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  margin-bottom: auto;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    width: 100% !important;
    
  }
`;

export const Card = styled.div`
  width: 70%;
  height: 500px;
  margin: 6% auto;
  display: flex;
  background: #242424;
  border-radius: 8px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    margin:auto;
    
  }
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;

    color: #ffffff;
    margin: 0;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #8d8d8d;
  }
`;

export const AvatarLayer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0 0 5%;

  @media screen and (max-width: 1024px) {
    margin:0;
    padding: 5px;
    img {
      margin: auto;
    }
  }
`;

export const LogoAvatar = styled.img`
  width: 174px;
  height: 174px;
  border-radius: 50%;
  margin: 0;
`;

export const RepoCard = styled.div`
  width: 70%;
  padding: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding:0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  button {
    margin: 0;
    background: #2a2a2a;
    width: 112px;
    height: 27px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #8d8d8d;
  }

  @media screen and (max-width: 1024px) {
    button {
      margin: 0;
    }
  }
`;

export const Repos = styled.div`
  background: #2b2b2b;
  padding: 10px;
  overflow: auto;
  height: 400px;
  ::-webkit-scrollbar {
    width: 9px;
    height: 10px;
    }
    ::-webkit-scrollbar-thumb {
    background: #8d8d8d;
    /* background: #643C8C; */
    border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
    /* background: transparent; */
    border-radius: 5px;
    }
`;

export const ReposInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #8d8d8d;
`;

export const NameRepos = styled.div`
  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    color: #ffffff;
    line-height: 10px;
    margin: 0;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 27px;
    color: #8d8d8d;
  }
`;

export const ShareButton = styled.button`
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin: 0;
  width: 155px;
  height: 47px;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
