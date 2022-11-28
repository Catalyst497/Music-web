import React from 'react';

export default function CollectionList() {
	const collections = [
		{
			img: './img/Rectangle 21.png',
			name: 'Limits',
			artist: 'John watt',
		},
		{
			img: './img/Rectangle 21.png',
			name: 'Limits',
			artist: 'John watt',
		},
		{
			img: './img/Rectangle 21.png',
			name: 'Limits',
			artist: 'John watt',
		},
		{
			img: './img/Rectangle 21.png',
			name: 'Limits',
			artist: 'John watt',
		},
	];
	return (
		<div className="flex flex-wrap item-center gap-6">
			{collections.map((col) => {
				const { img, name, artist } = col;
				return (
					<div className="relative w-full h-48 md:w-44 rounded-2xl overflow-hidden bg-[linear-gradient(180deg,transparent,#000000aa_70%)]">
						<img
							src={img}
							alt=""
							className="absolute -z-10 rounded-2xl inset-0 w-full h-full"
						/>
						<div className="flex flex-col justify-end gap-1 h-full p-4">
							<div className="text-[1.2rem]">{name}</div>
							<div className="text-[0.8rem]">{artist}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
