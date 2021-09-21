import React, { Suspense } from 'react';
const MyStory = React.lazy(() => import('../components/MyStory.mdx'));

export const About = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center mt-10 md:mt-15 md:px-15 lg:px-48">
			<section className="flex flex-col items-start">
				<div className="text-lg lg:text-xl lg:px-10 leading-normal">
					<Suspense fallback={<h1>loading ...</h1>}>
						<MyStory />
					</Suspense>
				</div>
			</section>
		</div>
	);
};
