import {useState,useEffect,useRef} from 'react'

const Header = ({title,list,searchItems,setSearchItems,showPage,setShowPage,deletedItems}) => {

  const [searchText,setSearchText]=useState('');

  let timeOutId=useRef();

  useEffect(()=>{
    if(searchText){
      setSearchArray(timeOutId);
    }
    else{
      setShowPage('add')
    }



    return ()=>{
      clearTimeout(timeOutId.current)
    }


  },[searchText]) // eslint-disable-line react-hooks/exhaustive-deps


  const setSearchArray=(id)=>{

    let filterSearchItems = findSearchItems(list)
    let SearchIndeletedArr = findSearchItems(deletedItems).map(el=>{
      el.status="deleted"
      return el;
    })
    // console.log('SearchIndeletedArr',SearchIndeletedArr)
    
    filterSearchItems=[...filterSearchItems,...SearchIndeletedArr]
      id.current= setTimeout(() => {
        setShowPage('search')
        setSearchItems([...filterSearchItems])
      }, 300);

  }

  const findSearchItems=(data)=>{
        return(
          data.filter((item)=>{
            let title=item.itemTitle.toLowerCase();
            let desc=item.item.toLowerCase();
      
            return !title.indexOf(searchText) || !desc.indexOf(searchText)
          })
        )
  }


    return (
      <>
        <nav className="navbar nav1 navbar-expand-lg bg-body-tertiary">
          <div className="container">

          <div className="container-fluid">
            <a className="navbar-brand title" href="/">{title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li> */}
              </ul>
              <form className="d-flex" role="search">

                <input className="form-control" type="search" placeholder="Search"
                 aria-label="Search" 
                 onChange={(e)=>{setSearchText(e.target.value)}} />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
          </div>

        </nav>
      </>
    )
  }
export default Header;  