import fetcher from "./fetcher";

const authAPI = {
  signIn: (value) => {
    return fetcher.post("QuanLyNguoiDung/DangNhap", value);
  },

  signUp: (value) => {
    return fetcher.post("QuanLyNguoiDung/DangKy", {
      ...value,
      maNhom: "GP01",
    });
  },
};

export default authAPI;
