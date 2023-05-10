// import { useEffect, useState } from "react"

import { useState } from "react"
import AddNote from "../AddNote";
import { Modal } from "reactstrap";



const ListRender = (props) => {

  const [isEdit, setIsEdit] = useState(false);
  const [editId, seteditId] = useState("");

  const toggleisEdit = () => {
    setIsEdit(!isEdit)
  }


  // for favourite list
  const toggleFavourite = (id) => {
    console.log(id)
    const updatedNotes = props.list.map((note) => {
      return note.id === id ? { ...note, fav: !note.fav } : { ...note };
    })
    console.log(updatedNotes)
    props.setList(updatedNotes);
  }

  // for delete items from list
  const removeEl = (event) => {
    const removeIndex = (props.list.length - event.target.id - 1)
    props.setDeletedItems([...props.deletedItems, props.list[removeIndex]])
    console.log("remove index", removeIndex)
    const FilterList = props.list.filter((el) => {
      return el !== props.list[removeIndex];
    })

    props.setList(FilterList);
  }

  // for editing in notes
  const edit = (event) => {
    // console.log((props.list.length-event.target.id-1));
    seteditId(props.list.length - event.target.id - 1)
    console.log("event.target.id is", editId)
  }


  return (
    <>
      <Modal
        size='lg'
        isOpen={isEdit}
        toggle={toggleisEdit}
      >
        <div style={{
          // width:"400px",
          height: "400px",
          // backgroundColor:"yellow",
          // display:"flex",
          // justifyContent:"center",
          // alignItems:"center",
          // flexDirection:'column'

        }}>
          <button className='x-btn' onClick={toggleisEdit} style={{}}>X</button>
          <div style={{
            marginTop: "40px"
          }}>
            <AddNote toggle={toggleisEdit} list={props.list} setList={props.setList} isEdit={isEdit} editId={editId} />
          </div>
        </div>

      </Modal>

      {props.list.map((el, index) => {
        return (

          <div key={index.toString()} className='notebox'>
            <p>{el.date}</p>
            <div style={{ overflow: "hidden", height: "24px" }}>{el.itemTitle}</div>

            <div className="icons-container">
              <i id={props.list.length - index - 1} onClick={(e) => { toggleFavourite(Number(e.target.id) + 1) }} class={el.fav ? "fa-solid fa-star fav" : "fa-regular fa-star fav"}></i>
              <i id={props.list.length - index - 1} onClick={(e) => { edit(e); toggleisEdit() }} class="fa-regular fa-pen-to-square"></i>
              <i id={props.list.length - index - 1} onClick={(e) => { removeEl(e) }} class="fa-regular fa-trash-can "></i>
            </div>
          </div>
        )
      })}
    </>
  )

}

export default ListRender;
