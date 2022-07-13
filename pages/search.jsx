import Head from "next/head";
import { useRouter } from "next/router";
import ImageResults from "../Components/ImageResults";
import SearchHeader from "../Components/SearchHeader";
import SearchResults from "../Components/SearchResults";
import Response from "../Response";

export default function Search({ results }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();
	// console.log(router);
	console.log(results);
	return (
		<div>
			<Head>
				<title>{router.query.term}</title>
			</Head>

			{/* Search Header */}
			<SearchHeader />

			{/* Search web and imageResult */}
			{router.query.searchType == "image" ? (
				<ImageResults results={results} />
			) : (
				<SearchResults results={results} />
			)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const mockData = false;
	const startIndex = context.query.start || "1";
	const data = mockData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.API_KEY
				}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
					context.query.searchType && "&searchType=image"
				}&start=${startIndex}`
		  ).then((response) => response.json());
	return {
		props: {
			results: data,
		},
	};
}
