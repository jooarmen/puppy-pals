import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
console.log(puppies)
  return (
    <>
      <div>
     
      </div>
    </>
  )
}

export default App
