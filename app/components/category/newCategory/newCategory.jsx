import React, {Component} from 'react';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem, Button, ControlLabel, FormControl} from 'react-bootstrap';
import CategoryService from '../../../services/CategoryService.jsx';

// const imgUrl = "../../assets/img/thumbnail.jpg";

export default class newCategory extends React.Component {

        constructor(props) {
        super(props);
        
        this.handleSave = this.handleSave.bind(this);
    }
    
     handleSave(){
        //var bannerImg = document.getElementById("bannerimage");
        //var profileImg = document.getElementById("profileimage");

        var data = {
            name: this.name.value,
            description: this.description.value,
            meta: this.meta.value,
            //bannerImg: bannerImg,
            //profileImg: profileImg
        }

        CategoryService.saveNewCategory(data);
    }
    render() {
        return (
            <div className="mainbar">
                <div className="container">
                     <div className="chnnl">

                        <div className="channel-header">
                        <ul className="channel-tt heading">
                            <li><a href="#">Categories / </a></li>
                            <li className="bold"> New Category</li>
                        </ul>

                    </div>

                        <div className="border-box clearfix">

                             <div className="col-md-8 ">
                                <form>
                                    <div className="padding-bottom">
                                       
                                       <ControlLabel className="lbl">Name</ControlLabel>
                                        <FormControl inputRef={(ref) => {this.name = ref}} type="text" placeholder="Enter Category Name" onChange={() => {}}/>
                                    </div>
                                    <div className="padding-bottom">
                                       <ControlLabel  className="lbl">Description</ControlLabel>
                                        <FormControl inputRef={(ref) => {this.description = ref}} componentClass="textarea" rows="5" placeholder="Enter Description Here" onChange={() => {}}/>
                                    </div>

                                    <div className="padding-bottom">
                                        <div className="clearfix">
                                             <label className="lbl left">Category Image</label> 
                                             <label className="lbl right light-blue-txt">Upload Video
                                                <input type="file"/>
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

                             <div className="col-md-4 margin-top-25">
                                <div className="box-shadow status-box padding">
                                     <h5 className="padding-bottom">Publish Setting</h5>
                                     <DropdownButton title="Publish" id="bg-nested-dropdown" className="publish-drop">
                                            <MenuItem eventKey="1">Publish</MenuItem>
                                            <MenuItem eventKey="2">Another Publish</MenuItem>
                                            <MenuItem eventKey="3">Something else here</MenuItem>
                                      </DropdownButton>

                                     <Button className="full-width margin-top-20 blue-txt-btn" onClick={this.handleSave}>Save</Button>
                                     
                                </div>
                              
                             </div> 

                        </div>  

                    </div>
                    
                </div>
             </div>

          )
    }
}
