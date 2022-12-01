import React, { useEffect, useState } from "react";
import movieSchedules from "../../../services/movieSchedules";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import styled from "styled-components";
import { SiHotjar } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const MovieSchedule = () => {
  const [movieSystem, setMovieSystem] = useState([]); // state chứa thông tin hệ thống rạp
  const [movieSystemSelected, setMovieSystemSelected] = useState("BHDStar"); // State quản lý mã cụm rạp người dùng chọn
  const [movieSchedule, setMovieSchedule] = useState([]); // State quản lý thông tin cụm rạp
  const navigate = useNavigate(); // hàm điều hướng qua trang đặt vé
  const { user } = useSelector((state) => state.auth);

  // Call aPI lấy thông tin cụm rạp
  useEffect(() => {
    (async () => {
      try {
        const data = await movieSchedules.getCinemaSystem();
        // console.log(data);
        setMovieSystem(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Call API lấy thông tin lịch chiếu dựa theo mã cụm rạp
  useEffect(() => {
    (async () => {
      try {
        const [data] = await movieSchedules.getMovieSchedule(
          movieSystemSelected
        );
        // console.log(data);
        setMovieSchedule(data.lstCumRap);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieSystemSelected]);

  const handleChoose = (value) => {
    if (!user) {
      return swal({
        text: "Bạn hãy đăng nhập trước nhé ^^ !",
        icon: "error",
        buttons: ["Không Muốn", "Okie"],
      }).then((value) => {
        if (value) {
          navigate("/dangNhap");
        }
      });
    }

    return navigate(`/datVe/${value}`);
  };

  return (
    <StyleMovieSchedule id="cumRap">
      <div className="row">
        <div className="col-md-1">
          <Tab.Container
            id="left-tabs-example"
            activeKey={movieSystemSelected}
            defaultActiveKey="bhd-star-cineplex-bitexco"
            onSelect={(key) => setMovieSystemSelected(key)}
          >
            <Row>
              {/* cụm rạp */}
              <Col sm={1}>
                <Nav variant="pills" className="flex-column">
                  {movieSystem.map((item) => (
                    <Nav.Item key={item.maHeThongRap}>
                      <Nav.Link eventKey={item.maHeThongRap}>
                        <img
                          src={item.logo}
                          alt={item.tenHeThongRap}
                          width={50}
                          height={50}
                        />
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="col-md-11">
          <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Row>
              {/* thông tin từng cụm rạp */}
              <Col sm={3} className="rapChieu">
                <Nav variant="pills" className="flex-column">
                  {movieSchedule.map((item, index) => (
                    <Nav.Item key={item.maCumRap}>
                      <Nav.Link eventKey={index}>
                        <h4>{item.tenCumRap}</h4>
                        <p>{item.diaChi}</p>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>

              {/* thông tin lịch chiếu theo từng cụm rạp */}
              <Col sm={8} className="lichChieu">
                <Tab.Content>
                  {movieSchedule.map((itemm, indexx) => (
                    <Tab.Pane key={itemm.maCumRap} eventKey={indexx}>
                      {itemm.danhSachPhim.map((listMovie) => (
                        <div key={listMovie.maPhim}>
                          <div className="chiTiet">
                            <div>
                              <img
                                src={listMovie.hinhAnh}
                                alt={listMovie.tenPhim}
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="textChiTiet">
                              <div className="chiTietTitle">
                                {listMovie.hot ? (
                                  <span>
                                    <SiHotjar className="chiTietIcon" />
                                  </span>
                                ) : null}
                                <h5>{listMovie.tenPhim}</h5>
                              </div>
                              {/* danh sách lịch chiếu theo phim */}
                              <div className="textLichChieu">
                                {listMovie.lstLichChieuTheoPhim.map(
                                  (listSchedule) => (
                                    <button
                                      key={listSchedule.maLichChieu}
                                      className="chitietLichChieu"
                                      onClick={() =>
                                        handleChoose(listSchedule.maLichChieu)
                                      }
                                    >
                                      <span>{listSchedule.tenRap}</span>
                                      <span>
                                        {listSchedule.ngayChieuGioChieu}
                                      </span>
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                          <hr className="hfMovie" />
                        </div>
                      ))}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </StyleMovieSchedule>
  );
};

export default MovieSchedule;

const StyleMovieSchedule = styled.div`
  width: 75%;
  height: 720px;
  margin: 0 auto;
  margin-top: 30px;
  @media only screen and (max-width: 960px) {
    display: none;
  }

  .rapChieu {
    overflow-y: scroll;
    height: 720px;
  }

  .lichChieu {
    overflow-y: scroll;
    height: 720px;
  }

  .chiTiet {
    display: flex;
    padding: 10px 10px;

    img {
      border-radius: 5px;
    }

    .textChiTiet {
      padding-left: 20px;

      .chiTietTitle {
        display: flex;

        .chiTietIcon {
          color: var(--color-red);
          margin-right: 10px;
          font-size: 25px;
        }

        h5 {
          color: #fff;
        }
      }

      .textLichChieu {
        display: flex;
        flex-wrap: wrap;

        .chitietLichChieu {
          color: #bbb;
          margin: 10px;
          font-size: 10px;
          background-color: transparent;
          transition: all 0.3s;

          &:hover {
            color: var(--color-red);
            font-size: 15px;
          }

          span {
            margin-right: 5px;
          }
        }
      }
    }
  }

  .hfMovie {
    border: 1px solid #bbb;
    width: 75%;
    opacity: 0.75;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    background-color: transparent;
    border-right: 2px solid var(--color-red);
  }

  .nav-link {
    color: #fff;
    transition: all 0.3s;

    h4 {
      color: #43a047;
    }

    p {
      color: var(--color-white);
    }
  }

  .nav-link:focus,
  .nav-link:hover {
    border-right: 2px solid var(--color-redlight);
  }
`;
