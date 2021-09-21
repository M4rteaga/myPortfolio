import React, { useState } from 'react';
import { Project } from '../components/Project';
import { projects } from '../Projects/Projects';

type FilterOptions = 'All' | 'Development' | 'Done';

export const Projects = () => {
	const [filter, setFilter] = useState<'All' | 'Development' | 'Done'>('All');
	const filterOptions = ['All', 'Development', 'Done'];

	return (
		<div className="w-full h-full flex flex-col justify-center mt-15 md:px-20 lg:px-48 ">
			<section className="flex flex-col items-start">
				<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">Projects</h1>
			</section>
			<div className="mt-10 flex flex-row w-full justify-start space-x-6 ">
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
			</div>

			<div className="flex w-full h-full flex-row  items-center">
				<div className="flex flex-col">
					<div className="flex flex-col mt-8 w-full space-y-8">
						{projects.map((project, key) =>
							project.status == filter ? (
								<Project {...{ key }} {...project} />
							) : (
								filter == 'All' && <Project {...{ key }} {...project} />
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
