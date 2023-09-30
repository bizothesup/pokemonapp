import { useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

const usePokemonDetailHook = (id: number): Pokemon | null => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const foundPokemon = POKEMONS.find(p => p.id === id);
        setPokemon(foundPokemon || null);
    }, [id]);

    return pokemon;
};

export default usePokemonDetailHook;