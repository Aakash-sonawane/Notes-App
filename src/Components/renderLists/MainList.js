import '../../styles/App.css'
import Card from './Card.js'
const MainList = (props) => {
  const{showPage,list,setList,deletedItems,
    setDeletedItems,toggleisEdit,handleIsedit,searchItems}=props;

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
        showPage==="add" && 
                    <Card
                    list={list} 
                    toggleFavourite={toggleFavourite} 
                    handleIsedit={handleIsedit}
                    removeEl={removeEl}
                    toggleisEdit={toggleisEdit}/>
                 
      }

{/* search item start */}
    {
        showPage==="search" &&
        <>
        <Card
        list={searchItems} 
        toggleFavourite={toggleFavourite} 
        handleIsedit={handleIsedit}
        removeEl={removeEl}
        toggleisEdit={toggleisEdit}/>

        {  !searchItems.length &&  <div className="no-result">No Search Result Found</div>}
        
        </>

        

      }
{/* search item end */}

      {
        showPage==='bin' && 
        <Card
        list={deletedItems} 
        toggleFavourite={toggleFavourite} 
        handleIsedit={handleIsedit}
        removeEl={removeEl}
        toggleisEdit={toggleisEdit}/>
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
