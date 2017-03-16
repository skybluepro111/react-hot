import React, {Component} from 'react';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem, Button,} from 'react-bootstrap';
import Background from '../../../static/img/app.png';

import s from './dashboard.scss';

const imgUrl = "../../assets/img/thumbnail.jpg";

export default class dashboard extends React.Component {
    
    render() {
        return (
            <div className="mainbar">
                <div className="container">
                    <div className="dash">
                        <div className="border-box">
                            <h4 className="h6">Notification</h4>
                            <p className="thin"><strong className="blue-txt letter-spacing">The Artic Freeze </strong>has finished encoding and is ready for viewing</p>
                            <button className="close-btn">X</button>
                        </div>

                         <div className="border-box chart-box">
                            <div className="chart-header clearfix">
                                <ul className="left col-sm-9 nopadding">
                                <li>
                                    <DropdownButton title="Views" id="bg-nested-dropdown" className="drop-btn">
                                            <MenuItem eventKey="1">view1</MenuItem>
                                            <MenuItem eventKey="2">view1</MenuItem>
                                      </DropdownButton>
                                      </li>
                                    <li><Button className="gray-btn">Apply</Button></li>
                                    <li><button className="trans-btn">Last 24 hrs</button></li>
                                    
                                </ul>
                               
                                    
                                
                                <div className="view-ana right">
                                    <a className="blue-txt" href="#">View Analytics</a>
                                </div>
                            </div>

                            <div className="main-chart" style={{height: "100px"}}></div>
                        </div>

                        <div className=" md-flex-row">
                              <div className="border-box news-box">
                                    <div className="news-header clearfix">
                                        <h4 className="h6">Trending Videos</h4>
                                        <a href="#" className="blue-txt">View All</a>
                                    </div>  

                                    <ul className="news-list">
                                        <li>
                                            <a href="#">
                                                <div className="img-cover" style={{backgroundImage: "url(../../assets/img/thumbnail.jpg)"}}></div>
                                            </a>
                                            <div className="left">
                                                <h3 className="h6"><a href="#">New York City Street</a></h3>
                                                <p>Urban Exprience</p>
                                                <ul>
                                                    <li>
                                                        23 Likes
                                                    </li>
                                                     <li>
                                                        23 Shares
                                                    </li>
                                                     <li>
                                                        23k Views
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="img-cover" style={{backgroundImage: "url(../../assets/img/thumbnail.jpg)"}}></div>
                                            </a>
                                            <div className="left">
                                                <h3 className="h6"><a href="#">New York City Street</a></h3>
                                                <p>Urban Exprience</p>
                                                <ul>
                                                    <li>
                                                        23 Likes
                                                    </li>
                                                     <li>
                                                        23 Shares
                                                    </li>
                                                     <li>
                                                        23k Views
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                    </ul> 
                              </div>
                                <div className="border-box news-box">
                                    <div className="news-header clearfix">
                                        <h4 className="h6">Latest Users</h4>
                                        <a href="#" className="blue-txt">View All</a>
                                    
                                    </div>   

                                      <ul className="news-list user-list">
                                        <li>
                                            <a href="#">
                                                <div className="img-cover" style={{backgroundImage: "url(../../assets/img/thumbnail.jpg)"}}></div>
                                            </a>
                                            <div className="left">
                                                <h3 className="h6"><a href="#">Mike Jones</a></h3>
                                                 <ul>
                                                    <li>
                                                        1/12/2017
                                                    </li>
                                                     <li>
                                                        @4:30 pm
                                                    </li>
                                                     <li>
                                                        PST
                                                    </li>
                                                </ul>
                                              
                                            </div>

                                        </li>

                                         <li>
                                            <a href="#">
                                                <div className="img-cover" style={{backgroundImage: "url(../../assets/img/thumbnail.jpg)"}}></div>
                                            </a>
                                            <div className="left">
                                                <h3 className="h6"><a href="#">Mike Jones</a></h3>
                                                 <ul>
                                                    <li>
                                                        1/12/2017
                                                    </li>
                                                     <li>
                                                        @4:30 pm
                                                    </li>
                                                     <li>
                                                        PST
                                                    </li>
                                                </ul>
                                              
                                            </div>

                                        </li>
                                       
                                    </ul> 
                              </div>
                        </div>

                    </div>  
                </div>
             </div>

          )
    }
}
