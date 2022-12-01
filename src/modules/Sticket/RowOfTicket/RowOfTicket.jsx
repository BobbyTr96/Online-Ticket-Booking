import React, { useState } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { chonGhe } from "../../../slices/ticketSlice";


const RowOfTicket = ({ phongVe, gheDangChon }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        {phongVe?.danhSachGhe.map((item) => {
          let cssGheDangChon = false;
          const index = gheDangChon?.findIndex(
            (ghe) => ghe.maGhe === item.maGhe
          );
          if (index !== -1) {
            cssGheDangChon = true;
          }
          return (
            <button
              disabled={item.daDat}
              key={item.maGhe}
              className={cn(
                "ghe",
                { " gheVIP": item.loaiGhe === "Vip" },
                { gheDangChon: cssGheDangChon },
                { daChon: item.daDat }
              )}
              onClick={() =>
                dispatch(
                  chonGhe({
                    maLichChieu: phongVe?.thongTinPhim.maLichChieu,
                    item,
                  })
                )
              }
            >
              {item.daDat ? "X" : item.tenGhe}
            </button>
          );
        })}
        <div style={{ margin: "30px 0 0 40px" }}>
          <button className="ghe"></button>
          <span className="text-white">Ghế Thường</span>
          <button className="gheVIP" style={{ marginLeft: "10px" }}></button>
          <span className="text-white">Ghế VIP</span>
          <button className="ghe daChon"></button>
          <span className="text-white">Đã Đặt</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RowOfTicket;
