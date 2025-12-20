import { Moon, Sun } from "react-feather";
import { useEffect, useState } from "react";

const Setting = () => {
  const [dark, setDark] = useState(false);
  const [besar, setbesar] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
    const savedfont = localStorage.getItem("font");
    if (savedfont === "Besar") {
      setbesar(true);
      document.documentElement.classList.add("text-[18px]")
    }
  }, []);


  const toggleMode = () => {
    setDark(!dark);
  };
  const toggleFontbesar = () => {
    setbesar(!besar);
  }


  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (besar) {
      document.documentElement.classList.add("text-[18px]");
      localStorage.setItem("font", "Besar");
    } else {
      document.documentElement.classList.remove("text-[18px]");
      localStorage.setItem("font", "kecil")
    }
  }, [dark, besar]);

  return (
    <>
      <div className="w-full h-16 flex justify-between items-center bg-white dark:bg-gray-900">

        <h1 className="ml-3 text-gray-800 dark:text-gray-200">
          Mode Gelap
        </h1>

        <button
          onClick={toggleMode}
          className="mr-5 p-2 rounded-full
                   text-gray-800 dark:text-yellow-400
                   transition"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="w-full h-16 dark:bg-gray-900 dark:text-gray-200 flex justify-between justify-items-center items-center">
        <h1 className="ml-3 ">Ukuran Font</h1>
        <button onClick={toggleFontbesar} className="flex gap-3 mr-5">{besar ? <span>besar</span> : <span>kecil</span>}</button>
      </div>
    </>
  );
};

export default Setting;
