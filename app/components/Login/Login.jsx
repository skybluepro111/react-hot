import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Alert, Panel, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import AuthService from '../../services/AuthService.jsx';
import { Parse } from 'parse';

const styles = {
    bodyStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoStyle: {
        marginTop: '15px',
        marginBottom: '15px',
        width: '100%',
    },

    loginBtnStyle: {
        fontSize: '18px',
        height: '50px',
        width: '100%',
        backgroundColor: '#eee',
        marginTop: '15px',
        marginBottom: '5px',
        fontWeight: 'bold',
    },

    inputStyle: {
        textAlign: 'center',
        height: '50px',
        marginTop: '5px',
        marginBottom: '5px',
        borderRadius: '0px',
        fontWeight: 'bold',
    },

    linkStyle: {
        fontSize: '16px',
        color: '#00838F',
        marginTop: '30px',
        marginBottom: '30px',
        opacity: 0.7,
        fontWeight: 'bold',
    },
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertVisible: false,
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        //AuthService.signup({email: this.email.value, password: this.password.value});
        Parse.User.logIn(this.email.value, this.password.value).then(function() {
           var currentUser = Parse.User.current();
                if (currentUser) {
                    console.log("success");
                    hashHistory.push('/home');
                    this.setState({alertVisible: false});
                } else {
                    console.log("failed1");
                     this.setState({alertVisible: true});
                }
            }.bind(this), function(err) {
                 console.log("failed2");
                this.setState({alertVisible: true});
        }.bind(this));
    }

    render() {
        return (
             <div style={styles.bodyStyle}>
                <Grid fluid={true} style={{paddingLeft: 0, paddingRight: 0}}>
                    <Grid fluid={false}>
                        <Row>
                            {/*<Col xs={6} xsOffset={3}>*/}
                                <div>
                                    <Panel style={{textAlign: 'center'}}>
                                        <Row style={{paddingLeft: '30px', paddingRight: '30px'}}>
                                            <img src="../../assets/img/logo.png" style={styles.logoStyle}/>
                                            <Form horizontal>
                                                <FormGroup controlId="formHorizontalEmail">
                                                    <Col sm={12}>
                                                        <FormControl inputRef={(ref) => {this.email = ref}} type="email" placeholder="Email" style={styles.inputStyle} onChange={() => this.setState({alertVisible: false})}/>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup controlId="formHorizontalPassword">
                                                    <Col sm={12}>
                                                        <FormControl inputRef={(ref) => {this.password = ref}} type="password" placeholder="Password"  style={styles.inputStyle} onChange={() => this.setState({alertVisible: false})}/>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup>
                                                    <Col sm={12}>
                                                        <Button type="submit" style={styles.loginBtnStyle} onClick={this.handleLogin}>
                                                            Log in
                                                        </Button>
                                                    </Col>
                                                </FormGroup>
                                                { this.state.alertVisible && 
                                                    <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                                                        <h4>Invalid username or password!</h4>
                                                        <p>Please try again.</p>
                                                    </Alert>
                                                }
                                                <a href='#'> <h1 style={styles.linkStyle}> Forgot Password? </h1> </a>
                                            </Form>
                                        </Row>
                                    </Panel>
                                </div>
                            {/*</Col>*/}
                        </Row>
                    </Grid>
                </Grid>
            </div>
        );
    }
}