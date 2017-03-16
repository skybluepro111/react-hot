import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import ss from '../../../static/css/main.scss';

import dashboard from '../dashboard/dashboard.jsx';
import category from '../category/category.jsx';
import categoryList from '../category/categoryList/categoryList.jsx';
import editCategory from '../category/editCategory/editCategory.jsx';
import newCategory from '../category/newCategory/newCategory.jsx';
import channels from '../channelComponents/channels/channels.jsx';
import channelList from '../channelComponents/channelList/channelList.jsx';
import channelDetail from '../channelComponents/channelDetail/channelDetail.jsx';
import newChannel from '../channelComponents/newChannel/newChannel.jsx';
import editChannel from '../channelComponents/editChannel/editChannel.jsx';

injectTapEventPlugin();

const styles = {
    bodyStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default class App extends React.Component {
    render() {
        return (
            // <div style={styles.bodyStyle} > 
                // <Grid fluid={true} style={{paddingLeft: 0, paddingRight: 0}}>
                    <Router history={hashHistory}>
                        <Route path='/' component={Login} />
                        <Route path='/home' component={Home}> 
                            <IndexRoute component={dashboard} />
                            <Route path='/home/dashboard' component={dashboard} />
                            <Route path='/home/category' component={category}>      
                                <IndexRoute component={categoryList} />
                                <Route path='/home/category/new' component={newCategory}/>    
                                <Route path='/home/category/edit' component={editCategory}/>    
                            </Route>

                            <Route path='/home/channels' component={channels}>    
                                <IndexRoute component={channelList} />
                                <Route path='/home/channels/detail' component={channelDetail}/>    
                                <Route path='/home/channels/new' component={newChannel}/>    
                                <Route path='/home/channels/edit' component={editChannel}/>    
                          </Route>
                        </Route>
                    </Router>
                 
                // </Grid>
            // </div>
        );
    }
}