import React from "react";
import Header from "./components/Header";
import Navi from "./components/Navi"
import Row from 'react-bootstrap/Row'
import {Container} from "react-bootstrap"
// import Preloader from "./components/Preloader";
// import { useState } from 'react';

function App() {
  
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000)
  // }, [])
  

  return (
    
    <>

    <div className="pt-1 px-5">
      <Container>
        <Header />
      </Container>
      <Container>
          <Row className="justify-content-center">
            <Navi />
          </Row>
      </Container>
  </div>
    {}

    </>
  );
}

export default App;
