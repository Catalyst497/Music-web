import React, {useState, useEffect} from "react";
import Slideshow from "./utilities/Slideshow";
import SlideItem from "./utilities/SlideItem";
import useGlobalContext from "../contexts/appContext";

export default function NewReleases() {
  // API response for the artist from context
  const {artistResponse} = useGlobalContext();

  // Default objects for artists
  const initArtists = [
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

  // Refined new array from API response array
  const responseInit = artistResponse
		?.sort(() => 0.5 - Math.random())
		.slice(0, 10)
		.map((trck) => trck.artist);

  // Convert the api response to the main thing
	const responseFinal = responseInit?.map((item, i) => {
		return {
      id: i,
			image: item.avatar,
			title: item.name,
			artist: item.name,
		};
	});

	console.log(responseFinal);
  const [data, setData] = useState(initArtists);
	useEffect(() => {
		if (artistResponse) setData(responseFinal);
		else setData(initArtists);
	}, [artistResponse]);
  const slides = data.map((x, index) => <SlideItem key={x.id} {...x} />);

  return <Slideshow title={"Top Artists"}>{slides}</Slideshow>;
}
