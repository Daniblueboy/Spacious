import {React, useState} from 'react'
import { Col } from "react-bootstrap";
import PlanetAside from './PlanetAside';




const PlanetsCard = ({planet, sidebarOpen}) => {
 

    return (
        <>
          <Col xs={12} md={4} lg={3} key={planet?.id}  >
            <div className="card" onClick={() => sidebarOpen(true)}>
              <div className="card-header">
                <div className="card-img-container">
                  <img src={planet?.image} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-body">
                <div className="card-title">{planet?.name}</div>
                <div className="card-description">Pop: {planet?.population}</div>
              </div>
            </div>
          </Col>
          {/* {isOpen? <PlanetAside isOpen={isOpen} Sidebar={setIsOpen}/> : null} */}
          
        </>
        // className={isOpen? width = 100% - widthofsidebar: width = 100%}
        // style={{width:"50%"}}
    )
}

export default PlanetsCard