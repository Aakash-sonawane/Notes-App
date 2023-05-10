import { Modal } from 'reactstrap';
import AddNote from '../AddNote';
import ListRender from '../renderLists/ListRender';
import ItemsRender from "../renderLists/itemRendering"
import { useState } from 'react';
import FavRendering from '../renderLists/favRendering';
import About from './about';
// import image from "../../plus.png"
const Section=(props)=>{

    const {showPage, list, setList,deletedItems,setDeletedItems}=props

    const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
    // const [isEdit, setIsEdit]=useState();
    
    // const[favItems, setFavItems]=useState(JSON.parse(localStorage.getItem("favItems") || '[]'));

    const toggle=()=>{
      setIsAddNoTeFlag(!isAddNoteFlag)
    }
    // const toggleisEdit=()=>{
    //   setIsEdit(!isEdit)
    // }
    // toggleisEdit()
    return(
      <div className='board'>
        {props.showPage==="add"?
        <div>
        {/* <button onClick={toggle}>+</button> */}
        <div className='add-btn-plus' onClick={toggle}><i class="fa-solid fa-2x fa-plus"></i></div>
       {list.length===0?<About/>:null}
        

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
        <AddNote toggle={toggle} list={list} setList={setList} isAddNoteFlag={isAddNoteFlag}/>
        </div>
        </div>
  
        </Modal>
        
        </div>
        :showPage==="history"?<div className='list-container'><ListRender setIsAddNoTeFlag={setIsAddNoTeFlag}  deletedItems={deletedItems} setDeletedItems={setDeletedItems} list={list} setList={setList}/></div>
        :
         showPage==="bin"?<div className='list-container'><ItemsRender deletedItems={deletedItems} setDeletedItems={setDeletedItems}/></div>
         :
         showPage==="fav"?<div className='list-container'><FavRendering list={list} setList={setList}/></div>:null}
      </div>
    )
  }


export default Section;