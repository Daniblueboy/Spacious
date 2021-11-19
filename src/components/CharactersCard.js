import React from 'react'
import { Col } from "react-bootstrap";

const CharactersCard = ({character, sidebarOpen}) => {
    return (
        <>
          <Col xs={12} md={4} lg={3} key={character?.id} >
            <div className="card card-char" onClick={() => sidebarOpen(true)}>
              <div className="card-header">
                <div className="card-img-container char">
                  <img src={character?.img} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-body">
                <div className="card-title">{character?.name}</div>
                <div className="card-description">{character?.friends} friends</div>
              </div>
            </div>
          </Col>
        </>
    )
}

export default CharactersCard
