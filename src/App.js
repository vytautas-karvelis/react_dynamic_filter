import logo from './logo.svg';
import './App.css';
import SearchInput from './components/SearchInput';
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import List from './components/List';
import ResetButton from './components/ResetButton'
function App() {

  const [all, setAll] = useState([])
  const [completed, setCompleted] = useState([])
  const [notCompleted, setNotCompleted] = useState([]) 

  const [current, setCurrent] = useState([])
  const [display, setDisplay] = useState([])
  const [keyword, setKeyword] = useState('')
  
  const inputRef = useRef()
  const initialMount = useRef(true)
  
  useEffect(() => {
   
    if(initialMount.current){
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response=>{
          setAll(response.data)
          setCompleted(response.data.filter(todo=>todo.completed))
          setNotCompleted(response.data.filter(todo=>!todo.completed))
          setCurrent(response.data.slice(0,10))
          initialMount.current = false;         
      })
    } else {
      let filtered = current.filter(item=>item.title.includes(keyword)).slice(0,10)
      setDisplay(filtered)
    }
    
  }, [current])

 

  //kai current pasikeicia, filtruoti pagal keyworda
 
  const handleOnClick = () => {
    inputRef.current.value = ""

    setCurrent([])
  }

  return (
    <div className="App">
        <div className="title">
          <h2>Repositories</h2>
        </div>
        <div className="search">
          <SearchInput
          display={display}
          setDisplay={setDisplay}
          current={current}
          setKeyword={setKeyword}
          ref={inputRef} />
        </div>        
        <div className="navigation">
        <span onClick={()=>setCurrent(all)}>All</span><span onClick={()=>setCurrent(completed)}>Completed</span><span onClick={()=>setCurrent(notCompleted)}>Not Completed</span>
        </div>
        <div className="listContainer">
         <List items={display} />
        </div>        
        <ResetButton onClick={handleOnClick}/>
    </div>
  );
}

export default App;
