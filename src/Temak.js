import axios from "axios";
import { useEffect, useState } from "react";

export default function Temak(){
    const [temak, setTema] = useState([""]);
    useEffect(() => {
        const getTemak = async () => {
          const apiTemak = await axios.get("http://localhost:8000/api/tema");
          setTema(apiTemak.data);
          console.log(apiTemak.data);
        };
        getTemak();
      }, []);
      return(
        <div className="dropdown">
        <select>
          {temak.map((item) => {
            return <option key={item.id} >{item.temanev}</option>;
          })}
        </select>
      </div>
      )
}