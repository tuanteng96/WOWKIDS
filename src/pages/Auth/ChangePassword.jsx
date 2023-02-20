import { Button, Col, Input, Link, Page, Row } from 'framework7-react'
import React from 'react'
import NavbarCustom from '../../components/Navbar/NavbarCustom'
import NavbarProfile from '../../components/Navbar/NavbarProfile'

function ChangePassword(props) {
  return (
    <Page name="change-password" noNavbar noToolbar>
      <NavbarCustom {...props} />
      <div className="wrapper-content">
        <div className="page-profile">
          <div className="profile-top mb-8px">
            <img
              className="m-auto max-w-180px"
              src="/media/icon-app/ic_dmk.png"
            />
          </div>
          <div className="profile-content">
            {/* <div className="profile-title">Thay đổi mật khẩu</div> */}
            <div>
              <Row className="mb-15px ai--c">
                <Col width="35">
                  <div className="label-title">Mật khẩu cũ</div>
                </Col>
                <Col width="65">
                  <div>
                    <Input
                      type="password"
                      placeholder="Nhập mật khẩu cũ"
                      value="Nguyễn Tài Tuấn"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-15px ai--c">
                <Col width="35">
                  <div className="label-title">Mật khẩu mới</div>
                </Col>
                <Col width="65">
                  <div>
                    <Input
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      value="0971021196"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-15px ai--c">
                <Col width="35">
                  <div className="label-title">Nhập lại mật khẩu mới</div>
                </Col>
                <Col width="65">
                  <div>
                    <Input
                      type="password"
                      placeholder="Nhập lại mật khẩu mới"
                      value="0971021196"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="ai--c">
                <Col width="35"></Col>
                <Col width="65">
                  <Button className="d--if" raised fill round color="orange">
                    Cập nhập thông tin
                  </Button>
                </Col>
              </Row>
            </div>
            <NavbarProfile {...props} />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default ChangePassword
