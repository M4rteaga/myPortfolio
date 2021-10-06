import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
const MyStory = React.lazy(() => import('../components/MyStory.mdx'));

export const About = () => {
	return (
		<>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>About - M4rteaga</title>
				<meta
					name="description"
					content="About provides a summary of what is happening on Mateo Arteaga's life"
				></meta>
			</Helmet>
			<div className="w-full h-full flex flex-col justify-center items-center mt-10 md:mt-15 md:px-15 lg:px-48">
				<section className="flex flex-col items-start">
					<article className="text-lg lg:text-xl lg:px-10 leading-normal">
						<Suspense fallback={<h1>loading ...</h1>}>
							<MyStory />
						</Suspense>
					</article>
				</section>
			</div>
		</>
	);
};
