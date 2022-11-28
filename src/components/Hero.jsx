import React from "react";
import { Heart } from "react-feather";
import TopCharts from "./TopCharts";

export default function Main() {
  return (
    <section className="flex">
      <div className=" flex rounded-3xl bg-average-blue overflow-hidden ">
        <div className="w-[50%] py-12 pl-12 flex flex-col justify-between">
          <div>Current Playlist</div>
          <div>
            <div className="text-[3rem] font-semibold">R & B Hits</div>
            <div>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="./img/Likers.png" alt="" />
            <div className="flex items-center gap-2">
              <img src="./img/Heart.png" alt="" className="w-4 h-4" /> 33k Likes
            </div>
          </div>
        </div>
        <div className="bg-[url('./img/Vector.svg')] bg-cover w-[60%] flex justify-end">
          <img src="./img/Nigga.png" alt="" className="h-full" />
        </div>
      </div>
      <TopCharts />
    </section>
  );
}
