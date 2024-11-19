import styled, { createGlobalStyle } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const ModalContent = styled.div`
  background: #eaeaea;
  border-radius: 8px;
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    form {
      width: 50%;
      height: 50%;
    }
  }

  form {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }

  form .CredentialData {
    width: 100%;
    height: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  form .CredentialName {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #817b7b;

  ::placeholder {
    color: #b3b3b3;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  padding: 10px 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  gap: 14px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 150px;
  resize: none;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #817b7b;
  background-color: white;
  border-radius: 25px;
  padding: 10px 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  ::placeholder {
    color: #b3b3b3;
  }
`;
