import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // @import "resource.css";
@import "jquery.polymer-form.min.css";
  // @import url(http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css);
  'import': 'url("https://fonts.googleapis.com/css?family=Work+Sans:400,500,600")',
  // *************** Reset **************
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
    'background': '#f0f0f0',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#707070',
    'fontFamily': ''Work Sans', sans-serif'
  },
  'a': {
    'cursor': 'pointer',
    'color': '#000000'
  },
  'a:hover': {
    'textDecoration': 'none'
  },
  'a:focus': {
    'textDecoration': 'none'
  },
  'ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none'
  },
  '*': {
    'outline': 'none !important'
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'label': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'resize': 'none'
  },
  'input:-webkit-autofill': {
    'WebkitBoxShadow': '0 0 0px 1000px #ffffff inset',
    'WebkitTextFillColor': '#636363'
  },
  'textarea': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0'
  },
  'input': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0'
  },
  'select': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0'
  },
  'button': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0'
  },
  'input[type=number]::-webkit-inner-spin-button': {
    'WebkitAppearance': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type=number]::-webkit-outer-spin-button': {
    'WebkitAppearance': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // ************** Colors ***************
  // ********** Media Queries ***********
  // Define your breakpoints here
  // ************ Typography ************
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 19 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 23 }]
    }
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 19 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 23 }]
    }
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 21 }]
    }
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 21 }]
    }
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 17 }]
    }
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 17 }]
    }
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'h5': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 15 }],
      'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
    }
  },
  'h5': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 15 }],
      'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
    }
  },
  'h6': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 14 }],
      'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
    }
  },
  'h6': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'screen&&>w992': {
      'fontSize': [{ 'unit': 'px', 'value': 14 }],
      'lineHeight': [{ 'unit': 'px', 'value': 1.2 }]
    }
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'text-italic': {
    'fontStyle': 'italic'
  },
  'green-txt': {
    'color': '#4ab594'
  },
  'bold': {
    'fontWeight': '600'
  },
  'regular': {
    'fontWeight': '400'
  },
  'medium': {
    'fontWeight': '500'
  },
  'heading': {
    'fontSize': [{ 'unit': 'px', 'value': 23 }],
    'fontWeight': '500',
    'color': '#656565'
  },
  'heading a': {
    'color': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'fontWeight': 'inherit'
  },
  'blue-txt': {
    'color': '#5d98b4 !important'
  },
  'light-blue-txt': {
    'color': '#9bcced !important'
  },
  'content-tilte': {
    'color': '#4D8EAD',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'field-heading': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#5A5A5A',
    'fontWeight': '600'
  },
  'link-title': {
    'color': '#4D8EAD',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '500'
  },
  // ************** General *************
  'container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1773 }]
  },
  'clear': {
    'clear': 'both'
  },
  'right': {
    'float': 'right'
  },
  'left': {
    'float': 'left'
  },
  'img-cover': {
    'backgroundPosition': 'center center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover'
  },
  'page-title': {
    'color': '#515151',
    'paddingBottom': [{ 'unit': 'px', 'value': 15 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ababab' }]
  },
  // ------Scrollbar------
  'scrollbar::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 5 }]
  },
  'scrollbar::-webkit-scrollbar-track': {
    'WebkitBoxShadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    'borderRadius': '8px'
  },
  'scrollbar::-webkit-scrollbar-thumb': {
    'borderRadius': '8px',
    'width': [{ 'unit': 'px', 'value': 5 }],
    'backgroundColor': '#cccccc'
  },
  // -----Spacing----
  'nopadding': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nopadding-left': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'nopadding-right': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'padding': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'padding-top': {
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'padding-bottom': {
    'paddingBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'nomargin': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nomargin-left': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'nomargin-right': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'margin-top-10': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'margin-top-20': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'margin-top-25': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'margin-top-45': {
    'marginTop': [{ 'unit': 'px', 'value': 45 }]
  },
  'margin-hr': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'margin-left': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'margin-right': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  // ****************bordering****************
  'border-radius-five': {
    'borderRadius': '5px'
  },
  'noborder': {
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  // --Flex Box-
  'md-flex-row': {
    'WebkitBoxFlex': '1',
    'WebkitFlex': '1',
    'MozBoxFlex': '1',
    'MsFlex': '1',
    'flex': '1',
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': '-moz-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitBoxPack': 'center',
    'WebkitJustifyContent': 'center',
    'MozBoxPack': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center',
    'WebkitBoxOrient': 'vertical',
    'WebkitBoxDirection': 'normal',
    'WebkitFlexDirection': 'column',
    'MozBoxOrient': 'vertical',
    'MozBoxDirection': 'normal',
    'MsFlexDirection': 'column',
    'flexDirection': 'column'
  },
  'flex': {
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex'
  },
  'display-inline': {
    'display': 'inline-block'
  },
  'display-block': {
    'display': 'block'
  },
  'full-width': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'full-height': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'cursor-pointer': {
    'cursor': 'pointer'
  },
  // ************** Form *************
  '::-webkit-input-placeholder': {
    // Chrome/Opera/Safari
    'color': '#858585'
  },
  '::-moz-placeholder': {
    // Firefox 19+
    'color': '#858585'
  },
  ':-ms-input-placeholder': {
    // IE 10+
    'color': '#858585'
  },
  ':-moz-placeholder': {
    // Firefox 18-
    'color': '#858585'
  },
  'input[type="file"]': {
    'display': 'none'
  },
  'input-box setting-input-h6': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#ababab',
    'whiteSpace': 'nowrap'
  },
  'input-box setting-input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'backgroundColor': 'rgba(230, 230, 230, 0.26)'
  },
  'input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '0',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'background': '#fff',
    'color': '#5A5A5A',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'fontWeight': '400',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'textareainput': {
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  // --- Select ---
  'form-select': {
    'position': 'relative',
    'borderRadius': '3px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#ffffff',
    'MozUserSelect': '-moz-none',
    'MsUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'userSelect': 'none',
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 110 }]
  },
  'form-select:after': {
    'content': '""',
    'backgroundRepeat': 'no-repeat',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 14 }],
    'right': [{ 'unit': 'px', 'value': 8 }],
    'backgroundSize': '80%',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'zIndex': '1',
    'color': '#bbbbbb',
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'ie form-select:after': {
    'display': 'none'
  },
  'select': {
    'position': 'relative',
    'background': 'transparent',
    'backgroundImage': 'none',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'outline': 'none',
    'color': '#888888',
    'cursor': 'pointer',
    'zIndex': '2',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }],
    'textOverflow': '''',
    'textIndent': '5px',
    'MozAppearance': 'none',
    'WebkitAppearance': 'none'
  },
  'select[multiple=multiple]': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#636363' }],
    'borderRadius': '3px'
  },
  'select option[disabled]': {
    'color': '#eeeeee',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'select:-moz-focusring': {
    'color': 'transparent',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#888888' }]
  },
  'select::-ms-expand': {
    'display': 'none'
  },
  // **** Checkbox*****
  '[type="checkbox"]:not(:checked) + label:after': {
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 3 }],
    'left': [{ 'unit': 'px', 'value': 3 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'backgroundColor': '#4686A7',
    'transition': 'all .2s'
  },
  '[type="checkbox"]:checked + label:after': {
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 3 }],
    'left': [{ 'unit': 'px', 'value': 3 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'backgroundColor': '#4686A7',
    'transition': 'all .2s'
  },
  '[type="checkbox"]:not(:checked) + label:after': {
    'opacity': '0',
    'transform': 'scale(0)'
  },
  'input[type="radio"]': {
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '\9' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'input[type="checkbox"]': {
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '\9' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'input[type="checkbox"]': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'input[type="radio"]': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'input': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none',
    'appearance': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0'
  },
  'label': {
    'display': 'inline-block',
    'fontWeight': 'bold'
  },
  '[type="checkbox"]:not(:checked) + label:before': {
    'content': '''',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 18 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }]
  },
  '[type="checkbox"]:checked + label:before': {
    'content': '''',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 18 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }]
  },
  '[type="checkbox"]:not(:checked) + label': {
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '[type="checkbox"]:checked + label': {
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '[type="checkbox"]:not(:checked)': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -9999 }]
  },
  '[type="checkbox"]:checked': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': -9999 }]
  },
  '[type="checkbox"]:checked + label:after': {
    'opacity': '1',
    'transform': 'scale(1)'
  },
  '[type="checkbox"]:not(:checked) + label': {
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '[type="checkbox"]:checked + label': {
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  // ---Buttons---
  'btn:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-primary': {
    'backgroundColor': '#b93535',
    'borderColor': '#b93535'
  },
  'btn-primary:hover': {
    'backgroundColor': '#b93535',
    'borderColor': '#b93535'
  },
  'btn-primary:focus': {
    'backgroundColor': '#b93535',
    'borderColor': '#b93535'
  },
  'lbl': {
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#5A5A5A',
    'paddingBottom': [{ 'unit': 'px', 'value': 3 }]
  },
  'label': {
    'fontWeight': 'normal'
  },
  'trans-btn': {
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'gray-btn': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#F8F8F8',
    'borderRadius': '3px',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#656565',
    'fontWeight': '600',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }]
  },
  'wh-btn': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#FFF',
    'borderRadius': '3px',
    'color': '#656565',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '600',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'sort-dropdown': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#FFF',
    'borderRadius': '3px',
    'color': '#656565',
    'fontWeight': '600'
  },
  'button-pagination': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#FFF',
    'borderRadius': '3px',
    'color': '#656565',
    'fontWeight': '600'
  },
  'edit-btn': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#F8F8F8',
    'borderRadius': '3px',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#656565',
    'fontWeight': '500'
  },
  'blue-txt-btn': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#FFF',
    'borderRadius': '3px',
    'color': '#4686A7',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '600',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'pagination > li > a': {
    'color': 'rgba(120, 120, 120, 0.42)',
    'fontSize': [{ 'unit': 'px', 'value': 17 }]
  },
  'pagination > li > span': {
    'color': 'rgba(120, 120, 120, 0.42)',
    'fontSize': [{ 'unit': 'px', 'value': 17 }]
  },
  'pagination > active > a': {
    'backgroundColor': 'transparent',
    'color': '#333',
    'borderColor': 'transparent'
  },
  'pagination > active > span': {
    'backgroundColor': 'transparent',
    'color': '#333',
    'borderColor': 'transparent'
  },
  'pagination > active > a:hover': {
    'backgroundColor': 'transparent',
    'color': '#333',
    'borderColor': 'transparent'
  },
  'pagination > active > span:hover': {
    'backgroundColor': 'transparent',
    'color': '#333',
    'borderColor': 'transparent'
  },
  'pagination > active > a:focus': {
    'backgroundColor': 'transparent',
    'color': '#333',
    'borderColor': 'transparent'
  },
  'pagination > active > span:focus': {
    'backgroundColor': 'transparent',
    'color': '#333',
    'borderColor': 'transparent'
  },
  // ************** Header *************
  'top-menu': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }],
    'color': '#404040',
    'fontWeight': '500',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'backgroundColor': '#FBFBFB',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E8E8E8' }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'backfaceVisibility': 'hidden',
    'zIndex': '3'
  },
  'top-menu a': {
    'color': '#404040'
  },
  'top-menu logo': {
    'width': [{ 'unit': 'px', 'value': 230 }],
    'display': 'block'
  },
  'top-menu logo img': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'top-menu nav-btn': {
    'display': 'flex',
    'alignItems': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'top-menu right': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'top-menu right img-cover': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'display': 'inline-block',
    'borderRadius': '50%',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'top-menu glyphicon-plus': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  // ************** SideBar *************
  'sidebar': {
    'backgroundColor': '#EEEEEE',
    'borderLeft': [{ 'unit': 'string', 'value': '#E3E3E3' }],
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 250 }],
    'background': '#f0f0f0',
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eaeaea' }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 55 }]
  },
  'sidebar main-nav nav-link': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '400',
    'display': 'block',
    'color': '#787878'
  },
  'sidebar main-nav nav-ic': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': -2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 10 }],
    'backgroundSize': '72%',
    'opacity': '0.7'
  },
  'sidebar main-nav nav-ic span': {
    'marginLeft': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'sidebar main-nav nav-liactive nav-link': {
    'backgroundColor': '#fff',
    'color': '#5a5a5a'
  },
  'sidebar main-nav nav-liactive nav-link nav-ic': {
    'opacity': '1'
  },
  'askme-admin': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': '%V', 'value': NaN }],
    'background': '#F5F5F5',
    'position': 'relative'
  },
  'askme-admin main-bar': {
    'display': 'block',
    'left': [{ 'unit': 'px', 'value': 250 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'background': '#F5F5F5'
  },
  'askme-admin main-bar container': {
    'paddingTop': [{ 'unit': 'px', 'value': 85 }],
    'screen&&>w1300': {
      'maxWidth': [{ 'unit': 'px', 'value': 1300 }]
    }
  },
  // ************** Footer *************
  'page-wrap': {
    'maxWidth': [{ 'unit': 'px', 'value': 1300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'footer': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'footerfooter-on-top': {
    'position': 'absolute',
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer li': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 20 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'only screen&&>w480': {
      'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#636363' }]
    }
  },
  'footer li:first-child': {
    'borderLeft': [{ 'unit': 'string', 'value': 'none' }]
  },
  'footer li img': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'footer li a': {
    'color': '#636363'
  },
  // ************** Loading ***************
  // ************* global layout *************
  'border-box': {
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D1D1D1' }],
    'backgroundColor': '#ffffff'
  },
  'box-shadow': {
    'boxShadow': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(204, 204, 204, 0.13)' }, { 'unit': 'string', 'value': 'rgba(204, 204, 204, 0.13)' }, { 'unit': 'string', 'value': 'inset' }],
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e4e4' }]
  },
  'upload-box': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#e4e4e4' }],
    'height': [{ 'unit': 'px', 'value': 120 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'cursor': 'pointer',
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': 'flex',
    'WebkitBoxAlign': 'center',
    'WebkitAlignItems': 'center',
    'alignItems': 'center',
    'WebkitBoxPack': 'center',
    'WebkitJustifyContent': 'center',
    'justifyContent': 'center',
    'color': '#ababab'
  },
  'background-img': {
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover'
  },
  'details h6': {
    'color': '#ababab'
  },
  'details h5': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.3 }]
  },
  'table-wrap table': {
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'screen&&<w850': {
      'width': [{ 'unit': 'px', 'value': 900 }]
    }
  },
  'table-wrap th': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b93535' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'table-wrap td': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }]
  },
  'table-wrap tr:last-child td': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'table-wrap table-btn': {
    'borderRadius': '15px'
  },
  'orange-txt': {
    'color': '#f27903'
  },
  'header-widget': {
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'marginRight': [{ 'unit': 'px', 'value': -15 }]
  },
  'header-widget border-around': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ababab' }],
    'height': [{ 'unit': 'px', 'value': 160 }],
    'borderBottomRightRadius': '40px',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'header-widget border-around title-icon': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 15 }],
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'header-widget border-around title-widget': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ababab' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 50 }],
    'color': '#636363'
  },
  'header-widget border-around h1': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'border-around': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ababab' }]
  }
});
