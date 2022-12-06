import React from "react";
import {Play, Pause} from 'react-feather'
// import PropTypes from "prop-types";

export default function ChartItem({ img, main, sub, rating }) {
  return (
		<div className="relative flex items-center md:justify-between p-4 rounded-[1rem] bg-secondary-bg gap-5 w-full">
			<div className="relative flex flex-col md:flex-row md:gap-4">
				<div className="mb-4 md:mb-0">
					<img src={img} alt="" className="rounded-[0.5rem] w-16 h-16 " />
					{/* Play / Pause button */}
					<div className="absolute inset-0 rounded-[0.5rem] opacity-0 hover:opacity-1 transition-[opacity] grid place-items-center bg-black/10">
						{<Play />}
					</div>
				</div>
				<div className="flex-1">
					<div className="">{main}</div>
					<div className="text-darkgray text-[0.6rem]">{sub}</div>
					<div className="text-[0.7rem] pt-3 md:pt-0">{rating}</div>
				</div>
			</div>

			<div className="absolute md:static top-2 right-2 border-secondary-color border-[1px] h-8 w-8 rounded-full grid place-items-center">
				<img src="./img/Lined-heart.png" alt="Lined-heart" />
			</div>
		</div>
	);
}

// ChartItem.propTypes = {
//   img: PropTypes.string.isRequired,
//   main: PropTypes.string.isRequired,
//   sub: PropTypes.string.isRequired,
//   rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };
