import '../../styles/App.css'
const MainList = (props) => {
  const{showPage,list,setList,deletedItems,
    setDeletedItems,toggleisEdit,handleIsedit}=props;

  const toggleFavourite = (id) => {
    const updatedNotes = list.map((note) => {
      return note.id === id ? { ...note, fav: !note.fav } : { ...note };
    })
    setList(updatedNotes);
  }

  // for delete items from list
  const removeEl = (event,list) => {

    const removeIndex=(list.length-event.target.id-1)

    const FilterList =list.filter((el)=>{
          return el !== list[removeIndex];
    })
    
    if(showPage==="add"){
        setDeletedItems([...deletedItems, list[removeIndex]])
        setList(FilterList);
    }
    else{
      setDeletedItems(FilterList);
    }
    
  }

  // for editing in notes
  return (
    <>
      {
        showPage==="add" && list.map((el, index) => {
            return (
                    <div key={index.toString()} className='notebox'>
                      <div className="inner-wrap">
                      <p className="updateTime">{el.date}</p>
                      <div className="title">{el.itemTitle}</div>
          
                      <div className="icons-container">
                        <i id={list.length - index - 1} onClick={(e) => { toggleFavourite(Number(e.target.id) + 1) }} className={el.fav ? "fa-solid fa-star fav" : "fa-regular fa-star fav"}></i>
                        <i id={list.length - index - 1} onClick={(e) => { handleIsedit(e); toggleisEdit() }} className="fa-regular fa-pen-to-square"></i>
                        <i id={list.length - index - 1} onClick={(e) => { removeEl(e,list) }} className="fa-regular fa-trash-can "></i>
                      </div>
                      </div>
                    </div>
                  )
          })
      }
      {
        showPage==='bin' && deletedItems.map((el,index)=>{
            return(
                  <div key={index.toString()} className='notebox'>
                    <div className="inner-wrap">
                    <p className="updateTime">{el.date}</p>
                    <div className="title">{el.itemTitle}</div>
                    
                    <div className="icons-container">
                      <i id={deletedItems.length-index-1} onClick={(e)=>{removeEl(e,deletedItems)}} className="fa-regular fa-trash-can x"></i>
                      </div>
                    </div>
                  
                  </div>
                )
          })
      }

      {
        showPage==="fav" && list.map((el,index)=>{
            return(
            el.fav && <div key={index.toString()} className='notebox'>
              <div className="inner-wrap">
              <p className="updateTime">{el.date}</p>
              <div className='title'>{el.itemTitle}</div>
              <div className="icons-container"><i id={list.length-index-1} onClick={(e)=>{toggleFavourite(Number(e.target.id)+1)}} className="fa-regular fa-trash-can x"></i></div>
              </div>
            </div>
            )
          })
      }
    </>
  )

}

export default MainList;
