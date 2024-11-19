import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const WelcomeText = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: "ExtraLight"
    font-size: 18px;
    color: black;
  }
`;
