import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'logo': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 230 }],
    'only screen&&>w768': {
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'logo img': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'header': {
    'position': 'absolute',
    'zIndex': '8000',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'background': '#FBFBFB',
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'navheader navbar-collapse': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navheader a': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#000000 !important',
    'fontFamily': '"SF-Medium", sans-serif !important',
    'fontWeight': '500'
  },
  'navheader a imgimg-cover': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'display': 'inline-block',
    'borderRadius': '50%',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'navheader a:hover': {
    'color': '#2a6496 !important',
    // text-decoration: underline;
  },
  'navheader a:focus': {
    'color': '#2a6496 !important',
    // text-decoration: underline;
  },
  'li a': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 10 }]
  }
});
