import { Icon, Page } from 'framework7-react'
import React, { useState } from 'react'

var Acts = [
  {
    LastActionId: 3397,
    Point: 100,
    ID: 18,
    Title: 'Trò chơi: Xác định vùng riêng tư trên cơ thể',
    Photo:
      'https://wowedu.net/upload/image/2021/09/21/tro-choi-xac-dinh-vung-rieng-tu-tren-co-the_2021-09-21-174831.png',
    PhotoDone:
      'https://wowedu.net/upload/image/2021/09/21/tro-choi-xac-dinh-vung-rieng-tu-tren-co-the_2021-09-21-174836.png',
    ScormLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd1/',
    ScormMobileLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd1/',
    MaxPoint: 100.0,
    Order: 1,
    CreateDate: '2021-05-28T16:19:32',
    ProdLessonID: 5,
    dX: 24,
    dY: 294,
    dH: 411,
    dW: 406,
    ZipLink: '/data/zip/18.zip',
  },
  {
    LastActionId: null,
    Point: null,
    ID: 19,
    Title: 'Bài tập tắc nghiệm: Tình huống báo động',
    Photo:
      'https://wowedu.net/upload/image/2021/09/22/bai-tap-tac-nghiem-tinh-huong-bao-dong_2021-09-22-083943.png',
    PhotoDone:
      'https://wowedu.net/upload/image/2021/09/22/bai-tap-tac-nghiem-tinh-huong-bao-dong_2021-09-22-083947.png',
    ScormLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd2/',
    ScormMobileLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd2/',
    MaxPoint: 100.0,
    Order: 2,
    CreateDate: '2021-05-28T17:20:00',
    ProdLessonID: 5,
    dX: 410,
    dY: 626,
    dH: 411,
    dW: 406,
    ZipLink: '',
  },
  {
    LastActionId: null,
    Point: null,
    ID: 20,
    Title: 'Trò chơi: Quy tắc đồ lót',
    Photo:
      'https://wowedu.net/upload/image/2021/09/22/tro-choi-quy-tac-do-lot_2021-09-22-084029.png',
    PhotoDone:
      'https://wowedu.net/upload/image/2021/09/22/tro-choi-quy-tac-do-lot_2021-09-22-084034.png',
    ScormLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd3/',
    ScormMobileLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd3/',
    MaxPoint: 100.0,
    Order: 3,
    CreateDate: '2021-05-28T17:57:57',
    ProdLessonID: 5,
    dX: 797,
    dY: 288,
    dH: 411,
    dW: 406,
    ZipLink: '/data/zip/20.zip',
  },
  {
    LastActionId: null,
    Point: null,
    ID: 21,
    Title: 'Phiếu bài tập: Xác định vòng tròn yêu thương',
    Photo:
      'https://wowedu.net/upload/image/2021/09/22/phieu-bai-tap-xac-dinh-vong-tron-yeu-thuong_2021-09-22-084125.png',
    PhotoDone:
      'https://wowedu.net/upload/image/2021/09/22/phieu-bai-tap-xac-dinh-vong-tron-yeu-thuong_2021-09-22-084134.png',
    ScormLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/hd4/',
    ScormMobileLink: '/Data/5-7/Phong-tranh-xam-hai-tinh-duc/t1/m/hd4/',
    MaxPoint: 100.0,
    Order: 4,
    CreateDate: '2021-05-28T17:59:27',
    ProdLessonID: 5,
    dX: 1175,
    dY: 611,
    dH: 411,
    dW: 406,
    ZipLink: '/data/zip/21.zip',
  },
  {
    LastActionId: null,
    Point: null,
    ID: 22,
    Title: 'Hoàn thành',
    Photo:
      'https://wowedu.net/upload/image/2021/09/22/hoan-thanh_2021-09-22-084315.png',
    PhotoDone:
      'https://wowedu.net/upload/image/2021/09/22/hoan-thanh_2021-09-22-084322.png',
    ScormLink: '',
    ScormMobileLink: '',
    MaxPoint: 0.0,
    Order: 5,
    CreateDate: '2021-05-28T18:02:44',
    ProdLessonID: 5,
    dX: 1365,
    dY: 29,
    dH: 591,
    dW: 531,
    ZipLink: '',
  },
]

function LessonsStart(props) {
    
  const { f7router } = props

  return (
    <Page
      className="page-detail-view"
      name="page-detail-view"
      noNavbar
      noToolbar
    >
      <div
        className="position-absolute w-60px h-60px d--f ai--c jc--c text-white opacity-90"
        onClick={() => f7router.back()}
      >
        <Icon f7="arrow_left" size="38px"></Icon>
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
                className="position-absolute"
                style={{
                  width: `${(item.dW / 1920) * 100}%`,
                  height: `${(item.dH / 1080) * 100}%`,
                  left: `${(item.dX / 1920) * 100}%`,
                  top: `${(item.dY / 1080) * 100}%`,
                }}
                key={index}
              >
                <img
                  className="w-100"
                  src={
                    item.Point || item.Point === 0 ? item.PhotoDone : item.Photo
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </Page>
  )
}
export default LessonsStart
