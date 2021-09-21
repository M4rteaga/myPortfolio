import React from 'react';

export const Me = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center mt-15 md:px-20 lg:px-48">
			<section className="flex flex-col items-start ">
				<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
					Hello,I'm Mateo
				</h1>
				<p className="mt-12 text-sm lg:text-xl">
					I'm a software engineer living in Medellin, Colombia. Characterized
					for being creative, optimistic and with a good sense of humor.
				</p>
				<p className="mt-5 text-sm lg:text-xl">
					Felt in love with technology and design - investing almost all of my
					time looking for awesome projects and inspiration for my next project.
					Happy to have you here. Make sure you take a look at what's going on
					in my head.
				</p>
				<p className="mt-5 text-sm lg:text-xl">
					You can find me at{' '}
					<a
						href="https://github.com/M4rteaga"
						className="underline underline-teal-500"
					>
						@m4rteaga
					</a>{' '}
					or{' '}
					<a
						href="mailto: mateoarteagagiraldo@gmail.com"
						className="underline underline-red-500"
					>
						email
					</a>
					.
				</p>
			</section>
		</div>
	);
};

//
