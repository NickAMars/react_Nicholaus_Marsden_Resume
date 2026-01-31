import { Typography } from "@mui/material";
import styled from "styled-components";

const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`
// Experience 
const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    min-height: 75rem;
`
const JobStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-bottom: 1.5rem;
`
const CompanyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    & > *:first-child{
        font-weight: 900;
    }
`
const CompanyDetails = styled(Typography)`
        font-size: 1.4rem;
`

const CompanyDescription =styled.div`
    padding: 0 2rem;
    font-size: 1.4rem;
`;
const BulletList =styled.ul`
    padding: 0 2rem;
    font-size: 1.4rem;
    list-style-type: none;

`;
const BulletPoint =styled.li`
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