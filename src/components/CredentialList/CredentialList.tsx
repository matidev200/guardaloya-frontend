import React, { useEffect, useState } from "react";
import { ListContainer } from "./CredentialList.styles";
import CredentialItem, {
  CredentialItemProps,
} from "../CredentialItem/CredentialItem";
import { ModalEdit } from "../ModalEdit/ModalEdit";
import { useNavigate } from "react-router-dom";

interface CredentialListProps {
  searchTerm: string;
}

const CredentialList: React.FC<CredentialListProps> = ({ searchTerm }) => {
  const [credentials, setCredentials] = useState<CredentialItemProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCredentialId, setSelectedCredentialId] = useState<
    number | null
  >(null);
  const navigate = useNavigate();

  const userId = Number(localStorage.getItem("UserId"));
  const token = localStorage.getItem("token");

  if (!userId && !token) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await fetch(
          `${
            process.env.REACT_APP_API_URL
          }/credentials?search=${encodeURIComponent(
            searchTerm
          )}&user_id=${userId}`,
          {
            method: "GET",

            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCredentials(data);
      } catch (error) {
        console.error("Error fetching credentials:", error);
      }
    };
    fetchCredentials();
  }, [searchTerm, userId, token]);

  const handleEdit = (id: number) => {
    setSelectedCredentialId(id);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ListContainer>
      {credentials.map((credential) => (
        <CredentialItem
          key={credential.id}
          {...credential}
          onEdit={handleEdit}
        />
      ))}
      {modalVisible && selectedCredentialId && (
        <ModalEdit
          show={modalVisible}
          onClose={handleCloseModal}
          credentialId={selectedCredentialId}
        />
      )}
    </ListContainer>
  );
};

export default CredentialList;
