import React, {useContext, useReducer} from 'react';
import NotesContext from './context.js'
import notesReducer from './reducer.js'
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'

function App() {
  const initialState = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, initialState)
  console.log(state)
  return (
    <NotesContext.Provider value={{state, dispatch}}>
      <Nav/>
      <AddNote/>
      <NoteList/>
    </NotesContext.Provider>
  );
}

export default App;
