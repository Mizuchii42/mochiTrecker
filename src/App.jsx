"use client"
import './App.css'
import Navbar from './componnent/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InfoSevice from './page/info'
import Navbutton from './componnent/navButton'
import { Home } from 'react-feather'
import Homepage from './page/home'
function App() {

  return (
    <>
      <div className=' h-svh w-full'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/info' element={<InfoSevice />} />
          </Routes>
          <Navbutton />
        </Router>

      </div>
    </>
  )
}

export default App
