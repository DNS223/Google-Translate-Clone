import Btn from "./btn/Btn"
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WebIcon from '@mui/icons-material/Web';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CreateIcon from '@mui/icons-material/Create';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import "./Main.css"
import Idioma from "./idioma/Idioma";
import { useEffect, useRef, useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Langs from "./Langs/Langs";
export default function Main(){
    const [cantidadCaracteres, setCantidadCaracteres] = useState('0')
    const [readOnly, setReadOnly] = useState(false)
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [idioma1, setIdioma1] = useState("es_ES")
    const [idioma2, setIdioma2] = useState("en_US")
    const [visibleList, setVisibleList] = useState(false)
    const textAreaRef = useRef(null);
    const Reajuste = (e)=>{
        e.target.style.height = 'auto'
        e.target.style.height = (e.target.scrollHeight) + 'px'
        if(e.target.scrollHeight >= 128){
            e.target.parentElement.style.height = '171px';
            e.target.parentElement.style.height = (e.target.parentElement.scrollHeight + 50) + 'px';
        } else if (e.target.scrollHeight < 128){
            e.target.parentElement.style.height = '168px';
        }
        
        cantidadCaracteres>=5000 ? setReadOnly(true) : setReadOnly(false)
        setCantidadCaracteres(e.target.value.length)
      console.log(e.target.value.length)

    }
    const handleChange = (e)=>{
        console.log("change")
        setInputText(e.target.value)
      }
      console.log(inputText)
useEffect(()=>{
    translateText()
},[inputText, idioma2])


    const translateText = async () => {
        try {
            const res = await fetch("https://api-b2b.backenster.com/b1/api/v3/translate", {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json',
                  Authorization: 'a_He4AlXzEtHZp8MNAhFIcu9axfvmdmMqTmut4p2bLFIUGRwF4Sf2F1kj2pesgeHOuJrWdLXTQ2Wx81xbF'
                },
                body: JSON.stringify({
                  from: `${idioma1}`,
                  to: `${idioma2}`,
                  data: `${inputText}`,
                  platform: 'api'
                })
            });
    
          const data = await res.json();
          console.log(data)
          inputText ? setTranslatedText(data.result) : setTranslatedText("") 
          
        } catch (error) {
          console.error('Error al traducir:', error);
        }
      };

      const handleContainerClick = () => {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
        }
      };

      const handleSwap=()=>{
        setIdioma1(idioma2)
        setIdioma2(idioma1)
        setTranslatedText(inputText)
        setInputText(translatedText)
      }
      const cleanTxt=()=>{
        setInputText("")
      }

      const establecerIdioma= (lang1)=>{
        console.log(lang1)
        setIdioma1(lang1)
      }
    return(
        <div className="MainContainer">

        <div className="btnContainer">
        <Btn texto="Texto" icon={ <TranslateOutlinedIcon/>}/>
        <Btn texto="Imágenes" icon={ <ImageIcon/>}/>
        <Btn texto="Documentos" icon={ <InsertDriveFileIcon/>}/>
        <Btn texto="Sitios Web" icon={ <WebIcon/>}/>
        </div>
       
        <div className="traductorContainer">
            <div className="Left">
            <div className="idiomasContainer" style={{display:"flex"}}>
                <Idioma texto="Español" color={idioma1 === "es_ES" ? "rgb(26, 115, 232)" : "RGB(101, 105, 109)"} isSelected={idioma1 === "es_ES"} onClick={()=>setIdioma1("es_ES")}/>
                <Idioma texto="Inglés" color={idioma1 === "en_US" ? "rgb(26, 115, 232)" : "RGB(101, 105, 109)"} isSelected={idioma1 === "en_US"} onClick={()=>setIdioma1("en_US")}/>
                <Idioma texto="Portugués (Brasil)" color={idioma1 === "pt_PT" ? "rgb(26, 115, 232)" : "RGB(101, 105, 109)"} isSelected={idioma1 === "pt_PT"} onClick={()=>setIdioma1("pt_PT")}/>
                <button style={{backgroundColor:"transparent", border:"none"}} onClick={()=>setVisibleList(!visibleList)}><KeyboardArrowDownOutlinedIcon/></button>
                <button onClick={handleSwap}><SwapHorizIcon style={{position:"absolute", left:"49%",top:"75px"}}/></button>
                
            </div>
            <div className="txtLeft" onClick={()=>handleContainerClick()}>
                <textarea name="" id="" rows={1} onInput={Reajuste} readOnly={readOnly} value={inputText}
        onChange={(e) => handleChange(e)} ref={textAreaRef}></textarea>
          {inputText.length>0 ? <button style={{backgroundColor:"transparent", border:"none"}} onClick={cleanTxt}><CloseOutlinedIcon sx={{color:"RGB(95, 99, 104)", cursor:"pointer"}}/></button>  : ""}
       
                <div className="footerTxt">
                    <KeyboardVoiceOutlinedIcon/>

                    <div className="footerRight">
                        <p className="contadorLetras" style={{color:"rgb(95, 99, 104)", fontSize:"12px"}}> <span>{cantidadCaracteres}</span> / 5.000</p>
                        <CreateIcon titleAccess="Activar Escritura a mano"/>
                    </div>
                </div>
            </div>
            
        </div>
        {visibleList &&  <Langs onClick1={establecerIdioma}/>  }
       
        <div className="Right">
            <div className="idiomasContainer">
                <Idioma texto="Inglés" color={idioma2 === "en_US" ? "rgb(26, 115, 232)" : "RGB(101, 105, 109)"} isSelected={idioma2 === "en_US"} onClick={()=>setIdioma2("en_US")}/>
                <Idioma texto="Español" color={idioma2 === "es_ES" ? "rgb(26, 115, 232)" : "RGB(101, 105, 109)"} isSelected={idioma2 === "es_ES"} onClick={()=>setIdioma2("es_ES")}/>
                <Idioma texto="Frances" color={idioma2 === "fr_CA" ? "rgb(26, 115, 232)" : "RGB(101, 105, 109)"} isSelected={idioma2 === "fr_CA"} onClick={()=>{setIdioma2("fr_CA") }}/>
                <KeyboardArrowDownOutlinedIcon/>
                
                
            </div>
            <div className="txtRight">
               {translatedText.length>0 ? <p style={{fontSize:"24px", marginLeft:"10px", marginTop:"10px"}}>{translatedText}</p> : <h1 style={{color:"rgb(95, 99, 104)", fontSize:"24px", lineHeight:"32px"}}>Traducción</h1> } 
            </div>
        </div>
        </div>
        </div>
    )
}