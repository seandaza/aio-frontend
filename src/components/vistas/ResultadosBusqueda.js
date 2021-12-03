import {Banner} from '../banner/Banner'
import {HorizontalCard} from '../horizontal_card/HorizontalCard'
import Paginacion from '../paginacion/Paginacion'
import { VerticalCard } from '../vertical_card/VerticalCard'


export const ResultadosBusqueda = () => {
    return (
        <>
            <Banner/>
            
            <div>
                <HorizontalCard/>
            </div>
            <Paginacion/>
        </>
    )
}
