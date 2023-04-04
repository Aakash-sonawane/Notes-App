import { useState } from "react";



const AddNote=({list,setList,toggle,})=>{
  const[note,setNote]=useState("");
  
  // const {toggle}=props;
    return(
      <div className='container addNote'>
        <textarea value={note} 
        onChange={(e)=>{
          setNote(e.target.value);
        }}></textarea>
        <button className='btn btn-secondary' onClick={()=>{
          // props.setIsAddNoTeFlag(false);
          toggle();
          if(note!==""){
            // localStorage.setItem("list", JSON.stringify(props.list));
         
           setList([ {id:list.length+1, date:new Date().toDateString(),
              item:note, fav:false}, ...list])}
          console.log(list);
          setNote("")
        }}>ADD</button>
      </div>
    )
  }

  export default AddNote;