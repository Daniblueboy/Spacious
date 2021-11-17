import React from 'react'
import { Row, Col, Tab, Nav} from 'react-bootstrap'
import CharactersData from './CharactersData'
import PlanetsData from './PlanetsData'

const Navi = () => {
    
    return (
        <>
          <Tab.Container id="left-tabs-example" defaultActiveKey="planets">
            <Row>
              <Col sm={12}>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="planets">Planets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="characters">Characters</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="planets">
                    <PlanetsData />
                  </Tab.Pane>
                  <Tab.Pane eventKey="characters">
                    <CharactersData />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </>
      )
    }

export default Navi
