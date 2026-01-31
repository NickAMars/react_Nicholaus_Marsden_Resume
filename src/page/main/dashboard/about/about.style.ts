import { Typography } from "@mui/material";
import styled from "styled-components";

const AboutContainer = styled.div`
    /* background-color: lightblue; */
    display: flex;
    flex-direction:column;
    min-height: 75rem;
    padding: 2rem 2.5rem;
`

const Title = styled(Typography)`
    font-weight: 900;
    text-decoration: underline;
    text-decoration-thickness: 0.3rem;
`


const SubTitle = styled(Typography)`
    font-size: 1.5rem;
`

//Skills
const TechnicalContainer = styled.div`
    padding-bottom: 1rem;
`
const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 13rem; */
`
const SkillStyle = styled.span`
    // display: flex;
    // width: 20rem;
    // padding-left: 1rem;
    // & > * {
    //     flex: 1;
    // }
`
const SkillOutline = styled.div`
    padding: 0 .4rem;
    font-size: 1.5rem;

`
const SecondarySkillGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const SubjectStyle = styled(Typography)`
    font-size: 1.4rem;
`


//Eductation
const EducationContainer = styled.div`
    padding-bottom: 1rem;
`
const AcademicContainer = styled.div`
    width: 30rem;
`
const Academic = styled.div`
    display: flex;
    justify-content: space-between;
`
const AcademicYear = styled(Typography)`
    font-size: 1.5rem;
`
const AcademicName = styled(Typography)`
    font-size: 1.5rem;
    font-weight: 900;
`
const AcademicMajor = styled.div`
    font-size: 1.5rem;
`

const CertificateContainer = styled.div`
    font-size: 1.5rem;
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