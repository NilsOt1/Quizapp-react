import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/bookmarks">Bookmarks</StyledLink>
      <StyledLink to="/form">Form</StyledLink>
      <StyledLink to="/profil">Profil</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  border: solid 2px;
  display: flex;
  position: fixed;
  bottom: 0px;
  background-color: white;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-decoration: none;
`;
