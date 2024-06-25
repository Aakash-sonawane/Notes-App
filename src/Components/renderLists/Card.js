import React from 'react'

export default function Card({list,toggleFavourite,handleIsedit,removeEl,toggleisEdit}) {
  
    return(
        list.map((el, index) => {
            return (
        <div key={index} className='notebox'>
                          <div className="inner-wrap">
                          <p className="updateTime">{el.date}</p>
                          <div className="title">{el.itemTitle}</div>
              
                          <div className="icons-container">
                            <i id={list.length - index - 1} onClick={(e) => { toggleFavourite(Number(e.target.id) + 1) }} className={el.fav ? "fa-solid fa-star fav" : "fa-regular fa-star fav"}></i>
                            <i id={list.length - index - 1} onClick={(e) => { handleIsedit(e); toggleisEdit() }} className="fa-regular fa-pen-to-square"></i>
                            <i id={list.length - index - 1} onClick={(e) => { removeEl(e,list) }} className="fa-regular fa-trash-can "></i>
                          </div>
                          </div>
        </div>
            )}
      )
    )
}
