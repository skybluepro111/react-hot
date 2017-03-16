import React, {Component} from 'react';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem, Button, ControlLabel, FormControl} from 'react-bootstrap';

import { Parse } from 'parse';
import s from './newChannel.scss';
import ChannelService from '../../../services/ChannelService.jsx';

export default class newChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tags: '',
            password: ''
            
        }
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(){    
        console.log("call");
        var bannerImg = document.getElementById("bannerimage");
        var profileImg = document.getElementById("profileimage");

        var data = {
            name: this.name.value,
            description: this.description.value,
            meta: this.meta.value,
            bannerImg: bannerImg,
            profileImg: profileImg

        }
        // if (name =="" || description=="" || meta==""){
        //     alert('Please fill all fields!');
        //     return;
            
        // }
        var Channel = Parse.Object.extend("Channel");
        var Channel = new Channel();

        Channel.set("name", data.name);
        Channel.set("description", data.description);
        Channel.set("meta", data.meta);
       // Channel.set("profileImg", data.profileImg);
       // Channel.set("bannerImg", data.bannerImg);
      
        console.log("2");
        Channel.save(null, {
        success: function(Channel) {
            // Execute any logic that should take place after the object is saved.
            alert('Saved Successfully!');
        },
        error: function(Channel, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to Save' + error.message);
        }
        });
    }
     //   ChannelService.saveNewChannel(data);
   
    
    render() {
        return (
            <div className="mainbar">
                <div className="container">
                     <div className="chnnl">

                         <div className="channel-header">
                        <ul className="channel-tt heading">
                            <li><a href="#">Channels / </a></li>
                            <li className="bold"> New Channel</li>
                        </ul>
                         
                        </div> 

                        <div className="border-box clearfix">

                             <div className="col-md-8 ">
                                <form>
                                    <div className="padding-bottom">
                                       
                                       <ControlLabel className="lbl">Name</ControlLabel>
                                        <FormControl inputRef={(ref) => {this.name = ref}} type="text" placeholder="Enter Channel Name" onChange={() => {}}/>
                                    </div>
                                    <div className="padding-bottom">
                                       <ControlLabel  className="lbl">Description</ControlLabel>
                                        <FormControl inputRef={(ref) => {this.description = ref}} componentClass="textarea" rows="5" placeholder="Enter Description Here" onChange={() => {}}/>
                                    </div>

                                    <div className="padding-bottom">
                                        <div className="clearfix">
                                             <label className="lbl left">Banner Image</label> 
                                             <label className="lbl right light-blue-txt">Upload Video
                                                <input type="file" id="bannerimage"/>
                                             </label>
                                        </div>
                                      
                                        <label className="upload-box">
                                            <input type="file"/>
                                            <span>Drag and Drop Video</span>
                                        </label>
                                    </div>

                                    <div className="padding-bottom">
                                        <div className="clearfix">
                                             <label className="lbl left">Profile Image</label> 
                                             <label className="lbl right light-blue-txt">Upload Video
                                                <input type="file" id="bannerimage"/>
                                             </label>
                                        </div>
                                      
                                        <label className="upload-box">
                                            <input type="file"/>
                                            <span>Drag and Drop Video</span>
                                        </label>
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

                                     <Button type="submit" className="gray-btn"  onClick={this.handleSave} >Save</Button>
                                     
                                </div>
                              
                             </div> 

                        </div>  

                    </div>
                    
                </div>
             </div>

          )
    }
}
