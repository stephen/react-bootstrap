'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = collapsable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deprecationWarning = require('./deprecationWarning');

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function collapsable(props, propName, componentName) {
  if (props[propName] !== undefined) {
    (0, _deprecationWarning2['default'])(propName + ' in ' + componentName, 'collapsible', 'https://github.com/react-bootstrap/react-bootstrap/issues/425');
  }
  return _react2['default'].PropTypes.bool.call(null, props, propName, componentName);
}

module.exports = exports['default'];