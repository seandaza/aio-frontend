import coco from "./coco.css"
import {Link } from "react-router-dom";

export const Coco = () => {
    return (
        <div class="banner">
        <div class="col s8">
    
        <Link to="/resultado">
            <span id="textoCoco"> Coworking </span>
          </Link>
    
          <span id="separador2">|</span>
    
          <Link to="/resultado">
            <span id="textoCoco">Coliving</span>
          </Link>
    
        </div>
      </div>
    )
}