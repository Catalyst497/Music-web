import React from "react";
import PropTypes from "prop-types";

export default function ChartItem({ img, main, sub, rating }) {
  return (
    <div className="flex items-center p-4 rounded-[1rem] bg-secondary-bg gap-5">
      <img src={img} alt="" className="rounded-[0.5rem] w-16 h-16" />
      <div className="flex-1">
        <div className="">{main}</div>
        <div className="text-darkgray text-[0.6rem]">{sub}</div>
        <div className="text-[0.7rem]">{rating}</div>
      </div>
      <div className="border-secondary-color border-[1px] h-8 w-8 rounded-full grid place-items-center">
        <img src="./img/Lined-heart.png" alt="" />
      </div>
    </div>
  );
}

ChartItem.propTypes = {
  img: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
