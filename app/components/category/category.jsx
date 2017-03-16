import React, {Component} from 'react';
// import s from './channels.scss';
export default class category extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div>   
                {this.props.children}
            </div>
          )
    }
}
