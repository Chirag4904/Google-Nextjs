import Head from "next/head";
import Header from "../Components/Header";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../Components/Footer";
export default function Home() {
	return (
		<div>
			<Head>
				<title>Google</title>
				<meta name="description" content="Personal Google Clone Project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />

			{/* Body */}
			<form className="flex flex-col items-center mt-40">
				<Image
					width="300"
					objectFit="cover"
					height="100"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
					alt="Google Logo"
				/>
				<div className="flex mt-5 w-full mx-auto border max-w-[90%] border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 text-gray-500 mr-3" />
					<input type="text" className="flex-grow focus:outline-none" />
					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-2 justify-center">
					<button className="btn">Google Search</button>
					<button className="btn">I&apos;m Feeling Lucky</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}
