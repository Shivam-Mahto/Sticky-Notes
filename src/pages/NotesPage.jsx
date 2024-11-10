import React from 'react'
import {fakeData} from '../assets/fakeData.js'
import NoteCard from '../components/NoteCard.jsx'

const NotesPage = () => {

  return (
    <div>
      {fakeData.map((note) => {
        return (<NoteCard key={note._id} note={note} />);
      })}
    </div>
  )
}

export default NotesPage
