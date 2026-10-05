import { Typography } from "@mui/material";
import styled from "styled-components";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 75rem;
    padding: 2.5rem 3rem;
    gap: 1.5rem;
`

const Title = styled(Typography)`
    font-weight: 800;
    color: #1e293b;
    border-bottom: 3px solid ${(props)=> props.theme.palette.primary.main};
    padding-bottom: 0.5rem;
    display: inline-block;
    width: fit-content;
`


const SubTitle = styled(Typography)`
    font-size: 1.5rem;
    color: #475569;
`

//Skills
const TechnicalContainer = styled.div`
    padding-bottom: 1rem;
`
const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
`
const SkillStyle = styled.span`
`
const SkillOutline = styled.div`
    padding: 0 .4rem;
    font-size: 1.5rem;
`
const SecondarySkillGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
`
const SubjectStyle = styled(Typography)`
    font-size: 1.4rem;
    color: #334155;
`


//Eductation
const EducationContainer = styled.div`
    padding-bottom: 1rem;
`
const AcademicContainer = styled.div`
    width: 30rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid #e2e8f0;
    &:last-child {
        border-bottom: none;
    }
`
const Academic = styled.div`
    display: flex;
    justify-content: space-between;
`
const AcademicYear = styled(Typography)`
    font-size: 1.5rem;
    color: #64748b;
`
const AcademicName = styled(Typography)`
    font-size: 1.5rem;
    font-weight: 800;
    color: #1e293b;
`
const AcademicMajor = styled.div`
    font-size: 1.5rem;
    color: #475569;
`

const CertificateContainer = styled.div`
    font-size: 1.5rem;
    color: #334155;
`

export {
    Title,
    SubTitle,

    AboutContainer,

    EducationContainer,
    AcademicContainer,
    Academic,
    AcademicYear,
    AcademicName,
    AcademicMajor,

    TechnicalContainer,
    SkillContainer,
    SkillStyle,
    SkillOutline,
    SecondarySkillGroup,
    SubjectStyle,

    CertificateContainer
}
