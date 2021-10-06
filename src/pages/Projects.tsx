import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Project } from '../components/Project';
import { projects } from '../Projects/Projects';

type FilterOptions = 'All' | 'Development' | 'Done';

export const Projects = () => {
	const [filter, setFilter] = useState<'All' | 'Development' | 'Done'>('All');
	const filterOptions = ['All', 'Development', 'Done'];

	return (
		<>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Projects - M4rteaga</title>
				<meta
					name="description"
					content="Projects provide a group of projects Mateo Arteaga is working on and some that he have made"
				></meta>
			</Helmet>
			<main className="w-full h-full flex flex-col justify-center mt-10 md:mt-15 md:px-15 lg:px-48">
				<header className="flex flex-col items-start">
					<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
						Projects
					</h1>
				</header>
				<nav className="mt-8 md:mt-10 flex flex-row w-full justify-start space-x-6 ">
					{filterOptions.map((option, key) => (
						<div
							className={`${
								option == filter ? 'bg-light-500' : 'hover:bg-light-300'
							} rounded-md px-2 py-1 text-center cursor-pointer `}
							{...{ key }}
							onClick={() => setFilter(option as FilterOptions)}
						>
							<span>{option}</span>
						</div>
					))}
				</nav>

				<section className="flex w-full h-full flex-row  items-center text-lg">
					<div className="flex flex-col">
						<ul className="flex flex-col mt-8 w-full space-y-8">
							{projects.map((project, key) =>
								project.status == filter ? (
									<li {...{ key }}>
										<Project {...project} />
									</li>
								) : (
									filter == 'All' && (
										<li {...{ key }}>
											<Project {...project} />
										</li>
									)
								)
							)}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
};
