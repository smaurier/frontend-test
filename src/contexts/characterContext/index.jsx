import React,{createContext, useState} from "react";

const CharactersContext = createContext()

export default CharactersContext

export function CharactersContextProvider({children}){
    const [characters, setCharacters] = useState([])
    const charactersData = {
        characters,
        setCharacters
    }

    return(
        <CharactersContext.Provider value={charactersData}>
            {children}
        </CharactersContext.Provider>
    )
}