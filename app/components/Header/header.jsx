import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import Sidebar from '../Sidebar/Sidebar.jsx';
import s from './header.scss';

const imgUrl = "../../assets/img/thumbnail.jpg";
export default class Header extends React.Component {
    
    render() {
        return (
            <div>
            <Navbar fluid={true} className="header">
                
                  
                <Navbar.Collapse>
                   
                    <Nav pullLeft>
                        <Navbar.Brand className="logo">
                      <a href="#" >
                          <img src="../../../assets/img/holor-logo-sm.png" alt="Holar TV Logo"/>
                       </a>
                    </Navbar.Brand>
                    <NavItem  eventKey={2} className="plus-icon">
                    <span className="glyphicon glyphicon-plus"></span>
                    </NavItem>
                        <NavDropdown eventKey={1} title="New" id="basic-nav-dropdown" className="new-drop">
                            <MenuItem  eventKey={1.1}>Action</MenuItem>
                            <MenuItem eventKey={1.2}>Another action</MenuItem>
                            <MenuItem eventKey={1.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem  eventKey={2} href="#">View Site</NavItem>
                    </Nav>
                     <Nav pullRight>
                        {/*<NavItem eventKey={3} href="#">*/}
                            
                            {/*</NavItem> */}
                        <NavItem eventKey={4} href="#">
                            <img src={imgUrl} className="img-cover" />
                            John Smith</NavItem>
                     </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Sidebar/>

            </div>
        )
    }
}
