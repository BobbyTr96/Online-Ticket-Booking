import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import appframe from "../../../assets/images/download.png";
import bannerSlider1 from "../../../assets/images/banner-slider-1.c4d5fe9e.jpg";
import bannerSlider2 from "../../../assets/images/banner-slider-2.454924ec.jpg";
import bannerSlider3 from "../../../assets/images/banner-slider-3.33a486d1.jpg";
import bannerSlider4 from "../../../assets/images/banner-slider-4.16bf933f.jpg";
import bannerSlider5 from "../../../assets/images/banner-slider-5.8a084f78.jpg";
import bannerSlider6 from "../../../assets/images/banner-slider-6.0b2b382d.jpg";

const App = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: false,
  };

  return (
    <StyleApp id="app">
      <div className="innerApp">
        <div className="appText">
          <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
          <p>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <p className="appButton">APP MIỄN PHÍ - TẢI VỀ NGAY</p>
          <p>
            TIX có hai phiên bản <a href="">IOS</a> & <a href="">Android</a>
          </p>
        </div>
        <div className="appCarousel">
          <img src={appframe} alt="" className="imgFrame" />
          <Slider {...settings} className="slickCarousel">
            <div>
              <img src={bannerSlider1} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={bannerSlider2} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={bannerSlider3} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={bannerSlider4} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={bannerSlider5} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={bannerSlider6} alt="" className="img-fluid" />
            </div>
          </Slider>
        </div>
      </div>
    </StyleApp>
  );
};

export default App;

const StyleApp = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom:30px;

  .innerApp {
    max-width: 960px;
    display: flex;
    padding: 20px 40px;
    margin: 0 auto;
    @media only screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }

    .appText {
      color: #fff;
      @media only screen and (max-width: 960px) {
        text-align: center;
      }

      h2 {
        line-height: 75px;
        @media only screen and (max-width: 960px) {
          line-height: 35px;
          font-size: 25px;
        }
        @media only screen and (max-width: 640px) {
          font-size: 15px;
        }
      }

      p {
        @media only screen and (max-width: 640px) {
          font-size: 15px;
          margin: 15px 0 !important;
        }
      }

      .appButton {
        padding: 20px 30px;
        background-color: var(--color-red);
        text-decoration: none;
        font-weight: 600;
        border-radius: 3px;
        &:hover {
          color: #fff;
        }
      }

      p {
        margin: 30px 0;

        a {
          text-decoration: underline;
          &:hover {
            color: var(--color-redlight);
          }
        }
      }
    }

    .appCarousel {
      max-width: 100%;
      flex-basis: 100%;
      position: relative;

      .imgFrame {
        width: 100%;
        padding: 0 28%;
        position: relative;
        display: block;
      }

      .slickCarousel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1.5% 29% 0 29%;

        .slick-list {
          border-radius: 15px;
          overflow: hidden;
          height: 100%;
        }

        img {
          height: 100%;
        }
      }
    }
  }
`;
