import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export default function Header (){
    return(
        <div className="HeaderContainer">
            <div className="header-Left">
            <MenuIcon className="menuIcon"/>
            <img className="GoogleLogo" src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="" />
            <p className="TitleTraductor">TraductorClone</p>
            </div>

            <div className="header-right">
                <SettingsOutlinedIcon className="gearIcon"/>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M 6 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 12 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 6 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 6 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 12 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 16 6 c 0 1.1 0.9 2 2 2 s 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 Z M 12 8 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 18 14 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z M 18 20 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z" fill="#5f6368"/>
                </svg>
                <div className="imgPerfil"><img src="https://lh3.google.com/u/0/ogw/AF2bZyg0rl02tP_ZN7PO6MlIP2zJckK94P98Xi_ZVqQ6373WPA=s32-c-mo" alt="" /></div>
            </div>
        </div>
    )
}