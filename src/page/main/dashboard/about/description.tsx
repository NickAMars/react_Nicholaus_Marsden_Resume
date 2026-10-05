import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
`
const Title = styled(Typography)`
    font-weight: 800;
    color: #1e293b;
    border-bottom: 3px solid ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 0.5rem;
    display: inline-block;
    width: fit-content;
`
const DescriptionStyle = styled(Typography)`
    font-size: 1.5rem;
    color: #475569;
    line-height: 1.7;
    margin-top: 0.8rem;
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
