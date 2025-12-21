import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Viewregist = () => {
  const { name } = useParams();
  const [regist, setRegist] = useState([]);

  useEffect(() => {
    const getStat = async () => {
      try {
        const res = await axios.get(
          `https://toramonline.vercel.app/regist/name/${decodeURIComponent(name)}`
        );
        setRegist(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    getStat();
  }, [name]); // ✅ dependency benar

  return (
    <div className="w-full overflow-y-auto h-24">
      {regist.map((e, index) => (
        <div key={index} className="w-full h-24">
          <div className="w-full flex justify-items-center items-center justify-between">
            <h1 className="font-bold ml-2">{e.name}</h1>
            <p className="mr-5 text-gray-500">Max: {e.max_lv}</p>
          </div>
          <p className="ml-3">{e.effect}</p>
          <small className="ml-3 text-gray-500">Levels: {e.levels_studied}</small>
        </div>
      ))}
    </div>
  );
};

export default Viewregist;
