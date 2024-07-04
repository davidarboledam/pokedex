import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../../Components/PokeCard'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeSelect from '../../Components/PokeSelect'
import "./styles/pokedex.css"

const Pokedex = () => {

// Se trae desde el slice trainer, el nombre del trainer, el input que entregó el usuario
    const trainer = useSelector((store) => store.trainer);

    const [inputValue, setInputValue] = useState("");
    
    const [typeFilter, setTypeFilter] = useState();

    const [pokemons, getPokemons, getType] = useFetch()

    useEffect(() => {
       if (typeFilter ) {
        getType(typeFilter);
        }
       else {
        const url =  "https://pokeapi.co/api/v2/pokemon/?limit=10";
        getPokemons(url);
       } 
      }, [typeFilter]);
    

      const handleSubmit = (event) =>  {
        event.preventDefault();
        setInputValue(textInput.current.value.trim().toLowerCase())
        textInput.current.value = "";
      }

      const textInput = useRef();

      const cbFilter = (poke) => {
        return poke.name.includes(inputValue);
      }

    return(
        <div className='pokedex'>
            <div className='pokewave'>
            <h3 className='pokedex__wave'><span>Welcome {trainer}, </span>Here you can find your favorite pokemon, let's go!</h3>
            </div>
            <div className='pokedex__filters'>
                <div className='pokesearch__form'>
                    <form onClick={handleSubmit}>
                        <input ref={textInput} type="text" />
                        <button className='pokesearchform__btn'>Search</button>
                    </form>
                </div>
                <div className='poleselect'>
                <PokeSelect 
                    setTypeFilter={setTypeFilter}
                    /> 
                </div>
            </div>
            <div className='pokedex__container'>
                {
                    pokemons?.results?.filter(cbFilter).map((poke) => (
                        <PokeCard 
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>
        </div>
 
    )
} 


export default Pokedex