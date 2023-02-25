import clsx from "clsx";
import { Link } from "framework7-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImagesHelpers } from "../../helpers/ImagesHelpers";

const PagePath = [
  {
    IconUrl: ImagesHelpers.Icon_Dashboard,
    ActiveIconUrl: ImagesHelpers.Icon_Dashboard_Active,
    Url: "/",
    Title: "Trang chủ",
  },
  {
    IconUrl: ImagesHelpers.Icon_Profile,
    ActiveIconUrl: ImagesHelpers.Icon_Profile_Active,
    Url: "/profile/",
    Title: "Thông tin cá nhân",
    ActiveArr: ["/change-password/"],
  },
];

export default function NavbarCustom({ f7route, ...props }) {
  return (
    <div className="navbar-custom d--f jc--sb ai--fe">
      <div className="logo-navbar">
        <LazyLoadImage
          className="w-100 image-fit-cover"
          effect="blur"
          src={ImagesHelpers.LogoApp}
        />
      </div>
      {
        <ul className="m-0 p-0 d--f">
          {PagePath &&
            PagePath.map((item, index) => (
              <li key={index}>
                <Link
                  className={clsx(
                    "clickSound ratio-1-1",
                    (f7route.path === item.Url || item.ActiveArr && item.ActiveArr.includes(f7route.path)) && "active"
                  )}
                  href={item.Url}
                >
                  <LazyLoadImage
                    className="w-100 image-fit-cover"
                    effect="blur"
                    src={item.IconUrl}
                  />
                  <LazyLoadImage
                    className="w-100 image-fit-cover"
                    effect="blur"
                    src={item.ActiveIconUrl}
                    wrapperClassName="active w-100 m-0"
                  />
                </Link>
              </li>
            ))}
          <li>
            <Link className="clickSound ratio-1-1" href="/">
              <LazyLoadImage
                className="w-100 image-fit-cover"
                effect="blur"
                src={ImagesHelpers.Icon_Logout}
              />
            </Link>
          </li>
        </ul>
      }
    </div>
  );
}
