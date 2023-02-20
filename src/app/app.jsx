import React from "react";

import {
  f7ready,
  App,
  View
} from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";
import Mp3Click from '../assets/media/mp3/mp3-click.wav';
import useSound from "use-sound";


const MyApp = () => {
  const [playClick] = useSound(Mp3Click);

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
      externalLinks: '.external',
      playClick: playClick
    },
    dialog: {
      title: "WOW Kids",
      // change default "OK" button text
      buttonOk: "OK",
      buttonCancel: "Đóng",
    },
    on: {
      init: function () {
        console.log("App initialized");
      },
      pageInit: function () {
        console.log("Page initialized");
      },
    },
    view: {
      allowDuplicateUrls: true,
      xhrCache: false,
      pushState: true,
    },
    touch: {
      activeState: true,
    }
  };

  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <App {...f7params}>
      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />
    </App>
  );
};
export default MyApp;
