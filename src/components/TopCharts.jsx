import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChartItem from './utilities/ChartItem';
import useGlobalContext from '../contexts/appContext';

// Utils
import SlideItem from './utilities/SlideItem';
import Slideshow from './utilities/Slideshow';
import initChart from './utilities/initChart.js'

export default function TopCharts() {
	const { isDesktop, trackResponse } = useGlobalContext();

	const responseInit = trackResponse
		?.sort(() => 0.5 - Math.random())
		.slice(0, 3)
		.map((trck) => trck.track);
	const responseChart = responseInit?.map((item) => {
		return {
			img: item.images.coverart,
			main: item.title,
			sub: item.subtitle,
			rating: 12445,
		};
	});
	console.log(responseChart);
	const [chartItems, setChartItems] = useState(initChart);
	useEffect(() => {
		if (trackResponse) setChartItems(responseChart);
		else setChartItems(initChart);
	}, [trackResponse]);
	const slides = chartItems.map((item, i) => {
		const { img, main, sub, rating } = item;
		return (
			<SwiperSlide key={i} className="w-[18rem]">
				<ChartItem img={img} main={main} sub={sub} rating={rating} />
			</SwiperSlide>
		);
	});
	return isDesktop ? (
		<div className="top-charts- w-[40%] ml-12 ">
			<div className="subtitle">Top Charts</div>
			<div className="h-[20rem] overflow-auto">
				{chartItems.map((item, i) => {
					const { img, main, sub, rating } = item;
					return <ChartItem img={img} main={main} sub={sub} rating={rating} />;
				})}
			</div>
		</div>
	) : (
		<Slideshow title="Top Charts" children={slides} />
	);
}
