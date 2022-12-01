import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import backgroundlogo from "../../assets/images/backapp.b46ef3a1.jpg";


const AuthLayout = () => {
  return (
    <StyleAuthLayout>
      <Outlet />
    </StyleAuthLayout>
  );
};

export default AuthLayout;

const StyleAuthLayout = styled.div`
  background-image: url("${backgroundlogo}");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;
