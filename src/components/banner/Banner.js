import banner from './banner.css'
import AIOHostingLogo from './AIOHostingLogo.png'
import {Filtro} from "../filtro/Filtro";
import { HomeRegresar } from "./btn_nav_inf/HomeRegresar";


export const Banner = () => {
    return (
        <>
        {/* Banner superior */}
        <nav className="navsup">
            <img className="logoBanner" src={AIOHostingLogo} alt="Logo" />
            <Filtro/>
        </nav>

        {/* Banner inferior */}
        <nav className="navinf">
            <div className="contBtnInf">
            <HomeRegresar/>
            </div>            
        </nav>
        </>
    )
}
