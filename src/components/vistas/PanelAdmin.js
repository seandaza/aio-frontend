import {Banner} from '../banner/Banner'
import Paginacion from '../paginacion/Paginacion'
import { VerticalCard } from '../vertical_card/VerticalCard'
import Formulario from '../formulario/Formulario'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'


export const PanelAdmin = () => {

    const popover = (
        <Popover id="popover-basic">
            
            <h1>Hola</h1>

        </Popover>
        );

        const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
        );
    
    return (
        
            <>
            <Banner/>
            
            <div>
                <VerticalCard/>
            </div>
            <Paginacion/>

            

            <Example />

        </>
        
    )
}
