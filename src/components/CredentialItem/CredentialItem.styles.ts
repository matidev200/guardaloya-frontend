import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 10px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }
`;

export const Actions = styled.div`
  font-size: 2.5rem;
`;
