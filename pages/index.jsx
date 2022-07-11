import Head from "next/head";
import Header from "../Components/Header";

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

			{/* Footer */}
		</div>
	);
}
