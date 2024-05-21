import{useState,createContext} from "react";
export const KivalasztContext = createContext();
export const KivalasztProvirder=({children})=>{
    const [KivalasztottLista,setKivalasztottLista] = useState([])
    function kivalaszt(e){
        console.log(e)
        const a = KivalasztottLista
        a.push(e)
        setKivalasztottLista([...a])
        console.log(KivalasztottLista)
    }
    return(
        <KivalasztContext.Provider value={{KivalasztottLista,setKivalasztottLista,kivalaszt}}>
        {children}</KivalasztContext.Provider>
    )
}