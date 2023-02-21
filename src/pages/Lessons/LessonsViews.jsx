import React from 'react'
import { Icon, Page } from 'framework7-react'

const getHeightView = (count) => {
  if (count <= 2) {
    return '80%'
  } else if (count === 3) {
    return '46%'
  } else {
    return '50%'
  }
}

function LessonsViews(props) {
  const {f7router, f7route} = props
  
  const handleClick = () => {
    f7router.navigate(f7route.path + '1' + '/')
  }

  return (
    <Page
      className="page-detail-view"
      name="page-detail-view"
      noNavbar
      noToolbar
    >
      <div
        className="position-absolute w-60px h-60px d--f ai--c jc--c text-white opacity-90 clickSound"
        onClick={() => f7router.back()}
      >
        <Icon f7="arrow_left" size="32px"></Icon>
      </div>
      <div className="w-100 h-100 text-center">
        <div className="h-100 d-inline-block position-relative">
          <img
            className="h-100"
            src="https://wowedu.net/upload/image/2021/09/22/phong-tranh-xam-hai-tinh-duc_2021-09-22-090457.jpg"
          />
          <div
            className="detail-view-content position-absolute w-100 h-100 top-0 left-0 d--f jc--c ai--c"
            style={{ "--f7-image-view-width": getHeightView(2) }}
          >
            <div className="view-list">
              <div className="view-list__col">
                <div
                  className="view-list__item current-view"
                  onClick={() => handleClick()}
                >
                  <img
                    className="clickSound"
                    src="https://wowedu.net/Upload/image/2021/09/21/tiet-1_2021-09-21-174416.png"
                  />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item" onClick={() => handleClick()}>
                  <img
                    className="clickSound"
                    src="https://wowedu.net/Upload/image/2021/09/21/tiet-2_2021-09-21-174631.png"
                  />
                </div>
              </div>

              {/* <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/be-canh-giac_2021-09-22-093845.png" />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/ung-pho-tai-tinh_2021-09-22-094059.png" />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/be-vung-vang_2021-09-22-095645.png" />
                </div>
              </div> */}

              {/* <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/tim-hieu-chung-ve-benh-dich_2021-09-22-140902.png" />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-benh-sot-xuat-huyet_2021-09-22-141759.png" />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-benh-tay-chan-mieng_2021-09-22-142037.png" />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/10/06/phong-tranh-benh-dau-mat-do_2021-10-06-134344.png" />
                </div>
              </div>
              <div className="view-list__col">
                <div className="view-list__item">
                  <img src="https://wowedu.net/Upload/image/2021/09/22/phong-tranh-benh-dich-covid-19_2021-09-22-143008.png" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default LessonsViews
