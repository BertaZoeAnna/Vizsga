import axios from "axios";
import { useEffect, useState } from "react";
export default function MagyarSzavak(){
    const[szavak,setSzavak]= useState([""]);
    useEffect(()=>{
    const getSzavak=async()=>{
        const apiSzavak = await axios.get("http://localhost:8000/api/szavak")
        setSzavak(apiSzavak.data)
      }
      getSzavak()
    },[])
    return(
        <div>
        {szavak.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.magyar}</p>
              </div>
            );
          })}
        </div>
    )
}