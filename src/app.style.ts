import styled from 'styled-components'
const ResumeStyle = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 56.25em) {
    height: auto;
    min-height: 100%;
  }
`
const ResumeContainerStyle = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  padding: 3rem 4rem;
  gap: 1.2rem;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 1rem;
    gap: 0.8rem;
  }
`
const MainLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 0;
`

export {
    ResumeStyle,
    MainLayout,
    ResumeContainerStyle
}
