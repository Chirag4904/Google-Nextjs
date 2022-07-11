import React from "react";
import Header from "../../Components/Header";
import { getProviders, signIn } from "next-auth/react";

//Client side
export default function signin({ providers }) {
	return (
		<>
			<Header />
			<div className="mt-40">
				{Object.values(providers).map((provider) => (
					<div key={provider.name} className="flex flex-col items-center">
						<img
							className="w-52 object-cover "
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
							alt="Google Logo"
						/>
						<p className="text-sm italic my-10 text-center">
							Personal learning Project
						</p>
						<button
							className="bg-red-400 text-white p-3 rounded-lg hover:bg-red-500"
							onClick={() => signIn(provider.id, { callbackUrl: "/" })}
						>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</>
	);
}

//Server Side
export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
