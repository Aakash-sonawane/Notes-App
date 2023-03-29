import { Modal } from 'reactstrap';
import AddNote from '../AddNote';
import ListRender from '../ListRender';
import ItemsRender from "../itemRendering"
const Section=(props)=>{

    const toggle=()=>{
      props.setIsAddNoTeFlag(!props.isAddNoteFlag)
    }
  
    return(
      <div className='board'>

        {props.showPage==="add"?
        <div>
        {/* <button onClick={toggle}>+</button> */}
        <div className='add-btn-plus' onClick={toggle}><i class="fa-solid fa-2x fa-plus"></i></div>
        <Modal
        size='lg'
        isOpen={props.isAddNoteFlag}
        toggle={toggle}
        >
          <div style={{
            // width:"400px",
            height:"400px",
            // backgroundColor:"yellow",
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center",
            // flexDirection:'column'
            
          }}>
          <button className='x-btn' onClick={toggle} style={{}}>X</button>
          <div style={{
            marginTop:"40px"
          }}>
        <AddNote list={props.list} setList={props.setList} note={props.note} setNote={props.setNote} setIsAddNoTeFlag={props.setIsAddNoTeFlag} isAddNoteFlag={props.isAddNoteFlag}/>
        </div>
        </div>
  
        </Modal>
        
        </div>
        :props.showPage==="history"?<div className='list-container'><ListRender setFavItems={props.setFavItems} favItems={props.favItems} deletedItems={props.deletedItems} setDeletedItems={props.setDeletedItems} list={props.list} setList={props.setList}/></div>
        :
         props.showPage==="bin"?<div className='list-container'><ItemsRender deletedItems={props.deletedItems} setDeletedItems={props.setDeletedItems}/></div>
         :
         props.showPage==="fav"?<div className='list-container'><ItemsRender deletedItems={props.favItems} setDeletedItems={props.setFavItems}/></div>:null}
      </div>
    )
  }


export default Section;