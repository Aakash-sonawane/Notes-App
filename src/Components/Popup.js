import React from 'react'
import AddNote from './AddNote';

export default function Popup({toggle,list,setList,isAddNoteFlag,isEdit,editId}) {
  return (
    <div>
        <div className='popup-inner-wrap'>
            <button className='x-btn' onClick={toggle}>X</button>
            <div>
                <AddNote toggle={toggle} 
                list={list} 
                setList={setList} 
                isAddNoteFlag={isAddNoteFlag} isEdit={isEdit} editId={editId}/>
            </div>
        </div>
  
    </div>
  )
}
