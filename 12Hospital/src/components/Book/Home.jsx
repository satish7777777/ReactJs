import React from 'react'
import {useState} from 'react';
import BookForm from './BookForm';


function Home() {
    const [editingId, setEditingID]=useState(null);
    const [openPopup, setOpenPopup]=useState(false);

    const ShowPopup=(show)=>{
        setOpenPopup(show);
    }

    const onSuccess=()=>{
        ShowPopup(false);
        getAllRoomBookData();
        
    }

    const handleAddNewClick=()=>{
   
        setEditingID(null);
        ShowPopup(true);
         
      }
  return (
    <div>
      <button onClick={handleAddNewClick}>Book Apointment</button>
      {openPopup && <BookForm id={editingId} handleSuccess={onSuccess} handleClose={()=>{ShowPopup(false)}} />}

    </div>
  )
}

export default Home
