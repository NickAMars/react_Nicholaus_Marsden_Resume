import { Typography } from '@mui/material'
import { styled } from 'styled-components'

const Item = styled.a`
    background-color: #f8fafc;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 12px;
    min-height: 300px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }
`

const ProjectImage = styled.img`
    height: 25rem;
    object-fit: cover;
`
const ProjectTitle = styled(Typography)`
    font-weight: 800;
    color: #1e293b;
    margin: 12px 14px 4px;
`
const ProjectDescription = styled(Typography)`
    margin: 0 14px 14px;
    color: #475569;
    display: inline-block;
    line-height: 1.5;
`
export {
    Item,
    ProjectImage,
    ProjectTitle,
    ProjectDescription
}
