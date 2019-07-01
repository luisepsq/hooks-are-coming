import styled from 'styled-components'
const Button = styled.button`
  background: ${props => props.primary ? "lightblue" : "white"};
  color: ${props => props.primary ? "white" : "lightblue"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? "white" : "lightblue"};
  border-radius: 3px;
`;
export default Button
