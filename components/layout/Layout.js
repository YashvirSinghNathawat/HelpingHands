import React, { createContext, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./header/Header";
import themes from "./themes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./header/Clients";

const App = createContext();
const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <App.Provider value={{ changeTheme, theme }}>
      <ThemeProvider theme={themes[theme]}>
        <ToastContainer />
        <LayoutWrapper>
          <ContextProvider>
            <>
          <GlobalStyle />
          <Header />
          {children}
          </>
          </ContextProvider>
        </LayoutWrapper>
      </ThemeProvider>
    </App.Provider>
  );
};

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
`;
export default Layout;
export { App };
