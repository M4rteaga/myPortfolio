import React from 'react';
import { Nav } from '../components/Nav';
import { Project } from '../components/Project';

export const Projects = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center mt-15 md:px-20 lg:px-48 ">
			<section className="flex flex-col items-start">
				<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">Projects</h1>
			</section>
			<div className="flex w-full h-full flex-row mt-12  items-center">
				<div className="flex flex-col">
					<h3 className="text-3xl underline underline-red-500 font-bold">
						In Process
					</h3>
					<div className="flex flex-col mt-8 w-full space-y-6">
						<Project
							projectTitle="Archive"
							projectDescription="SaaS web app that will work as a CMS headless."
							tools={[
								'Node',
								'JavaScript',
								'Express',
								'Vite',
								'React',
								'TypeScript',
								'Windicss',
								'Deta Base',
								'Deta Micros',
							]}
							goToLink="https://github.com/M4rteaga/react-archive"
						/>
					</div>
					<h3 className="text-3xl underline underline-teal-500 font-bold mt-10">
						Done
					</h3>
					<div className="flex flex-col mt-8 w-full space-y-6">
						<Project
							projectTitle="Vite Portfolio"
							projectDescription="Personal portfolio template with landing page."
							tools={['Vite', 'Vue3', 'Typescript', 'Windicss']}
							goToLink="https://github.com/M4rteaga/vite-portfolio"
						/>
						<Project
							projectTitle="Viva Air"
							projectDescription="Client part for a college project in which we create a full-stack web app."
							tools={[
								'Next',
								'React',
								'JavaScript',
								'Tailwindcss',
								'Aws Amplify',
								'Lambda',
								'Aws AKS',
								'Aws RDS',
							]}
							goToLink="https://github.com/M4rteaga/viva-air"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
