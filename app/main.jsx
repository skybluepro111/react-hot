import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import { Parse } from 'parse';
Parse.initialize('a51cf9b34736ac7aaf3b29a5581df4d8e1fb3d51f308bcf0', '00ed6b5dcbf9b513ce76ad36a05d4e5ff33724daf0623b13');
Parse.serverURL = 'https://holor.wemersive.com/parse'

ReactDOM.render(<App />, document.getElementById('app'));
