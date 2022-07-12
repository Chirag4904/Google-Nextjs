import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";
export default function SearchHeader() {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const handleSearch = (e) => {
		e.preventDefault();
		const searchTerm = searchInputRef.current.value;
		if (!searchTerm.trim()) {
			return;
		}

		router.push(`/search?term=${searchTerm.trim()}&searchType=`);
	};
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					onClick={() => router.push("/")}
					width="120"
					objectFit="cover"
					height="40"
					className="cursor-pointer"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
					alt="Google Logo"
				/>
				<form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
					<input
						type="text"
						defaultValue={router.query.term}
						ref={searchInputRef}
						className="w-full focus:outline-none"
					/>
					<XIcon
						onClick={() => (searchInputRef.current.value = "")}
						className="h-6 text-gray-500 cursor-pointer sm:mr-3"
					/>
					<MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 mr-3 border-gray-300" />
					<SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
					<button onClick={handleSearch} type="submit" hidden></button>
				</form>
				{/* One way to do it */}
				{/* <div className="ml-auto whitespace-nowrap">
					<User className="" />
				</div> */}
				<User className="ml-auto whitespace-nowrap" />
			</div>
			<SearchHeaderOptions />
		</header>
	);
}
