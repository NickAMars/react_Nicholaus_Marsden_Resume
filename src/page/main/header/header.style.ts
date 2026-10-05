import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";


const HeaderStyle = styled.nav`
    height: 7rem;
    background-color: ${(props)=> props.theme.palette.secondary.main};
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: inherit;
`
const NavButton = styled(Button)`
  display: flex;
  align-items: center;
  height: inherit;
  border-radius: 8px;
  &:hover {
    background-color: rgba(37, 99, 235, 0.06);
  }
  @media only screen and (max-width: 47em){
    width: 90px;
  }
`
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  align-self: stretch;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  color: #334155;
  transition: color .3s ease;
  padding-left: 2rem;
  padding-right: 2rem;
  &:hover {
    color: ${(props)=> props.theme.palette.primary.main};
  }
`
const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  background: linear-gradient(135deg, ${(props)=> props.theme.palette.primary.main}, #1e40af);
  transition: opacity .3s ease;
  &:hover {
    opacity: 0.9;
  }
  @media only screen and (max-width: 47em){
    width: auto;
  }
`

export {
    HeaderStyle,
    NavList,
    NavItem,
    NavLink,
    NavButton,
    HomeLink
}
