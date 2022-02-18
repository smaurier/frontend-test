/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CharactersContextProvider } from '../contexts/characterContext';
import MainRouter from '../router';
import './App.scss';

function App() {
	return (
		<>
			<CharactersContextProvider>
				<MainRouter />
			</CharactersContextProvider>
		</>
	);
}

export default App;
