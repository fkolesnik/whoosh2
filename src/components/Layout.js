import React from "react";

import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";

import LoadProducts from "./LoadProducts";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrap>
      <PersistGate loading={null} persistor={persistor}>
        <LoadProducts />
        <Header />
        <main>{props.children}</main>
        <Footer />
      </PersistGate>
    </Wrap>
  </ThemeProvider>
);

export default Layout;

const Wrap = styled.div`
  min-height: 100vh;
  padding: 0.25rem;
`;
