import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const SoftDescriptionContainer = styled.div`
    /* background-color: lightblue;  */
    padding-bottom: 1rem;
`
const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`
const DescriptionStyle = styled(Typography)`
    font-size: 1.5rem;
`
export const SoftDescription: React.FC<{}> = (props) => {
    return  <SoftDescriptionContainer >
                <Title variant='h4'>Soft Skills:</Title>
                <DescriptionStyle variant='h6'>
                Possesses strong attention to detail and organization,
                effective time management,
                advanced written and oral communication skills, analytical thinking and problem-solving abilities and
                efficient and fast learning capabilities.
                </DescriptionStyle>
                
            </SoftDescriptionContainer>
}