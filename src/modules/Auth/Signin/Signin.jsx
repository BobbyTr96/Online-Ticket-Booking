import React, { useState } from "react";
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
import styles from "./signin.module.scss";
//react-icon
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
//react-hook-form
import { useForm } from "react-hook-form";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import { singin } from "../../../slices/authSlice";
import swal from "sweetalert";

const Signin = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth); // giá trị lấy từ redux
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // khởi tạo giá trị lưu trữ bằng useForm
  /** Object đăng nhập :
     {
         taiKhoan:string ,
         matKhau :string,
     }
   */
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
    // mode: "onSubmit", // đk để kích hoạt vaidation : onBlur , onSubmit , onTouched....
  });

  // formState : trạng thái của form / là 1 object
  const { errors } = formState;

  const onSubmit = (values) => {
    // console.log(values);
    dispatch(singin(values));
  };

  if (user) {
    const redirectURL = searchParams.get("redirectURL");
    swal({
      text: "Đăng Nhập Thành Công",
      icon: "success",
      button: false,
      timer: 1500,
    });
    // Nếu đã có thông tin user =>  redirect => redirectURL or home (ưu tiên redirectURL )
    setTimeout(() => {
      navigate(redirectURL || "/", { replace: true });
    }, 1500);
  }

  return (
    <>
      <Modal show={true} size="md">
        <Modal.Title
          id="example-custom-modal-styling-title"
          className={styles.modalHeader}
        >
          <FaUserCircle className={styles.headIcon} />
          <span>Đăng Nhập</span>
        </Modal.Title>

        <Modal.Body>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { my: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              autoComplete="taiKhoan"
              label="Account"
              variant="outlined"
              error={false}
              margin="dense"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản ko đc để trống",
                },
              })}
            />
            {errors.taiKhoan && (
              <span className="text-danger">{errors.taiKhoan.message}</span>
            )}
            <TextField
              autoComplete="matKhau"
              label="Passwords"
              type="password"
              variant="outlined"
              error={false}
              margin="dense"
              {...register("matKhau", {
                required: { value: true, message: "Mật khẩu ko đc để trống" },
              })}
            />
            {errors.matKhau && (
              <span className="text-danger">{errors.matKhau.message}</span>
            )}

            <div className="text-center mt-2">
              <Button
                variant="success"
                size="md"
                type="submit"
                disabled={loading}
              >
                Đăng nhập
              </Button>
            </div>
            {error && (
              <div className="text-center">
                <span className="text-danger">{error}</span>
              </div>
            )}
          </Box>
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <div>
            <Link className={styles.textLink} to="/">
              Quay lại trang chủ
            </Link>
          </div>
          <div>
            <Link className={styles.textLink} to="/dangKy">
              Bạn chưa có tài khoản ? Đăng ký
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signin;
