import styled from 'styled-components'
const ResumeStyle = styled.section`
  height: inherit;
  position: relative;
`
const ResumeContainerStyle = styled.div`
  height: inherit;
  display: flex;
  padding: 3rem 4rem;
  gap: 1.2rem;
  max-width: 1600px;
  margin: 0 auto;
`
const MainLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export {
    ResumeStyle,
    MainLayout,
    ResumeContainerStyle
}
