
import { useDispatch, useSelector } from 'react-redux';
import {setComponent2} from './actions'
export default function Comp5(){

    const state5= useSelector((state)=>state.reductor);
    const dispatch = useDispatch();
    const incrementComponent2=()=>{
      dispatch(setComponent2());
    }
    return(
        <>
        <div className='node'>
            <h1>Componente 5</h1>
            <h1>Estado: <strong>{state5.componente5}</strong></h1>
            < button onClick={incrementComponent2}>Cambiar estado en el componete 2</button>
        </div>
        </>
    )

}