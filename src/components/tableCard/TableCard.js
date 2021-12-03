import {VerticalCard} from "../vertical_card/VerticalCard"
import tableCard from './tableCard.css'

export const TableCard = () => {
    return (
        <table className= "tableCard">
            <thead className="titletable">Coworking</thead>
            <td><VerticalCard/></td>
            <td><VerticalCard/></td>
            <td><VerticalCard/></td>
        </table>
    )
}