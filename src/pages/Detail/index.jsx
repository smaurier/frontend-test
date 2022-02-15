import React, { useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import useCharacterContext from "../../hooks/useCharacterContext";


function Detail(){
    const {characters} = useCharacterContext()
    const { id } = useParams();

    const specifiedCharacter = characters.find(character => character.id === parseInt(id))
    console.log("characters in detail",characters);
    console.log("specifiedCharacter",specifiedCharacter);

    const history = useHistory();

    if(specifiedCharacter === undefined ){
        return <Redirect to={{
            pathname: "/"
        }} />
    } else {

        return(
            <>
                <button onClick={history.goBack}>Retour aux resultats</button>
                <p>{specifiedCharacter.name}</p>
                <p>{specifiedCharacter.description}</p>
                <img className="thumbnail" src={`${specifiedCharacter.thumbnail.path}.${specifiedCharacter.thumbnail.extension}`}/>
                <div className="latestComics">
                    <ul>
                        <li></li>
                        <li>comics disponibles : {specifiedCharacter.comics.available} </li>
                        <li></li>
                        {/* faire une boucle pour tous les comics */}
                        <li>comic name 1 : {specifiedCharacter.comics.items[0].name} </li>
                        <li></li>
                        <li>events available : {specifiedCharacter.events.available} </li>
                        {/* faire une boucle pour tous les comics */}
                        <li>events name 1 : {specifiedCharacter.events.items[0].name} </li>
                        <li></li>
                        <li>series available : {specifiedCharacter.series.available} </li>
                        <li></li>
                        {/* faire une boucle pour tous les series */}
                        <li>series name 1 : {specifiedCharacter.series.items[0].name} </li>
                        <li></li>
                        <li>stories available : {specifiedCharacter.stories.available} </li>
                        {/* faire une boucle pour tous les series */}
                        <li>stories name 1 : {specifiedCharacter.stories.items[0].name} </li>
                        <li>stories type 1 : {specifiedCharacter.stories.items[0].type} </li>
                        <li></li>
                    </ul>
                    
                </div>
                <div className="additionnal infos">
                    <ul>
                        <li>urls type : {specifiedCharacter.urls[0].type}</li>
                        <li>urls : <a target="_blank" href={specifiedCharacter.urls[0].url}>Lien</a></li>
                    </ul>
                </div>
            </>
        )
    }

}

export default Detail