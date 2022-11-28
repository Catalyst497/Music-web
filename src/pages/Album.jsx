import React from 'react'
import Cover from '../components/Cover'
import Songs from '../components/Songs';

export default function Album() {
  return (
		<div>
			<main className="absolute pt-20 md:pl-20 md:pr-12 px-8 w-full bg-[linear-gradient(180deg,#00000099,#1e1e1e_80%)] before:bg-[url(./img/Lead-image.png)] before:absolute before:inset-0 before:-z-10 before:bg-cover text-gray-text text-[0.8rem]">
				<Cover />
				<Songs />
			</main>
		</div>
	);
}
