import React from 'react';
import { Helmet } from 'react-helmet';

export const Me = () => {
	return (
		<>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>M4rteaga</title>
				<meta
					name="description"
					content="M4rteaga provides a small introduction to Mateo Arteaga profile and interests"
				></meta>
			</Helmet>
			<div className="w-full h-full flex flex-col justify-center items-center mt-10 md:mt-15 md:px-15 lg:px-48">
				<main className="flex flex-col items-start">
					<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
						Hello, I'm Mateo Arteaga
					</h1>
					<section className="flex flex-col space-y-3 md:space-y-5  ">
						<p className="mt-5 lg:text-xl">
							I'm a software engineer living in Medellin, Colombia. I am
							characterized as being creative, optimistic, and with a good sense
							of humor.
						</p>
						<p className="  lg:text-xl">
							Felt in love with technology and design - investing almost all of
							my time looking for awesome projects and inspiration for my next
							project. Happy to have you here. Make sure you take a look at
							what's going on in my head.
						</p>
						<p className="  lg:text-xl">
							You can find me at{' '}
							<a
								href="https://github.com/M4rteaga"
								rel="nofollow"
								className="underline underline-teal-500"
							>
								@m4rteaga
							</a>{' '}
							or{' '}
							<a
								href="mailto: mateoarteagagiraldo@gmail.com"
								rel="nofollow"
								className="underline underline-red-500"
							>
								email
							</a>
							.
						</p>
					</section>
				</main>
			</div>
		</>
	);
};
