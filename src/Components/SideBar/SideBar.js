const SideBar=(props)=>{
    return(
      <div className='sideBar'>
        <div className="sidebar-items" id="sidebar" onClick={(event)=>{
          if(event.target.id==='sidebar'){
            return;
          }
          props.setShowPage(event.target.id);
        }}>

          <div className='item' id="add">Add Note ({props.list.length})</div>
          <div className='item' id="fav">Favourite</div>
          <div className='item' id="bin">Trash Bin ({props.deletedItems.length})</div>
        </div>
  
      </div>
    )
  }

  export default SideBar;