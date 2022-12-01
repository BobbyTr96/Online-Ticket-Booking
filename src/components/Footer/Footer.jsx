import React from "react";
import styled from "styled-components";
import { DiAndroid } from "react-icons/di";
import { BsApple } from "react-icons/bs";
import { SiFacebook, SiZalo } from "react-icons/si";
import logo1 from "../../assets/images/beta.jpg";
import logo2 from "../../assets/images/bhd .png";
import logo3 from "../../assets/images/cgvlogo.png";
import logo4 from "../../assets/images/cinemax.jpg";
import logo5 from "../../assets/images/ddc.png";
import logo6 from "../../assets/images/gaaxy.png";
import logo7 from "../../assets/images/icon-footer-12.6b4821d0.png";
import logo8 from "../../assets/images/lottecinema.png";
import logo9 from "../../assets/images/mega.png";
import logo10 from "../../assets/images/star.png";
import logo11 from "../../assets/images/starlight.png";
import logo12 from "../../assets/images/touchcinema.png";

import logo13 from "../../assets/images/agribank.png";
import logo14 from "../../assets/images/lvbank.png";
import logo15 from "../../assets/images/vietcombank.png";
import logo16 from "../../assets/images/viettinbank.png";
import logo17 from "../../assets/images/zalopay.png";
import logo18 from "../../assets/images/payoo.png";
import logo19 from "../../assets/images/123go.png";
import logo20 from "../../assets/images/laban.jpg";

import logo21 from "../../assets/images/zion.jpg";
import logo22 from "../../assets/images/daThongBao-logo.cb85045e.png";

const Footer = () => {
  return (
    <StyleFooter>
      <div className="innerFooter container">
        <div className="row">
          <div className="col-md-2">
            <div className="title">
              <p>TIX</p>
            </div>
            <div className="content">
              <p>FAQ</p>
              <p>Brand Guidelines</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="title"></div>
            <div className="content-deal">
              <p>Thỏa thuận sử dụng</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="title">
              <p>ĐỐI TÁC</p>
            </div>
            <div className="content-logo">
              <a target="_blank" href="https://www.betacinemas.vn/home.htm">
                <img src={logo1} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.bhdstar.vn/">
                <img src={logo2} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.cgv.vn/">
                <img src={logo3} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://cinemaxvn.com/">
                <img src={logo4} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="http://ddcinema.vn/">
                <img src={logo5} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.galaxycine.vn/">
                <img src={logo6} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.dcine.vn/">
                <img src={logo7} alt="" width={30} height={30} />
              </a>
              <a
                target="_blank"
                href="https://lottecinemavn.com/LCHS/index.aspx"
              >
                <img src={logo8} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.megagscinemas.vn/">
                <img src={logo9} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="http://cinestar.com.vn/">
                <img src={logo10} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://starlight.vn/">
                <img src={logo11} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://touchcinema.com/">
                <img src={logo12} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.agribank.com.vn/">
                <img src={logo13} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.indovinabank.com.vn/">
                <img src={logo14} alt="" width={30} height={30} />
              </a>
              <a
                target="_blank"
                href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
              >
                <img src={logo15} alt="" width={30} height={30} />
              </a>
              <a
                target="_blank"
                href="https://www.vietinbank.vn/web/home/vn/index.html"
              >
                <img src={logo16} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://zalopay.vn/">
                <img src={logo17} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://www.payoo.vn/">
                <img src={logo18} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://webv3.123go.vn/">
                <img src={logo19} alt="" width={30} height={30} />
              </a>
              <a target="_blank" href="https://laban.vn/">
                <img src={logo20} alt="" width={30} height={30} />
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="title-app">
              <p>MOBILE APP</p>
            </div>
            <div className="content-app">
              <a
                target="_blank"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              >
                <BsApple />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                <DiAndroid />
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="title-app">
              <p>SOCIAL</p>
            </div>
            <div className="content-app">
              <a
                target="_blank"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              >
                <SiFacebook />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              >
                <SiZalo />
              </a>
            </div>
          </div>
        </div>
        <div className="row bottom-footer">
          <div className="col-sm-2">
            <img src={logo21} alt="" width="100px" height={50} />
          </div>
          <div className="col-sm-8">
            <div className="bottom-title">
              <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            </div>
            <div className="bottom-text">
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
              <p>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            </div>
          </div>
          <div className="col-sm-2">
            <img src={logo22} alt="" width="100px" height={50} />
          </div>
        </div>
      </div>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.div`
  background-color: #212121;

  .innerFooter {
    max-width: 960px;
    padding: 20px 40px;

    .title {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .content {
      color: #bbb;
      font-size: 12px;

      p {
        transition: all 0.3s;
        margin-top: 10px;
        &:hover {
          color: #fff;
        }
      }
    }

    .content-deal {
      color: #bbb;
      font-size: 12px;
      padding-top: 10px;

      p {
        transition: all 0.3s;
        margin-top: 10px;
        &:hover {
          color: #fff;
        }
      }
    }

    .content-logo {
      img {
        border-radius: 50%;
        margin: 0 30px 10px 0;
        transition: all 0.3s;
        &:hover {
          opacity: 0.5;
        }
      }
    }

    .title-app {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
    }
    .content-app {
      a {
        font-size: 30px;
        color: #bbb;
        margin-right: 10px;
      }
    }

    .bottom-footer {
      margin-top: 10px;
      border-top: 2px solid #fff;
      padding-top: 20px;
      text-align:center;

      .bottom-title {
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .bottom-text {
        color: #fff;
        font-size: 12px;
      }
    }
  }
`;
