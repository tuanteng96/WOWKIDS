import { Button, Icon, Input, Link, Page } from "framework7-react";
import React from "react";
import NavbarCustom from "../../components/Navbar/NavbarCustom";

function Register(props) {
  return (
    <Page name="login" noNavbar noToolbar>
      <div className="wrapper-content">
        <NavbarCustom {...props} />
        <div className="page-login">
          <div className="page-login__title mb-2px max-w-225px">
            <img className="w-100" src="/media/icon-app/ic_register.png" />
          </div>
          <div className="page-login__content">
          <div className="mb-12px input-wrap-icon">
              <Icon f7="person_fill"></Icon>
              <Input type="text" placeholder="Họ và tên" clearButton />
            </div>
            <div className="mb-12px input-wrap-icon">
              <Icon f7="person_fill"></Icon>
              <Input type="number" placeholder="Số điện thoại" clearButton />
            </div>
            <div className="input-wrap-icon">
              <Icon f7="lock_fill"></Icon>
              <Input type="text" placeholder="Mật khẩu" clearButton />
            </div>
          </div>
          <div className="page-login__footer d--f">
            <Button
              className="d--if text-capitalize clickSound f--1 mr-10px"
              raised
              fill
              round
            >
              Đã có tài khoản?
              <span className="text-underline pl-5px">Đăng nhập ngay!</span>
            </Button>
            <Button
              className="d--if clickSound w-130px"
              raised
              fill
              round
              color="orange"
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Register;
