import React, { useEffect, useState, useRef, Fragment } from "react";
//styled-component
import styled from "styled-components";
//react-router-dom
import { useParams, useNavigate, useLocation } from "react-router-dom";
//react-bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
//react-icon
import { FaHotjar } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
// sweet-alert
import swal from "sweetalert";
//react-reduxt
import { useSelector } from "react-redux";
//local import
import ModalVideo from "../../components/ModalVideos/ModalVideo";
import movieAPI from "../../services/movieAPI";

const MovieDetail = () => {
  const { movieId } = useParams(); // Mã phim lấy từ url
  const [movieDetail, setMovieDetail] = useState(null); // state lưu trữ thông call aPI lấy đc từ movieID
  const [rap, setRap] = useState(""); // state lưu trữ hệ thống rạp ng dùng chọn
  const [cumRap, setCumRap] = useState(""); // state lưu trữ cụm rạp ng dùng chọn
  const [maLichChieu, setMaLichchieu] = useState(""); // state lưu trữ mã lịch chiếu ng người dùng chọn từ mục ngày giờ chiếu
  const [isOpen, setOpen] = useState(false); // state kiểm soát video modal
  const { user } = useSelector((state) => state.auth); // state user lấy từ redux
  const location = useLocation(); // giá trị hiện tại của url

  const navigate = useNavigate();

  useEffect(() => {
    if (movieId) {
      (async () => {
        try {
          const data = await movieAPI.getMovieDetail(movieId);
          setMovieDetail(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [movieId]);

  // hàm dùng để setState ở select rạp
  const handleChangeRap = (value) => {
    setRap(value);
    setCumRap("");
    setMaLichchieu("");
  };

  // hàm dùng để setState ở select cụm rap
  const handleChangeCumRap = (value) => {
    setCumRap(value);
    setMaLichchieu("");
  };

  // hàm quản lý nút đặt vé
  const handleDatVe = () => {
    if (!user) {
      swal({
        title: "BẠN CHƯA ĐĂNG NHẬP",
        text: "Bạn có muốn đăng nhập không ?",
        icon: "warning",
        buttons: [
          "Không",
          {
            text: "Đăng Nhập",
            className: "bg-success",
          },
        ],
      }).then((value) => {
        if (value) {
          const url = `/dangNhap?redirectURL=${location.pathname}`;
          navigate(url);
        }
      });
    } else if (!rap) {
      swal({
        title: "Bạn Chưa Chọn Hệ Thống Rạp Nè ?!!!",
        icon: "error",
        button: {
          text: "Đã hiểu",
          className: "buttonRed",
        },
      });
    } else if (!cumRap) {
      swal({
        title: "Chọn Cụm Rạp Gần Nhà Bạn Đi Nè !!!",
        icon: "error",
        button: {
          text: "Đã hiểu",
          className: "buttonRed",
        },
      });
    } else if (!maLichChieu) {
      swal({
        title: "Chọn Thời Gian Chiếu Để Lên Lịch Đi Nè ^^ !!!",
        icon: "error",
        button: {
          text: "Đã hiểu",
          className: "buttonRed",
        },
      });
    } else {
      // nếu thõa mãn hết dk trên thì return redirect sang trang đặt vé với thông tin mã lịch chiếu
      return navigate(`/datVe/${maLichChieu}`);
    }
  };

  // hàm mở modal
  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <StyleMovieDetail>
      <div className="innerContain">
        <div className="movieDetail">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className=" detailImg">
                <img
                  src={movieDetail?.hinhAnh}
                  alt={movieDetail?.tenPhim}
                  width="100%"
                />
                <button className="trailerButton" onClick={handleOpen}>
                  <AiOutlinePlayCircle className="trailerIcon" />
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <Tabs
                defaultActiveKey="Chi tiết phim"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                {/* tab thông tin phim */}
                <Tab
                  eventKey="Chi tiết phim"
                  title="Chi tiết phim"
                  className="text-white "
                >
                  {movieDetail?.hot && (
                    <span style={{ marginRight: "5px" }}>
                      <FaHotjar />
                    </span>
                  )}
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>
                    {movieDetail?.tenPhim}
                  </span>
                  <p>Ngày khởi chiếu : {movieDetail?.ngayKhoiChieu}</p>
                  <p>Tóm tắt : {movieDetail?.moTa}</p>
                  <p>
                    Rating : <span>{movieDetail?.danhGia}</span>{" "}
                  </p>
                </Tab>

                {/* tab đặt vé */}
                <Tab eventKey="Đặt Vé" title="Đặt Vé">
                  <>
                    {/*  hệ thống rap */}
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(evt) => handleChangeRap(evt.target.value)}
                      defaultValue="first"
                      className="my-3"
                    >
                      <option disabled value="first">
                        Hệ Thống Rạp
                      </option>
                      {movieDetail?.heThongRapChieu.map((rap) => (
                        <option value={rap.maHeThongRap} key={rap.maHeThongRap}>
                          {rap.tenHeThongRap}
                        </option>
                      ))}
                    </Form.Select>

                    {/* cụm rạp */}
                    <Form.Select
                      onChange={(evt) => handleChangeCumRap(evt.target.value)}
                      defaultValue="first"
                      className="my-3"
                    >
                      <option value="first">Cụm Rạp Chiếu</option>
                      {movieDetail?.heThongRapChieu.map((item) => {
                        if (item.maHeThongRap === rap) {
                          return (
                            <React.Fragment key={item.maHeThongRap}>
                              {item.cumRapChieu.map((cumRap) => (
                                <option
                                  value={cumRap.maCumRap}
                                  key={cumRap.maCumRap}
                                >
                                  {cumRap.tenCumRap}
                                </option>
                              ))}
                            </React.Fragment>
                          );
                        }
                      })}
                    </Form.Select>

                    {/* Thời gian chiếu */}
                    <Form.Select
                      defaultValue="first"
                      className="my-3"
                      onChange={(evt) => setMaLichchieu(evt.target.value)}
                    >
                      <option value="first">Ngày Giờ Chiếu</option>
                      {movieDetail?.heThongRapChieu.map((item) => {
                        if (item.maHeThongRap === rap) {
                          return (
                            <React.Fragment key={item.maHeThongRap}>
                              {item.cumRapChieu.map((listRap) => {
                                if (listRap.maCumRap === cumRap) {
                                  return (
                                    <React.Fragment key={listRap.maCumRap}>
                                      {listRap.lichChieuPhim.map(
                                        (lichChieu) => (
                                          <option
                                            value={lichChieu.maLichChieu}
                                            key={lichChieu.maLichChieu}
                                          >
                                            {lichChieu.ngayChieuGioChieu}
                                          </option>
                                        )
                                      )}
                                    </React.Fragment>
                                  );
                                }
                              })}
                            </React.Fragment>
                          );
                        }
                      })}
                    </Form.Select>

                    <Button variant="success" onClick={handleDatVe}>
                      Đặt Vé
                    </Button>
                  </>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="movieTrailer">
          <h1>123</h1>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        handleClose={handleOpen}
        urlMovie={movieDetail?.trailer}
      />
    </StyleMovieDetail>
  );
};

export default MovieDetail;

// { item.cumRapChieu.map((cumRap) => (
//   <option
//     value={cumRap.maCumRap}
//     key={cumRap.maCumRap}
//   >
//     {cumRap.tenCumRap}
//   </option>
// ))
// }

const StyleMovieDetail = styled.div`
  .innerContain {
    width: 75%;
    margin: 0 auto;

    .movieDetail {
      width: 100%;
      padding: 200px 40px 0 40px;

      .nav-tabs {
        border-bottom: transparent;
        @media only screen and (max-width: 640px) {
          margin-top: 20px;
        }
        .nav-link {
          color: var(--color-redlight);
          transition: all 0.5s;
          @media only screen and (max-width: 640px) {
            font-size: 15px;
          }
        }
      }

      .nav-tabs .nav-item.show .nav-link,
      .nav-tabs .nav-link.active {
        border-color: transparent transparent var(--color-red);
        background-color: transparent;
        border-radius: 20px;
      }

      .detailImg {
        position: relative;
        text-align: center;

        &:hover .trailerButton .trailerIcon {
          color: #fff;
          opacity: 1;
        }

        .trailerButton {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          background-color: transparent;

          .trailerIcon {
            color: #bbb;
            font-size: 40px;
            opacity: 0.5;
            transition: all 0.5s;
          }
        }

        img {
          border-radius: 10px;
        }
      }

      p {
        margin: 5px 0;
      }
    }
  }
`;
