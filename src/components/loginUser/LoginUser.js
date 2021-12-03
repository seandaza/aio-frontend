import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import { Form, Button } from "react-bootstrap";
import loginUser from "../loginUser/loginUser.css";

const objForm = {
  correo: "",
  contrasena: ""
}

const LoginUser = () => {
  //Contexto
  const { handleLogin } = useContext(AuthContext);
  //Estados
  const [form, setForm] = useState(objForm);
  //Navegador
  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(form).then(async (resp) => {
      if (resp.status === 200) {
        let json = await resp.json();
        let token = json.token;
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        alert('Credenciales invalidas');
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <body className="bodyLogin">
        <Form onSubmit={handleSubmit} className="form">
          <h2 className="form_title">Iniciar Sesión</h2>
          <div className="form_container">
            <div className="form_group">
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control required value={form.correo} onChange={handleForm} name="correo" className="form_control" type="email" placeholder="Enter email" />
                <span className="form_line"></span>
              </Form.Group>
            </div>
            <div className="form_group">
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required value={form.contrasena} onChange={handleForm} name="contrasena" className="form_control" type="password" placeholder="Password" />
              <span className="form_line"></span>
            </Form.Group>
            </div>
            <Button variant="primary" type="submit" className="form_submit">
              Ingresar
            </Button>
          </div>
        </Form>
      </body>
  );
};

export default LoginUser;