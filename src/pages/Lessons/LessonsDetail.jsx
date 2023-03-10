import React, { useRef, useState } from "react";
import {
  Page,
  Icon,
  Swiper,
  SwiperSlide,
  Sheet,
} from "framework7-react";
import PerfectScrollbar from "react-perfect-scrollbar";
import NavbarCustom from "../../components/Navbar/NavbarCustom";
import HomeLayout from "../../layout/HomeLayout";
import { ImagesHelpers } from "../../helpers/ImagesHelpers";

const perfectScrollbarOptions = {
  wheelSpeed: 1,
  wheelPropagation: false,
};

const LessonsDetail = (props) => {
  const { f7router, f7route } = props;
  const [opened, setOpened] = useState(false);
  const refVideo = useRef();

  const openVideos = () => {
    refVideo?.current.play();
    setOpened(true);
  };
  const hideVideos = () => {
    refVideo?.current.pause();
    refVideo?.current.load();
    setOpened(false);
  };

  return (
    <Page
      name="page-detail"
      noNavbar
      noToolbar
      style={{ backgroundImage: `url(${ImagesHelpers.BackgroundApp})` }}
    >
      <NavbarCustom {...props} />
      {/* Page content */}
      <HomeLayout>
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
          <div className="wrapper-title-detail">
            <div className="detail-title">Phòng chống xâm hại tình dục</div>
            <div
              className="detail-btn-video clickSound"
              onClick={() => openVideos()}
            >
              <Icon f7="videocam_fill" color="orange" />
              Xem video giới thiệu
            </div>
          </div>
          <PerfectScrollbar
            options={perfectScrollbarOptions}
            className="scroll fg--1"
          >
            <div className="page-detail__post">
              Xâm hại tình dục là một trong những nguy cơ lớn đối với trẻ em ở
              mọi lứa tuổi, giới tính. <br />
              Nhận biết được những ảnh hưởng xấu và hậu quả nghiêm trọng của xâm
              hại tình dục mà nạn nhân là trẻ em. <br />
              Nhận thức được: tất cả mọi người đều có thể là nạn nhân của quấy
              rối, xâm hại tình dục và kẻ quấy rối và xâm hại tình dục có thể là
              bất kỳ ai. <br />
              Nêu được các hành vi xâm hại tình dục. <br />
              Hiểu được các hành vi quấy rối và xâm hại tình dục là hành vi sai
              trái, vi phạm đạo đức và vi phạm pháp luật và người bị quấy rối,
              bị xâm hại tình dục không bao giờ là người có lỗi.
            </div>
          </PerfectScrollbar>
        </div>
        <div className="wrap-list-thumbnail">
          <Swiper scrollbar loop pagination>
            <SwiperSlide>
              <img src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-xam-hai-tinh-duc_2021-09-22-090404.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wowedu.net/Upload/image/2021/05/28/anh-minh-hoa-1_2021-05-28-152816.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wowedu.net/Upload/image/2021/05/28/anh-minh-hoa-2_2021-05-28-152820.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wowedu.net/Upload/image/2021/05/28/anh-minh-hoa-3_2021-05-28-152823.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wowedu.net/Upload/image/2021/05/28/anh-minh-hoa-4_2021-05-28-152826.png" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="wrap-back clickSound" onClick={() => f7router.back()}>
          <img src="/media/icon-app/ic_back.png" />
        </div>
        <div
          className="wrap-next clickSound"
          onClick={() => f7router.navigate(f7route.path + "1" + "/")}
        >
          Học trực tuyến
          <Icon className="pl-5px" f7="chevron_right_2" color="white" />
        </div>
      </HomeLayout>

      <Sheet
        style={{ height: "100%", "--f7-sheet-bg-color": "#222" }}
        swipeToClose
        backdrop
        onSheetClosed={() => hideVideos()}
        opened={opened}
      >
        <div
          className="position-absolute top-0 left-0 w-70px h-70px zindex-10 d--f ai--c jc--c clickSound"
          onClick={() => hideVideos()}
        >
          <img className="w-40px" src="/media/icon-app/ic-close.png" />
        </div>
        <video
          className="w-100 h-100 position-absolute top-0 left-0"
          controls
          ref={refVideo}
          controlsList="nodownload"
          playsInline
        >
          <source
            src="https://wowedu.net/Data/5-7/Phong-tranh-xam-hai-tinh-duc/video/T1.mp4"
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Sheet>
    </Page>
  );
};
export default LessonsDetail;
