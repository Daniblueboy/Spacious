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
    // {loading === false ? (
    <>

    <div className="pt-1 px-5">
    <Container>
        <Row className="justify-content-center">
          <Header />
          <Navi />
        </Row>
    </Container>
  </div>
    {/* ): (
      <Preloader />
    )} */}

    </>
  );
}

export default App;
