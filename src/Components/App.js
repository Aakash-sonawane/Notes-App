// import logo from './logo.svg';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import SideBar from "./SideBar/SideBar"
import '../styles/App.css';
import Section from "./Section/Section"
import Header from './header/Header';

function App() {
  
  const[list,setList]=useState(JSON.parse(localStorage.getItem("list") || '[]'));
  const[showPage,setShowPage]=useState("add");
  const[deletedItems, setDeletedItems]=useState(JSON.parse(localStorage.getItem("deletedItems") || '[]'));
  const[searchItems,setSearchItems]=useState(JSON.parse(localStorage.getItem("list") || '[]'));

  useEffect(()=>{
     localStorage.setItem("list", JSON.stringify(list));
     localStorage.setItem("deletedItems", JSON.stringify(deletedItems));

  },[list,deletedItems]);
  console.log(showPage)
  return (
    <main>
      
      <div className='wrapper'>
      <Header title={"Ak-Daily-Notes"} showPage={showPage} 
      list={list} 
      searchItems={searchItems}
      setSearchItems={setSearchItems}
      setShowPage={setShowPage}
      deletedItems={deletedItems}/>

      <div className="content-wrap">
        <div className="container">
        <div className="inner-wrap">
        <SideBar list={list} 
        deletedItems={deletedItems}  
        showPage={showPage} 
        setShowPage={setShowPage}/>

        <Section deletedItems={deletedItems} 
        setDeletedItems={setDeletedItems} 
        showPage={showPage} list={list} 
        setList={setList}
        searchItems={searchItems}/>

        </div>
        </div>
        </div>
      </div>
    </main>
  );
}

Header.propTypes = { title: PropTypes.string }
// Nav.defaultProps={title:"hello"}
export default App;




