import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem, Button, ControlLabel, FormControl,FormGroup, Checkbox} from 'react-bootstrap';
import Category from '../categoryComponent/categoryComponent.jsx';
import { Parse } from 'parse';

export default class categoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_text: "",
            strPrev:"< Prev"
        }

        this.handleChange =  this.handleChange.bind(this);

    }

    handleChange(e) {
        
        var categories = Parse.Object.extend("categories");
        var query = new Parse.Query(categories);        
        query.find({
        success: function(results) {
            console.log("Successfully retrieved " + results.length + " categories.");           
            for (var i = 0; i < results.length; i++) {
            var object = results[i];
            console.log(object.id + ' - ' + object.get('shit'));
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
        });

        this.setState({ search_text: e.target.value });
    }
    
    render() {
        
        return (


            <div className="mainbar">
                <div className="container">
                    <div className="channels chnnl">
                        <div className="clearfix row">
                            <div className="col-md-8">
                                <h5 className="heading display-inline">Categories</h5>
                                <a className="margin-left blue-txt-btn" onClick={(e) => { e.preventDefault();hashHistory.push('/home/category/new')}}>Add New</a>
                             </div>
                            <div className="col-md-4" >
                                <FormControl  type="text" className="width-255"  value={this.state.search_text} onChange={this.handleChange} />
                                <Button className="margin-left wh-btn">Search</Button>
                            </div>
                        </div>
                        <div className="border-box channels-list  clearfix margin-top-20">
                             <div className="top-actions full-width clearfix">
                                 <div className="left flex left-flex">
                                    <p className="margin-right">
                                        <input type="checkbox" id="savecard"/>
                                        
                                        <ControlLabel  className="lbl" htmlFor="savecard"></ControlLabel>
                                    </p>
                                     <DropdownButton title="Actions" id="bg-nested-dropdown" className="list-top-btn margin-right">
                                         <MenuItem eventKey="1">Edit</MenuItem>
                                         <MenuItem eventKey="2">Publish</MenuItem>
                                     </DropdownButton>
                                     <Button className="gray-btn" id="applyBtn">Apply</Button>
                                 </div>
                             <div className="right flex">
                                 <DropdownButton title="Date" bsStyle="default" id="bg-nested-dropdown " className="drop-btn">
                                         <MenuItem eventKey="1">Edit</MenuItem>
                                         <MenuItem eventKey="2">Publish</MenuItem>
                                  </DropdownButton>
                                  <Button className="btn gray-btn sortBtn" id="sortBtn">Sort</Button>
                                   <Button className="btn gray-btn"  id="addFilterBtn">Add Filter</Button>
                              </div>
                          </div>
                          <ul>
                                 <Category></Category>
                          </ul>
                           <div className="text-center">
                            <nav>
                                <a href="#" className="margin-top-20 left wh-btn"> {this.state.strPrev}</a>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link noborder" href="#">1</a></li>
                                    <li className="page-item active">
                                        <a className="page-link noborder" href="#">2 <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link noborder" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link noborder" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link noborder" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link noborder" href="#">6</a></li>
                                    <li className="page-item"><a className="page-link noborder" href="#">7</a></li>
                                    <li className="page-item"><a className="page-link noborder" href="#">8</a></li>
                                </ul>
                                <a href="#" className="margin-top-20 right wh-btn">Next ></a>
                            </nav>

                        </div>
                    </div>
                </div>     
            </div>
         </div>

          )
    }
}
