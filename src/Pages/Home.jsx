import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useRef, useState  } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import ash from '../assets/Images/Ash.png'
import "./styles/homePage.css"

const Home = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const textInput = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = "";
    navigate("/pokedex")
  }
  


      
    return (
        <main>
          <div className='home__container'>
              <h1 className='home__title'>Hello trainer!</h1>
              <figure className='home__img'>
              <img src={ash} alt=''/>
              </figure>
              <div className='home__form'>
                <form className='home__input' onSubmit={handleSubmit}>
                  <div className="home__message">Give your name to start</div>
                  <input className='home__input' ref={textInput} type="text" placeholder="Enter your Name"/> 
                  <button className='home__btn' type='submit'>Start</button>
                </form>
              </div>
          </div>
        </main>
    )
}

export default Home
