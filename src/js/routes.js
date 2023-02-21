import HomePage from "../pages/Home/index.jsx";
import ProfilePage from "../pages/Auth/Profile.jsx";
import ChangePasswordPage from "../pages/Auth/ChangePassword.jsx";
import LessonsDetailPage from "../pages/Lessons/LessonsDetail.jsx";
import LessonsViewsPage from "../pages/Lessons/LessonsViews.jsx";
import LessonsStartPage from "../pages/Lessons/LessonsStart.jsx";

import LoginPage from "../pages/Auth/Login.jsx";
import RegisterPage from "../pages/Auth/Register.jsx"

import DynamicRoutePage from "../pages/dynamic-route.jsx";
import RequestAndLoad from "../pages/request-and-load.jsx";
import NotFoundPage from "../pages/404.jsx";
import store from "./store.js";
import AuthApi from "../api/AuthApi.js";

var routes = [
  {
    path: "/",
    //component: HomePage,
    async: ({ router, to, resolve }) => {
      const splashScreen = document.getElementById("splash-screen");
      const isSplashScreen = splashScreen.classList.contains("hidden");
      async function requestUser() {
        try {
          if (isSplashScreen) {
            splashScreen.classList.add("hidden");
            resolve({
              component: HomePage,
            });
          } else {
            const { data } = await AuthApi.checkToken();
            store
              .dispatch("setToken", { User: data, Token: data.token })
              .then(() => {
                resolve({
                  component: HomePage,
                });
                splashScreen.classList.add("hidden");
              });
          }
        } catch (error) {
          console.log(error);
          store.dispatch("setLogout").then(() => {
            splashScreen.classList.add("hidden");
          });
        }
      }
      if (store.state.Auth?.Token) {
        requestUser();
      } else {
        splashScreen.classList.add("hidden");
        resolve({
          component: HomePage,
        });
      }
    },
  },
  {
    path: "/profile/",
    component: ProfilePage,
  },
  {
    path: "/change-password/",
    component: ChangePasswordPage,
  },
  {
    path: "/lesson/:lessonIds/",
    component: LessonsDetailPage,
    routes: [
      {
        path: ":lessonId/",
        component: LessonsViewsPage,
        routes: [
          {
            path: ":startId/",
            component: LessonsStartPage,
          }
        ]
      },
    ],
  },
  {
    path: "/login/",
    component: LoginPage,
  },
  {
    path: "/register/",
    component: RegisterPage,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
