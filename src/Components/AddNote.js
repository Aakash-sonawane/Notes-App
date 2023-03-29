


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
         
            props.setList([ {date:new Date().toDateString(),
              item:props.note, fav:false}, ...props.list])}
          // console.log(obj.date);
          props.setNote("")
        }}>ADD</button>
      </div>
    )
  }

  export default AddNote;