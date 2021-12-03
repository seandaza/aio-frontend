import {VerticalCard} from "../vertical_card/VerticalCard"
import tableCard from './tableCard.css'

export const TableCardColiving = () => {
    return (
        <table className= "tableCard">
            <thead className="titletable">Coliving</thead>
            <td><VerticalCard/></td>
            <td><VerticalCard/></td>
            <td><VerticalCard/></td>
        </table>
    )
}