import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const NoMatch = () => {
	return (
		<>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>404 - M4rteaga</title>
				<meta
					name="description"
					content="404 throws response when page doesn't exists"
				></meta>
			</Helmet>
			<main className="flex flex-col justify-center items-center w-full h-full py-20">
				<h1 className="text-10xl ">404</h1>
				<h4 className="text-2xl mt-4">Sorry something when wrong!</h4>
				<Link to="/">
					<button className="mt-10 bg-light-700 px-3 py-2 rounded-md">
						Go back to home
					</button>
				</Link>
			</main>
		</>
	);
};
