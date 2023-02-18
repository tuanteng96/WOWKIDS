import React from "react";
import { Page, Link } from "framework7-react";

const HomePage = () => (
  <Page name="home" noNavbar noToolbar>
    <div className="navbar-custom d--f jc--sb ai--fe">
      <div className="logo-navbar">
        <img src="/media/logos/logo.png" />
      </div>
      <ul className="m-0 p-0 d--f">
        <li>
          <Link className="active" href="/">
            <img src="/media/icon-app/ic_dash_board.png" />
            <img
              className="active"
              src="/media/icon-app/ic_dash_board1.png"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/media/icon-app/ic_profile.png" />
            <img className="active" src="/media/icon-app/ic_profile1.png" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/media/icon-app/ic_logout.png" />
            <img className="active" src="/media/icon-app/ic_logout1.png" />
          </Link>
        </li>
      </ul>
    </div>
    {/* Page content */}
    <div className="wrapper-content d--f ai--c">
      <div className="position-relative">
        <img src="/media/icon-app/ic_may.png" />
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
          <div className="">
            <div>
              <div className="item">
                <div className="img">
                  <img
                    src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-xam-hai-tinh-duc_2021-09-22-090404.png"
                    alt="Phòng tránh xâm hại tình dục"
                  />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img
                    src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-duoi-nuoc_2021-05-21-155251.png"
                    alt="Phòng tránh đuối nước"
                  />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img
                    src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-tntt-do-te-nga-va-vat-nhon_2021-05-21-155258.png"
                    alt="Phòng tránh TNTT do té ngã và vật nhọn"
                  />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img
                    src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-cac-benh-dich-lay-nhiem_2021-05-21-155334.png"
                    alt="Phòng tránh các bệnh dịch lây nhiễm"
                  />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img
                    src="https://wowedu.net/Upload/image/2021/05/21/de-co-mot-co-the-khoe-manh_2021-05-21-155340.png"
                    alt="Để có một cơ thể khỏe mạnh"
                  />
                </div>
              </div>
              <div className="item">
                <div className="img">
                  <img
                    src="https://wowedu.net/Upload/image/2021/09/23/phong-tranh-chay-no_2021-09-23-084014.png"
                    alt="Phòng tránh cháy nổ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
export default HomePage;
