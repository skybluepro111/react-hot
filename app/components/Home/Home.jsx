import React from 'react';
import { render } from 'react-dom';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import Header from '../Header/header.jsx';
import ss from './home.scss';

export default class Home extends React.Component {
     constructor(props) {
        super(props);
        }
    
     handleLogin(sel) {
         
        sel.color = "black";
        alert(sel.color);
        
    }
   
    
    render() {

        
        return (
            <div style={{height:"100%",minHeight:"100%"}}>
                <Header></Header>
                <div id="page-wrapper" className="page-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}