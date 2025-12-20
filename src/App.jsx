"use client"
import './App.css'
import Navbar from './componnent/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InfoSevice from './page/info'
import Navbutton from './componnent/navButton'
import Homepage from './page/home'
import Setting from './page/setting'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className='h-svh w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/info' element={<InfoSevice />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
          <Navbutton />
        </Router>
      </div>
    </>
  )
}

export default App
