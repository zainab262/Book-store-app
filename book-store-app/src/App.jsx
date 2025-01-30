import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Books from './Pages/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/books' element={<Books/>}></Route>


    </Routes>
    </>
  )
}

export default App
