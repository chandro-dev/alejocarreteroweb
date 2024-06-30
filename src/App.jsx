import './App.css'
import Comp1 from'./comp1';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  //const informacion={nombre:"Alejandro",apellido:"Apellido",edad:20};
  return (
    <Provider store={store}>
      <div className="tree">
        <Comp1 ></Comp1>
      </div>
      </Provider>
  )
}

export default App
