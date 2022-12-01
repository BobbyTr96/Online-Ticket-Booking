import React, { useRef } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// mui-lib
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//react-boostrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// module style
import styles from "./signup.module.scss";
//react-icon
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";
// react-form
import { useForm } from "react-hook-form";
import authAPI from "../../../services/authAPI";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Signup = () => {
  const repMK = useRef(""); // ref kiểm tra việc nhập lại mật khẩu
  const errorSignup = useRef(null); // ref chứa thông tin lỗi truyền về từ back-end
  const signupSuccess = useRef(null); // ref chứa thông tin đăng nhập thành công để kiểm tra và redirect sang trang đăng nhập
  const loading = useRef(false); // ref kiểm tra trạng thái pending việc call api
  const navigate = useNavigate();

  /**
 * {
  "taiKhoan": "string",
  "matKhau": "string",
  "email": "string",
  "soDt": "string",
  "maNhom": "string", không cần tạo ô input mã nhóm vì khi call API ta sẽ sét cứng mã nhóm sau
  "hoTen": "string"
}
 */

  // Regex field
  const regMK =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  const regEmail = /^[\w-\.,';]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regSoDt = /^[0-9]{9,}$/;
  const regTen = /\b([A-Z,a-z,À-ÿ ]+[ ]*)+/;

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      nhapLaiMatKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },
    mode: "onBlur",
  });

  const { errors } = formState; // bóc tách biến errors từ object formState để quản lí lỗi hiện ra cho ng dùng

  const submit = async (values) => {
    const { nhapLaiMatKhau, ...newValue } = values;
    try {
      // pending thì set loading= true để disable nút đăng ký để ng dùng ko đc nhấp nhiều lần tránh việc call API nhìu lần
      loading.current = true;
      const data = await authAPI.signUp(newValue);
      // ====== Call api thành công
      // set ô input về rỗng
      reset({
        taiKhoan: "",
        matKhau: "",
        nhapLaiMatKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
      });
      // set lại thông báo lỗi = null để ko hiển thị ngoài giao diện
      errorSignup.current = null;
      // set loading về lại false
      loading.current = false
      // set giá trị để kiểm tra nếu đăng ký thành thông thì redirect qua trang đăng nhập
      signupSuccess.current = data;
      swal({
        text: "Đăng Ký Thành Công",
        icon: "success",
        button: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      // set giá trị lỗi để hiễn thị ra giao diện
      errorSignup.current = error;
    }
  };

  if (signupSuccess.current) {
    setTimeout(() => {
      navigate("/dangNhap");
    }, 1500);
  }

  return (
    <div>
      <Modal show={true} size="md">
        <Modal.Title
          id="example-custom-modal-styling-title"
          className={styles.modalHeader}
        >
          <FaUserAstronaut className={styles.headIcon} />
          <span>Đăng ký</span>
        </Modal.Title>

        <Modal.Body>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(submit)}
          >
            <TextField
              autoComplete="taiKhoan"
              label="tài khoản*"
              variant="outlined"
              error={false}
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được bỏ trống",
                },
              })}
            />
            {errors.taiKhoan && (
              <span className="text-danger" style={{ fontSize: "13px" }}>
                {errors.taiKhoan.message}
              </span>
            )}

            <TextField
              autoComplete="matKhau"
              label="Mật khẩu*"
              type="password"
              variant="outlined"
              error={false}
              {...register("matKhau", {
                required: {
                  value: true,
                  message: "Mật khẩu không được bỏ trống",
                },
                maxLength: {
                  value: 10,
                  message: "Mật khẩu tối đa 10 kí số",
                },
                minLength: {
                  value: 6,
                  message: "Mật khẩu ít nhất 6 kí số",
                },
                pattern: {
                  value: regMK,
                  message:
                    "Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ",
                },
                onChange: (e) => (repMK.current = e.target.value),
              })}
            />
            {errors.matKhau && (
              <span className="text-danger" style={{ fontSize: "13px" }}>
                {errors.matKhau.message}
              </span>
            )}

            <TextField
              autoComplete="nhapLaiMatKhau"
              label="Nhập lại mật khẩu*"
              type="password"
              variant="outlined"
              error={false}
              {...register("nhapLaiMatKhau", {
                required: {
                  value: true,
                  message: "Vui lòng điền lại mật khẩu",
                },
                validate: (value) =>
                  value === repMK.current ||
                  "Mật khẩu không đúng , vui lòng nhập lại",
              })}
            />
            {errors.nhapLaiMatKhau && (
              <span className="text-danger" style={{ fontSize: "13px" }}>
                {errors.nhapLaiMatKhau.message}
              </span>
            )}

            <TextField
              autoComplete="hoTen"
              label="Họ tên*"
              variant="outlined"
              error={false}
              {...register("hoTen", {
                required: {
                  value: true,
                  message: "Họ tên không được bỏ trống",
                },
                pattern: {
                  value: regTen,
                  message:
                    "Tên chỉ chứa chữ cái - ko chứa số và kí tự đặc biệt ",
                },
              })}
            />
            {errors.hoTen && (
              <span className="text-danger" style={{ fontSize: "13px" }}>
                {errors.hoTen.message}
              </span>
            )}

            <TextField
              autoComplete="soDt"
              label="Số Điện Thoại*"
              variant="outlined"
              error={false}
              {...register("soDt", {
                required: {
                  value: true,
                  message: "Số điện thoại không được bỏ trống",
                },
                pattern: {
                  value: regSoDt,
                  message: "Chỉ chứa số và không có kí tự , có ít nhất 9 số ",
                },
              })}
            />
            {errors.soDt && (
              <span className="text-danger" style={{ fontSize: "13px" }}>
                {errors.soDt.message}
              </span>
            )}

            <TextField
              autoComplete="email"
              label="Email*"
              variant="outlined"
              error={false}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email không được bỏ trống",
                },
                pattern: {
                  value: regEmail,
                  message:
                    "Vui lòng điền đúng định dạng ,  vd : dinhvana@gmail.com ",
                },
              })}
            />
            {errors.email && (
              <span className="text-danger" style={{ fontSize: "13px" }}>
                {errors.email.message}
              </span>
            )}

            <div className="text-center">
              <Button
                variant="success"
                size="md"
                type="submit"
                disabled={loading.current}
              >
                Đăng ký
              </Button>
              {errorSignup.current && (
                <div className="text-center py-2">
                  <span className="text-danger">{errorSignup.current}</span>
                </div>
              )}
            </div>
          </Box>
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <div>
            <Link className={styles.textLink} to="/">
              Quay lại trang chủ
            </Link>
          </div>
          <div>
            <Link className={styles.textLink} to="/dangNhap">
              Bạn đã có tài khoản ? Đăng nhập
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Signup;

// {...register("test", {
//   validate: value => value === '1' || 'error message'  // JS only: <p>error message</p> TS only support string
// })}
