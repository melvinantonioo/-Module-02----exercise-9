
import './App.css'
import Home from './Pages/Home'

import { Routes, Route } from 'react-router'
import Register from './Pages/Register'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>

    </>
  )
}

export default App
