'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputNumber = function (_React$Component) {
  _inherits(InputNumber, _React$Component);

  function InputNumber() {
    _classCallCheck(this, InputNumber);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputNumber).apply(this, arguments));
  }

  _createClass(InputNumber, [{
    key: 'render',
    value: function render() {
      var inputProps = _extends({}, this.props);
      delete inputProps.onlydigits;
      return _react2.default.createElement('input', _extends({ type: 'number',
        pattern: this.props.onlydigits && navigator.userAgent.match(/iPhone|iPad|iPod/i) ? '[0-9]*' : '',
        onWheel: function onWheel(e) {
          e.target.blur();
        },
        onKeyDown: function onKeyDown(e) {
          if (e.keyCode == '38' || e.keyCode == '40') return e.preventDefault();
        } }, inputProps));
    }
  }]);

  return InputNumber;
}(_react2.default.Component);

exports.default = InputNumber;

