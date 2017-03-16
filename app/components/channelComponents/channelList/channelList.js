import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'full-width': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn caret': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'btn-gray': {
    'color': '#787878',
    'backgroundColor': '#f7f7f7',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d0d0d0' }]
  },
  'channels-list channels-header a': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#5598b6'
  },
  'channels-list channels-header inputform-control': {
    'display': 'inline',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 300 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 5 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '5px'
  },
  'channels-list channels-list-content': {
    'background': '#fff',
    'borderRadius': '10px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'channels-list channels-list-content top-actions': {
    'display': 'inline-block',
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'channels-list channels-list-content top-actions input': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'channels-list channels-list-content top-actions dropdown': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'channels-list channels-list-content top-actions sortBtn': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'channels-list channels-list-content top-actions input': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'channels-list channels-list-content li': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'channels-list channels-list-content li channel-select': {
    'margin': [{ 'unit': 'px', 'value': 43 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'channels-list channels-list-content li channel-img': {
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'backgroundSize': 'cover',
    'backgroundPosition': 'center center',
    'backgroundRepeat': 'no-repeat'
  },
  'channels-list channels-list-content li channel-action': {
    'minWidth': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'channels-list channels-list-content li channel-action channel-name': {
    'color': '#5598b6',
    'marginTop': [{ 'unit': 'px', 'value': 8 }]
  },
  'channels-list channels-list-content li channel-action channel-count': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'channels-list channels-list-content li channel-action dropdown': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'channels-list channels-list-content li channel-action dropdown edit-btn': {
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 12 }]
  },
  'channels-list channels-list-content li channel-stats': {
    'color': 'rgba(0, 0, 0, 0.4)',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'marginRight': [{ 'unit': 'px', 'value': 70 }]
  },
  'channels-list channels-list-content li channel-stats like': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'channels-list channels-list-content li channel-stats user': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'channels-list channels-list-content li channel-status': {
    'color': 'rgba(0, 0, 0, 0.4)',
    'marginRight': [{ 'unit': 'px', 'value': 70 }]
  },
  'channels-list channels-list-content channel-component li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  }
});
