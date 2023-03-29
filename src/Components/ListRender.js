import { useEffect, useState } from "react"

const ListRender=(props)=>{
//   const str = localStorage.getItem('list');
// const parsedArray = JSON.parse(str);
// let arr=parsedArray
const[isFav, setIsFav]=useState("false");

    // useEffect(()=>{
    //  if(isFav===false){
    //   setFavClass("solid")
    //  } 
    //  else{
    //   setFavClass("regular")
    //  }
    // },[isFav])

    const addFav=(event)=>{
      const favIndex=(props.list.length-event.target.id-1)
      setIsFav(!isFav)
      const arr=props.list;
      isFav===true?arr[favIndex].fav=true:arr[favIndex].fav=false;
      props.setList([...arr]);
      isFav===false? props.setFavItems([...props.favItems, props.list[favIndex]]):
      // removeFav();
      console.log(props.list)
    }

    // const removeFav=(event)=>{
    //   const favIndex=(props.list.length-event.target.id-1)
    //   const FilterList =props.favItems.filter((el)=>{
    //     // console.log(el);
    //     // console.log(props.list[favIndex])
    //     return el != props.list[favIndex];

    //   })
    //   // props.setList(FilterList);
    //   props.setFavItems(FilterList)
    // }

    const removeEl=(event)=>{
        
        
      const removeIndex=(props.list.length-event.target.id-1)
      props.setDeletedItems([...props.deletedItems, props.list[removeIndex]])
      // console.log(props.deletedItems)
        const FilterList =props.list.filter((el)=>{
          return el != props.list[removeIndex];
        })
        props.setList(FilterList);
    }
   
    return(
      props.list.map((el,index)=>{
        return(
  
        <div key={index.toString()} className='notebox'>
          {/* <div > */}
          <p>{el.date}</p>
          <div style={{overflow:"hidden",height:"20px"}}>{el.item}</div>
          {/* </div> */}
          {/* <button >fav</button> */}
          <div><i id={props.list.length-index-1} onClick={addFav} class={el.fav===false?"fa-regular fa-star fav":"fa-solid fa-star fav"}></i></div>
          {/* <button id={props.list.length-index-1} className="x" onClick={removeEl}>x</button> */}
          <div ><i id={props.list.length-index-1} onClick={removeEl} class="fa-regular fa-trash-can x"></i></div>
        </div>
        )
      })
    )
  
  }

  export default ListRender;