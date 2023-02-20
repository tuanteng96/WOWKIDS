import React from 'react'
import { Page, Link, Row, Col, f7 } from 'framework7-react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import NavbarCustom from '../../components/Navbar/NavbarCustom'

const perfectScrollbarOptions = {
  wheelSpeed: 1,
  wheelPropagation: false,
}

const HomePage = (props) => {
  return (
    <Page name="home" noNavbar noToolbar>
      <NavbarCustom {...props} />
      {/* Page content */}
      <div className="wrapper-content d--f ai--c">
        <div className="position-relative m-auto">
          <img className="w-100" src="/media/icon-app/ic_may.png" />
          <div className="wrapper-icon">
            <ul>
              <li>
                <img src="/media/icon-app/ic_gt.png" />
              </li>
              <li>
                <img src="/media/icon-app/ic_star.png" />
              </li>
              <li>
                <img src="/media/icon-app/ic_age.png" />
              </li>
              <li>
                <img src="/media/icon-app/ic_protect.png" />
              </li>
            </ul>
          </div>
          <div className="wrapper-list">
            <div className="wrapper-title">Danh sách khóa học</div>
            <PerfectScrollbar
              options={perfectScrollbarOptions}
              className="scroll scroll-hidden fg--1"
            >
              <Row>
                <Col width="33">
                  <Link
                    href="/lesson/1/"
                    className="learning-item fd--c mb-25px"
                  >
                    <div className="learning-item__img">
                      <img
                        className="w-100"
                        src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-xam-hai-tinh-duc_2021-09-22-090404.png"
                        alt="Phòng tránh xâm hại tình dục"
                      />
                    </div>
                    <div className="learning-item__text">
                      Phòng tránh xâm hại tình dục
                    </div>
                  </Link>
                </Col>
                <Col width="33">
                  <Link
                    href="/lesson/1/"
                    className="learning-item fd--c mb-25px"
                  >
                    <div className="learning-item__img">
                      <img
                        className="w-100"
                        src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-duoi-nuoc_2021-05-21-155251.png"
                        alt="Phòng tránh đuối nước"
                      />
                    </div>
                    <div className="learning-item__text">
                      Phòng tránh đuối nước
                    </div>
                  </Link>
                </Col>
                <Col width="33">
                  <Link
                    href="/lesson/1/"
                    className="learning-item fd--c mb-25px"
                  >
                    <div className="learning-item__img">
                      <img
                        className="w-100"
                        src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-tntt-do-te-nga-va-vat-nhon_2021-05-21-155258.png"
                        alt="Phòng tránh TNTT do té ngã và vật nhọn"
                      />
                    </div>
                    <div className="learning-item__text">
                      Phòng tránh TNTT do té ngã và vật nhọn
                    </div>
                  </Link>
                </Col>
                <Col width="33">
                  <Link
                    href="/lesson/1/"
                    className="learning-item fd--c mb-25px"
                  >
                    <div className="learning-item__img">
                      <img
                        className="w-100"
                        src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-cac-benh-dich-lay-nhiem_2021-05-21-155334.png"
                        alt="Phòng tránh các bệnh dịch lây nhiễm"
                      />
                    </div>
                    <div className="learning-item__text">
                      Phòng tránh các bệnh dịch lây nhiễm
                    </div>
                  </Link>
                </Col>
                <Col width="33">
                  <Link
                    href="/lesson/1/"
                    className="learning-item fd--c mb-25px"
                  >
                    <div className="learning-item__img">
                      <img
                        className="w-100"
                        src="https://wowedu.net/Upload/image/2021/05/21/de-co-mot-co-the-khoe-manh_2021-05-21-155340.png"
                        alt="Để có một cơ thể khỏe mạnh"
                      />
                    </div>
                    <div className="learning-item__text">
                      Để có một cơ thể khỏe mạnh
                    </div>
                  </Link>
                </Col>
                <Col width="33">
                  <Link
                    href="/lesson/1/"
                    className="learning-item fd--c mb-25px"
                  >
                    <div className="learning-item__img">
                      <img
                        className="w-100"
                        src="https://wowedu.net/Upload/image/2021/09/23/phong-tranh-chay-no_2021-09-23-084014.png"
                        alt="Phòng tránh cháy nổ"
                      />
                    </div>
                    <div className="learning-item__text">
                      Phòng tránh cháy nổ
                    </div>
                  </Link>
                </Col>
              </Row>
            </PerfectScrollbar>
          </div>
          <div className="wrap-icon-cate">
            <img src="/media/icon-app/ic_giaotiepkheo.png" />
          </div>
        </div>
      </div>
    </Page>
  )
}
export default HomePage
