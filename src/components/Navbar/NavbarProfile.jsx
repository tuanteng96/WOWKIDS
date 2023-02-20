import clsx from 'clsx';
import { Link } from 'framework7-react';
import React, { useEffect, useState } from 'react';

const ProfilePath = [
  {
    Title: "Thông tin cá nhân",
    Url: "/profile/",
    IconUrl: "/media/icon-app/ic_account.png",
  },
  {
    Title: "Thay đổi mật khẩu",
    Url: "/change-password/",
    IconUrl: "/media/icon-app/ic_bill.png",
  },
];

function NavbarProfile({ f7route, ...props }) {

  return (
    <div className="profile-tabs">
      {ProfilePath &&
        ProfilePath.map((item, index) => (
          <Link
            href={item.Url}
            className={clsx(
              "profile-tabs__item d-block",
              f7route.path === item.Url && "active"
            )}
            key={index}
          >
            <div className="img">
              <img src={item.IconUrl} />
            </div>
            <div className="title">{item.Title}</div>
          </Link>
        ))}
    </div>
  );
}

export default NavbarProfile;