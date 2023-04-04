const ItemsRender=(props)=>{
    //   const str = localStorage.getItem('list');
    // const parsedArray = JSON.parse(str);
    // let arr=parsedArray
        const removeEl=(event)=>{
            
            
          const removeIndex=(props.deletedItems.length-event.target.id-1)
          console.log(removeIndex);
            const FilterList =props.deletedItems.filter((el)=>{
              return el != props.deletedItems[removeIndex];
            })
            console.log(props.deletedItems);
            console.log(FilterList);
            props.setDeletedItems(FilterList);
        }
        // parsedArray=arr;
        // const parsedArray1=JSON.parse(localStorage.getItem('list'))
        // props.deletedItems.reverse();
        return(
          props.deletedItems.map((el,index)=>{
            return(
      
            <div key={index.toString()} className='notebox'>
              
              <p>{el.date}</p>
              <div style={{overflow:"hidden",height:"20px"}}>{el.item}</div>
              
              <div ><i id={props.deletedItems.length-index-1} onClick={removeEl} style={{bottom: "-26px"}} class="fa-regular fa-trash-can x"></i></div>
            </div>
            )
          })
        )
      
      }
    
      export default ItemsRender;