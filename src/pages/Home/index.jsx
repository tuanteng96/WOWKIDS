import React from "react";
import { Page, Link, Row, Col, f7 } from "framework7-react";
import PerfectScrollbar from "react-perfect-scrollbar";
import NavbarCustom from "../../components/Navbar/NavbarCustom";
import HomeLayout from "../../layout/HomeLayout";
import { ImagesHelpers } from "../../helpers/ImagesHelpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import WrapperIcon from "../../components/Wrapper/WrapperIcon";

const perfectScrollbarOptions = {
  wheelSpeed: 1,
  wheelPropagation: false,
};

const HomePage = (props) => {
  const { f7router } = props;
  const checkLogin = () => {
    f7.dialog
      .create({
        text: "Vui lòng đăng nhập để học bài tiếp theo.",
        cssClass: "dialog-error",
        closeByBackdropClick: "true",
        buttons: [
          {
            text: "Hủy",
          },
          {
            text: "Đồng ý",
            onClick: function () {
              f7router.navigate("/login/");
            },
          },
        ],
      })
      .open();
  };

  return (
    <Page
      name="home"
      noNavbar
      noToolbar
      style={{ backgroundImage: `url(${ImagesHelpers.BackgroundApp})` }}
    >
      <NavbarCustom {...props} />
      {/* Page content */}
      <HomeLayout>
        <WrapperIcon />
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
                  className="clickSound learning-item fd--c mb-25px"
                >
                  <div className="learning-item__img w-100 ratio-1-1">
                    <LazyLoadImage
                      className="w-100 ratio-1-1 image-fit-cover"
                      alt="Phòng tránh xâm hại tình dục"
                      effect="blur"
                      src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-xam-hai-tinh-duc_2021-09-22-090404.png"
                    />
                  </div>
                  <div className="learning-item__text">
                    Phòng tránh xâm hại tình dục
                  </div>
                </Link>
              </Col>
              <Col width="33">
                <Link
                  onClick={() => checkLogin()}
                  className="clickSound learning-item fd--c mb-25px"
                >
                  <div className="learning-item__img w-100 ratio-1-1">
                    <LazyLoadImage
                      className="w-100 ratio-1-1 image-fit-cover"
                      alt="Phòng tránh đuối nước"
                      effect="blur"
                      src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-duoi-nuoc_2021-05-21-155251.png"
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
                  className="clickSound learning-item fd--c mb-25px"
                >
                  <div className="learning-item__img w-100 ratio-1-1">
                    <LazyLoadImage
                      className="w-100 ratio-1-1 image-fit-cover"
                      alt="Phòng tránh TNTT do té ngã và vật nhọn"
                      effect="blur"
                      src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-tntt-do-te-nga-va-vat-nhon_2021-05-21-155258.png"
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
                  className="clickSound learning-item fd--c mb-25px"
                >
                  <div className="learning-item__img w-100 ratio-1-1">
                    <LazyLoadImage
                      className="w-100 ratio-1-1 image-fit-cover"
                      alt="Phòng tránh các bệnh dịch lây nhiễm"
                      effect="blur"
                      src="https://wowedu.net/Upload/image/2021/05/21/phong-tranh-cac-benh-dich-lay-nhiem_2021-05-21-155334.png"
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
                  className="clickSound learning-item fd--c mb-25px"
                >
                  <div className="learning-item__img w-100 ratio-1-1">
                    <LazyLoadImage
                      className="w-100 ratio-1-1 image-fit-cover"
                      alt="Để có một cơ thể khỏe mạnh"
                      effect="blur"
                      src="https://wowedu.net/Upload/image/2021/05/21/de-co-mot-co-the-khoe-manh_2021-05-21-155340.png"
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
                  className="clickSound learning-item fd--c mb-25px"
                >
                  <div className="learning-item__img w-100 ratio-1-1">
                    <LazyLoadImage
                      className="w-100 ratio-1-1 image-fit-cover"
                      alt="Phòng tránh cháy nổ"
                      effect="blur"
                      src="https://wowedu.net/Upload/image/2021/09/23/phong-tranh-chay-no_2021-09-23-084014.png"
                    />
                  </div>
                  <div className="learning-item__text">Phòng tránh cháy nổ</div>
                </Link>
              </Col>
            </Row>
          </PerfectScrollbar>
        </div>
        <div className="wrap-icon-cate">
          <LazyLoadImage
            className="w-100 image-fit-cover"
            effect="blur"
            src={ImagesHelpers.Icon_GiaoTiepKheo}
          />
        </div>
      </HomeLayout>
    </Page>
  );
};
export default HomePage;
