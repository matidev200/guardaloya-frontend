import React, { useState } from "react";
import {
  SearchBarContainer,
  InputWrapper,
  Input,
  Button,
  Icon,
  ButtonContent,
} from "./SearchBar.styles";
import { ReactComponent as SearchIcon } from "../../assets/magnifyingGlass.svg";
import { Modal } from "../Modal/Modal";

const SearchBar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <SearchBarContainer>
        <InputWrapper>
          <Icon>
            <SearchIcon />
          </Icon>
          <Input placeholder="Realizar una búsqueda... 🤔" />
        </InputWrapper>
        <Button onClick={toggleModal}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <span>+</span>
          </div>
          <ButtonContent>
            <span>Crear Credencial</span>
          </ButtonContent>
        </Button>
      </SearchBarContainer>
      <Modal show={showModal} onClose={toggleModal} />
    </>
  );
};

export default SearchBar;
