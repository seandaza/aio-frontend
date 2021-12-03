import filtro from "./filtro.css";

export const Filtro = () => {
    return (
        <div className="contFiltros">

            <label className="lblFiltro">Ubicación</label>
            <label className="lblFiltro">Habitación</label>
            <label className="lblFiltro">Presupuesto</label>
            <label className="lblFiltro">Ingreso</label>
            <label className="lblFiltro">Estadia</label>

            <input type="text" placeholder="Bogotá" title="Ingresa el nombre de la ciudad"></input >
            <select id="Habitacion" name="habitacionlist" title="Escoje el tipo de habitación">
                <option value="priv">Habitación privada</option>
                <option value="share">Habitación compartida</option>
            </select>

            <input type="number" placeholder="$0" title="Ingresa tu presupuesto"></input>

            <input type="date" className="fIngreso" placeholder="Fecha" title="Ingresa una fecha en formato DD-MM-AAAA"></input>

            <select id="estadia" name="estadialist">
                <option value="7">7 dias</option>
                <option value="15">15 dias</option>
                <option value="30">30 dias</option>
                <option value="60">60 dias</option>
            </select>
        </div>
    )
}
