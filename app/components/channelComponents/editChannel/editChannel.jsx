import React, {Component} from 'react';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem, Button, ControlLabel, FormControl} from 'react-bootstrap';


// const imgUrl = "../../assets/img/thumbnail.jpg";

export default class editChannel extends React.Component {
    
    render() {
        return (
            <div className="mainbar">
                <div className="container">
                     <div className="chnnl">

                        <div className="channel-header">
                        <ul className="channel-tt heading">
                            <li><a href="#">Channels / </a></li>
                            <li className="bold"> Edit Channel</li>
                        </ul>

                    </div>

                        <div className="border-box clearfix">

                             <div className="col-md-8 edit-channel">
                                <form>
                                    <div className="padding-bottom">
                                       
                                       <ControlLabel className="lbl">Name</ControlLabel>
                                        <FormControl inputRef={(ref) => {this.name = ref}} type="text" placeholder="category Name" onChange={() => {}}/>
                                    </div>
                                    <div className="padding-bottom">
                                       <ControlLabel  className="lbl">Description</ControlLabel>
                                        <FormControl inputRef={(ref) => {this.description = ref}} componentClass="textarea" rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam" style={{marginBottom:"10px"}} onChange={() => {}}/>
                                    </div>

                                    <div className="padding-bottom">
                                        <div className="clearfix">
                                             <label className="lbl left">Banner Image</label> 
                                             <label className="lbl right light-blue-txt cursor-pointer">Replace Image
                                                <input type="file"/>
                                             </label>
                                        </div>
                                      
                                        <div className="img-cover banner" style={{backgroundImage: "url(../../../assets/img/channel-img.png)"}}>                                            
                                        </div>
                                      
                                    </div>

                                    <div className="padding-bottom">
                                    <label className="lbl">Profile Image</label>
                                    <div className="flex">
                                        <div className="img-cover left round-banner" style={{backgroundImage: "url(../../../assets/img/channel-img.png)"}}>
                                        </div>
                                        <label className="left blue-txt">Replace Image
                                            <input type="file"/>
                                        </label>
                                    </div>
                                </div>

                                    <div className="padding-top">                                 
                                       <FormControl inputRef={(ref) => {this.meta = ref}} type="text" placeholder="Enter meta tags here" onChange={() => {}}/>
                                    </div>

                                </form>
                             </div>

                             <div className="col-md-4">
                                <div className="box-shadow">
                                     <h5 className="padding-bottom">Publish Setting</h5>
                                     <DropdownButton title="Publish" id="bg-nested-dropdown">
                                            <MenuItem eventKey="1">Publish</MenuItem>
                                            <MenuItem eventKey="2">Another Publish</MenuItem>
                                            <MenuItem eventKey="3">Something else here</MenuItem>
                                      </DropdownButton>

                                     <Button className="full-width margin-top-20 blue-txt-btn">Save</Button>
                                     
                                </div>
                              
                             </div> 

                        </div>  

                    </div>
                    
                </div>
             </div>

          )
    }
}
