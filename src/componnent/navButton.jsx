import { Link } from "react-router-dom";
import { Home, BookOpen, PlusCircle, Settings, HelpCircle, Search } from "react-feather";
const Navbutton = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-center justify-items-center items-center bottom-0 gap-11 fixed bg-white dark:bg-gray-900">
        <Link to="/"><Home color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/mq"><BookOpen color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/search"><Search color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/setting"><Settings color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/help"><HelpCircle color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
      </div>
    </>
  )
}

export default Navbutton;
