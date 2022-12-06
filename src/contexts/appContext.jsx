import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
const AppContext = createContext();

export function AppProvider({ children }) {
	// STATES
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [term, setTerm] = useState('');
	const [trackResponse, setTrackResponse] = useState();
	const [artistResponse, setArtistResponse] = useState();

	// Render based on desktop size
	function windowResize() {
		window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
	}
	useEffect(() => {
		window.addEventListener('resize', () => {
			windowResize();
		});
		return window.removeEventListener('resize', () => {
			windowResize();
		});
	}, []);

	// Call from Shazam core api
	async function getSearchResults(e) {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'b01c10cd85mshde5bc35ca808ed7p1aa70bjsn3ad5993667e0',
				'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
			},
		};
		fetch(
			`https://shazam-core.p.rapidapi.com/v1/search/multi?query=${term}&search_type=SONGS_ARTISTS`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setTrackResponse(response.tracks?.hits);
				setArtistResponse(response.artists?.hits);
			})
			.catch((err) => console.error(err));
	}

	return (
		<AppContext.Provider
			value={{
				isDesktop,
				setIsDesktop,
				getSearchResults,
				term,
				setTerm,
				trackResponse,
				setTrackResponse,
				artistResponse,
				setArtistResponse,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default function useGlobalContext() {
	return useContext(AppContext);
}
