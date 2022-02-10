/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import Cards from '../components/Cards';

//i18n ?
// balises aria
// accessibilité ?
// ergonomie ?
// utiliser flex et grid
// utiliser mixins et variables
// favicon

function App() {
  return (
	<>
		<Router>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
				>
					<Search />
				</Route>
			</Switch>
		</Router>
		<div className='container'>
			<Cards />
		</div>

	</>
  );
}

export default App;
