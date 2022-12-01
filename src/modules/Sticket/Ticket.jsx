import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiTicket } from "../../slices/ticketSlice";
import RowOfTicket from "./RowOfTicket/RowOfTicket";
import TicketDetail from "./TicketDetail";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const Ticket = () => {
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();
  const { phongVe, loading, gheDangChon, gheDaDat } = useSelector(
    (state) => state.ticketSlice
  );

  useEffect(() => {
    dispatch(apiTicket(maLichChieu));
  }, [maLichChieu]);

  if (loading) {
    return (
      <div style={{ paddingTop: "100px" }}>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8" style={{ margin: "80px 0" }}>
          <h1 className=" mt-4 text-center" style={{ color: "orange" }}>
            ĐẶT VÉ XEM PHIM CYBERLEARN.VN
          </h1>
          <div className="d-flex align-items-center flex-column">
            <div className="screen"></div>
            <RowOfTicket phongVe={phongVe} gheDangChon={gheDangChon} />
          </div>
        </div>
        <div className="col-md-4" style={{ margin: "80px 0" }}>
          <TicketDetail
            phongVe={phongVe}
            gheDangChon={gheDangChon}
            gheDaDat={gheDaDat}
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
