import { Typography } from "@mui/material";
import styled from "styled-components";

const Title = styled(Typography)`
    font-weight: 800;
    color: #1e293b;
    border-bottom: 3px solid ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 0.5rem;
    display: inline-block;
    width: fit-content;
`
// Experience
const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 3rem;
    min-height: 75rem;
    gap: 0.5rem;
`
const JobStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 1.5rem;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    border-left: 3px solid ${(props)=> props.theme.palette.primary.main};
    background-color: #f8fafc;
    transition: box-shadow 0.2s ease;
    &:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
`
const CompanyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    & > *:first-child{
        font-weight: 800;
        color: #1e293b;
    }
`
const CompanyDetails = styled(Typography)`
    font-size: 1.4rem;
    color: #475569;
`

const CompanyDescription = styled.div`
    padding: 0 2rem;
    font-size: 1.4rem;
    color: #475569;
`;
const BulletList = styled.ul`
    padding: 0.5rem 2rem 0;
    font-size: 1.4rem;
    list-style-type: none;
    color: #475569;
    line-height: 1.6;
`;
const BulletPoint = styled.li`
    padding: 0.2rem 0;
    &::before {
        content: "\\2022";
        color: ${(props)=> props.theme.palette.primary.main};
        font-weight: bold;
        display: inline-block;
        width: 1.2rem;
        margin-left: -1.2rem;
    }
    padding-left: 1.2rem;
`;


export {
    Title,
    ExperienceContainer,
    JobStyle,
    CompanyContainer,
    CompanyDetails,
    CompanyDescription,
    BulletPoint,
    BulletList
}
