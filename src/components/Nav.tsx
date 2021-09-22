import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const ActiveLink = (props: any) => {
	const match = useRouteMatch(props.to);

	return (
		<Link {...props}>
			<a className={match?.isExact ? 'font-bold' : ''} href={props.to}>
				{props.children}
			</a>
		</Link>
	);
};

export const Nav: React.FC = () => {
	return (
		<nav className="md:text-lg flex flex-row justify-center items-center mt-10 space-x-7">
			<ActiveLink to="/">
				<span className="hover:font-bold cursor-pointer">Home</span>
			</ActiveLink>
			<ActiveLink to="/projects">
				<span className="hover:font-bold cursor-pointer">Projects</span>
			</ActiveLink>
			<ActiveLink to="/about">
				<span className="hover:font-bold cursor-pointer">About</span>
			</ActiveLink>
		</nav>
	);
};
