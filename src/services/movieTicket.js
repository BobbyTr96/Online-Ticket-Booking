import fetcher from "./fetcher";

const movieTicket = {
  getTicket: (maLichChieu) => {
    return fetcher.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: maLichChieu,
      },
    });
  },
  daVe: (value) => {
    return fetcher.post("QuanLyDatVe/DatVe", value);
  },
};

export default movieTicket;
