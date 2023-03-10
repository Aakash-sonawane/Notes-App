// import logo from './logo.svg';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

import SideBar from "./Components/SideBar/SideBar"
import './App.css';
import Section from "./Components/Section/Section"




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




function App() {
  
  const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
  const[note,setNote]=useState("");
  const[list,setList]=useState(JSON.parse(localStorage.getItem("list") || '[]'));
  // const[listArray, setListArray]
  const[showPage,setShowPage]=useState("");
  // cont localStorage.getItem
  // const jsonList=JSON.stringify(list)
  // localStorage.setItem("list",jsonList);
  useEffect(()=>{
    // const state = ;
      // if(list!=="")
     localStorage.setItem("list", JSON.stringify(list));
     console.log(list);
  },[list]);
  
  return (
    <main>
      <Nav title={"mySite"} />
      <div className='display'>
        <SideBar showPage={showPage} setShowPage={setShowPage}/>
        <Section showPage={showPage} list={list} setList={setList} note={note} setNote={setNote} isAddNoteFlag={isAddNoteFlag} setIsAddNoTeFlag={setIsAddNoTeFlag}/>

      </div>
    </main>
  );
}

Nav.propTypes = { title: PropTypes.string }
// Nav.defaultProps={title:"hello"}
export default App;




