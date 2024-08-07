import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import "./btn.css"
export default function Btn({texto, icon}){
    return(
        <div className="BtnContianer">
            <div className='texto'>
            {icon}
            {texto}
            </div>
           
        </div>
    )
}