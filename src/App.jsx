import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import './App.css';
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] =useState([]);
  //console.log("notes",notes);

  function addNote(newNote){
    setNotes(prevNotes=>{
      //console.log(prevNotes);
      return [
        ...prevNotes,newNote
      ]

    })}

    function deleteNote(id){
     //console.log("delete was triggered");
     setNotes(prevNotes =>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id;
      })
     });
    }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote}
       />
       {notes.map((noteItem, index)=>{
        return <Note 
       key={index}
       id={index}
       title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
