import React from 'react';
import { render } from 'react-dom';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import Login from '../Login/Login.jsx';
// import ss from './dashboard.scss';
import styles from './sideBarMenu.scss';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import { hashHistory} from 'react-router';
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: "dashboard",
        }

    }
   isActive(value){
        return ((value===this.state.focused) ?'sel':'default');
    }
    
    render() {
        
       
        return (
            <div  className="sideBarMenuContainer">
            <Navbar fluid={true} className="sidebar" >

                <Navbar>
                    <Nav>

                        <NavItem eventKey={2} className={this.isActive("dashboard")} onClick={(e) => { e.preventDefault();hashHistory.push('/home/dashboard');this.setState({focused: "dashboard"}); }}>
                            <i style={{backgroundImage: "url(../../assets/img/dash-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Dashboard</div></NavItem> 
                        <NavItem eventKey={3} className={this.isActive("Channels")} onClick={(e) => { e.preventDefault();hashHistory.push('/home/channels');this.setState({focused: "Channels"}); }}>
                            <i style={{backgroundImage: "url(../../assets/img/channels-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Channels</div></NavItem>
                        <NavItem eventKey={2}  className={this.isActive("Video")} onClick={(e) => { e.preventDefault();hashHistory.push('/dashboard');this.setState({focused: "Video"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/videos-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Videos</div></NavItem>
                        <NavItem eventKey={3} className={this.isActive("Categories")} onClick={(e) => { e.preventDefault();hashHistory.push('/home/category');this.setState({focused: "Categories"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/categories-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Categories</div></NavItem>
                        <NavItem eventKey={3} className={this.isActive("featured")} onClick={(e) => { e.preventDefault();hashHistory.push('/home/featured');this.setState({focused: "featured"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/featured-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Featured</div></NavItem>
                        <NavItem eventKey={3} className={this.isActive("sponsored")} onClick={(e) => { e.preventDefault();hashHistory.push('/home/sponsored');this.setState({focused: "sponsored"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/sponsored-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Sponsored</div></NavItem>
                        <NavItem eventKey={2} className={this.isActive("Analytics")} onClick={(e) => { e.preventDefault();hashHistory.push('/dashboard');this.setState({focused: "Analytics"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/analytics-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Analytics</div></NavItem>
                        <NavItem eventKey={3} className={this.isActive("Users")} onClick={(e) => { e.preventDefault();hashHistory.push('/dashboard');this.setState({focused: "Users"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/users-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Users</div></NavItem>
                        <NavItem eventKey={2} className={this.isActive("Administrator")} onClick={(e) => { e.preventDefault();hashHistory.push('/dashboard');this.setState({focused: "Administrator"}); }}>
                             <i style={{backgroundImage: "url(../../assets/img/administrators-selected-icon.png)"}} className="icon side-bar-menu-icons"></i>
                            <div>Administrator</div></NavItem>
                        
                    </Nav>
                </Navbar>

            </Navbar>
        </div>

        );
    }
}