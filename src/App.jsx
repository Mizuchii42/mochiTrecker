"use client"
import './App.css'
import Navbar from './componnent/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InfoSevice from './page/info'
import Navbutton from './componnent/navButton'
import Homepage from './page/home'
import Setting from './page/setting'
import { useEffect } from 'react'
import Itempage from './page/menu'
import Bubble from './componnent/bubblemenu'
import Registpage from './page/regist'
import Viewregist from './page/data/[name]'
import ToramCalculator from './page/kalkulator'
import Appview from './page/appview'

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const font = localStorage.getItem("font");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (font === "Besar") {
      document.documentElement.classList.add("text-[18px]");
    } else {
      document.documentElement.classList.remove("text-[18px]")
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
            <Route path='/menu' element={<Itempage />} />
            <Route path='/regist' element={<Registpage />} />
            <Route path='/data/:name' element={<Viewregist />} />
            <Route path='/mq' element={<Appview />} />
          </Routes>
          <Navbutton />
        </Router>
      </div>
    </>
  )
}

export default App
