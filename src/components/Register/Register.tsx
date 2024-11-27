import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Icon,
  Input,
  RegisterText,
} from "./Register.styles";
import logoImg from "../../assets/logo_img.png";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }

      const data = await response.json();

      if (response.ok) {
        alert("Usuario creado con exito, ahora deberas logearte");
        navigate("/login");
      } else {
        alert(data.message || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Ocurrió un error al intentar iniciar sesión.");
    }
  };

  return (
    <Container>
      <Card>
        <Icon src={logoImg} alt="Guardaloya" />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Acceder</Button>
        </Form>
        <RegisterText>
          Si ya tenés una cuenta, podés ingresar <a href="/login">aquí</a>
        </RegisterText>
      </Card>
    </Container>
  );
};

export default RegisterForm;
