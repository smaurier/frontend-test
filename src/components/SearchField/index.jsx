import React, { useState, useEffect } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { get } from '../../api';
import useCharacterContext from "../../hooks/useCharacterContext";
import { Progress } from '@lumx/react';

function SearchField() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [allCharacters, setAllCharacters] = useState(false);
	// eslint-disable-next-line
	const { characters, setCharacters } = useCharacterContext();

	useEffect(() => {
		getAllCharacters();
	}, [])

	const getAllCharacters = async () => {
		const response = await get(`characters`);
		const nbCharacters = response.data.data.total; // Nombre de personnage existants dans la bdd de l'api: Actuellement 1559

		let offset = 0;
		let allCharacters = [];

		while (offset <= nbCharacters) { // Mettre à 200 pour eviter de saturer l'api, à remplacer par nbCharacters en production
			let response = await get(`characters?limit=100&offset=${offset}`);
			allCharacters = [...allCharacters, ...response.data.data.results];
			offset = offset + 100;
		}

		setIsLoaded(true);
		setAllCharacters(allCharacters);
	}

	const handleChange = (nameCharacter) => {
		let resultCharacters = [];

		for (let character of allCharacters) {
			if (character.name.toLowerCase().includes(nameCharacter.toLowerCase())) {
				resultCharacters.push(character);
			}
		}

		setCharacters(resultCharacters);
	}


	if (isLoaded) {
		return (
			<>
				<TextField theme={Theme.dark} placeholder="Rechercher ..." icon={mdiMagnify} onChange={handleChange} />
			</>
		)
	} else {
		return (
			<>
				<Progress theme={Theme.dark} />
			</>
		)
	}
}


export default SearchField;
