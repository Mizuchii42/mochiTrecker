import { Info } from "react-feather";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-items-center items-center justify-between">
        <h1 className="font-inter cursor-pointer font-bold text-sky-500 ml-2 hover:text-sky-400"><a href="/">ToramSensei</a></h1>
        <a className="cursor-pointer text-sm mr-5"><Link to="/info"><Info size="20px" color="oklch(68.5% 0.169 237.323)" /></Link></a>
      </div>
    </>
  )
}
export default Navbar;
