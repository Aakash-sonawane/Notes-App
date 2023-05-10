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
  // const {toggle}=props;
    return(
      <div className='container addNote'>

        <label>Title <input value={noteTitle} max={5} onChange={(e)=>{setNoteTitle(e.target.value)}}></input></label>
        
        <textarea value={note} 
        placeholder="write here"
        onChange={(e)=>{
          setNote(e.target.value);
        }}></textarea>
        {isAddNoteFlag && <button className='btn btn-secondary' onClick={()=>{
          // props.setIsAddNoTeFlag(false);
          
          if(note!=="" && noteTitle!=""){
            // localStorage.setItem("list", JSON.stringify(props.list));
         
           setList([ {id:list.length+1, date:new Date().toDateString(),itemTitle:noteTitle,
              item:note, fav:false}, ...list])}
          console.log(list);
          // setNote("")
          toggle();
        }}>ADD</button>}
        {isEdit&&<button onClick={()=>{
          toggle();
          if(editId>=0){
            list[editId].item=note;
            list[editId].itemTitle=noteTitle;
            // console.log("note is",note)
          // let obj={id:editId, date:new Date().toDateString(),
          //   item:note, fav:false}
          //   const list1=list.map((el)=>{
          //     if(el.id==obj.id){
          //        el=obj;
          //     }
              

          //     // look at here
              
          //   })
            setList([...list]);
          //   console.log("obj is",obj);
          //   console.log("list1 is",list1);
          console.log(editId)
          }
          // setList([...list]);
        }}>Save</button>}
      </div>
    )
  }

  export default AddNote;