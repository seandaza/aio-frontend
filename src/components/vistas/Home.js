import { Banner2 } from "../banner2/Banner2"
// import Paginacion from "../paginacion/Paginacion"
import { Cards } from "./Cards"
import { Banner } from "../banner/Banner"
import { Chatbot } from "../chatbot/Chatbot"
import { TableCardHorizontal } from "../tableCardHorizontal/TableCardHorizontal"
import Map from "../map/Map"
import IconosDescripcion from "../iconos_descripcion/IconosDescripcion"
import { DescripcionAlojamiento } from "./DescripcionAlojamiento"

export const Home = () => {
    return (
        <>
        <Banner2/>
        <Cards/>
        <Banner/>
        <TableCardHorizontal/>
        <DescripcionAlojamiento/>
        <Map/>
        <Chatbot/>
        </>
    )
}
