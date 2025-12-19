"use client"
import './App.css'
import Navbar from './componnent/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InfoSevice from './page/info'
function App() {

  return (
    <>
      <div className='container mx-auto h-svh w-full md:w-[45%]'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/info' element={<InfoSevice />} />
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
