import {FunctionComponent} from "react";
import {useParams} from "react-router-dom";
import usePokemonDetailHook from "../hooks/pokemon-detail.hook";

const  PageEditPokemon:FunctionComponent=()=> {
    const params = useParams();
    const pokemon =usePokemonDetailHook(Number(params.id))
    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    return (
        <>View edit pokemon detail {pokemon}</>
    );
}

export default PageEditPokemon;