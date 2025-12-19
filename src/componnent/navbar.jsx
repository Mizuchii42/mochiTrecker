import { Info } from "react-feather";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-items-center items-center justify-between">
        <h1 className="font-inter cursor-pointer font-bold text-sky-500 ml-2 hover:text-sky-400"><a href="/">MochiTrecker</a></h1>
        <a className="cursor-pointer text-sm mr-5" href="/info"><Info size="20px" color="oklch(68.5% 0.169 237.323)" /></a>
      </div>
    </>
  )
}
export default Navbar;
