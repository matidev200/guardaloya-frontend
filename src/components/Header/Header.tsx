import React from "react";
import { HeaderContainer, LogoWrapper, WelcomeText } from "./Header.styles";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as GuardaloyaLogo } from "../../assets/guardaloyaLogo.svg";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <GuardaloyaLogo />
      </LogoWrapper>
      <WelcomeText>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p> Bienvenido Matias</p>
          <Logout />
        </div>
      </WelcomeText>
    </HeaderContainer>
  );
};

export default Header;
