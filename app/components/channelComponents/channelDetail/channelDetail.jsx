import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
// import s from './channelDetail.scss';
import LineChart from '../../LineChart/line.jsx';
// const imgUrl = "../../assets/img/thumbnail.jpg";

export default class channelDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "../../../assets/img/fish.png",
            seaImg: "../../../assets/img/sea.png",
            successImg: "../../../assets/img/success.png"
        }

    }
    
    render() {
        return (
            <div className="mainbar">
                <div className="container">
                     <div className="channels chnnl">
                    <div className="channel-header">
                        <ul className="channel-tt">
                            <li><a href="#">Channels / </a></li>
                            <li className="bold"> Edit Channel</li>
                        </ul>
                        <div className="channel-btn-group flex">
                            <a href="#" className="wh-btn">preview</a>
                            <a href="#" className="wh-btn margin-left">Edit</a>
                        </div>
                    </div>
                        
                   
                    <div className="border-box clearfix">
                        <div className="col-md-8 padding-bottom">
                            <div className="img-channels img-cover" style={{backgroundImage:'url('+this.state.seaImg+')'}}>
                                {/*<img src={this.state.seaImg} className="img-channels img-cover"/>*/}
                                <img src={this.state.imgUrl} className="img-absolute img-cover"/>
                            </div>
                          
                            <h3 className="margin-top-45 text-center h2">X-Perience 360</h3>
                            <p className="padding-top h5">Lorem ipsum dolor sit amet, etiam ac augue quis sit, laoreet aliquam in et, commodo cursus hendrerit non mauris</p>
                        </div>
                        <div className="col-md-4">
                            <div className="box-shadow status-box">
                                <h5 className="h5">Status</h5>

                                <div className="status-row">
                                    <span className="bold">Views: </span>
                                    <span>27,897</span>
                                </div>

                                <div className="status-row">
                                    <span className="bold">Likes: </span>
                                    <span>27,897</span>
                                </div>

                                <div className="status-row">
                                    <span className="bold">Followers: </span>
                                    <span>27,897</span>
                                </div>
                            </div>

                            <div className="box-shadow status-box margin-top-20">
                                <h5 className="h5">Details</h5>

                                <div className="status-row">
                                    <span className="bold">Status: <img src={this.state.successImg} className="img-success"/></span>
                                    <span className="light-blue">Published</span>
                                </div>

                                <div className="status-row">
                                    <span className="bold">Date Created: </span>
                                    <span>1/27/17</span>
                                </div>

                                <div className="status-row">
                                    <span className="bold">Meta Tags: </span>
                                    <span>Nature,Ocean,Surfing,Action Sports</span>
                                </div>
                            </div>

                           
                        </div>

                    </div>
                    

                    </div>
                    <div className="dash">
                    <div className="border-box chart-box">
                            <div className="chart-header clearfix">
                                <ul className="left col-sm-9 nopadding">
                                    <li className="form-select">
                                        <select name="" id="">
                                           <option value="" disabled="disabled" defaultValue >Views</option>
                                            <option>Views 1</option>
                                            <option>Views 2</option>
                                        </select>
                                    </li>
                                    <li><button className="gray-btn">Apply</button></li>
                                    <li><button className="trans-btn">Last 24 hrs</button></li>
                                </ul>
                                <div className="view-ana right">
                                    <a className="blue-txt" href="#">View Analytics</a>
                                </div>
                            </div>
                            <div className="main-chart"  >
                                <LineChart/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

          )
    }
}
