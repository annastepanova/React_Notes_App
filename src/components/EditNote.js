import React, { useState, useContext, useEffect, useRef } from 'react'
import NotesContext from '../context'

export default function EditNote() {
  const {state, dispatch} = useContext(NotesContext)
  const [value, setValue] = useState(state.currentNote.text)

  let ref = useRef()

  useEffect(() => {
    ref.current.focus()

  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value.trim() === '') {
      alert('Can not submit blank note')
    }
    else {
      dispatch({type: 'UPDATE_NOTE', payload: value})
      setValue('')

    }
  }

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <textarea ref={ref} onChange={handleChange} value={value} id="" name="" cols='30' rows='10'/>
        <div style={{textAlign: 'right'}}>
          <button>Update Note</button>
        </div>
      </form>
    </div>
  )
}