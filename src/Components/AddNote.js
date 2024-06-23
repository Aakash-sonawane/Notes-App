import { useEffect, useState } from "react";

const AddNote=({list,setList,toggle,isAddNoteFlag,isEdit,editId})=>{
  const[note,setNote]=useState("");
  const[noteTitle,setNoteTitle]=useState("");
    useEffect(()=>{
      if(isEdit){
        setNoteTitle(list[editId].itemTitle);
        setNote(list[editId].item);
      }
      else{
        setNoteTitle("");
        setNote("");
      }
    },[isEdit])

    function addNewNote(){
      if(note!=="" && noteTitle!=""){
        const listItem={
          id:list.length+1, 
          date:new Date().toDateString(),
          itemTitle:noteTitle,
          item:note, fav:false}

          setList([ 
            listItem, ...list
        ])}
      toggle();
    }

  // const {toggle}=props;
    return(
      <div className='addNote'>

        <input value={noteTitle} max={5} placeholder="Title" onChange={(e)=>{setNoteTitle(e.target.value)}}></input>
        
        <textarea value={note} 
        placeholder="Write here"
        onChange={(e)=>{
          setNote(e.target.value);
        }}></textarea>

        {isAddNoteFlag && <button className='btn btn-secondary' onClick={addNewNote}>ADD</button>}

        {isEdit&&<button onClick={()=>{
          toggle();
          if(editId>=0){
            list[editId].item=note;
            list[editId].itemTitle=noteTitle;
            setList([...list]);
          console.log(editId)
          }
        }}>Save</button>}
      </div>
    )
  }

  export default AddNote;