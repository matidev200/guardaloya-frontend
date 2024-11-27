import React, { useState, useEffect } from "react";
import { Button } from "../SearchBar/SearchBar.styles";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Input,
  InputWrapper,
  TextArea,
} from "../Modal/Modal.styles";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  credentialId: number | null;
}

export const ModalEdit: React.FC<ModalProps> = ({ onClose, credentialId }) => {
  const [title, setTitle] = useState("");
  const [credentialUser, setCredentialUser] = useState("");
  const [description, setDescription] = useState("");
  const [credentialPass, setCredentialPass] = useState("");
  const userId = Number(localStorage.getItem("UserId"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!userId && !token) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchCredential = async () => {
      if (credentialId !== null) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/credential/${credentialId}`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          const data = await response.json();
          setTitle(data.title);
          setCredentialUser(data.credential_user);
          setCredentialPass(data.credential_pass);
          setDescription(data.description);
        } catch (error) {
          console.error("Error al cargar la credencial:", error);
        }
      }
    };

    if (credentialId !== null) {
      fetchCredential();
    }
  }, [credentialId, userId, token]);

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
        `${process.env.REACT_APP_API_URL}/credential/${credentialId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Error al guardar la credencial");
      }

      const data = await response.json();
      console.log("Credencial guardada:", data);
      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Error al guardar la credencial:", error);
    }
  };

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/credential/${credentialId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar la credencial");
      }

      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Error al eliminar la credencial:", error);
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ModalContent>
        <form onSubmit={handleSubmit}>
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
              ></TextArea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button type="submit" onClick={handleSubmit}>
              Guardar Credencial
            </Button>
            <Button type="button" onClick={handleDelete}>
              Eliminar Credencial
            </Button>
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
