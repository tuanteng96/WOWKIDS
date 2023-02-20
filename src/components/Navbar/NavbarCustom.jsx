import clsx from "clsx";
import { Link } from "framework7-react";
import React from "react";

const PagePath = [
  {
    IconUrl: "/media/icon-app/ic_dash_board.png",
    ActiveIconUrl: "/media/icon-app/ic_dash_board1.png",
    Url: "/",
    Title: "Trang chủ",
  },
  {
    IconUrl: "/media/icon-app/ic_profile.png",
    ActiveIconUrl: "/media/icon-app/ic_profile1.png",
    Url: "/profile/",
    Title: "Thông tin cá nhân",
  },
];

export default function NavbarCustom({ f7route, ...props }) {
  return (
    <div className="navbar-custom d--f jc--sb ai--fe">
      <div className="logo-navbar">
        <img src="/media/logos/logo.png" />
      </div>
      <ul className="m-0 p-0 d--f">
        {PagePath &&
          PagePath.map((item, index) => (
            <li key={index}>
              <Link
                className={clsx(f7route.path === item.Url && "active")}
                href={item.Url}
              >
                <img src={item.IconUrl} />
                <img className="active" src={item.ActiveIconUrl} />
              </Link>
            </li>
          ))}
        <li>
          <Link href="/">
            <img src="/media/icon-app/ic_logout.png" />
            <img className="active" src="/media/icon-app/ic_logout1.png" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
