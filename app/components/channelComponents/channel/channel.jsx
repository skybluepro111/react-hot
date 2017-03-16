import React, {Component} from 'react';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem, Button, ControlLabel} from 'react-bootstrap';
import {hashHistory} from 'react-router';
export default class channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "../../../assets/img/channel-img.png",
            strId:"list-1"
        }

    }
    
    render() {
        return (
            <li className="channels-list-content clearfix full-width">

                                <div className="clearfix full-width">
                                    <div className="flex left left-flex">
                                    <p className="margin-right">
                                        <input type="checkbox" id={this.state.strId}/>
                                        
                                        <ControlLabel  className="lbl" htmlFor={this.state.strId}></ControlLabel>
                                    </p>
                                        <div className="channel-img img-cover" style={{backgroundImage: "url(../../../assets/img/channel-img.png)"}} onClick={()=>{hashHistory.push('/home/channels/detail') }}>

                                        </div>
                                        <div className="margin-left">
                                            <a className="link-title"onClick={()=>{hashHistory.push('/home/channels/detail') }}>NYC in the street 360</a>

                                            <p><span>7 videos</span></p>
                                             <DropdownButton title="Edit" id="bg-nested-dropdown" className="edit-select" style={{marginTop:"6px"}}>
                                                <MenuItem eventKey="1"  onClick={()=>{hashHistory.push('/home/channels/edit') }}>Edit</MenuItem>
                                                <MenuItem eventKey="2">Publish</MenuItem>
                                              </DropdownButton>
                                        </div>
                                    </div>

                                    <div className="right flex-right channel-stats">

                                        <div className="margin-right">
                                            <div className="flex">
                                                <span className="published-ic" style={{backgroundImage:"url(../../assets/img/check-mark.png)"}}></span>
                                                <span className="blue-txt">Published</span>
                                            </div>
                                        </div>

                                        <div className="margin-left margin-right">
                                            <div className="flex">
                                                <span className="eye-ic" style={{backgroundImage:"url(../../assets/img/views-icon.png)"}}></span>
                                                <span>0</span>
                                            </div>
                                            <div className="flex">
                                                <span className="eye-ic" style={{backgroundImage:"url(../../assets/img/views-icon.png)"}}></span>
                                                <span>0</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </li>
            
          
        
        
          )
    }
}
