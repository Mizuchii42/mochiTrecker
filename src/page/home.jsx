import { TrendingDown, TrendingUp } from "react-feather";
const Homepage = () => {
  return (
    <>
      <div className="w-full h-svh dark:text-white">
        <div className="w-[98%] h-40 rounded-md opacity-50 mx-auto flex justify-center justify-items-center items-center">
          <div className="text-center">
            <small className="font-inter text-gray-500 dark:text-white">total dana</small>
            <h1 className="font-inter font-extrabold text-black text-3xl dark:text-white">30.0000</h1>
          </div>
        </div>

        <div className="w-full h-16 flex justify-items-center items-center justify-center gap-1">
          <div className="w-[45%] h-full flex justify-center justify-items-center items-center gap-2 font-inter text-green-600">
            <TrendingUp color="green" /> 0.0
          </div>
          <div className="w-[45%] h-full  flex justify-center justify-items-center items-center gap-2 font-inter text-red-600">
            <TrendingDown color="red" /> 0.0
          </div>

        </div>
        <h1 className="font-bold ml-2 text-1xl text-sky-500">Riwayat digital</h1>
      </div>
    </>
  )
}

export default Homepage;
