import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, addDoc, Timestamp, updateDoc } from "firebase/firestore"
import { db } from "./Firebase";
import "./styles.css";
import Header from "./components/Header";
import Books from "./components/Books";
import AddBookToCollection from './components/AddBookToCollection'
import React from "react";

function App() {
  const [showAddBook, setShowAddBook] = useState(false)
  const [books, setBooks] = useState([])
  const [fetchCurrentListOfBooks, setFetchCurrentListOfBooks] = useState(false)
 
  const fetchBooks = async () => {
    await getDocs(collection(db, "books"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setBooks(newData);
        console.log(books, newData);
      })

  }

  useEffect(() => {
    fetchBooks()
    console.log('fetchBook has been called')
  }, [fetchCurrentListOfBooks])

  const addBook = async (title, description, reminder) => {
    try {
      await addDoc(collection(db, 'books'), {
        title: title,
        description: description,
        reminder: reminder,
        created: Timestamp.now()
      })
      setFetchCurrentListOfBooks(!fetchCurrentListOfBooks)

    } catch (err) {
      alert(err)
    }
  }

  const updateBookDetails = async (title, description, reminder, id) => {
    const taskDocRef = doc(db, 'books', id)
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
        reminder: reminder
      })
      setFetchCurrentListOfBooks(!fetchCurrentListOfBooks)
      alert("You have successfully updated your book details.")
    } catch (err) {
      alert(err)
    }
  }

  const deleteBook = async (id) => {
    const taskDocRef = doc(db, 'books', id)
    try {
      await deleteDoc(taskDocRef)
      setFetchCurrentListOfBooks(!fetchCurrentListOfBooks)
      alert("Book Deleted From The Database Successfully")
    } catch (err) {
      alert(err)
    }

  }



  const toggleReminder = (id) => {
    setBooks(books.map((book) => book.id === id ? { ...book, reminder: !book.reminder } : book))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddBook(!showAddBook)} showAdd={showAddBook} />
      {showAddBook && <AddBookToCollection addBook={addBook} />}
      {books.length > 0 ? (<Books books={books} onDelete={deleteBook} onToggle={toggleReminder} updateBookDetails={updateBookDetails} />) : ('No books to show')}
    </div>
  );
}

export default App;


