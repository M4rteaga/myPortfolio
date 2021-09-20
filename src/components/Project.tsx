import React from 'react';

interface ProjectProps {
	goToLink: string;
	projectTitle: string;
	projectDescription: string;
	tools: string[];
}

export const Project: React.FC<ProjectProps> = ({
	goToLink,
	projectTitle,
	projectDescription,
	tools,
}) => {
	return (
		<div className="flex flex-col ">
			<a href={goToLink}>
				<h1 className="font-bold text-2xl align-middle">{projectTitle}</h1>
			</a>
			<p className="mt-3 pr-20 text-xl">
				{projectDescription} Made with{' '}
				{tools.map((tool, key) => (
					<span {...{ key }}>
						{tool}
						{key < tools.length - 1 ? ', ' : '.'}
					</span>
				))}
			</p>
		</div>
	);
};
