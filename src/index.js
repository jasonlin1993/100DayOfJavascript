import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./index.css";

const App = () => {
  return (
    <Container>
      <Title>Hello React</Title>
      <p>測試成功辣!!</p>
      <p>測測試</p>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  color: blue;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
