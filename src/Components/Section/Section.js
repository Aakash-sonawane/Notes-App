import Popup from '../Popup'
import { useState } from 'react';
import MainList from '../renderLists/MainList';
import About from './about';
const Section=(props)=>{

    const {showPage, list, setList,deletedItems,setDeletedItems}=props

    const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
    const [isEdit, setIsEdit]=useState(false);
    const [editId, seteditId] = useState("");
   
    const toggle=()=>{
      setIsAddNoTeFlag(!isAddNoteFlag)
    }

    const toggleisEdit = () => {
      setIsEdit(!isEdit)
    }

    const handleIsedit = (event) => {
      seteditId(list.length - event.target.id - 1)
    }

    return(
      <div className='board'>
        <div >

        {showPage==='add' && <div className='add-btn-plus' 
        onClick={toggle}><i className="fa-solid fa-2x fa-plus"></i></div>}

       {list.length===0 && !isAddNoteFlag?<About/>:null}
        
        {showPage==='add' &&
          (isAddNoteFlag || isEdit) && <Popup 
          toggle={isAddNoteFlag?toggle:toggleisEdit} 
          list={list} 
          setList={setList} 
          isAddNoteFlag={isAddNoteFlag}
          isEdit={isEdit}
          editId={editId}
          />
        }
        </div>

        <div className='list-container'>
          
          <MainList showPage={showPage} 
          setIsAddNoTeFlag={setIsAddNoTeFlag}  
          deletedItems={deletedItems} 
          setDeletedItems={setDeletedItems} 
          list={list} setList={setList} 
          toggleisEdit={toggleisEdit}
          handleIsedit={handleIsedit}
          />

        </div>
      </div>
    )
  }


export default Section;