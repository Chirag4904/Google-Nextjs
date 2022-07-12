import Head from "next/head";
import SearchHeader from "../Components/SearchHeader";

export default function search() {
	return (
		<div>
			<Head>
				<title>Search Page</title>
			</Head>

			{/* Search Header */}
			<SearchHeader />

			{/* Search Result */}
		</div>
	);
}