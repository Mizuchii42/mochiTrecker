import { Link } from "react-router-dom";
import { Home, BookOpen, PlusCircle, Settings, HelpCircle } from "react-feather";
const Navbutton = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-items-center items-center fixed bottom-0 gap-11">
        <Link to="/"><Home color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/history"><BookOpen color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/add"><PlusCircle color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/setting"><Settings color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
        <Link to="/help"><HelpCircle color="oklch(68.5% 0.169 237.323)" size="25px" /></Link>
      </div>
    </>
  )
}

export default Navbutton;
