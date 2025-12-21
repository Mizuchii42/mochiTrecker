"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { Search } from "react-feather"
import { Link } from "react-router-dom"

const Registpage = () => {
  const [data, setdata] = useState([])
  const [invis, setinvis] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://toramonline.vercel.app/regist?limit=50")
      const hasil = res.data.data
      setdata(hasil)
    }
    getData()
  }, [])

  return (
    <>
      <div className="mx-auto flex justify-center w-full gap-2">
        <input placeholder="masukan nama regist" className="border-none w-[85%] h-9" />
        <button><Search /></button>
      </div>
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
        {data.map((e, index) => (
          <div key={index} className="w-full h-auto mt-2">
            <div className="w-full flex justify-items-center items-center justify-between">
              <h1 className="font-bold text-sky-500 ml-2">{e.name}</h1>
              <p className="mr-5 text-gray-500">Max: {e.max_lv}</p>
            </div>
            <p className="text-md ml-2 text-gray-400">{e.effect}</p>
            <small className="ml-3 text-gray-500">Levels: {e.levels_studied}</small>
          </div>
        ))}
      </div >
    </>
  )
}

export default Registpage;
