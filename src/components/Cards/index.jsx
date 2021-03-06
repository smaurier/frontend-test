import React, { useState } from 'react';
import Card from '../Card';
import { Button, Emphasis } from '@lumx/react';
import { mdiSkipPreviousOutline, mdiSkipNextOutline } from '@lumx/icons';
import useCharacterContext from "../../hooks/useCharacterContext";
import noResult from '../../medias/no-result.jpg';

function Cards() {
	const { characters } = useCharacterContext();
	const [currentPage, setCurrentPage] = useState(1);
	let tempCharacters = characters.slice((currentPage * 4) - 4, currentPage * 4);

	const handleClickPrevious = () => {
		setCurrentPage(currentPage - 1);
	}

	const handleClickNext = () => {
		setCurrentPage(currentPage + 1);
	}

	const mapCards = tempCharacters.map((character) => <Card key={character.id} id={character.id} thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`} nameCharacter={character.name} description={character.description} />);

	if (characters.length !== 0) {
		return (
			<section className='cards'>
				{mapCards}
				<div className="pagination">
					{currentPage > 1 ? <Button aria-hidden="true" aria-describedby="page-precedente" leftIcon={mdiSkipPreviousOutline} emphasis={Emphasis.medium} onClick={handleClickPrevious}>page précèdente</Button> : null}
					<p><span className="current">{currentPage}</span> / {Math.floor(characters.length / 4) + 1}</p>
					{currentPage < Math.floor(characters.length / 4) + 1 ? <Button aria-hidden="true" aria-describedby="page-suivante" leftIcon={mdiSkipNextOutline} emphasis={Emphasis.medium} onClick={handleClickNext}>Page suivante</Button> : null}
				</div>
			</section>
		)
	} else {
		return (
			<section className='noResult'>
				<img src={noResult} alt="Pas de résultat" />
				<p className="lumx-typography-display1">Pas de résultat</p>
			</section>
		)
	}
}


export default Cards;
