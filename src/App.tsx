import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CredentialList from "./components/CredentialList/CredentialList";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <CredentialList />
    </>
  );
};

export default App;
