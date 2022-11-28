import React from 'react';

export default function SelectCollection() {
	return (
		<div className="flex gap-6 py-4 pb-6">
			<div className="rounded-2xl bg-bright-yellow text-[#1D2123] md:px-4 py-1 md:flex-[unset] flex-1 text-center">
				My Collections
			</div>
			<div className="rounded-2xl border-secondary-color border-[1px] text-secondary-color px-4 py-1 md:flex-[unset] flex-1 text-center">
				Likes
			</div>
		</div>
	);
}
