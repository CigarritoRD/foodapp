import React from "react";
import Routers from "../../routes/Routers";
import { FooterInfo } from "../Footer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer>
        <FooterInfo />
      </Footer>
    </>
  );
};

export default Layout;
