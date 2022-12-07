import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../contexts/appContext';

export default function Nav() {
	const { isDesktop, setTerm, getSearchResults } = useGlobalContext();
	const [navOpen, setNavOpen] = useState(false);

	// Function to Nav when a nav item is clicked
	const navItemClicked = () => setNavOpen(false)
	return (
		<nav className="fixed inset-x-0 top-0 z-20">
			<div
				className={`top-nav- flex items-center gap-8 ${
					isDesktop ? 'px-6' : 'px-4 pr-6 justify-between'
				} h-[5rem] bg-black/5 backdrop-blur-sm`}
			>
				<div className="flex gap-5 items-center">
					{!isDesktop ? (
						<Menu onClick={() => setNavOpen(true)} size={16} />
					) : (
						''
					)}
					<img src="./img/logo.svg" alt="logo" />
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						getSearchResults(e);
					}}
					className={`flex ${isDesktop ? 'flex-1' : ''} gap-4 items-center`}
				>
					<img
						src="./img/search.png"
						className={isDesktop ? 'w-4 h-4' : 'w-6 h-6'}
					/>
					{isDesktop ? (
						<input
							className="bg-transparent placeholder:text-[rgb(255,255,255,0.25)]"
							placeholder="Search"
							onChange={(e) => setTerm(e.target.value)}
						/>
					) : (
						''
					)}
				</form>
			</div>
			{isDesktop ? (
				<div className="absolute top-[100%] left-0 side-nav- flex flex-col gap-10 items-center w-20">
					<div className="flex flex-col gap-4 bg-[#1A1E1F] py-4 px-2 rounded-[2rem] items-center">
						<Link to={'/'}>
							<img src="./img/Home.png" alt="Home" title="Home" />
						</Link>
						<Link to={'/tomorrowstunes'}>
							<img src="./img/playlist (1).png" alt="playlist" title="Album" />
						</Link>
						<Link to={'/collections'}>
							<img src="./img/videos.png" alt="videos" title="Collections" />
						</Link>
						<img src="./img/radio.png" alt="radio" />
					</div>
					<div className="flex flex-col gap-4 bg-[#1A1E1F] py-4 px-2 rounded-[2rem] items-center">
						<img src="./img/profile.png" alt="profile" />
						<img src="./img/Logout.png" alt="Logout" />
					</div>
				</div>
			) : (
				<div
					className={`side-nav-mobile- absolute z-30 top-0 left-0 flex flex-col items-center w-[15rem] h-[100vh] bg-primary-bg text-[rgb(255,255,255,0.25)] py-20 transition-[transform,translate] ${
						navOpen ? 'translate-x-0' : '-translate-x-full'
					} `}
				>
					<div
						className="absolute top-8 right-8"
						onClick={() => setNavOpen(false)}
					>
						<X size={16} className="text-white" />
					</div>
					<ul>
						<Link
							to={'/'}
							title="Home"
							onClick={navItemClicked}
							className="flex items-center gap-4 p-6 text-white"
						>
							<img src="./img/Home.png" alt="" />
							Home
						</Link>
						<Link
							to={'/tomorrowstunes'}
							title="Album"
							onClick={navItemClicked}
							className="flex items-center gap-4 p-6"
						>
							<img src="./img/Playlist (1).png" alt="" />
							My Colletions
						</Link>
						<Link
							to={'/collections'}
							title="Collections"
							onClick={navItemClicked}
							className="flex items-center gap-4 p-6"
						>
							<img src="./img/videos.png" alt="" />
							Music Videos
						</Link>
						<li className="flex items-center gap-4 p-6">
							<img src="./img/radio.png" alt="" />
							Radio
						</li>
						<li className="flex items-center gap-4 p-6">
							<img src="./img/profile.png" alt="" />
							Profile
						</li>
						<li className="flex items-center gap-4 p-6">
							<img src="./img/Logout.png" alt="" />
							Log Out
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
