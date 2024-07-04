import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useFetch from '../hooks/useFetch'
import "./styles/pokeInfo.css"


const PokeInfo = () => {

    const [pokemon, getPokemon] = useFetch();


    const {id} = useParams();



    useEffect(() => {
        const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;
        getPokemon(url);
    }, []);

    return(
        <section className="pokeinfo">          
            <figure className="pokeinfo__img">
                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon image" />
            </figure>
            <ul className="pokeinfo__stats">
                {pokemon?.stats.map(stat => (
                    <li className="pokeinfo__stats__item" key={stat.stat.url}>
                        <span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
                        <div className="outbar">
                            <div className="inbar" style={{width:`${stat.base_stat/2.5}%`}}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PokeInfo;
