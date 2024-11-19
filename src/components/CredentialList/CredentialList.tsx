import React, { useEffect, useState } from "react";
import { ListContainer } from "./CredentialList.styles";
import CredentialItem, {
  CredentialItemProps,
} from "../CredentialItem/CredentialItem";
import { ModalEdit } from "../ModalEdit/ModalEdit";
import axios from "axios";

const CredentialList: React.FC = () => {
  const [credentials, setCredentials] = useState<CredentialItemProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCredentialId, setSelectedCredentialId] = useState<
    number | null
  >(null);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/credentials`,
          {
            withCredentials: false,
          }
        );
        setCredentials(response.data);
      } catch (error) {
        console.error("Error fetching credentials:", error);
      }
    };

    fetchCredentials();
  }, []);

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
