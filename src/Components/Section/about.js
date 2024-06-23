const About=()=>{
    return(
        <div style={{margin:"20px"}}>
          <div>
          <h5>How to use</h5>
          <p>click on <img src="./plus.png" width={`${23}px`} height={`${23}px`} alt="plus button"/> after clicking it shows a modal in which there are two field <b>title</b> and <b>Note</b></p>
          <p><img src='./addNote.png' width={`${70}%`} height={`${280}px`} alt="screen"></img></p>
          <p>click on <b>add button</b> after that will save it into notes</p>
          <p>to view notes click on <b>Notes</b>
          </p>
          <div><img src="./appview.png" width={`${80}%`} height={`${350}px`} alt="app view"></img></div>
          </div>
        </div>
    )
}
export default About;