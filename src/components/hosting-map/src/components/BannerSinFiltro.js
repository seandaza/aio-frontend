import banner from './banner.css'
import AIOHostingLogo from './AIOHostingLogo.png'
import { HomeRegresar } from "./btn_nav_inf/HomeRegresar";
import { Idioma } from './btn_nav_inf/Idioma';




export const BannerSinFiltro = () => {
    return (
        <>
        {/* Banner superior */}
        <nav className="navsup">
            <img className="logo" src={AIOHostingLogo} alt="Logo" />
            <div className="idioma">
            <Idioma />  
            </div>
            
            <div className="contBtnInf">
            <HomeRegresar/>
            </div>  
        </nav>

        {/* Banner inferior */}
        <nav className="navinf">
          
        </nav>
        </>
    )
}