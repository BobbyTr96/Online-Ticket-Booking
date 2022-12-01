import fetcher from "./fetcher";

const movieAPI = {
  getBanner: () => {
    return fetcher.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovie: () => {
    return fetcher.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP13 ",
      },
    });
  },
  getMovieDetail:(value)=>{
    return fetcher.get("QuanLyRap/LayThongTinLichChieuPhim",{
      params:{
        MaPhim:value
      }
    })
  }
  
};

export default movieAPI;
