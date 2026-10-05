import { Button, Typography } from '@mui/material';
import { useModal } from '@src/context/ModalContext';
import { useCallback } from 'react';
import styled from 'styled-components';



const ModalOverLay = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  display:flex;
  justify-content: center;
`;
const ModalContent = styled.div`
    margin-top: 10%;
    background-color: #fff;
    border: none;
    width: 500px;
    height: max-content;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    & > * {
        padding: 20px 24px;
    }

`;
const ModalHeader = styled.div`
    background: linear-gradient(135deg, #2563eb, #1e40af);
    display:flex;
    justify-content: center;
    h2 {
        font-weight: bold;
        color: #fff;
    }
`;

const ModalBody = styled.div`
`;
const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
`;

const ModalButton = styled(Button)`
    width: 12rem;
    height: 40px;
    font-weight: bold;
    border-radius: 8px;
    text-transform: none;
`;
const Message = styled(Typography)`
    overflow-wrap: break-word;
    height: 150px;
    width: 100%;

`;
export const Modal = () => {
  const { show, hideModal, data } = useModal();
  const closeModal  = useCallback(()=>{
    if(hideModal)
        hideModal();
  },[])
// when show is equal to false
  if (!show) return null;

  return (
            <ModalOverLay>
                <ModalContent>
                    <ModalHeader>
                        <Typography variant='h2'>Please Review </Typography>
                    </ModalHeader>
                    <ModalBody>
                        <Typography variant='h4'>Full Name:</Typography>
                        <Typography variant='h5'>{data?.fullName}</Typography>
                        <Typography variant='h4'>Email:</Typography>
                        <Typography variant='h5'>{data?.email}</Typography>
                        <Typography variant='h4'>Message:</Typography>
                        <Message variant='h5'>{data?.message}</Message>
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton onClick={closeModal} variant="contained" color="error">
                            Close
                        </ModalButton>
                        <ModalButton onClick={()=>{
                                data?.onSubmit()
                                if(hideModal)
                                    hideModal();
                              }
                            } variant="contained" color="tertiary">
                            Confirm
                        </ModalButton>
                    </ModalFooter>
                </ModalContent>
            </ModalOverLay>
  );
};
