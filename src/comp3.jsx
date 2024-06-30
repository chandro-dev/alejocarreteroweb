import Comp4 from "./comp4";
import { useDispatch, useSelector } from 'react-redux';
import {setComponent5} from './actions'

export default function Comp3(){
    const state3= useSelector((state)=>state.reductor);
    const dispatch = useDispatch();
    const incrementComponente5=()=>{
      dispatch(setComponent5());
    }
    return(
        <>
        <div className="node">
            <h1>Componente3 </h1>
            <h1>Estado: <strong>{state3.componente3}</strong></h1>
            <button onClick={incrementComponente5}>Cambiar estado del componente 5</button>
            <div className="children">
            <div className="arrow-up"></div> {/* Flecha que apunta hacia abajo */}

            <Comp4></Comp4>
            </div>
            
        </div>
        </>
    )

}