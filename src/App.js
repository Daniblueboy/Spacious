import React from "react";
import Header from "./components/Header";
import Navi from "./components/Navi"
import Row from 'react-bootstrap/Row'
import {Container} from "react-bootstrap"

function App() {
  return (
    <div className="pt-1 px-5">
      <Container>
          <Row className="justify-content-center">
            <Header />
            <Navi />
          </Row>
      </Container>
    </div>
  );
}

export default App;
