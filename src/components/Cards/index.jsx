import React,{useState} from 'react';
import Card from '../Card';
import useCharacterContext from "../../hooks/useCharacterContext";

function Cards (){
	const {characters} = useCharacterContext() 
	const [currentPage, setCurrentPage] = useState(1)

	console.log("CharactersContext",characters)
	let tempCharacters = characters.slice((currentPage*4)-4, currentPage*4) //1(0,4) 2(4,8) 3(8,12)

	const handleClickPrevious=() => {
		setCurrentPage(currentPage-1);
	}
	
	const handleClickNext=() => {
		setCurrentPage(currentPage+1);
	}

	
	const map1 = tempCharacters.map((character,key) => <Card key={character.id} id={character.id} thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`} nameCharacter={character.name} description={character.description}/>)	

	if(characters.length !== 0){
		return (
			<div className='cards'>
				{map1}
				<div className="pagination">
					{currentPage>1?<button onClick={handleClickPrevious}>page précèdente</button>:null}
					<span className="current">{currentPage}</span>
					/ {Math.floor(characters.length/4)+1}
					{currentPage<Math.floor(characters.length/4)+1?<button onClick={handleClickNext}>page suivante</button>:null}	
				</div>
			</div>
		)	
	} else {
		return <span>Pas de résultat</span>
	}
}


export default Cards;
