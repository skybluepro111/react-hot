import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'background': '#f0f0f0 !important',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#3e3e3e'
  },
  '#page-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': '#f8f8f8'
  },
  '#page-wrapper': {
    'position': 'inherit',
    'margin': [{ 'unit': 'px', 'value': 55 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 250 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mainbar': {
    'display': 'block',
    'left': [{ 'unit': 'px', 'value': 250 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'background': '#F5F5F5'
  },
  'mainbar container': {
    'maxWidth': [{ 'unit': 'px', 'value': 1300 }],
    'paddingTop': [{ 'unit': 'px', 'value': 85 }]
  }
});
