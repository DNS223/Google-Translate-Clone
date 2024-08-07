import "./idioma.css"
export default function Idioma({texto, color, isSelected, onClick}){
    const styleCondional = {
        borderBottom: isSelected ? '2px solid rgb(26, 115, 232)' : 'none'
    }
    return(
        <div className="IdiomaContainer"  style={styleCondional} onClick={onClick}>
            <p style={{color:`${color}`}}>{texto}</p>
        </div>
    )
}