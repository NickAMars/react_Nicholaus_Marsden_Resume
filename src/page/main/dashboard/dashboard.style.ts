import styled from 'styled-components';

const TitleStyle = styled.h1`
    font-size: 1.5rem;
    text-decoration: none;
    border-left: 3px solid ${(props)=> props.theme.palette.primary.main};
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
`
const LabelStyle = styled.h3`
    font-size: 1.3rem;
    display: inline;
    margin-right: 0.5rem;
    color: #334155;
`;
const ParagraphStyle = styled.p`
    display: inline;
    margin-left: 0.5rem;
    color: #475569;
`;
const GroupContentStyle = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
`;

export {

    TitleStyle,
    LabelStyle,
    ParagraphStyle,
    GroupContentStyle
}
