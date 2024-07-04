import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import PokeInfo from "./Pages/PokeInfo";
import ProtectedRoute from "./Pages/ProtectedRoute";
import './styles/app.css'
import { PokeFooter } from "../Components/shared/PokeFooter";



function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={ <Home/>}/>  
          <Route element={<ProtectedRoute/>}> 
            <Route path="/pokedex" element={<Pokedex/>} /> 
            <Route path="/pokedex/:id" element={<PokeInfo/>}/>
          </Route>
        </Routes>
        <PokeFooter />
    </>
  );
}

export default App;