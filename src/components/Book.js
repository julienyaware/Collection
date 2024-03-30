import {FaTimes} from 'react-icons/fa'
import React from "react";
import { useState } from 'react';
import EditBook from './EditBook';

const Book = ({book, onDelete, onToggle,updateBookDetails}) => {

  const [open, setOpen] = useState({edit:false, view:false})

  const closeModal = () => {
    setOpen({edit:false, view:false})
  }

  return (
    <>
    <div className= {`book ${book.reminder ? 'reminder': ''}`} onDoubleClick= {()=> onToggle(book.id)}>
     <h3>{book.title} <FaTimes style= {{color:'red', cursor:'pointer'}} onClick={() => onDelete(book.id)}/>
     </h3>
     <p>{book.description}</p>
     <button onClick={() => setOpen({...open, edit : true})} className='btn '>Update</button>
    </div>
      {open.edit &&
        <EditBook 
          onClose={closeModal} 
          toEditTitle={book.title} 
          toEditDescription={book.description}
          toEditReminder={book.reminder}
          updateBookDetails = {updateBookDetails}
          open={open.edit}
          id={book.id} />
      }
      </>
  )
 
};

export default Book;
