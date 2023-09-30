import React,{FunctionComponent} from 'react';
import './App.css';
import PokemonList from "./pokemons/pokemonList";
import {Link, useRoutes} from "react-router-dom";
import PokemonDetail from "./pokemons/pokemon-detail";
import {NotFoundPages} from "./pages/NotFoundPages";
import PokemonPages from "./pages/PokemonPages";
import PokemonEdit from "./pokemons/form/PokemonEdit";

const App:FunctionComponent=()=> {
    const pokemonListRoute ={
        path:'/',
        element: <PokemonList/>
    }
    const pokemonRoute ={
        path:'/pokemon/',
        element: <PokemonPages/>,
        children: [
            {path:':id',element: <PokemonDetail/>},
            {path:'edit/:id',element: <PokemonEdit/>},
        ]
    }
    const notFoundPagesRoute={
        path:'*',
        element: <NotFoundPages/>
    }

    const routing = useRoutes([pokemonListRoute, pokemonRoute,notFoundPagesRoute]);

    return (
        <div>
            <nav>
                <div className="nav-wrapper teal">
                    <Link to="/" className="brand-logo center">Polémon</Link>
                </div>
            </nav>
            {routing}
        </div>
    )
}

export default App;

