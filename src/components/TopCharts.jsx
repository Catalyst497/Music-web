import React from "react";
import ChartItem from "./utilities/ChartItem";

export default function TopCharts() {
  return (
    <div className="top-charts- w-[40%] ml-12 ">
      <div className="title- text-[2rem] font-semibold">Top Charts</div>
      <div className="h-[20rem] overflow-auto">
        <ChartItem
          img="./img/Rectangle 13.png"
          main="Golden Age of 80s"
          sub="Seon Swadder"
          rating={12445}
        />
        <ChartItem
          img="./img/Rectangle 16.png"
          main="Golden Age of 80s"
          sub="Seon Swadder"
          rating={12445}
        />
        <ChartItem
          img="./img/Lead-image.png"
          main="Golden Age of 80s"
          sub="Seon Swadder"
          rating={12445}
        />
      </div>
    </div>
  );
}
