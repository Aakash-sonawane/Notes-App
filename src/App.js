// import logo from './logo.svg';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Modal } from 'reactstrap';

import './App.css';




const Nav = (props) => {
  return (
    <>
      <nav className="navbar nav1 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href='/'>Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

const SideBar=()=>{
  return(
    <div className='sideBar'>
      <ul>
        <li className='item'>list</li>
        <li className='item'>list</li>
        <li className='item'>list</li>
        <li className='item'>list</li>
        <li className='item'>list</li>
      </ul>

    </div>
  )
}


const Section=(props)=>{

  const toggle=()=>{
    props.setIsAddNoTeFlag(!props.isAddNoteFlag)
  }

  return(
    <div className='board'>
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
        <button onClick={toggle} style={{
          position: "relative",
          float: "right",
          background: "red",
        color: "white",
          top: -"10px",
          right: -"10px"
          
        }}>X</button>
        <div style={{
          marginTop:"40px"
        }}>
      <AddNote list={props.list} setList={props.setList} note={props.note} setNote={props.setNote} setIsAddNoTeFlag={props.setIsAddNoTeFlag} isAddNoteFlag={props.isAddNoteFlag}/>
      </div>
      </div>

      </Modal>
      <ListRender list={props.list}/>
    </div>
  )
}

const AddNote=(props)=>{
  return(
    <div className='container addNote'>
      <textarea value={props.note} 
      onChange={(e)=>{
        props.setNote(e.target.value);
      }}></textarea>
      <button className='btn btn-secondary' onClick={()=>{
        // props.setIsAddNoTeFlag(false);
        if(props.note!==""){props.setList([...props.list,props.note])}
        console.log(props.list)
        props.setNote("")
      }}>ADD</button>
    </div>
  )
}

const ListRender=(props)=>{
  return(
    props.list.map((el)=>{
      return(

      <div className='notebox'>
        <p>{new Date().toDateString()}</p>
        <p>{el}</p>
        <button>remove</button>
      </div>
      )
    })
  )

}


function App() {
  const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
  const[note,setNote]=useState("");
  const[list,setList]=useState([])
  return (
    <>
      <Nav title={"mySite"} />
      <div className='display'>
        <SideBar/>
        <Section list={list} setList={setList} note={note} setNote={setNote} isAddNoteFlag={isAddNoteFlag} setIsAddNoTeFlag={setIsAddNoTeFlag}/>

      </div>
    </>
  );
}

Nav.propTypes = { title: PropTypes.string }
// Nav.defaultProps={title:"hello"}
export default App;




