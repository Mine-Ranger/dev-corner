import { useState } from 'react'
import './App.css'
import SideBar from './MenuBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideBar />
     </div> 
  )
}

export default App
