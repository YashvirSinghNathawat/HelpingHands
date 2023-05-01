import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import { App } from "../Layout";
import { LogoutButton } from "./Clients";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderRight from "./HeaderRight";
import Wallet from "./Wallet";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Header = () => {
  const ThemeToggler = useContext(App);
  return (
    <HeaderContainer style={{
      borderBottom: `solid 0.5px ${ThemeToggler.theme=='light'?'#bcbbbb':'#3D4143'}`
    }}>
      <HeaderMain>
        <HeaderLogo />
        <HeaderNav />
        <HeaderEnd>
          <Wallet />
          <LogoutButton />
          <ThemeToggle>
            {ThemeToggler.theme === "light" ? (
              <LightModeIcon onClick={ThemeToggler.changeTheme} />
            ) : (
              <ModeNightIcon onClick={ThemeToggler.changeTheme}></ModeNightIcon>
            )}
          </ThemeToggle>
        </HeaderEnd>
      </HeaderMain>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  /* margin-bottom: 2vh; */
`;
const HeaderMain = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const HeaderEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1vh;
  width: 25%;
  margin-right: 3.5vw;
  gap: 1vw;
  box-sizing: border-box;
`;
const ThemeToggle = styled.div`
  background-color: ${(props) => props.theme.bgDiv};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
  width: 5vh;
  border-radius: 2vh;
  cursor: pointer;
`;
export default Header;
