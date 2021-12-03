import homeregresar from './homeregresar.css'
import {Link } from "react-router-dom";

export const HomeRegresar = () => {
    return (
        <div>
            <Link to="/"><button className="homebtn">Home</button></Link>
            <Link to="/resultado"><button className="regresarbtn">Regresar</button></Link>
        </div>
    )
}
