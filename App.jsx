import { useState } from 'react'
import './App.css'
//w-full and h-screen gives full width and height
//style ={{}} format h to direct bgcolor not {bgcolor} 
//onclick me hamesha koi function pass hona chahiye koi returned value nhi 
//isiliye arrow function
//class me app.css se properties
//classname me tailwind se properties
function App() {
  const [bgcolor, setColor] = useState("olive")  //default olive color

  return (
    
      <div className="w-full h-screen" style={{backgroundColor:bgcolor}}>
        <h1 class="heading">Change the background-color in one click</h1>
        <div class= "buttons"  style={{backgroundColor:"white"}}>
             <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
             style={{backgroundColor:"red"}}>Red</button>
             <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
             style={{backgroundColor:"green"}}>Green</button>
             <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
             style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div>
  )
}

export default App
