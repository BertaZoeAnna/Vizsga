import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Temak from "./Temak";
import MagyarSzavak from "./MagyarSzavak";
import Szavak from "./Szavak";
function App() {
  
  const [szavak, setSzavak] = useState([""]);
  const [szavakTemanal, setSzavakTemanal] = useState([""]);
 
  useEffect(() => {
    const getSzavak = async () => {
      const apiSzavak = await axios.get("http://localhost:8000/api/szavak");
      setSzavak(apiSzavak.data);
      console.log(apiSzavak.data);
    };
    getSzavak();
  }, []);
  useEffect((id) => {
    const getSzavakTemanal = async () => {
      const apiSzavakTemanal = await axios.get("http://localhost:8000/api/szavak/tema/{id}");
      setSzavakTemanal(apiSzavakTemanal.data);
      console.log(apiSzavakTemanal.data);
    };
    getSzavakTemanal();
  }, []);
  return (
    <div className="App" style={{ border: "1xp solid gray" }}>
    <h1>Szótár</h1>
    <h2>Szavak</h2>
    <Temak/>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div>
          {" "}
          <h2>Angol</h2>
          <Szavak/>
        </div>
        <div>
         
          <h2>Magyar</h2>
         <MagyarSzavak/>
        </div>
        <div>
          <h2>Visszajelzés</h2>
          <button>ellenőrzés</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
