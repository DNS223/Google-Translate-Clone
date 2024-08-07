import { useEffect, useState } from "react";
import "./Langs.css"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
export default function Langs({onClick1}){
    const [langList, setLangList] = useState([])
    const translateText = async () => {
        try {
            const res = await fetch("https://api-b2b.backenster.com/b1/api/v3/getLanguages?platform=api", {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'a_He4AlXzEtHZp8MNAhFIcu9axfvmdmMqTmut4p2bLFIUGRwF4Sf2F1kj2pesgeHOuJrWdLXTQ2Wx81xbF'
                },
            });
    
          const data = await res.json();
          setLangList(data.result)
          
        } catch (error) {
          console.error('Error al traducir:', error);
        }
      };

      useEffect(()=>{
        translateText()
      },[])
    return(
        <div className="LangsContainer">
            <div className="searchBar">
                <ArrowBackOutlinedIcon/>
                <input type="text" className="buscador" placeholder="Buscar idiomas"/>
            </div>
            <div className="LangsList">
                {langList.map((lang)=>{
                    return(
                    <p onClick={()=>onClick1(lang.full_code)} style={{cursor:"pointer"}}>{lang.englishName}</p>
                    )
                })}
            </div>
        </div>
    )
}