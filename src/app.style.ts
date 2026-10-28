import styled from 'styled-components'
const ResumeStyle = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
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
