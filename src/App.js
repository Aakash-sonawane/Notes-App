// import logo from './logo.svg';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

import SideBar from "./Components/SideBar/SideBar"
import './App.css';
import Section from "./Components/Section/Section"
import Header from './Components/header/Header';








function App() {
  
  const[list,setList]=useState(JSON.parse(localStorage.getItem("list") || '[]'));
  const[showPage,setShowPage]=useState("history");
  const[deletedItems, setDeletedItems]=useState(JSON.parse(localStorage.getItem("deletedItems") || '[]'));
  // const [isAddNoteFlag, setIsAddNoTeFlag]=useState(false);
  // const[note,setNote]=useState("");
  // const[favItems, setFavItems]=useState(JSON.parse(localStorage.getItem("favItems") || '[]'));
  useEffect(()=>{
     localStorage.setItem("list", JSON.stringify(list));
     localStorage.setItem("deletedItems", JSON.stringify(deletedItems));
    //  localStorage.setItem("favItems", JSON.stringify(favItems));
    //  console.log(deletedItems);
  },[list, deletedItems]);
  
  return (
    <main>
      <Header title={"Ak-Daily-Notes"} />
      <div className='display'>
        <SideBar list={list} deletedItems={deletedItems}  showPage={showPage} setShowPage={setShowPage}/>
        <Section deletedItems={deletedItems} setDeletedItems={setDeletedItems} showPage={showPage} list={list} setList={setList}/>
      </div>
    </main>
  );
}

Header.propTypes = { title: PropTypes.string }
// Nav.defaultProps={title:"hello"}
export default App;




