import React, {useContext, useReducer} from 'react';
import NotesContext from './context.js'
import notesReducer from './reducer.js'


function App() {
  const initialState = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, initialState)
  return (
    <NotesContext.Provider value={{state, dispatch}}>
      
    </NotesContext.Provider>
  );
}

export default App;
