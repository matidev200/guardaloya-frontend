import React, { useState } from "react";
import CredentialList from "../CredentialList/CredentialList";
import SearchBar from "../SearchBar/SearchBar";

const CredentialSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <CredentialList searchTerm={searchTerm} />
    </>
  );
};

export default CredentialSearch;
