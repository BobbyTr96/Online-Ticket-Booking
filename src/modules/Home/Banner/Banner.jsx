import React from "react";
import { useEffect, useState } from "react";
import movieAPI from "../../../services/movieAPI";
import Slider from "react-slick";
import styled from "styled-components";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieAPI.getBanner();
        setBanners(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // control-slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <StyleBanner>
      <Slider {...settings}>
        {banners.map((item) => (
          <div key={item.maBanner} className="imgBanner">
            <img src={item.hinhAnh} alt="" width="100%" height="100%" />
          </div>
        ))}
      </Slider>
    </StyleBanner>
  );
};

export default Banner;

const StyleBanner = styled.div`
  overflow-x: hidden;
  .imgBanner {
    width: 100%;
  }

  .slick-dots {
    bottom: 25px;
  }

  .slick-dots li button:before {
    font-size: 13px;
    color: var(--color-redlight);
  }

  .slick-dots li.slick-active button:before {
    color:var(--color-red);
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
  }

  .slick-prev {
    left: 20px;
  }

  .slick-next {
    right: 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
    color: #bbb;
    opacity: 0.5;

    @media only screen and (max-width: 800px) {
      display:none;
    }
  }

  .slick-prev:hover:before,  .slick-next:hover:before {
    color: var(--color-redlight);
    opacity:1;
  } 

  .slick-prev:focus:before, .slick-next:focus:before {
    color: var(--color-red);
  }
`;
