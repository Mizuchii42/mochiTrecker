import axios from "axios";
import { useEffect, useState } from "react";

const Appview = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) {
      setData([]);
      return;
    }

    const getData = async () => {
      try {
        const res = await axios.get(
          `https://toramonline.vercel.app/appview/search/${encodeURIComponent(value)}`
        );
        setData(res.data.data ?? []);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [value]); // ⬅️ penting

  return (
    <>

      <div className="w-full h-svh flex flex-col dark:bg-gray-900">

        {/* Input */}
        <div className="py-3">
          <input
            placeholder="Masukkan app"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-[85%] mx-auto flex px-3 py-2 rounded
                 border border-gray-300 dark:border-gray-700
                 bg-white dark:bg-gray-800
                 text-black dark:text-white
                 outline-none"
          />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="flex gap-3 flex-wrap justify-center">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-28 h-40 flex flex-col items-center text-center"
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="text-sm mt-1 line-clamp-2">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Appview;
