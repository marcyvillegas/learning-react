import { createContext, useReducer } from 'react';

const initialState = {
  isModalOpen: false,
  user: 'Original'
}

const initialModalContext = {
  modalState: initialState,
  modalDispatch: () => { }
}

// Context <- this is used in the here: <NAME_OF_CONTEXT.Provider value={ }> 
export const ModalContext = createContext(initialModalContext);

function ModalContextProvider({ children }) {

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {

    switch (action.type) {
      case 'EMIT_OPEN_MODAL':
        return {
          ...state,
          isModalOpen: true
        }

      case 'EMIT_CLOSE_MODAL':
        return {
          ...state,
          isModalOpen: false
        }

      case 'EMIT_CHANGE_USER':
        return {
          ...state,
          user: 'New'
        }

      default:
        return state;
    }
  }

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
