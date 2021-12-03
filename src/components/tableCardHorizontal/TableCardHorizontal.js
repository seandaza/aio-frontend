import {HorizontalCard} from "../horizontal_card/HorizontalCard"
import {tableCardHorizontal} from './tableCardHorizontal.css'

export const TableCardHorizontal = () => {
    return (
        <div>
        <span className="titletableH">Coliving</span>
        <table className= "tableCardHorizontal">
            <tr><HorizontalCard/></tr><br/><br/>
            <tr><HorizontalCard/></tr><br/><br/>
            <tr><HorizontalCard/></tr>
        </table>
        </div>
    )
}