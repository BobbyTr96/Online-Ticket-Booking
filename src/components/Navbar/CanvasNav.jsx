import React from "react";
import cn from "classnames";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const CanvasNav = ({ isOpen, onClick, user, handleLogout }) => {
  return (
    <div>
      <div
        className={cn("offcanvas offcanvas-start", { show: isOpen })}
        tabIndex={-1}
      >
        {/* canvas title */}
        <div className="offcanvas-header">
          <div className="register01">
            {user ? (
              <>
                <div className="user01">
                  <Link className="userName01">
                    <span>Xin chào</span> {user.hoTen}
                  </Link>
                </div>
                <hr className="hafl-break" />
                <button className="logOut01" onClick={handleLogout}>
                  <FiLogOut className="logOutIcon01" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <div className="signIn">
                  <Link className="register-text" to="/dangNhap">
                    Đăng nhập
                  </Link>
                </div>
                <hr className="hafl-break" />
                <div className="signUp">
                  <Link className="register-text" to="/dangKy">
                    Đăng ký
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        {/* canvas body */}
        <div className="offcanvas-body">
          <ul>
            <li><a href="/#lichChieu"></a>Lịch Chiếu</li>
            <li><a href="/#cumRap"></a>Cụm Rạp</li>
            <li><a href="#"></a>Tin Tức</li>
            <li><a href="/#app"></a>Ứng Dụng</li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="offcanvas-backdrop fade show" onClick={onClick}></div>
      )}
    </div>
  );
};

export default CanvasNav;
