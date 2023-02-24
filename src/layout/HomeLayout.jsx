import clsx from "clsx";
import React from "react";

function HomeLayout({ children }) {
  return (
    <div className="wrapper-content d--f ai--c">
      <div
        className={clsx(
          "position-relative m-auto",
          getComputedStyle(document.body).getPropertyValue("--height-image") ===
            "100%"
            ? "h-100"
            : "w-100"
        )}
      >
        <img
          className={clsx(
            getComputedStyle(document.body).getPropertyValue(
              "--height-image"
            ) === "100%"
              ? "h-100"
              : "w-100"
          )}
          src="/media/icon-app/ic_may.png"
        />
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
