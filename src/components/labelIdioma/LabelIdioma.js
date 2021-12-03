import labelIdioma from "./labelIdioma.css"
import {Link } from "react-router-dom";

export const LabelIdioma = () => {
    return (
      <div class="language">
        <div class="col s8">
    
          <router-link to="/FiltroEspañol">
            <span id="textoIdioma"> Español </span>
          </router-link>
    
          <span id="separador">|</span>
    
          <router-link to="/FiltroMoneda">
            <span id="textoIdioma">Moneda</span>
          </router-link>

          <span id="separador">|</span>
    
          <Link to="/login">
          <span id="textoIdioma">Login</span>
          </Link>
    
        </div>
      </div>
    )
}