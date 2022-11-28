import React from "react";
import PropTypes from "prop-types";
import "swiper/css";
import { SwiperSlide } from "swiper/react";

export default function SlideItem({ image, title, artist }) {
  return (
    <SwiperSlide className="w-[150px]">
      <div className="">
        <div className="h-32 w-32 rounded-xl overflow-hidden">
          <img src={image} alt={title} />
        </div>
        <h4 className="text-sm font-light">{title}</h4>
        <span className="text-xs font-quicksand text-white/50">{artist}</span>
      </div>
    </SwiperSlide>
  );
}
SlideItem.displayName = "SwiperSlide";

SlideItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
