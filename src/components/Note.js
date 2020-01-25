import React from 'react'

export default function Note({note}) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="btn-container">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  )

}