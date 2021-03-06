import React, { ReactChild, useEffect, useState } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useLocation,
} from 'react-router-dom';
import { Me } from './pages/Me';
import { Projects } from './pages/Projects';
import { Nav } from './components/Nav';
import { About } from './pages/About';
import { NoMatch } from './pages/NoMatch';
import { Helmet } from 'react-helmet';

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
					<Route exact={true} path="/About">
						<Layout>
							<About />
						</Layout>
					</Route>
					<Route exact={true} path="/projects">
						<Layout>
							<Projects />
						</Layout>
					</Route>
					<Route exact={true} path="/">
						<Layout>
							<Me />
						</Layout>
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
					{/* <Redirect path="/" to="/home" /> */}
				</Switch>
			</div>
		</Router>
	);
}

const Layout: React.FC<{ children: ReactChild }> = ({ children }) => {
	return (
		<div className="h-full w-full px-10 md:px-20 py-5 pb-15">
			<header>
				<Link to="/">
					<h1 className="">M4rteaga</h1>
				</Link>
			</header>
			<Nav />

			{children}
		</div>
	);
};

export default App;
