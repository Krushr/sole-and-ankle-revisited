import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.phoneAndUp} {
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.laptopAndUp} {
    border-top: none;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: clamp(1rem, 8.5vw - 5.5rem, 5rem);
  margin: 0px 48px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MobileNav = styled.div`
  display: flex;
  gap: ${22 / 16}rem;

  @media ${QUERIES.tabletAndUp} {
    gap: ${40 / 16}rem;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  &:last-of-type {
    display: none;

    @media ${QUERIES.laptopAndUp} {
      display: revert;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
