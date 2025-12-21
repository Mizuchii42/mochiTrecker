import { Link } from "react-router-dom";

const Bubble = () => {
  return (
    <>
      <div className="w-full h-24 flex flex-nowrap items-center gap-2 overflow-x-auto">

        <div className="w-24 h-full rounded-full bg-white flex-shrink-0 border-4 border-blue-600">
          <Link to="/boss"> <img src="/boss_icon.png" alt="bos icon" className="w-full h-full rounded-full" /></Link>
        </div>
        <div className="w-24 h-full rounded-full bg-white flex-shrink-0 border-4 border-blue-600">
          <Link to="/regist"> <img src="/regist.png" alt="regist icon" className="w-full h-full rounded-full" /></Link>

        </div>
      </div>

    </>
  )
}
export default Bubble;
