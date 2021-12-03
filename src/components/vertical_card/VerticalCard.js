import verticalcard from './verticalcard.css'
import { Puntaje } from '../puntaje/Puntaje'
import DescripcionAlojamiento from '../vistas/DescripcionAlojamiento'
import exampleimg from './exampleimg.jpg'
import {Link } from "react-router-dom";

export const VerticalCard = () => {
    return (
        <div className="contCard">
            <img className="imgCard" src={exampleimg} alt="ImagenAlojamiento"/>
            <div className="bodyCard">
                <h3>Hostal Bogotá</h3>
                <label className="lblPuntaje"> Puntuacion: 10 <Puntaje/> </label>
                <label className="ciudad">Ciudad: Bogotá</label>
                <Link to="/descripcion"><button className="btnVerDetalles" >Ver detalles</button></Link>
            </div>
        </div>
    )
}
