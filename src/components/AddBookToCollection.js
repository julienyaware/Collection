import React from 'react';
import { useState } from 'react'
import { db } from '../Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


const AddBookToCollection = ({addBook}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit =  (e) => {
    e.preventDefault()
    if (!title) {
      alert('Please add a book!')
      return
    }
    addBook(title,description,reminder)
    setTitle('')
    setDescription('')
    setReminder(false)

  }

  return (
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>Book</label>
        <input type='text' placeholder='Add Book' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className='form-control'>
        <label>Short Description</label>
        <input type='text' placeholder='Add Short Description' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder To Read</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Add To Collection' className='btn btn-block' />
    </form>
  )
}

export default AddBookToCollection;