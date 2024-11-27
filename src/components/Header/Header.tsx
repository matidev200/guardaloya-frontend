import React, { useEffect, useState } from "react";
import { HeaderContainer, LogoWrapper, WelcomeText } from "./Header.styles";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as GuardaloyaLogo } from "../../assets/guardaloyaLogo.svg";

const Header: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <HeaderContainer>
      <LogoWrapper>
        <GuardaloyaLogo />
      </LogoWrapper>
      <WelcomeText>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p>{username ? `Bienvenido ${username}` : "Bienvenido"}</p>
          <Logout style={{ cursor: "pointer" }} onClick={handleLogout} />
        </div>
      </WelcomeText>
    </HeaderContainer>
  );
};

export default Header;
