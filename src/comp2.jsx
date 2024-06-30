import Comp5 from "./comp5"
import { useDispatch, useSelector } from 'react-redux';
import {setComponent1} from './actions'

export default function Comp2(){

    const state2= useSelector((state)=>state.reductor);
    const dispatch = useDispatch();
    const incrementComponente1=()=>{
      dispatch(setComponent1());
    }
    return(
        <>
        <div className="node">
            <h1>Componente 2</h1>
            <h1>Estado: <strong>{state2.componente2}</strong></h1>
            <button onClick={incrementComponente1}>Cambiar estado en el componete 1</button>
            <div className="children">
            <div className="arrow-up"></div> 
            <Comp5></Comp5>
            </div>
        </div>

        </>
    )

}