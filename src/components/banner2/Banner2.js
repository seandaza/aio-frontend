import banner2 from './banner2.css'
import AIOHostingLogo from './AIOHostingLogo.png'
import {Coco} from '../coco/Coco'
import { LabelIdioma } from '../labelIdioma/LabelIdioma';

export const Banner2 = () => {
    return (
        <>
            {/* Imagen banner de fondo */}
            <div id="imagenBanner">
                <img height="500px" width="100%" src="https://i.postimg.cc/g2X0FsBH/H001.jpg"></img>
            </div>

            {/* Logo */}
            <img 
                className="logo" src={AIOHostingLogo} alt="Logo">
            </img>

            {/* links idioma, busqueda y moneda */}
            <div className="labelIdioma">
                <LabelIdioma/>
            </div>

            {/* Texto about */}
            <div className="about">
                <h4 className="titleAbout">¿QUIENES SOMOS?</h4>
                <h5>Bienes, comodidad y calidad para que puedad trabajar desde cualquier lugar</h5>
                <p>Porque la presencialidad es necesaria, disfruta de un buen café con tus compañeros</p>
                <p>Nomadas digitales</p>
            </div>

            {/* Links a los filtros de Coliving y Coworking */}
            <div className="coco">
                <Coco/>          
            </div>
        </>
    )
}