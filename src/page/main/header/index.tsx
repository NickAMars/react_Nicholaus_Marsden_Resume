import { Typography } from '@mui/material';
import { HeaderStyle, HomeLink, NavButton, NavItem, NavLink, NavList } from './header.style'
import Home from '@assets/home3.svg'

export const Header: React.FC<{}> = (props) => {
    return (
      <HeaderStyle> 
          <HomeLink to="/">
            <Home fill="#000"/>
          </HomeLink>
          <NavList>
            <NavItem>
              <NavButton>
                <NavLink to="/experience"><Typography variant='h6' >Experience</Typography></NavLink>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton>
                <NavLink to="/technical-exercises"><Typography variant='h6' >Technical Exercises</Typography></NavLink>
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton>
                <NavLink to="/contact"><Typography variant='h6'>Contact</Typography></NavLink>
              </NavButton>
            </NavItem>
          </NavList>
      </HeaderStyle>
    );
  }