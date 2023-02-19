import { Button, Col, Input, Link, Page, Row } from 'framework7-react'
import React from 'react'
import NavbarCustom from '../../components/Navbar/NavbarCustom'

function Profile(props) {
  return (
    <Page name="profile" noNavbar noToolbar>
      <NavbarCustom />
      <div className="wrapper-content">
        <div className="page-profile">
          <div className="profile-top">
            <img className='m-auto' src="/media/icon-app/ic_xin_chao.png" />
          </div>
          <div className="profile-content">
            <div className="profile-title">Thông tin cá nhân</div>
            <div>
              <Row className="mb-10px ai--c">
                <Col width="30">
                  <div className="label-title">Họ và tên</div>
                </Col>
                <Col width="70">
                  <div>
                    <Input
                      type="text"
                      placeholder="Họ và tên"
                      value="Nguyễn Tài Tuấn"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-12px ai--c">
                <Col width="30">
                  <div className="label-title">Số điện thoại</div>
                </Col>
                <Col width="70">
                  <div>
                    <Input
                      type="number"
                      placeholder="Số điện thoại"
                      value="0971021196"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-12px ai--c">
                <Col width="30">
                  <div className="label-title">Hạn đăng ký gói</div>
                </Col>
                <Col width="70">
                  <div className="label-text">Chưa đăng ký gói</div>
                </Col>
              </Row>
              <Row className="ai--c">
                <Col width="30"></Col>
                <Col width="70">
                  <Button className="d--if" raised fill round color="orange">
                    Cập nhập thông tin
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="profile-tabs">
              <Link href="/" className="profile-tabs__item d-block active">
                <div className="img">
                  <img src="/media/icon-app/ic_account.png" />
                </div>
                <div className="title">Thông tin cá nhân</div>
              </Link>
              <Link href="/" className="profile-tabs__item d-block">
                <div className="img">
                  <img src="/media/icon-app/ic_bill.png" />
                </div>
                <div className="title">Thay đổi mật khẩu</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Profile
