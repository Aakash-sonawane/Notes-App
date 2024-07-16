import React from 'react'
import SideBar from './SideBar/SideBar'
import Header from './header/Header'
import Section from './Section/Section'
export default function Root({list,setList,searchItems,setSearchItems,showPage,setShowPage,deletedItems, setDeletedItems}) {
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
  )
}
