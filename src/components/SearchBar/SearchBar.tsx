import React, { useState, useEffect } from "react";
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

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm === "") {
      onSearch("");
    } else if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
          <Input
            placeholder="Realizar una búsqueda... 🤔"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <Button onClick={toggleModal}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <span>+</span>
          </div>
          <ButtonContent>
            <span>&nbsp;&nbsp;Crear Credencial</span>
          </ButtonContent>
        </Button>
      </SearchBarContainer>
      <Modal show={showModal} onClose={toggleModal} />
    </>
  );
};

export default SearchBar;
