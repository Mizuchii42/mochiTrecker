import { Link } from "react-router-dom";

const Bubble = () => {
  return (
    <>
      <div className="w-full h-svh flex  justify-center dark:bg-gray-900 gap-3">
        <div className="w-28 h-28 rounded-md hover:bg-sky-500  shadow-md dark:hover:bg-sky-600 dark:shadow-gray-700 dark:bg-sky-500">
          <img src="/boss_icon.png" />
        </div>
        <div className="w-28 h-28 rounded-md hover:bg-sky-500  shadow-md dark:hover:bg-sky-600 dark:shadow-gray-700 dark:bg-sky-500">
          <img src="/regist.png" className="" />
        </div>
        <div className="w-28 h-28 flex justify-center justify-items-center items-center rounded-md hover:bg-sky-500  shadow-md dark:hover:bg-sky-600 dark:shadow-gray-700 dark:bg-sky-500">
          <img src="/appview.png" className="" />

        </div>

      </div>

    </>
  )
}
export default Bubble;
