import React, { useContext } from "react";
import { Heart } from "react-feather";
import useGlobalContext from "../contexts/appContext";
import TopCharts from "./TopCharts";

export default function Main() {
  const {isDesktop} = useGlobalContext()
  return (
		<section className="flex flex-col md:flex-row pt-20 md:p-0 px-4 md:px-0">
			<div className="relative flex flex-col md:flex-row rounded-3xl bg-average-blue overflow-hidden ">
				<div className="md:w-[50%] py-12 pl-12 flex flex-col md:gap-0 gap-[12rem] justify-between">
					<div>Current Playlist</div>
					<div>
						<div className="text-[3rem] font-semibold">R & B Hits</div>
						<div>
							All mine, Lie again, Petty call me everyday, Out of time, No love,
							Bad habit, and so much more
						</div>
						<div className="flex items-center gap-4 pt-4">
							<img src="./img/Likers.png" alt="" />
							<div className="flex items-center gap-2 md:mt-0">
								<img src="./img/Heart.png" alt="" className="w-4 h-4" /> 33k
								Likes
							</div>
						</div>
					</div>
				</div>
				<div
					className={`bg-[url('./img/Vector.svg')] bg-cover md:w-[60%] flex justify-end ${
						isDesktop
							? ''
							: 'absolute -top-10 -right-0 h-[20rem] w-[15rem] rotate-[270deg]'
					}`}
				>
					{isDesktop ? (
						<img src="./img/Nigga.png" alt="" className="h-full" />
					) : (
						''
					)}
				</div>
			</div>
			<TopCharts />
		</section>
	);
}
