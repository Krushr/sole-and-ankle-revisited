/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlayWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContentWrapper aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={24} strokeWidth={2} />
        </CloseButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </DialogContentWrapper>
    </DialogOverlayWrapper>
  );
};

const DialogOverlayWrapper = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  left: 0;
  background: hsla(220, 5%, 40%, 0.8);
  width: 100%;
  height: 100vh;
`;

const DialogContentWrapper = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background: ${COLORS.white};
  height: 100vh;
  width: ${300 / 16}rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: 26px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    font-size: ${18 / 16}rem;
  }

  a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-bottom: 32px;

  a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
  }
`;

export default MobileMenu;
