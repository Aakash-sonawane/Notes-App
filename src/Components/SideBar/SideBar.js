import { useState } from "react";

const SideBar=(props)=>{
  const[showStatus, setShowStatus]= useState(false)
    return(
      <div className='sidebar'>
        <div className="burger-menu-icon" onClick={()=>{setShowStatus(!showStatus)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
<path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
<path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
<path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
</svg>

        </div>

        <div className={`sidebar-items ${showStatus?"show":"hide"}`} id="sidebar" onClick={(event)=>{
          if(event.target.id==='sidebar'){
            return;
          }
          props.setShowPage(event.target.id);
        }}>

          <div className='item' id="add" onClick={()=>{setShowStatus(!showStatus)}}>Add Note ({props.list.length})</div>
          <div className='item' id="fav" onClick={()=>{setShowStatus(!showStatus)}}>Favourite</div>
          <div className='item' id="bin" onClick={()=>{setShowStatus(!showStatus)}}>Trash Bin ({props.deletedItems.length})</div>
        </div>
  
      </div>
    )
  }

  export default SideBar;