import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;
  font-weight: bold;
`;
