import { Modal } from 'reactstrap';
import AddNote from '../AddNote';
import ListRender from './listRendering/ListRender';
import ItemsRender from "./listRendering/itemRendering"
import { useState } from 'react';
import FavRendering from './listRendering/favRendering';
const Section=(props)=>{

    const {showPage, list, setList,deletedItems}=props

    const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
    const [isEdit, setIsEdit]=useState();
    
    const[favItems, setFavItems]=useState(JSON.parse(localStorage.getItem("favItems") || '[]'));

    const toggle=()=>{
      setIsAddNoTeFlag(!isAddNoteFlag)
    }
    const toggleisEdit=()=>{
      setIsEdit(!isEdit)
    }
    // toggleisEdit()
    return(
      <div className='board'>
       {props.showPage==="empty" && <h1>wefwfweffwffwfw</h1>}

        {props.showPage==="add"?
        <div>
        {/* <button onClick={toggle}>+</button> */}
        <div className='add-btn-plus' onClick={toggle}><i class="fa-solid fa-2x fa-plus"></i></div>
        <Modal
        size='lg'
        isOpen={isAddNoteFlag}
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
        <AddNote toggle={toggle} list={list} setList={setList} />
        </div>
        </div>
  
        </Modal>
        
        </div>
        :props.showPage==="history"?<div className='list-container'><ListRender setFavItems={setFavItems} favItems={favItems} deletedItems={props.deletedItems} setDeletedItems={props.setDeletedItems} list={props.list} setList={props.setList}/></div>
        :
         props.showPage==="bin"?<div className='list-container'><ItemsRender deletedItems={props.deletedItems} setDeletedItems={props.setDeletedItems}/></div>
         :
         props.showPage==="fav"?<div className='list-container'><FavRendering list={props.list} setList={props.setList}/></div>:null}
      </div>
    )
  }


export default Section;