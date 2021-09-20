import React, { ReactChild, useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import { Me } from './pages/Me';
import { Projects } from './pages/Projects';
import { Nav } from './components/Nav';

const me = {
	name: 'Mateo Arteaga',
	description:
		'Welcome, I am a software engineer from Colombia 🇨🇴. I am passionate about learning new technologies, listening to music, watching movies, hanging out and pets.',
};

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function App() {
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/projects">
						<Layout>
							<Projects />
						</Layout>
					</Route>
					<Route path="/">
						<Layout>
							<Me />
						</Layout>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
	return (
		<div className="h-full w-full px-20 py-5">
			<header>
				<Link to="/home">
					<h1 className="">M4rteaga</h1>
				</Link>
			</header>
			<Nav />

			{children}
		</div>
	);
};

export default App;
