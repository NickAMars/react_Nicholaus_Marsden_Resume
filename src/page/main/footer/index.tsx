import { Typography } from "@mui/material";
import styled from "styled-components";



const FooterStyle = styled.section`
    height: 3.5rem;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;
const ParagraphStyle = styled(Typography)`
  padding-right: 1.5rem;
  font-size: 1.2rem;
  color: #64748b;
`;
const NameStyle = styled.i`
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
  color: #334155;
  transition: color 0.2s ease;
  &:hover {
    color: #2563eb;
  }
`;
export const Footer: React.FC<{}> = (props) => {
    return (
      <FooterStyle>
        <ParagraphStyle>
          {"Built by"} <NameStyle>Nicholaus A Marsden</NameStyle>
        </ParagraphStyle>
      </FooterStyle>
    );
  }
