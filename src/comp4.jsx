import { useDispatch, useSelector } from 'react-redux';
import {setComponent3} from './actions'

export default function Comp4(){
    const state4= useSelector((state)=>state.reductor);
    const dispatch = useDispatch();
    const incrementComponente3=()=>{
      dispatch(setComponent3());
    }
    return(
        <>
        <div className='node'>
            <h1>Componente 4</h1>
            <h1>Estado: <strong>{state4.componente4}</strong></h1>
            <button onClick={incrementComponente3}>Cambiar estado del componente 3</button>
        </div>
        </>
    )

}