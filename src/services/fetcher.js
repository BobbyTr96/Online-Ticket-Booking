import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNiIsIkhldEhhblN0cmluZyI6IjE5LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4OTcyNDgwMDAwMCIsIm5iZiI6MTY2MDQxMDAwMCwiZXhwIjoxNjg5ODcyNDAwfQ.LOuGqORmUbzSj-vrf010cInw8TjYTzoLxS6HI1nQakE",
  },
});

fetcher.interceptors.response.use(
  (response) => {
    return response.data.content;
  },
  (error) => {
    return Promise.reject(error.response.data.content);
  }
);

fetcher.interceptors.request.use(
  (config) => {
    // thêm key Authorization vào header config ( nếu có) // note nếu localStorage ko có dữ liệu thì nó là undefine , bóc tách undefine thì nó sẽ báo lỗi
    // ==> ta nên thêm thường hợp object rỗng vào , vì khi bóc tách rỗng nó sẽ trả undefine => chương trình vẫn chạy đc
    const { accessToken } = JSON.parse(localStorage.getItem("user")) || {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    // nếu ko có thì return về nguyên bản
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fetcher;
