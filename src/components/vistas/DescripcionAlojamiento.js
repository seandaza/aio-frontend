import { BannerSinFiltro } from "../banner/BannerSinFiltro"
import Map from '../map/Map'
import Carrousel from '../carousel/carousel'
import Description from '../description/Description'
import IconosDescripcion from '../iconos_descripcion/IconosDescripcion'

const tableStyle = {
    width: "80%",
    margin: "5%",
    marginLeft: "12%",
}

export const DescripcionAlojamiento = () => {
    return (
        <>
            <BannerSinFiltro/>
            <Carrousel/>
            <table style={tableStyle}>
                <td><Description/></td>
                <td><IconosDescripcion/></td>
            </table>
            
            
            
            <Map/>
        </>
    )
}
