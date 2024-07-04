import React from 'react'
import "./styles/pokeheader.css"
import pokeHeadImg from "../../src/assets/Images/pokedexhead.png"

export const PokeHeader = () => {
  return (
    <div className='pokeheader'>
        <div className='pokeheader__red'>
            <figure className='pokeheader__img'>
                <img src={pokeHeadImg} />
            </figure>
        </div>
        <div className='pokeheader__black'>
            <div className='pokeheader__outcircle'>
                <div className='pokeheader__incircle'></div>
            </div>
        </div>
    </div>
  )
}

export default PokeHeader;