import React from "react";
import { ItemContainer, Icon, Info, Actions } from "./CredentialItem.styles";

export type CredentialItemProps = {
  id: number;
  title: string;
  credential_user: string;
  credential_pass: string;
  description: string;
  onEdit: (id: number) => void;
};

const CredentialItem: React.FC<CredentialItemProps> = ({
  title,
  credential_user,
  description,
  id,
  onEdit,
}) => {
  return (
    <ItemContainer onClick={() => onEdit(id)}>
      <Icon>📄</Icon>
      <Info>
        <h3>{title}</h3>
        <p>
          {credential_user} - {description}
        </p>
      </Info>
      <Actions>...</Actions>
    </ItemContainer>
  );
};

export default CredentialItem;
