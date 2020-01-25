import React from 'react'

const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    {id: 1, text: 'Do homework'},
    {id: 2, text: 'Learn React hooks'},
    {id: 3, text: 'Buy food'}
  ] 
})

export default NotesContext