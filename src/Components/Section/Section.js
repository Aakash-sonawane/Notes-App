import { Modal } from 'reactstrap';
import AddNote from '../AddNote';
import ListRender from '../ListRender';
const Section=(props)=>{

    const toggle=()=>{
      props.setIsAddNoTeFlag(!props.isAddNoteFlag)
    }
  
    return(
      <div className='board'>

        {props.showPage==="add"?
        <div>
        <button onClick={toggle}>+</button>
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
        :props.showPage==="history"?<ListRender list={props.list} setList={props.setList}/>:null}
      </div>
    )
  }


export default Section;