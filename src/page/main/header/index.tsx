import { Typography } from '@mui/material';
import { HeaderStyle, HomeLink, NavItem, NavLink, NavList } from './header.style'
import NMLogo from '@assets/Nicholaus_Marsden.png';

export const Header: React.FC<{}> = (props) => {
    return (
      <HeaderStyle>
          <HomeLink to="/">
            <img src={NMLogo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="NM Logo"/>
          </HomeLink>
          <NavList>
            <NavItem>
              <NavLink to="/experience"><Typography variant='h6' >Experience</Typography></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/technical-exercises"><Typography variant='h6' >Technical Exercises</Typography></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact"><Typography variant='h6'>Contact</Typography></NavLink>
            </NavItem>
          </NavList>
      </HeaderStyle>
    );
  }