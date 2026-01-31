import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    /* background-color: lightblue;  */
`
const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`
const DescriptionStyle = styled(Typography)`
    font-size: 1.5rem;
`
export const Description: React.FC<{}> = (props) => {
    return  <DescriptionContainer >
                <Title variant='h4'>Description:</Title>
                <DescriptionStyle variant='h6'>
                    Software Engineer with 7 years of experience building and optimizing scalable web applications in Agile environments.
                    Strong background in <b>JavaScript, TypeScript, React, and Node.js</b>, 
                    with experience leading projects, mentoring engineers, and improving application performance.
                </DescriptionStyle>
            </DescriptionContainer>
}