import { Moon, Sun } from "react-feather";
import { useEffect, useState } from "react";

const Setting = () => {
  const [dark, setDark] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);


  const toggleMode = () => {
    setDark(!dark);
  };


  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
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
  );
};

export default Setting;
