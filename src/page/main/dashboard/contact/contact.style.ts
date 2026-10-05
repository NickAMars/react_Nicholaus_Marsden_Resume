import styled from 'styled-components';
import { Typography, TextField, Button, Container } from '@mui/material';

const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    margin-top: 2rem;
    min-height: 75rem;
    padding: 0.5rem 2rem;
`
const ContactDataContainer = styled.div`
    display: flex;
    height: 40rem;
    padding-bottom: 1rem;
    justify-content: space-around;
    @media only screen and (max-width: 47em){
      display: table;
    }
`
const ContactInfoContainer = styled.div`
    flex: 1;
    padding: 0.5rem;
`
const ContactMapContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 35rem;
    padding: 0.5rem;
`

const ContactTitleHeader = styled(Typography)`
    font-size: 1.8rem;
    font-weight: 700;
    color: #1e293b;
    border-bottom: 3px solid ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 0.8rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    width: fit-content;
`;


const ContactFormField = styled.form`
  display: flex;
  flex-direction: column;
`;

const ContactTextField = styled(TextField)`
  width: 30rem;
  margin-top: 0;
  & input, & p, & label {
   font-size: 1.4rem;
  }
`;
const ContactTextarea = styled(TextField)`
  width: 30rem;
  margin-top: 0;
  margin-bottom: 10px;
  & div textarea,  & p, & label {
   font-size: 1.4rem;
  }
`;

const ContactButton = styled(Button)`
  width: 10rem;
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
  &:hover {
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  }
`;

const ContactFormContainer = styled(Container)`
  flex: 1;
`;


export {
    ContactContainer,
    ContactDataContainer,
    ContactInfoContainer,
    ContactMapContainer,
    ContactTitleHeader,

    ContactFormContainer,
    ContactFormField,
    ContactTextField,
    ContactTextarea,
    ContactButton
}
