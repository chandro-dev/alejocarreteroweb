// dataBReducer.js
const initialState = {componente1:0,componente2:0,componente3:0,componente4:0,componente5:0};
const componetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_component_1':
        return { ...state, componente1: state.componente1 + 1 };
    case 'set_component_2':
        return { ...state, componente2: state.componente2 + 1 };
    case 'set_component_3':
        return { ...state, componente3: state.componente3 + 1 };
    case 'set_component_4':
        return { ...state, componente4: state.componente4 + 1 };
    case 'set_component_5':
        return { ...state, componente5: state.componente5 + 1 };
    default:
      return state;
  }
};

export default componetsReducer;
