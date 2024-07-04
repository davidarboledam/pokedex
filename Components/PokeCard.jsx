import { useState, useEffect } from 'react'
import useFetch from "../src/hooks/useFetch"
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css';

const PokeCard = ( { url }) => {

const navigate = useNavigate();

const [pokemon, getPokemon] = useFetch();


useEffect(() => {
     getPokemon(url);
}, []);

const handleClick = () => {
     navigate(`/pokedex/${pokemon.id}`)
}

    return(
     <article className='pokecard' >
          <div className={`pokecard__back ${ pokemon?.types[0].type.name}`}></div>
          <figure onClick={handleClick} className='pokecard__img'>
               <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon image" />
          </figure>
          <h3 className='pokecard__name'>{pokemon?.name}</h3>
          <ul className='pokecard__types'>
               {
                    pokemon?.types.map(type => (
                         <li className={`slot${type.slot}`} 
                         key={type.type.url}>
                              {type.type.name}
                         </li>
                    ))
               }
          </ul>
          <span>Type</span>
          <hr className='pokecard__hr'/>
          <ul className='pokecard__stats'>
               {
                    pokemon?.stats.map(stat => (
                         !stat.stat.name.includes("special") && 
                         <li key={stat?.stat?.url}>
                              <span>{stat?.stat?.name}: </span>
                              <span>{stat?.base_stat}</span>
                         </li>
                    ))
               }
          </ul>
     </article>
    )
}

export default PokeCard;