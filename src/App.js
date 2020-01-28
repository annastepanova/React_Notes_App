import React, {useContext, useReducer} from 'react';
import NotesContext from './context.js'
import notesReducer from './reducer.js'
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import EditNote from './components/EditNote'

function App() {
  const initialState = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, initialState)
  console.log(state)
  return (
    <NotesContext.Provider value={{state, dispatch}}>
      <Nav/>
      {state.currentNote === null ? (
        <div>
        <AddNote />
        <NoteList />
        </div>
      ) : <EditNote/> }
      
    </NotesContext.Provider>
  );
}

export default App;
