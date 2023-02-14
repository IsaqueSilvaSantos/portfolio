import React from "react";
import image from "../assets/profile-me.png";

import styled from "styled-components";
import "../scss/variables.scss";

const HomeContainer = styled.section`
  border: 2px solid red;
  padding: 1rem;
`;


const AppHome = () => {
  return (
    <HomeContainer>
      <h1>Zeka</h1>
      <h1>Zeka</h1>
      <h1>Zeka</h1>
      <h1>Zeka</h1>
      <h1>Zeka</h1>
      <h1>Zeka</h1>
      <h1>Zeka</h1>
    </HomeContainer>
  );
};

export default AppHome;
