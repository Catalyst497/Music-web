import React from "react";
import PropTypes from "prop-types";
import "swiper/css";
import { Swiper } from "swiper/react";

export default function Slideshow({ title, children }) {
  return (
		<section className="my-6 px-4 md:px-0">
			<h2 className="subtitle py-2">{title}</h2>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				grabCursor={true}
				className="mySwiper h-auto"
			>
				{children}
			</Swiper>
		</section>
	);
}

Slideshow.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};
