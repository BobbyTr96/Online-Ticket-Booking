import React, { useState } from "react";
import swal from "sweetalert";
import movieTicket from "../../../services/movieTicket";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetGhe } from "../../../slices/ticketSlice";

const TicketDetail = ({ phongVe, gheDangChon, gheDaDat }) => {
  const total = gheDangChon?.reduce((total, item) => (total += item.giaVe), 0);
  const format = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSuccess = () => {
    if (gheDangChon.length === 0) {
      swal({
        text: `Bạn chưa chọn ghế nè ?!! `,
        icon: "warning",
        button: "Đã Hiểu",
        dangerMode: true,
      });
    } else {
      movieTicket.daVe(gheDaDat);
      dispatch(resetGhe());
      swal({
        text: `Đặt vé thành công , đang chuyển bạn về trang chủ `,
        icon: "success",
        button: false,
        timer: 3000,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  return (
    <div className=" text-white detail" style={{ marginTop: "200px" }}>
      <div className="cssDetail">
        <span>Tổng</span>
        <span className="text-warning " style={{ fontSize: "30px" }}>
          {format.format(total)}
        </span>
      </div>
      <hr />
      <div className="cssDetail ">
        <span>Cụm Rạp :</span>
        <span className="text-success">{phongVe?.thongTinPhim.tenCumRap}</span>
      </div>
      <hr />
      <div className="cssDetail ">
        <span>Địa Chỉ :</span>
        <span className="text-success">{phongVe?.thongTinPhim.diaChi}</span>
      </div>
      <hr />
      <div className="cssDetail ">
        <span>Rạp :</span>
        <span className="text-success">{phongVe?.thongTinPhim.tenRap}</span>
      </div>
      <hr />
      <div className="cssDetail ">
        <span>Ngày Giờ Chiếu :</span>
        <span className="text-success">
          <p>
            {phongVe?.thongTinPhim.ngayChieu}{" "}
            <span className="text-danger">
              {phongVe?.thongTinPhim.gioChieu}
            </span>
          </p>
        </span>
      </div>
      <hr />
      <div className="cssDetail ">
        <span>Tên Phim :</span>
        <span className="text-success">{phongVe?.thongTinPhim.tenPhim}</span>
      </div>
      <hr />
      <div className="cssDetail ">
        <span>Chọn:</span>
        <div
          className="text-success mx-2 text-end "
          style={{ fontSize: "15px" }}
        >
          {gheDangChon.map((item) => (
            <span className="mx-1" key={item.maGhe}>
              Ghế {item.tenGhe},
            </span>
          ))}
        </div>
      </div>
      <hr />
      <button
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={handleSuccess}
      >
        Đặt Vé
      </button>
    </div>
  );
};

export default TicketDetail;
