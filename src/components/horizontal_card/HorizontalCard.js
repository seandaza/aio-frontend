import horizontalcard from './horizontalcard.css'
import { Puntaje } from '../puntaje/Puntaje'
import exampleimg from './exampleimg.jpg'
import {Link } from "react-router-dom";

export const HorizontalCard = () => {


    
    return (
        <div className="conthCard">
            <img className="imghCard" src={exampleimg} alt="ImagenAlojamiento"/>
            <div className="bodyhCard">
                <h3>Hostal Bogotá</h3>
                <label className="lblPuntaje"> Puntuacion: 10 <Puntaje/> </label>
                <label>Ciudad: Bogotá</label>

            </div>
            <div className="conthPrecio">
            <span>Precio x dias:</span>
            <span className="spnPrecio">$1000000 COP</span> 
            <Link to="/descripcion"><button className="btnhVerDetalles">Ver detalles</button></Link>
            </div>            
        </div>
    )
}
