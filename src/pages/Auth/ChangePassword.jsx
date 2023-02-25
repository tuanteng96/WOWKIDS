import { Button, Col, Input, Page, Row } from 'framework7-react'
import React from 'react'
import NavbarCustom from '../../components/Navbar/NavbarCustom'
import NavbarProfile from '../../components/Navbar/NavbarProfile'
import { ImagesHelpers } from '../../helpers/ImagesHelpers';

function ChangePassword(props) {
  return (
    <Page
      name="change-password"
      noNavbar
      noToolbar
      style={{ backgroundImage: `url(${ImagesHelpers.BackgroundApp})` }}
    >
      <NavbarCustom {...props} />
      <div className="wrapper-content pl-15px pr-15px">
        <div className="page-profile">
          <div className="profile-top mb-6px">
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
                      clearButton
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
                      clearButton
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
                      clearButton
                    />
                  </div>
                </Col>
              </Row>
              <Row className="ai--c">
                <Col width="35"></Col>
                <Col width="65">
                  <Button
                    className="d--if clickSound"
                    raised
                    fill
                    round
                    color="orange"
                  >
                    Thay đổi mật khẩu
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
