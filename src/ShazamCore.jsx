import React from 'react';
import axios from 'axios'

export default async function ShazamCore(req, res) {
	const options = {
		method: 'GET',
		url: '',
		params: {
			term: req.query.term,
			locale: 'en-US',
			offset: '0',
			limit: '30',
		}, // Parameters
		headers: {
			'x-rapidapi-host': 'shazam.p.rapidapi.com',
			'x-rapidapi-key': process.env.REACT_APP_PUBLIC_RAPIDAPI_KEY, // Our API Key
		},
	};

	axios
		.request(options)
		.then((response) => {
			console.log(response)
			res?.status(200).json(response?.data);
		})
		.catch(function (err) {
			console.log(err);
		});
}
