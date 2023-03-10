


const AddNote=(props)=>{
    return(
      <div className='container addNote'>
        <textarea value={props.note} 
        onChange={(e)=>{
          props.setNote(e.target.value);
        }}></textarea>
        <button className='btn btn-secondary' onClick={()=>{
          // props.setIsAddNoTeFlag(false);

          if(props.note!==""){
            // localStorage.setItem("list", JSON.stringify(props.list));
            props.setList([props.note,...props.list])}
          console.log(props.list)
          props.setNote("")
        }}>ADD</button>
      </div>
    )
  }

  export default AddNote;