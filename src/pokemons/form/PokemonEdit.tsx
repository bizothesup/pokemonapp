import {FunctionComponent} from "react";
import {useParams} from "react-router-dom";
import usePokemonDetailHook from "../../hooks/pokemon-detail.hook";
import {PokemonForm} from "./PokemonForm";

const PokemonEdit:FunctionComponent = () => {
    const params = useParams();
    const pokemon= usePokemonDetailHook(Number(params.id));
    
    return (
        <div>
            { pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer { pokemon.name }</h2>
                    <PokemonForm pokemon={pokemon}></PokemonForm>
                </div>
            ) : (
                <h4 className="center">Aucun pokémon à afficher !</h4>
            )}
        </div>
    );
};
export default PokemonEdit;