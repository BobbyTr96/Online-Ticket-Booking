import React, { useState, useEffect } from "react";
// local image
import NetflixLogo from "../../assets/images/netflix-logo-png-large.png";
// react-icons
import { MdSearch } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
// style component
import styled from "styled-components";
// local hooks
import { useCrollY } from "../Hooks/useScrollY";
//react -router-dom
import { Link } from "react-router-dom";
//react-redux
import { useSelector, useDispatch } from "react-redux";
// sweet-alert
import swal from "sweetalert";
// dispatch action
import { logOut } from "../../slices/authSlice";
//classname

import CanvasNav from "./CanvasNav";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [openCanvas, setOpenCanvas] = useState(false);

  const handleChange = () => {
    setOpenCanvas((state) => !state);
  };

  const handleLogout = () => {
    swal({
      title: "Bạn Muốn Đăng Xuất ???",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if (value) {
        swal({
          text: "Cảm Ơn Bạn Đã Dùng NetFlix",
          icon: "success",
          timer: 2000,
          button: false,
        });
        dispatch(logOut());
      }
    });
  };

  // biến crollY dùng để kiểm soát giá trị scroll chuột người dùng
  const crollY = useCrollY();

  return (
    <Navigation
      style={
        crollY < 60
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "rgba(17, 17, 17,0.8)" }
      }
    >
      <nav className="container navbar navbar-expand-lg navbar-light navContainer ">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img src={NetflixLogo} alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler toggleButton"
          type="button"
          onClick={handleChange}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* navbarr */}
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo02"
          style={{ justifyContent: "space-between" }}
        >
          {/* navlink */}
          <div className="right">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/#lichChieu">
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#cumRap">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#app">
                  {" "}
                  Ứng Dụng
                </a>
              </li>
            </ul>
          </div>

          {/* register */}
          <div className="register">
            {user ? (
              <>
                <div className="user">
                  <Link className="userName">
                    <span>Xin chào</span> {user.hoTen}
                  </Link>
                </div>
                <hr className="hafl-break" />
                <button className="logOut" onClick={handleLogout}>
                  <FiLogOut className="logOutIcon" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <div className="signIn">
                  <Link className="register-text" to="/dangNhap">
                    Đăng nhập
                  </Link>
                </div>
                <hr className="hafl-break" />
                <div className="signUp">
                  <Link className="register-text" to="/dangKy">
                    Đăng ký
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      <CanvasNav
        isOpen={openCanvas}
        onClick={handleChange}
        user={user}
        handleLogout={handleLogout}
      />
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 0.5s;
  @media only screen and (max-width: 600px) {
    height: 70px;
    padding: 0 10px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    @media only screen and (max-width: 600px) {
      padding: 0;
    }

    .toggleButton {
      background-color: var(--color-redlight);
      transition: all 0.3s;
      outline: none;

      &:focus {
        box-shadow: none;
      }

      @media only screen and (max-width: 600px) {
        padding: 5px;
      }

      span {
        @media only screen and (max-width: 600px) {
          font-size: 15px;
        }
      }

      &:hover {
        background-color: var(--color-red);
      }
    }

    .logo {
      width: 120px;
      cursor: pointer;
      @media only screen and (max-width: 600px) {
        width: 100px;
      }

      img {
        width: 100%;
        @media only screen and (max-width: 600px) {
          height: 20px;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      padding-left: 150px;

      ul {
        display: flex;
        list-style: none;

        li {
          margin-right: 15px;
          &:hover a {
            color: var(--color-red);
          }

          a {
            color: var(--color-redlight);
            transition: all 0.3s;
          }
        }
      }
    }
    .register {
      display: flex;
      align-items: center;

      .user {
        color: var(--color-redlight);
        padding: 0 10px;
        &:hover .userName {
          color: var(--color-red);
        }

        .userName {
          transition: all 0.3s;
        }

        span {
          font-size: 12px;
          margin-right: 5px;
          vertical-align: super;
        }
      }

      .logOut {
        padding: 0 10px;
        color: var(--color-redlight);
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        &:hover .logOutIcon,
        &:hover span {
          color: var(--color-red);
        }

        .logOutIcon {
          transition: all 0.3s;
        }

        span {
          padding: 0 5px;
          transition: all 0.3s;
        }
      }

      .register-text {
        color: var(--color-redlight);
        font-size: 15px;
        padding: 0 10px;
        transition: all 0.3s;

        &:hover {
          color: var(--color-red);
        }
      }

      .hafl-break {
        width: 2px;
        height: 20px;
        background-color: var(--color-red);
      }
    }
  }

  .offcanvas {
    @media only screen and (max-width: 640px) {
      max-width: 45%;
      font-size: 10px;
    }

    .offcanvas-header {
      border-bottom: 1px solid var(--color-redlight);
      .register01 {
        padding-left: 10px;
        .user01 {
          color: var(--color-redlight);
          &:hover .userName01 {
            color: var(--color-red);
          }
          .userName01 {

            span {
              vertical-align: super;
              margin-right: 2px;
              font-size: 9px;
            }
          }
        }

        .logOut01 {
          display: flex;
          align-items: center;
          color: var(--color-redlight);
          background-color: transparent;

          &:hover .logOutIcon01,
          &:hover span {
            color: var(--color-red);
          }
          .logOutIcon01,
          span {
           
            margin: 0 3px;
          }
        }
      }
    }

    .offcanvas-body {
      text-align: center;
      padding: 10px 0;

      ul {
        list-style: none;

        li {
          color: var(--color-redlight);
          margin: 10px 0;

          &:hover {
            background-color: #bbb;
            color: var(--color-red);
          }
        }
      }
    }
  }
`;
