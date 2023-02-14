import React from "react";
import styled from "styled-components";
import "../scss/variables.scss";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 15%;
  color: #333;
  width: 100%;
  z-index: 999;
  border: 2px solid green;

  .Name-div {
    font-size: 1.6rem;
    font-weight: 900;
  }

  .navLinks-div {
    display: flex;
    gap: 1rem;

    .Nav-Links {
      display: flex;
      gap: 1rem;
      font-size: 0.9rem;
      font-weight: 600;

      li {
        position: relative;
        cursor: pointer;
        font-size: 1rem;
      }

      li:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #222;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      li:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    .header-theme-switch-div .icon-moon {
      font-size: 1.1rem;
    }

    .header-menu-button {
      display: none;

      .menu-icon:hover {
        cursor: pointer;
        color: #333;
      }
    }
  }
`;

const AppHeader = () => {
  return (
    <HeaderContainer>
      <div className="Name-div">Isaque</div>
      <div className="navLinks-div">
        <div className="Nav-Links">
          <li>Início</li>
          <li>Sobre</li>
          <li>Portfólio</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default AppHeader;
