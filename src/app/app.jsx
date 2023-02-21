import React, { useState } from "react";

import { f7ready, App, View, f7 } from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";

import Mp3Click from "../assets/media/mp3/mp3-click.mp3";

var audio = new Audio(Mp3Click);

const MyApp = () => {
  //const [audio, setAudio] = useState(new Audio(Mp3Click));

  // Framework7 Parameters
  const f7params = {
    name: "WOW Kids", // App name
    version: "1.0",
    iosTranslucentModals: false,
    iosTranslucentBars: false,
    theme: "ios", // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    clicks: {
      externalLinks: ".external",
    },
    dialog: {
      title: "WOW Kids",
      // change default "OK" button text
      buttonOk: "OK",
      buttonCancel: "Đóng",
    },
    notification: {
      closeTimeout: 1000000,
    },
    on: {
      init: function () {
        console.log("App initialized");
      },
      pageInit: function (e) {
        console.log("Page initialized");
        //audio.load();
      },
      click: function ({ target, ...e }) {
        audio.load();
        if (
          (target?.className && target?.className.includes("clickSound")) ||
          (target?.offsetParent?.className &&
            target.offsetParent.className.includes("clickSound")) ||
          (target?.className && target?.className.includes("dialog-button"))
        ) {
          audio.play();
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
  };

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
  });

  return (
    <App {...f7params}>
      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />
    </App>
  );
};
export default MyApp;
