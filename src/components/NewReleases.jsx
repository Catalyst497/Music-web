import React from "react";
import Slideshow from "./utilities/Slideshow";
import SlideItem from "./utilities/SlideItem";

export default function NewReleases() {
  const data = [
    {
      id: 1,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 2,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 3,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 4,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 5,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 6,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 7,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 8,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 9,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 10,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
  ];
  const slides = data.map((x, index) => <SlideItem key={x.id} {...x} />);

  return <Slideshow title={"New releases"}>{slides}</Slideshow>;
}
