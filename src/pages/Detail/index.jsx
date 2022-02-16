import { Button, Divider } from "@lumx/react";
import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import useCharacterContext from "../../hooks/useCharacterContext";
import { mdiArrowLeft } from '@mdi/js'; 
import { mdiBookOpen, mdiCalendar, mdiTelevision, mdiTheater } from '@lumx/icons';
import { Icon, Size } from '@lumx/react';

function Detail(){
    const {characters} = useCharacterContext()
    const { id } = useParams();
    const specifiedCharacter = characters.find(character => character.id === parseInt(id))
    const history = useHistory();

    if(specifiedCharacter === undefined ){
        return <Redirect to={{
            pathname: "/"
        }} />
    } else {
        let mapLatestComics = null
        let mapLatestEvents = null
        let mapLatestSeries = null
        let mapLatestStories = null
        let mapLinks = null

        if(specifiedCharacter.comics.items) {
            mapLatestComics = specifiedCharacter.comics.items.map((comic,key) => <li key={key} className="lumx-typography-body2"><Icon icon={mdiBookOpen} size={Size.s}/> {comic.name} </li>)
        }

        if(specifiedCharacter.events.items) {
            mapLatestEvents = specifiedCharacter.events.items.map((event,key) => <li key={key} className="lumx-typography-body2"><Icon icon={mdiCalendar} size={Size.s}/> {event.name} </li>)
        }

        if(specifiedCharacter.series.items) {
            mapLatestSeries = specifiedCharacter.series.items.map((serie,key) => <li key={key} className="lumx-typography-body2"><Icon icon={mdiTelevision} size={Size.s}/> {serie.name} </li>)
        }

        if(specifiedCharacter.stories.items) {
            mapLatestStories = specifiedCharacter.stories.items.map((story,key) => <li key={key} className="lumx-typography-body2"><Icon icon={mdiTheater} size={Size.s}/> {story.type} : {story.name} </li>)
        }

        if(specifiedCharacter.urls) {
            mapLinks = specifiedCharacter.urls.map((url,key) => <li key={key}><a target="_blank" rel="noopener noreferrer" href={url.url} className="type">Voir le {url.type}</a></li>)
        }

        return(
            <main class="container detail-page">
                <article className="generals">
                    <Button className="button--goBack" leftIcon={mdiArrowLeft} onClick={history.goBack}>Retour aux resultats</Button>

                    <p class="lumx-typography-display1">{specifiedCharacter.name}</p>
                    <p className="lumx-typography-body2">{specifiedCharacter.description===""?<span className='span--noResult'>Aucune description trouvée</span>:specifiedCharacter.description}</p>
                </article>
                    
                <article className="additionnals">
                    <p className="lumx-typography-headline">Les derniers events</p>
                    <p className="lumx-typography-overline">Events disponibles : {specifiedCharacter.events.available ? specifiedCharacter.events.available : 0}</p>
                    <ul>
                        { mapLatestEvents ? mapLatestEvents : <></> }
                    </ul>

                    <Divider className="lumx-spacing-margin-vertical-big" />

                    <p className="lumx-typography-headline">Les dernieres Séries</p>
                    <p className="lumx-typography-overline">Séries disponibles : {specifiedCharacter.series.available ? specifiedCharacter.series.available : 0}</p>
                    <ul>
                        { mapLatestSeries ? mapLatestSeries : <></> }
                    </ul>

                    <Divider className="lumx-spacing-margin-vertical-big" />

                    <p className="lumx-typography-headline">Les dernieres Stories</p>
                    <p className="lumx-typography-overline">Stories disponibles : {specifiedCharacter.stories.available ? specifiedCharacter.stories.available : 0}</p>
                    <ul>
                        { mapLatestStories ? mapLatestStories : <></> }
                    </ul>

                    <Divider className="lumx-spacing-margin-vertical-big" />

                    <ul>
                        { mapLinks ? mapLinks : <></> }
                    </ul>
                </article>

                <aside className="latestComics">
                    <img className="thumbnail" src={`${specifiedCharacter.thumbnail.path}.${specifiedCharacter.thumbnail.extension}`} alt={specifiedCharacter.name} aria-labelledby={specifiedCharacter.name}/>
                    <div>
                        <p className="lumx-typography-headline">Les derniers comics</p>
                        <p className="lumx-typography-overline">Comics disponibles : {specifiedCharacter.comics.available ? specifiedCharacter.comics.available : 0}</p>
                        <ul>
                            { mapLatestComics ? mapLatestComics : <li className="lumx-typography-body2">Pas de comics publié récement</li>}
                        </ul> 
                    </div>
                </aside>
            </main>
        )
    }
}

export default Detail