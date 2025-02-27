import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import useFetch from '../src/hooks/useFetch';
import './styles/pokeSelect.css'

const PokeSelect = ({setTypeFilter}) => {

  const [types, getTypes] = useFetch(); 

  
  
  

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type/`;
    getTypes(url);
    }, []);

    const valueSelect = useRef();

    const handleChange = () => {
      setTypeFilter(valueSelect.current.value)
    }
  

  return (
    <select onChange={handleChange} ref={valueSelect}>
      <option value="">All pokemons</option>
      {
        types?.results?.map(type => (
          <option key={type?.url} value={type?.url}>
            {type.name}
          </option>
        ))
      }
    </select>
  )
}

  export default PokeSelect; 

/*

const PokemonTypes = ({ setIsPokemonType, setPokemonType, setIsPaginated }) => {

    const [ pokemonByType, setPokemonByType ] = useState([])
    

//Pokemon list by type, only render select tag


  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/type/")
    .then(resp => setPokemonByType(resp?.data?.results))
    .catch(error => console.error(error))

  }, [])

  const handleChange = (e) => {
    e.preventDefault()
  
    if(e.target.value === "allPokemons"){
        setIsPokemonType(true)
        setIsPaginated(false)
    } else {
        setIsPokemonType(false)
        axios
        .get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
        .then(resp => setPokemonType(resp?.data?.pokemon))
        .catch(error => console.error(error))
        .finally(() =>  setIsPaginated(true))
       
    }
  }

    return(
        <div className='select-type'>
         <select onChange={(e) => handleChange(e)}>
            <option value="allPokemons">All Pokémons</option>
            {pokemonByType?.map(type => 
              <option key={type?.url} value={type?.name}>{type.name}</option>
              )
            }
        </select>
        </div>
    )
}
 
export default PokemonTypes */