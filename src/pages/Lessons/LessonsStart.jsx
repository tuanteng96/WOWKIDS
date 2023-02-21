import clsx from "clsx";
import { Icon, Page, PageContent, Sheet } from "framework7-react";
import React, { useEffect, useRef, useState } from "react";

var Acts = [
  {
    LastActionId: 3397,
    Point: 100,
    ID: 18,
    Title: "Trò chơi: Xác định vùng riêng tư trên cơ thể",
    Photo:
      "https://wowedu.net/upload/image/2021/09/21/tro-choi-xac-dinh-vung-rieng-tu-tren-co-the_2021-09-21-174831.png",
    PhotoDone:
      "https://wowedu.net/upload/image/2021/09/21/tro-choi-xac-dinh-vung-rieng-tu-tren-co-the_2021-09-21-174836.png",
    ScormLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd1/",
    ScormMobileLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd1/",
    MaxPoint: 100.0,
    Order: 1,
    CreateDate: "2021-05-28T16:19:32",
    ProdLessonID: 5,
    dX: 24,
    dY: 294,
    dH: 411,
    dW: 406,
    ZipLink: "/data/zip/18.zip",
    sW: "48.5222%",
    sH: "17.0316%",
    sB: "-5%",
  },
  {
    LastActionId: null,
    Point: null,
    ID: 19,
    Title: "Bài tập tắc nghiệm: Tình huống báo động",
    Photo:
      "https://wowedu.net/upload/image/2021/09/22/bai-tap-tac-nghiem-tinh-huong-bao-dong_2021-09-22-083943.png",
    PhotoDone:
      "https://wowedu.net/upload/image/2021/09/22/bai-tap-tac-nghiem-tinh-huong-bao-dong_2021-09-22-083947.png",
    ScormLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd2/",
    ScormMobileLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd2/",
    MaxPoint: 100.0,
    Order: 2,
    CreateDate: "2021-05-28T17:20:00",
    ProdLessonID: 5,
    dX: 410,
    dY: 626,
    dH: 411,
    dW: 406,
    ZipLink: "",
    sW: "48.5222%",
    sH: "17.0316%",
    sB: "-5%",
  },
  {
    LastActionId: null,
    Point: null,
    ID: 20,
    Title: "Trò chơi: Quy tắc đồ lót",
    Photo:
      "https://wowedu.net/upload/image/2021/09/22/tro-choi-quy-tac-do-lot_2021-09-22-084029.png",
    PhotoDone:
      "https://wowedu.net/upload/image/2021/09/22/tro-choi-quy-tac-do-lot_2021-09-22-084034.png",
    ScormLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd3/",
    ScormMobileLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd3/",
    MaxPoint: 100.0,
    Order: 3,
    CreateDate: "2021-05-28T17:57:57",
    ProdLessonID: 5,
    dX: 797,
    dY: 288,
    dH: 411,
    dW: 406,
    ZipLink: "/data/zip/20.zip",
    sW: "48.5222%",
    sH: "17.0316%",
    sB: "-5%",
  },
  {
    LastActionId: null,
    Point: null,
    ID: 21,
    Title: "Phiếu bài tập: Xác định vòng tròn yêu thương",
    Photo:
      "https://wowedu.net/upload/image/2021/09/22/phieu-bai-tap-xac-dinh-vong-tron-yeu-thuong_2021-09-22-084125.png",
    PhotoDone:
      "https://wowedu.net/upload/image/2021/09/22/phieu-bai-tap-xac-dinh-vong-tron-yeu-thuong_2021-09-22-084134.png",
    ScormLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd4/",
    ScormMobileLink: "/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd4/",
    MaxPoint: 100.0,
    Order: 4,
    CreateDate: "2021-05-28T17:59:27",
    ProdLessonID: 5,
    dX: 1175,
    dY: 611,
    dH: 411,
    dW: 406,
    ZipLink: "/data/zip/21.zip",
    sW: "48.5222%",
    sH: "17.0316%",
    sB: "-5%",
  },
  {
    LastActionId: null,
    Point: null,
    ID: 22,
    Title: "Hoàn thành",
    Photo:
      "https://wowedu.net/upload/image/2021/09/22/hoan-thanh_2021-09-22-084315.png",
    PhotoDone:
      "https://wowedu.net/upload/image/2021/09/22/hoan-thanh_2021-09-22-084322.png",
    ScormLink: "",
    ScormMobileLink: "",
    MaxPoint: 0.0,
    Order: 5,
    CreateDate: "2021-05-28T18:02:44",
    ProdLessonID: 5,
    dX: 1365,
    dY: 29,
    dH: 591,
    dW: 531,
    ZipLink: "",
    sW: "48.5222%",
    sH: "17.0316%",
    sB: "-5%",
  },
];

