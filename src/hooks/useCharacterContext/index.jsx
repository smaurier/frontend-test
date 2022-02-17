import { useContext } from "react";
import CharactersContext from "../../contexts/characterContext";

export default function useCharacterContext() {
    return useContext(CharactersContext);
}