import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const Header = styled.div<{ backgroundColor: string }>`
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${props => props.backgroundColor};
  padding: 0.5rem;
`

export const AddTaskBtn = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
`;
