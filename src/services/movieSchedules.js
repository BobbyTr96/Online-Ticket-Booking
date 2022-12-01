import fetcher from "./fetcher";

const movieSchedules = {
  getCinemaSystem: () => {
    return fetcher.get("QuanLyRap/LayThongTinHeThongRap");
  },

  getMovieSchedule: (maRap) => {
    return fetcher.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maHeThongRap: maRap,
      },
    });
  },
};

export default movieSchedules;
