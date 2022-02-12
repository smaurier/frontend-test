import React, {useState, useEffect} from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import { get } from '../../api';
import useCharacterContext from "../../hooks/useCharacterContext";

//ajout listener sur bouton entrer dans un useEffect

function SearchField(){
	const {characters, setCharacters} = useCharacterContext() 
    
	const handleChange = async (e) => {
		const data = await get(`characters?name=${e}`)
		setCharacters(data.data.results)
	}

	return (
		<>
			<TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} value={characters} onChange={(e) => handleChange(e)} />
		</>
	)
}


export default SearchField;
