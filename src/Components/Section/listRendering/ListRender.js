// import { useEffect, useState } from "react"



const ListRender=(props)=>{


  // for favourite list
  const toggleFavourite=(id)=>{
    // const id=e.target.id;
    console.log(id)
    const updatedNotes=props.list.map((note)=>{
      return note.id===id?{...note,fav:!note.fav}:{...note};
    })
    console.log(updatedNotes)
    props.setList(updatedNotes);
  }
  // const toggleFavourite = (id) => {
  //   const updatedNotes = notes.map((note) =>
  //     note.id === id ? { ...note, isFavourite: !note.isFavourite } : note
  //   );
  //   setNotes(updatedNotes);
  // };


  // for trash bin

    const removeEl=(event)=>{ 
      const removeIndex=(props.list.length-event.target.id-1)
      props.setDeletedItems([...props.deletedItems, props.list[removeIndex]])
      console.log(props.deletedItems)
        const FilterList =props.list.filter((el)=>{
          return el != props.list[removeIndex];
        })
        props.setList(FilterList);
    }
   
    return(
      props.list.map((el,index)=>{
        return(
  
        <div key={index.toString()} className='notebox'>
          <p>{el.date}</p>
          <div style={{overflow:"hidden",height:"20px"}}>{el.item}</div>
          <div><i id={props.list.length-index-1} onClick={(e)=>{toggleFavourite(Number(e.target.id)+1)}} class={el.fav?"fa-solid fa-star fav":"fa-regular fa-star fav"}></i></div>
          <div ><i id={props.list.length-index-1} onClick={(e)=>{removeEl(e)}} class="fa-regular fa-trash-can x"></i></div>
        </div>
        )
      })
    )
  
  }

  export default ListRender;
  