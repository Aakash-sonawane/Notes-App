import React from 'react'
function FavRendering(props) {
  const toggleFavourite=(id)=>{
    // const id=e.target.id;
    console.log(id)
    const updatedNotes=props.list.map((note)=>{
      return note.id===id?{...note,fav:!note.fav}:{...note};
    })
    console.log(updatedNotes)
    props.setList(updatedNotes);
  }
  
    return(
        props.list.map((el,index)=>{
          return(
    
          el.fav && <div key={index.toString()} className='notebox'>
            {/* <div > */}
            <p>{el.date}</p>
            <div style={{overflow:"hidden",height:"20px"}}>{el.item}</div>
            {/* </div> */}
            {/* <button >fav</button> */}
            {/* <div><i id={props.list.length-index-1} class={el.fav===true?"fa-regular fa-star fav":"fa-solid fa-star fav"}></i></div> */}
            {/* <button id={props.list.length-index-1} className="x" onClick={removeEl}>x</button> */}
            <div ><i id={props.list.length-index-1} onClick={(e)=>{toggleFavourite(Number(e.target.id)+1)}} class="fa-regular fa-trash-can x"></i></div>
          </div>
          )
        })
      )
}

export default FavRendering
