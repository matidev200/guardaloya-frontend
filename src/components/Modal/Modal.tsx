import React, { useState } from "react";
import axios from "axios";
import { Button } from "../SearchBar/SearchBar.styles";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Input,
  InputWrapper,
  TextArea,
} from "./Modal.styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [title, setTitle] = useState("");
  const [credentialUser, setCredentialUser] = useState("");
  const [description, setDescription] = useState("");
  const [credentialPass, setCredentialPass] = useState("");
  const userId = 1;

  if (!show) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const body = {
      title,
      credential_user: credentialUser,
      description,
      credential_password: credentialPass,
      user_id: userId,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/credential`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Error al guardar la credencial");
      }

      const data = await response.json();
      console.log("Credencial guardada:", data);

      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error al guardar la credencial:", error);
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      {" "}
      <CloseButton onClick={onClose}>X</CloseButton>
      <ModalContent>
        <form>
          <div className="CredentialName">
            <div>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="Nombre de la credencial..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </InputWrapper>
            </div>
          </div>
          <div className="CredentialData">
            <div>
              <InputWrapper>
                <Input
                  type="email"
                  placeholder="Nombre de usuario o email"
                  value={credentialUser}
                  onChange={(e) => setCredentialUser(e.target.value)}
                  required
                />
              </InputWrapper>
            </div>
            <div>
              <InputWrapper>
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={credentialPass}
                  onChange={(e) => setCredentialPass(e.target.value)}
                  required
                />
              </InputWrapper>
            </div>
            <div>
              <TextArea
                placeholder="Alguna descripción extra..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></TextArea>{" "}
            </div>
          </div>
          <Button type="submit" onClick={handleSubmit}>
            + &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guardar Credencial
          </Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
