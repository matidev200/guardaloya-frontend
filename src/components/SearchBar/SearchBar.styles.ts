import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  padding: 10px 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  gap: 14px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  svg {
    width: 30px;
    height: 30px;
    fill: #817b7b;
  }
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #817b7b;

  ::placeholder {
    color: #b3b3b3;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  max-width: 300px; /* Puedes ajustar el tamaño del botón aquí */

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center; /* Centra el contenido dentro del botón */
  gap: 10px;
  width: 100%;
  align-items: center; /* Alinea verticalmente el contenido */
`;
