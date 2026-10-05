import styled from "styled-components";
import Work from '@assets/work.jpg';
import { TimeLine } from "./AboutTimeLine";
import { Button, Typography } from "@mui/material";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import NICHOLAUS_MARSDEN_RESUME from '@assets/NICHOLAUS_MARSDEN_RESUME.pdf';

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 60rem;
  background-color: ${(props)=> props.theme.palette.secondary.main};
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  overflow: hidden;
  @media only screen and (max-width: 47em){
    display: none;
  }
`;
const HeaderContainer = styled.div`
  padding: 1.5rem 1.5rem 0.5rem;
`;
const PrimaryHeader = styled(Typography)`
  font-weight: 800;
  font-size: 2rem;
  color: #1e293b;
  letter-spacing: -0.02em;
`;
const ProfileImage = styled.img`
  width: 100%;
  clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);
  margin: 1.5rem 0;
  height: 35%;
  object-fit: cover;
`;
const SubText = styled(Typography)`
  font-size: 1.5rem;
  color: #64748b;
`;

const DownLoadButton = styled(Button)`
    width: 17rem;
    align-self: center;
    border-radius: 26px;
    text-transform: none;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
    &:hover {
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }
`;

const DownloadIcon = styled(DownloadForOfflineRoundedIcon)`
  color: #FFF;
`;


const handleDownload = () => {
  const pdfUrl = NICHOLAUS_MARSDEN_RESUME;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "NICHOLAUS_MARSDEN_RESUME.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const SideBar: React.FC<{}> = (props) => {
    return (
      <SideBarStyle>
        <HeaderContainer>
          <PrimaryHeader variant="h4">Nicholaus Marsden</PrimaryHeader>
          <SubText variant="h6" >Software Engineer</SubText>
        </HeaderContainer>
        <ProfileImage loading="lazy" src={Work} alt="Personal" />
        <TimeLine />
        <DownLoadButton
          variant="contained"
          color="primary"
          endIcon={<DownloadIcon />}
          onClick={handleDownload}
        >
          <SubText>Download Cv</SubText>
        </DownLoadButton>
      </SideBarStyle>
    );
  }
