import React from "react";
import useGlobalContext from "../../contexts/appContext";

export default function Player({ props }) {
  const { isDesktop } = useGlobalContext();
  return (
    <footer className="flex items-center music-player- fixed bottom-0 inset-x-0 h-[8rem] border-t-[1px] z-20 border-t-secondary-color bg-black/10 backdrop-blur-sm">
      <div className="flex justify-between md:justify-start w-[85%] mx-auto gap-6">
        <div className="flex gap-4 md:w-[20%]">
          <img
            src="./img/Rectangle 21.png"
            alt=""
            className="rounded-2xl h-14 w-14"
          />
          <div className="flex flex-col justify-start gap-1 ">
            <div className="">Seasons In</div>{" "}
            <div className="text-secondary-color text-[0.75rem]">James</div>{" "}
          </div>
        </div>
        <div className="flex-1">
          <div className="music-options- flex items-center justify-end md:justify-center md:gap-8 ">
            {isDesktop ? (
              <img src="./img/shuffle.png" alt="" className="h-4 w-4" />
            ) : (
              ""
            )}
            {isDesktop ? (
              <img src="./img/previous.png" alt="" className="h-4 w-4" />
            ) : (
              ""
            )}
            <img src="./img/play.png" alt="" className="h-12 w-12" />
            <img src="./img/next.png" alt="" className="h-4 w-4" />
            {isDesktop ? (
              <img src="./img/repeate-one.png" alt="" className="h-4 w-4" />
            ) : (
              ""
            )}
          </div>
          {isDesktop ? (
            <div className="progress- pt-6">
              <div className="progress-bar- h-1 rounded-lg bg-secondary-color">
                <div className="relative h-full w-[75%] rounded-lg bg-bright-yellow text-end [&:hover>div]:scale-100">
                  <div className="absolute grid place-items-center border-solid border-[1px] border-white -top-1 -right-1 h-3 w-3 rounded-full scale-0 transition-[transform]">
                    <div className="h-1 w-1 bg-bright-yellow rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {isDesktop ? (
          <div className="flex w-[20%] gap-4 items-center">
            <img src="./img/volume-high.png" alt="volume-high" />
            <div className="progress- flex-1">
              <div className="progress-bar- h-1 rounded-lg bg-secondary-color">
                <div className="relative h-full w-[75%] rounded-lg bg-bright-yellow text-end [&:hover>div]:scale-100">
                  <div className="absolute grid place-items-center border-solid border-[1px] border-white -top-1 -right-1 h-3 w-3 rounded-full scale-0 transition-[transform]">
                    <div className="h-1 w-1 bg-bright-yellow rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </footer>
  );
}
