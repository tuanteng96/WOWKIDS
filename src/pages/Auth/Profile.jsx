import { Button, Col, Input, Link, Page, Row } from 'framework7-react'
import React from 'react'
import NavbarCustom from '../../components/Navbar/NavbarCustom'
import NavbarProfile from '../../components/Navbar/NavbarProfile'
import { ImagesHelpers } from '../../helpers/ImagesHelpers'

function Profile(props) {
  return (
    <Page name="profile" noNavbar noToolbar style={{ backgroundImage: `url(${ImagesHelpers.BackgroundApp})` }}>
      <NavbarCustom {...props} />
      <div className="wrapper-content pl-15px pr-15px">
        <div className="page-profile">
          <div className="profile-top">
            <img className='m-auto' src="/media/icon-app/ic_xin_chao.png" />
          </div>
          <div className="profile-content">
            <div className="profile-title">Thông tin cá nhân</div>
            <div>
              <Row className="mb-12px ai--c">
                <Col width="30">
                  <div className="label-title">Họ và tên</div>
                </Col>
                <Col width="70">
                  <div>
                    <Input
                      type="text"
                      placeholder="Họ và tên"
                      value="Nguyễn Tài Tuấn"
                      clearButton
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-15px ai--c">
                <Col width="30">
                  <div className="label-title">Số điện thoại</div>
                </Col>
                <Col width="70">
                  <div>
                    <Input
                      type="number"
                      placeholder="Số điện thoại"
                      value="0971021196"
                      clearButton
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mb-15px ai--c">
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
                  <Button className="d--if clickSound" raised fill round color="orange">
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
  )
}

export default Profile
