const SideBar=(props)=>{
    return(
      <div className='sideBar'>
        <div className="sidebar-items" onClick={(event)=>{
          console.log(event.target.id)
          props.setShowPage(event.target.id);
        }}>
          <div className='item' id="add">Add Note</div>
          <div className='item' id="history">History</div>
          <div className='item' id="fav">Favourite</div>
          <div className='item' id="bin">Trash Bin</div>
          {/* <div className='item'>list</div> */}
        </div>
  
      </div>
    )
  }

  export default SideBar;