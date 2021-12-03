import {VerticalCard} from "../vertical_card/VerticalCard"
import tableCard from './tableCard.css'

export const TableCardDestacados = () => {
    return (
        <table className= "tableCard">
            <thead className="titletable">Destacados</thead>
            <td><VerticalCard/></td>
            <td><VerticalCard/></td>
            <td><VerticalCard/></td>
        </table>
    )
}