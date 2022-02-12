import React, {useState, useEffect} from "react";
import {get} from "../../api/index"
import useCharacterContext from "../../hooks/useCharacterContext";
import useSearchResultContext from "../../hooks/useSearchContext";
import _ from 'lodash'
function Home(){

    const {characters} = useCharacterContext() 

    return <></>

}

export default Home