import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;  
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  padding: 1.5rem 2rem;
 
`;

const Container = styled.div`
border: 1px solid #CCC;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: 25vw;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;


export {
  Container,
  InputWrapper,
  Label,
  StyledForm
};