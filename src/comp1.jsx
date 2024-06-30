
import { setComponent5 } from "./actions";
import Comp2 from "./comp2"
import Comp3 from "./comp3"
import Comp5 from "./comp5"
import { useDispatch, useSelector } from 'react-redux';

export default function Comp1(){

  const state1= useSelector((state)=>state.reductor);
  const dispatch = useDispatch();
  const incrementComponente5=()=>{
    dispatch(setComponent5());
  }
  return (
        <>
          <div className="node"> 
            <h1>Componente 1</h1>
            <h1>Estado: <strong>{state1.componente1}</strong></h1>
            <button onClick={incrementComponente5}>Cambiar estado en el componete 5</button>

            <div className="children">
            <Comp2></Comp2>
            <Comp3></Comp3>
            <Comp5></Comp5>
            </div>

          </div>
        </>
      )

}