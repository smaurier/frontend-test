import {useContext} from "react";
import SearchResultContext from "../../contexts/resultContext";

export default function useSearchResultContext() {
    return useContext(SearchResultContext)
}