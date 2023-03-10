const ListRender=(props)=>{
//   const str = localStorage.getItem('list');
// const parsedArray = JSON.parse(str);
// let arr=parsedArray
    const removeEl=(event)=>{
        
        
      const removeIndex=(props.list.length-event.target.id-1)
      console.log(removeIndex)
        const FilterList =props.list.filter((el)=>{
          return el != props.list[removeIndex];
        })
        props.setList(FilterList);
    }
    // parsedArray=arr;
    // const parsedArray1=JSON.parse(localStorage.getItem('list'))
    props.list.reverse();
    return(
      props.list.map((el,index)=>{
        return(
  
        <div className='notebox'>
          <p>{new Date().toDateString()}</p>
          <p>{el}</p>
          <button id={props.list.length-index-1} className="x" onClick={removeEl}>x</button>
        </div>
        )
      })
    )
  
  }

  export default ListRender;