import './description.css';
//import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Description = () => {
    return (

        <div class="containerD">
            <Container>
                <Row md={3}>
                    <Col className="Titulo">Lo que ofrece este lugar:</Col>
                </Row>
                <br />
                <Row md="auto">
                    <Col className="Parrafo" md={11}>
                        Frente a la playa de Cartagena de Indias, en Bocagrande, el Cartagena Plaza Hotel
                        ofrece desayuno buffet, personal disponible 24h para asistirlo y actividades de recreación. El Wi-Fi y el estacionamiento son gratuitos.
                        <br/>
                        <br/>
                        El huésped puede disfrutar de la piscina con vista panorámica, ubicada en el piso 18, o
                        salir de rumba en la discoteca Rezak Bar Club. Además encontrará club para niños y
                        adolescentes, con pelotero y videojuegos. El staff de recreación organiza clases de
                        baile, entre otras actividades.
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Description;