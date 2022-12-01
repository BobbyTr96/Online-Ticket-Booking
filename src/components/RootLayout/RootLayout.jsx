import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import backgroundlogo from "../../assets/images/backapp.b46ef3a1.jpg";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <StyleBackGround>
      <Navbar />
      <Outlet />
      <Footer/>
    </StyleBackGround>
  );
};

export default RootLayout;

const StyleBackGround = styled.div`
  background-image: url("${backgroundlogo}");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height : 100vh ;
`;
