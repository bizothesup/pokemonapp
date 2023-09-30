import {useEffect, useState} from "react";
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

const usePokemonHook = () => {
    const  [pokemons,setPokemons]=useState<Pokemon[]>([])
    useEffect(()=>{setPokemons(POKEMONS);},[]);
    return pokemons;
}
export default usePokemonHook;

