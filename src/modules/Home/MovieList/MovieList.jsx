import React, { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import Slider from "react-slick";
import MovieItem from "./MovieItem";
import ModalVideo from "../../../components/ModalVideos";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setOpen] = useState(false); // state kiểm soát video modal
  const [urlMovie, seturlMovie] = useState(""); // state kiểm soát link trailer
  const [widthScreen, setWidthScreen] = useState(null);
  const navigate = useNavigate();
  // hàm mở modal
  const handleOpen = (urlMovie) => {
    setOpen(!isOpen);
    seturlMovie(urlMovie);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await movieAPI.getMovie();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const screen = document.body.clientWidth;
      setWidthScreen(screen);
    });
  }, [widthScreen]);
  const width = document.body.clientWidth;
  console.log(width);
  console.log(widthScreen);

  //   Slick setting
  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyleMovieList id="lichChieu">
      <Tabs
        defaultActiveKey="phim Đang Chiếu"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {/* tab list phim đang chiếu */}
        <Tab eventKey="phim Đang Chiếu" title="Phim Đang Chiếu">
          <div>
            <Slider
              {...settings}
              rows={(widthScreen || width) <= 640 ? 6 : 2}
              slidesPerRow={
                (widthScreen || width) <= 640
                  ? 1
                  : (widthScreen || width) <= 1000
                  ? 3
                  : 4
              }
            >
              {movies.map((item) => {
                if (item.dangChieu) {
                  return (
                    <div key={item.maPhim} className="p-2 cardContent ">
                      <MovieItem item={item} />

                      {/* buttonTrailer */}
                      <button
                        onClick={() => handleOpen(item.trailer)}
                        className="videoButton"
                      >
                        <AiOutlinePlayCircle className="playButton" />
                      </button>
                    </div>
                  );
                }
              })}
            </Slider>
          </div>
        </Tab>

        {/* tab list phim sắp chiếu */}
        <Tab eventKey="him Sắp Chiếu" title="Phim Sắp Chiếu">
          <Slider
            {...settings}
            rows={(widthScreen || width) <= 640 ? 6 : 2}
            slidesPerRow={(widthScreen || width) <= 640 ? 1 : (widthScreen || width) <= 1000 ? 3 : 4}
          >
            {movies.map((item) => {
              if (item.sapChieu) {
                return (
                  <div key={item.maPhim} className="p-2 cardContent ">
                    <MovieItem item={item} />

                    {/* buttonTrailer */}
                    <button
                      onClick={() => handleOpen(item.trailer)}
                      className="videoButton"
                    >
                      <AiOutlinePlayCircle className="playButton" />
                    </button>
                  </div>
                );
              }
            })}
          </Slider>
        </Tab>
      </Tabs>
      <ModalVideo
        isOpen={isOpen}
        handleClose={handleOpen}
        urlMovie={urlMovie}
      />
    </StyleMovieList>
  );
};

export default MovieList;

const StyleMovieList = styled.div`
  width: 75%;
  margin: 10px auto 0 auto;

  .nav {
    justify-content: center;
  }

  .nav-tabs {
    border: transparent;
  }

  .nav-tabs .nav-link {
    color: var(--color-rednomal);
    transition: all 0.3s;

    @media only screen and (max-width: 800px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
  }

  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    font-weight: 500;
    border-color: transparent transparent var(--color-redlight);
    background-color: transparent;
    color: var(--color-red);
    border-radius: 20px;
  }

  .nav-tabs .nav-link:hover {
    border-color: transparent transparent var(--color-redlight);
    border-radius: 20px;
    color: var(--color-red);
  }

  .cardContent {
    position: relative;
    @media only screen and (max-width: 1024px) {
      padding: 5px !important;
    }
    @media only screen and (max-width: 640px) {
      padding: 2px !important;
    }

    .videoButton {
      background-color: transparent;
      position: absolute;
      top: 25%;
      left: 42%;
      z-index: 3;
      visibility: hidden;
      opacity: 0;
      color: #fff;
      transition: all 0.3s;
      @media only screen and (max-width: 640px) {
        top: 25px;
        left: 38px;
      }

      &:hover {
        color: #bbb;
      }

      .playButton {
        font-size: 50px;
        @media only screen and (max-width: 640px) {
          font-size: 25px;
        }
      }
    }

    &:hover .videoButton {
      visibility: visible;
      opacity: 1;
    }

    &:hover .videoButton {
      visibility: visible;
      opacity: 1;
    }

    &:hover .card-image-div .img-overlay {
      opacity: 1;
    }

    &:hover .cardText {
      visibility: hidden;
      opacity: 0;
      @media only screen and (max-width: 640px) {
        visibility: visible;
        opacity: 1;
      }
    }

    &:hover .card .card-body .btnDatVe {
      display: block;
    }
  }

  .slick-list {
    padding: 0 !important;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #bbb;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: var(--color-redlight);
  }

  .slick-prev:focus:before,
  ,
  .slick-next:focus:before {
    color: var(--color-red);
  }

  .slick-dots {
    position: relative;
    bottom: 0;
  }

  .slick-dots li button:before {
    color: #bbb;
    opacity: 0.5;
    font-size: 10px;
  }

  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    color: var(--color-redlight);
    opacity: 1;
  }

  .slick-dots li.slick-active button:before {
    color: var(--color-red);
    opacity: 1;
  }

  .card {
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    @media only screen and (max-width: 640px) {
      flex-direction: row;
    }

    .card-body {
      position: relative;
      padding: 0;
      @media only screen and (max-width: 640px) {
        padding: 0 0 0 10px !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      @media only screen and (max-width: 1024px) {
        padding: 5px;
      }

      .btnDatVe {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        @media only screen and (max-width: 640px) {
          position: unset;
          display: block;
          transform: translateX(0);
          width: 100px;
          font-size: 10px;
        }
      }
    }

    .card-image-div {
      position: relative;

      img {
        height: 300px;
        @media only screen and (max-width: 800px) {
          height: 200px;
        }
        @media only screen and (max-width: 640px) {
          width: 100px;
          height: 100px;
          border-radius: 5px;
        }
      }

      .img-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000, transparent 100%);
        transition: all 0.3s;
        opacity: 0;
      }
    }
  }

  .cardText {
    position: relative;

    .card-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      @media only screen and (max-width: 1024px) {
        font-size: 10px;
      }
      @media only screen and (max-width: 640px) {
        font-size: 10px;
      }
    }

    .card-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      transition: all 0.5s;
      @media only screen and (max-width: 1024px) {
        font-size: 10px;
      }
      @media only screen and (max-width: 640px) {
        font-size: 8px;
        -webkit-line-clamp: 3;
      }
    }
  }
`;