function LessonsStart(props) {
  const { f7router } = props;
  const [audioPage] = useState(new Audio("https://wowedu.net/Data/5-7/Phong-tranh-xam-hai-tinh-duc/mp3/t1.mp3"));
  const [openedIfame, setOpenedIfame] = useState(false);
  const [openedVideo, setOpenedVideo] = useState(false);
  const refVideo = useRef();

  useEffect(() => {
    openVideos();
  }, []);

  useEffect(() => {
    if(!openedVideo && !openedIfame) {
        audioPage?.play()
        audioPage.loop = true
    }
    else {
        audioPage?.pause()
    }
  },[openedIfame, openedVideo])

  const openIframes = () => {
    setOpenedIfame(true);
  };
  const hideIframes = () => {
    setOpenedIfame(false);
  };

  const openVideos = () => {
    refVideo?.current.play();
    setOpenedVideo(true);
  };
  const hideVideos = () => {
    refVideo?.current.pause();
    refVideo?.current.load();
    setOpenedVideo(false);
  };

  return (
    <Page
      className="page-detail-view"
      name="page-detail-view"
      noNavbar
      noToolbar
      onPageAfterOut={() => audioPage?.pause()}
    >
      <div
        className="clickSound position-absolute w-60px h-60px d--f ai--c jc--c text-white opacity-90"
        onClick={() => f7router.back()}
      >
        <Icon f7="arrow_left" size="32px"></Icon>
      </div>
      <div className="w-100 h-100 text-center">
        <div className="h-100 d-inline-block position-relative">
          <img
            className="h-100"
            src="https://wowedu.net/Upload/image/2021/09/21/tiet-1_2021-09-21-174420.png"
          />
          {Acts &&
            Acts.map((item, index) => (
              <div
                className={clsx("position-absolute", index === 1 && "currentX")}
                style={{
                  width: `${(item.dW / 1920) * 100}%`,
                  height: `${(item.dH / 1080) * 100}%`,
                  left: `${(item.dX / 1920) * 100}%`,
                  top: `${(item.dY / 1080) * 100}%`,
                }}
                onClick={() => openIframes()}
                key={index}
              >
                <img
                  className="w-100 clickSound"
                  src={
                    item.Point || item.Point === 0 ? item.PhotoDone : item.Photo
                  }
                />
                {index !== 4 && (
                  <div
                    className="star position-absolute position-x-center"
                    style={{ width: item.sW, height: item.sH, bottom: item.sB }}
                  >
                    <img
                      className="w-100"
                      src="https://wowedu.net/upload/image/2021/09/22/phong-tranh-xam-hai-tinh-duc_2021-09-22-090641.png"
                    />
                  </div>
                )}
              </div>
            ))}
          <div
            className="btn-play-video clickSound"
            onClick={() => openVideos()}
          >
            <svg
              version="1.1"
              id="play"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              height="100px"
              width="100px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <path
                className="stroke-solid"
                fill="none"
                stroke="#ddbe72"
                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
    C97.3,23.7,75.7,2.3,49.9,2.5"
              />
              <path
                className="icon"
                fill="#ddbe72"
                d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Sheet
        style={{ height: "100%", "--f7-sheet-bg-color": "#222" }}
        swipeToClose
        backdrop
        onSheetClosed={() => hideIframes()}
        opened={openedIfame}
      >
        <div
          className="position-absolute top-0 left-0 w-70px h-70px zindex-10 d--f ai--c jc--c clickSound"
          onClick={() => hideIframes()}
        >
          <img className="w-40px" src="/media/icon-app/ic-close.png" />
        </div>
        <iframe
          className="w-100 h-100 d-block"
          src="https://cser.vn/1/story.html"
          frameBorder="0"
        ></iframe>
      </Sheet>
      <Sheet
        style={{ height: "100%", "--f7-sheet-bg-color": "#222" }}
        swipeToClose
        backdrop
        onSheetClosed={() => hideVideos()}
        opened={openedVideo}
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
}
export default LessonsStart;
