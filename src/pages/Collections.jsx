import React from 'react';
import SelectCollection from '../components/SelectCollection';
import CollectionList from '../components/CollectionList';
export default function Collections() {
	return (
		<div className="absolute pt-20 md:pl-20 md:pr-12 px-8 w-full text-gray-text text-[0.8rem]">
			<SelectCollection />
            <CollectionList />
		</div>
	);
}
