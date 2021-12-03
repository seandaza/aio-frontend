import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'




const hStyle = { color: 'purple' };
const btnStyle1 = { color: 'blue', fontWeight: 'bold' };
const btnStyle2 = { color: 'red', fontWeight: 'bold' };
const txtBoxStyle = { borderRadius: '40px' };

const Formulario = () => {
    return (
        <>
            <Form>
                <h1 style={hStyle} align="center" >Formularios</h1>
                <br />
                <h2 style={hStyle} align="left" >Login</h2>
                <br />
                <h5 style={hStyle} align="left" >Editar Alojamiento</h5>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName">
                            Nombre Hotel:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputName" placeholder="Hotel Wiwa" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputtype">
                            Tipo de Alojamiento:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputtype" placeholder="Coworking/Coliving" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label htmlFor="inlineFormInputPrice">
                            Precio:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputPrice" placeholder="$250.000" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputCity">
                            Ciudad:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputCity" placeholder="Medellin" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputEscenary">
                            Escenario:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputEscenary" placeholder="medellin" />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputTime">
                            Tiempo de Estadia:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputTime" placeholder="15 dias" />
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputPunctuation">
                            Puntuacion:
                        </Form.Label>
                        <Form.Control style={txtBoxStyle} id="inlineFormInputPunctuation" placeholder="4.6" />
                    </Col>
                </Row>
                <Row className="align-items-right">
                    <Col sm={3} className="my-1">
                    </Col>
                    <Col sm={3} className="my-1">
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputPunctuation">
                            <Button style={btnStyle1} variant="offline-primary">Guardar</Button>
                            <Button style={btnStyle2} variant="offline-danger">Cancelar</Button>
                        </Form.Label>
                    </Col>
                </Row>
                <h2 style={hStyle} align="center" >Reservar</h2>
                <div align="right">
                    <Card align="right" style={{ width: '20rem' }}>
                        <Card.Body>
                            <h5 align="center" style={hStyle}><Form.Label>Ingresa tus Datos</Form.Label></h5>
                            <Form.Group className="mb-3" controlId="formBasicName">

                                <Form.Control style={txtBoxStyle} type="name" placeholder="Nombre" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control style={txtBoxStyle} type="email" placeholder="Email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhone">

                                <Form.Control style={txtBoxStyle} type="telephone" placeholder="Teléfono" />

                            </Form.Group>

                            <Button style={txtBoxStyle} variant="outline-primary" type="submit" size="lg">
                                Comprar

                            </Button>

                            <div>
                                <Form.Text className="text-muted">
                                    Política de tratamiento de datos
                                </Form.Text>
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck"
                                    className="mb-2"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Form>
        </>
    );
}

export default Formulario;