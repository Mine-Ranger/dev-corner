import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import SideBar from './MenuBar'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideBar />
     </div> 
  )
}

export default App
