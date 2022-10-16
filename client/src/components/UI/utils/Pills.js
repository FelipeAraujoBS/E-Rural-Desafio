import React from 'react'
import { Tab, Nav, Row, Container } from 'react-bootstrap';
import rhcp from "../../UI/imgs/Rhcp.mp4"
import funnyCats from "../../UI/imgs/FunnyCats.mp4"
import Erural from "../../UI/imgs/E-rural.mp4"
import Batman from "../../UI/imgs/Batmna.mp4"

import "./Pills.css"

function Teste() {
  return (
        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey='first'>E-Rural</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='second'>Batman</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='third'>RHCP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='fourth'>Funny Cats</Nav.Link>
                </Nav.Item>
            </Nav>
            <Container className="videoContainer">
                <Tab.Content>
                    <Tab.Pane  eventKey='first'>
                            <Row>
                                <video className='video' controls>
                                    <source src={Erural} />
                                </video>
                            </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                            <Row>
                                <video className='video' controls>
                                    <source src={Batman} />
                                </video>
                            </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='third'>
                            <Row>
                                <video className='video' controls>
                                    <source src={rhcp} />
                                </video>           
                            </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='fourth'>
                            <Row>
                                <video className='video' controls>
                                    <source src={funnyCats} />
                                </video>    
                            </Row>
                    </Tab.Pane>        
                </Tab.Content>
            </Container>
    </Tab.Container>
  )
}

export default Teste;