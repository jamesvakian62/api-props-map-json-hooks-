import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [type, setType] = useState('users')
  const [items, setItems] = useState([])

  // I want my api call to run when the component first renders and when type changes
  useEffect(()=>{
    // What is the effect that you want to perform
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then((response) => response.json())
    .then((json) => setItems(json));
  },[type])

console.log(items)



  return (
    <div className="App">
      <button onClick={()=>setType('users')}>Users</button>
      <button onClick={()=>setType('todos')}>Todos</button>
      <button onClick={()=>setType('posts')}>Posts</button>
  
      <h1 className='one'>{type}</h1>

      {/* Take each object and put in a p tag */}
      {items.map((obj)=>{
        return <p>{JSON.stringify(obj)}</p>
      })}
  </div>

  );
}

export default App;
