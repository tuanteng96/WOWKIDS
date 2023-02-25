import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImagesHelpers } from "../../helpers/ImagesHelpers";

function WrapperIcon(props) {
  return (
    <div className="wrapper-icon">
      <ul>
        <li className="ratio-1-1">
          <LazyLoadImage
            className="w-100 image-fit-cover"
            effect="blur"
            src={ImagesHelpers.Icon_GT}
          />
        </li>
        <li className="ratio-1-1">
          <LazyLoadImage
            className="w-100 image-fit-cover"
            effect="blur"
            src={ImagesHelpers.Icon_Star}
          />
        </li>
        <li className="ratio-1-1">
          <LazyLoadImage
            className="w-100 image-fit-cover"
            effect="blur"
            src={ImagesHelpers.Icon_Age}
          />
        </li>
        <li className="ratio-1-1">
          <LazyLoadImage
            className="w-100 image-fit-cover"
            effect="blur"
            src={ImagesHelpers.Icon_Orotect}
          />
        </li>
      </ul>
    </div>
  );
}

export default WrapperIcon;
