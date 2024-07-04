import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import PokeHeader from "../../Components/shared/PokeHeader";



const ProtectedRoute = () => {


    const trainer = useSelector((store) => store.trainer);
 
    if(trainer.length >= 3) {
        return ( 
        <>
        <PokeHeader />
        <Outlet />
        </>
        )
    } else {
        return <Navigate to="/" />
        
    }

}

export default ProtectedRoute