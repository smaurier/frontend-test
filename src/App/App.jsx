/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CharactersContextProvider } from '../contexts/characterContext';
import { SearchResultContextProvider } from '../contexts/resultContext';
import MainRouter from '../router';
import './App.scss';

function App() {
	return (
		<>
			<SearchResultContextProvider>
				<CharactersContextProvider>
					<MainRouter />
				</CharactersContextProvider>
			</SearchResultContextProvider>
		</>
	);
}

export default App;
