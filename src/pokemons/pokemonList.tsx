import React, {FunctionComponent, useEffect, useState} from "react";
import PokemonCard from "./pokemonCard";
import usePokemonHook from "../hooks/pokemon.hook";

const PokemonList:FunctionComponent=()=>{
const pokemons=usePokemonHook();
    return(
        <div>
            <h1 className="center">Pokèdex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon=>(
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonList;