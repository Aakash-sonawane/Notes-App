import Popup from '../Popup'
import { useState } from 'react';
import MainList from '../renderLists/MainList';
import About from './about';
const Section=(props)=>{

    const {showPage, list, setList,deletedItems,setDeletedItems,searchItems}=props

    const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
    const [isEdit, setIsEdit]=useState(false);
    const [editId, seteditId] = useState("");
    const [isBurger,setIsBurger] = useState(false);
    const toggle=()=>{
      setIsAddNoTeFlag(!isAddNoteFlag)
    }

    const toggleisEdit = () => {
      setIsEdit(!isEdit)
    }

    const handleIsedit = (event) => {
      seteditId(list.length - event.target.id - 1)
    }

    function sortArrayByGivenCond(arr,cond,title) {
      setIsBurger(!isBurger);
      return arr.sort((a, b) => {
          
          let titleA = a[title].toLowerCase();
          let titleB = b[title].toLowerCase();

          if(cond==='asc'){
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
          }
          else if(cond==='desc'){
            if (titleA < titleB) {
                return 1;
            }
            if (titleA > titleB) {
                return -1;
            }
          }


          
          return 0;
      });
  }

//   function sortArrayByTitleDescending(arr) {
//     return arr.sort((a, b) => {
//         let titleA = a.itemTitle.toLowerCase();
//         let titleB = b.itemTitle.toLowerCase();

//         if (titleA < titleB) {
//             return 1;
//         }
//         if (titleA > titleB) {
//             return -1;
//         }
//         return 0;
//     });
// }

// function sortArrayByDateAscending(arr) {
//   return arr.sort((a, b) => {
//       let dateA = new Date(a.date);
//       let dateB = new Date(b.date);

//       if (dateA < dateB) {
//         return -1;
//     }
//     if (dateA > dateB) {
//         return 1;
//     }
//     return 0;
//       // return dateA - dateB; // For descending order
//   });
// }

// function sortArrayByDateDescending(arr) {
//   return arr.sort((a, b) => {
//       let dateA = new Date(a.date);
//       let dateB = new Date(b.date);

//       // return dateB - dateA; // For descending order
//       if (dateA < dateB) {
//         return 1;
//     }
//     if (dateA > dateB) {
//         return -1;
//     }
//     return 0;
//   });
// }


    return(
      <div className='board'>

        <div className='list-options'>
          <div className="burger-dots" onClick={()=>{setIsBurger(!isBurger)}}>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
          </div>
          {isBurger && 
          <div className="options" onClick={(e)=>{
            // console.log(e.target.className.split(" ")[1])
            let sortCondition=e.target.className.split(" ")[1]
            if(sortCondition==='a-z'){
              sortArrayByGivenCond(list,'asc','itemTitle')
              setList([...list])
            }
            else if(sortCondition==='z-a'){
              sortArrayByGivenCond(list,'desc','itemTitle')
              setList([...list])
            }
            else if(sortCondition==='date'){
              sortArrayByGivenCond(list,'asc','date')
              setList([...list])
            }
            else if(sortCondition==='r-date'){
              sortArrayByGivenCond(list,'desc','date')
              setList([...list])
            }

          }}>
            <div className="option a-z">sort by a to z</div>
            <div className="option z-a">sort by z to a</div>
            <div className="option date">sort by date</div>
            <div className="option r-date">sort by date reverse</div>
          </div>
          }
        </div>


        <div >

        {showPage==='add' && <div className='add-btn-plus' 
        onClick={toggle}><i className="fa-solid fa-2x fa-plus"></i></div>}

       {(list.length===0 && deletedItems.length===0) && !isAddNoteFlag?<About/>:null}
        
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

        <div className={`list-container ${showPage==="add"?"f-view":"s-view"}`}>
          
          <MainList showPage={showPage} 
          setIsAddNoTeFlag={setIsAddNoTeFlag}  
          deletedItems={deletedItems} 
          setDeletedItems={setDeletedItems} 
          list={list} setList={setList} 
          toggleisEdit={toggleisEdit}
          handleIsedit={handleIsedit}
          searchItems={searchItems}
          />

        </div>
      </div>
    )
  }


export default Section;