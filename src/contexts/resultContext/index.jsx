import React,{createContext, useState} from "react";

const SearchResultContext = createContext()

export default SearchResultContext

export function SearchResultContextProvider({children}){
    const [searchResult, setSearchResult] = useState({})
    const searchResultData = {
        searchResult,
        setSearchResult
    }

    return(
        <SearchResultContext.Provider value={searchResultData}>
            {children}
        </SearchResultContext.Provider>
    )
}