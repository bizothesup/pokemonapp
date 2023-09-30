
import * as React from 'react';
import {FunctionComponent, useState} from "react";
import Pokemon from "../models/pokemon";
import './pokemonCard.css'
import ImageCard from "../components/cards-component/image-card";
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import {Link, useNavigate} from "react-router-dom";
type Props=  {
    pokemon: Pokemon,
    borderColor?:string
}

const PokemonCard:FunctionComponent<Props>=({pokemon,borderColor='#009688'})=>{
    const [color,setColor]=useState<string>();
    const  navigate=useNavigate();
    const showBorder = () => {
      setColor(borderColor);
    }
    const hideBorder = () => {
      setColor('#f5f5f5');
    }

  const goToPokemon = () => {
    navigate(`/pokemon/${pokemon.id}`);
  }

    return(
            <div className="col s6 m4" key={pokemon.id} onClick={goToPokemon} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                <div className="card horizontal" style={{borderColor:color}}>
                    <div className="card-image">
                        <ImageCard key={pokemon.id} images={pokemon.picture} name={pokemon.name}/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{pokemon.name}</p>
                            <p><small>{formatDate(pokemon.created)}</small></p>
                            {pokemon.types.map(type =>
                                <span key={type} className={formatType(type)}>{type}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export  default  PokemonCard;