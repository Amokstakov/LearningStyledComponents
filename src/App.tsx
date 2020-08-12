import React from "react";
import "./App.css";
import styled from "styled-components";

//styled-components
const Title = styled.h1`
  color: red;
  font-size: 25rem;
`;

function App() {
  return (
    <div className="App">
      <Title className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Title>
    </div>
  );
}

export default App;
