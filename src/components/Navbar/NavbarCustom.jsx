import { Link } from 'framework7-react'
import React from 'react'

export default function NavbarCustom() {
  return (
    <div className="navbar-custom d--f jc--sb ai--fe">
      <div className="logo-navbar">
        <img src="/media/logos/logo.png" />
      </div>
      <ul className="m-0 p-0 d--f">
        <li>
          <Link className="active" href="/">
            <img src="/media/icon-app/ic_dash_board.png" />
            <img
              className="active"
              src="/media/icon-app/ic_dash_board1.png"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link href="/profile/">
            <img src="/media/icon-app/ic_profile.png" />
            <img className="active" src="/media/icon-app/ic_profile1.png" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <img src="/media/icon-app/ic_logout.png" />
            <img className="active" src="/media/icon-app/ic_logout1.png" />
          </Link>
        </li>
      </ul>
    </div>
  )
}
