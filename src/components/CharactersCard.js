import React, {useState} from 'react'
import { Col } from "react-bootstrap";
import Aside from './Aside';

const CharactersCard = ({character, sidebarOpen}) => {
  const [name, setName] = useState("hello")
  const charsidebar = (e) =>{
    sidebarOpen(true)
    setName(e)
    // alert(name)
  }
    return (
        <>
          <Col xs={12} md={4} lg={3} key={character?.id} >
            <div className="card card-char" onClick={() => charsidebar(character?.name)}>
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
          <div className="d-none">
            <Aside name={name}/>
          </div>
        </>
    )
}

export default CharactersCard