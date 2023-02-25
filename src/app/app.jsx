import React, { useState } from 'react'

import { f7ready, App, View, f7 } from 'framework7-react'

import routes from '../js/routes'
import store from '../js/store'

import Mp3Click from '../assets/media/mp3/mp3-click.mp3'

var audio = new Audio(Mp3Click)

const MyApp = () => {
  //const [audio, setAudio] = useState(new Audio(Mp3Click));

  // Framework7 Parameters
  const f7params = {
    name: 'WOW Kids', // App name
    version: '1.0',
    iosTranslucentModals: false,
    iosTranslucentBars: false,
    theme: 'ios', // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    clicks: {
      externalLinks: '.external',
    },
    dialog: {
      title: 'WOW Kids',
      // change default "OK" button text
      buttonOk: 'OK',
      buttonCancel: 'Đóng',
    },
    notification: {
      closeTimeout: 1000000,
    },
    on: {
      init: function () {
        console.log('App initialized')
        const { ipad } = f7.device
        //
        const heightNavbar = 57

        // Ipad bỏ padding top Navbar Custom
        if (!ipad) {
          document.documentElement.style.setProperty(
            '--f7-wrapper-padding-top',
            heightNavbar + 'px',
          )
        }

        // Set Root height Navbar custom Navbar Custom
        document.documentElement.style.setProperty(
          '--f7-safe-area-navbar',
          heightNavbar + 'px',
        )
        const { width, height } = {
          width: window.innerWidth,
          height: window.innerHeight - heightNavbar,
        }
        const wIMG = 1120
        const hIMG = 512
        if (width / height < wIMG / hIMG) {
          document.documentElement.style.setProperty('--f7-wrapper-pading-right', '40px')
          document.documentElement.style.setProperty('--f7-wrapper-pading-left', '40px')
          document.documentElement.style.setProperty('--width-image', '100%')
        } else {
          const newWIMG = height / 512 * wIMG
          if(width - newWIMG < 80) {
            document.documentElement.style.setProperty('--f7-wrapper-pading-right', '40px')
            document.documentElement.style.setProperty('--f7-wrapper-pading-left', '40px')
          }
          document.documentElement.style.setProperty('--height-image', '100%')
        }
      },
      pageInit: function (e) {
        console.log('Page initialized')
        //audio.load();
      },
      click: function ({ target, ...e }) {
        audio.load()
        if (
          (target?.className && target?.className.includes('clickSound')) ||
          (target?.offsetParent?.className &&
            target.offsetParent.className.includes('clickSound')) ||
          (target?.className && target?.className.includes('dialog-button'))
        ) {
          audio.play()
        }
      },
    },
    view: {
      allowDuplicateUrls: true,
      xhrCache: false,
      pushState: true,
    },
    touch: {
      activeState: true,
    },
  }

  f7ready(() => {
    // Call F7 APIs here
    // f7.notification
    //   .create({
    //     title: "Vui lòng thanh toán để có thể học bài tiếp theo!",
    //     subtitle: "abc",
    //     icon: '<img src="/media/icon-app/ic_package1.png" />',
    //     text: "Vui lòng đăng nhập để học bài tiếp theo.",
    //     cssClass: "notification-error",
    //     closeOnClick: true,
    //     on: {
    //       opened: function () {
    //         console.log('Notification opened')
    //       },
    //       click: () => {
    //         console.log('Notification click')
    //       }
    //     }
    //   })
    //   .open();
  })

  return (
    <App {...f7params}>
      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />
    </App>
  )
}
export default MyApp
