import React from 'react';

interface ProjectProps {
	goToLink: string;
	projectTitle: string;
	projectDescription: string;
	stack: string[];
	date: string;
	status: string;
}

export const Project: React.FC<ProjectProps> = ({
	goToLink,
	projectTitle,
	projectDescription,
	stack,
	date,
	status,
}) => {
	return (
		<div className="flex flex-col ">
			<div className="flex flex-row space-x-3 items-center">
				<a href={goToLink} rel="nofollow">
					<h1 className="font-bold text-2xl align-middle">{projectTitle}</h1>
				</a>
				<span
					className={`text-sm ${
						status == 'Done' ? 'text-green-400' : 'text-red-500'
					}`}
				>
					{status}
				</span>
			</div>
			<span className="text-xs text-gray-400">{date}</span>

			<p className="mt-2 pr-20 text-normal lg:text-xl">
				{projectDescription} Made with{' '}
				{stack.map((tool, key) => (
					<span {...{ key }}>
						{tool}
						{key < stack.length - 1 ? ', ' : '.'}
					</span>
				))}
			</p>
		</div>
	);
};
