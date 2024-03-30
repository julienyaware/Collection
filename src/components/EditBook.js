import React from 'react';
import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase';
import EditModal from './EditModal';
import { FaTimes } from 'react-icons/fa'


const EditBook = ({ open, onClose, toEditTitle, toEditReminder, toEditDescription, id , updateBookDetails}) => {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)
  const [reminder, setReminder] = useState(toEditReminder)


  const UpdateBook = async (e) => {
    e.preventDefault()
    updateBookDetails(title,description,reminder,id)
    onClose()

  }

  return (
    <EditModal modalTitle='Edit Book Details' onClose={onClose} open={open}>
      <form onSubmit={UpdateBook} className='add-form'>
        <div className='form-control'>
          <label>Edit Title</label>
          <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className='form-control'>
          <label>Edit Short Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        </div>
        <div className='form-control form-control-check'>
          <label>Set Reminder To Read</label>
          <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <button type='submit' className='btn btn-block editButton'>Edit</button>
      </form>
    </EditModal>
  );
};

export default EditBook;