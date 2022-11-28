import React from 'react';
import useGlobalContext from '../contexts/appContext';

export default function Cover() {
	const { isDesktop } = useGlobalContext();
	return (
		<div className="flex md:flex-row flex-col items-center md:items-stretch gap-12 ">
			<img src="./img/Lead-image.png" className="w-full md:w-auto rounded-2xl" />
			<div className="flex flex-col justify-end max-w-[35rem] pb-4">
				<div className="font-semibold text-[2rem] text-[#A4C7C6]">
					Tomorrow's Tunes
				</div>
				<div>
					<p className="mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
						possimus libero atque alias? Suscipit fugit optio sapiente! Quasi,
						tempore eius.
					</p>
					<p>64 songs - 16 hrs+</p>
				</div>

				<div className="flex gap-2 md:gap-4 mt-12">
					<div className="flex item-center rounded-2xl md:gap-4 gap-2 px-2 md:px-4 h-6 bg-[rgb(255,255,255,0.1)] justify-center items-center">
						<img src="./img/music-square-add.png" alt="" />
						Play all<div></div>
					</div>
					<div className="flex item-center rounded-2xl md:gap-4 gap-2 px-2 md:px-4 h-6 bg-[rgb(255,255,255,0.1)] justify-center items-center">
						<img src="./img/Play-small.png" alt="" />
						<div>Add to collection</div>
					</div>
					<div className="flex rounded-2xl md:rounded-full md:gap-4 gap-2 px-2 md:px-0 md:w-6 h-6 bg-[rgb(255,255,255,0.1)] justify-center items-center">
						<img src="./img/Heart-small.png" alt="" className="w-3 h-3" />
						{!isDesktop && <span>Like</span>}
					</div>
				</div>
			</div>
		</div>
	);
}
