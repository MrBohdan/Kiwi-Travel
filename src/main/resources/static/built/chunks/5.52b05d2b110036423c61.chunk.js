(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@nivo/pie/dist/nivo-pie.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@nivo/pie/dist/nivo-pie.esm.js ***!
  \*****************************************************/
/*! exports provided: Pie, PieCanvas, PieDefaultProps, PieLayout, PiePropTypes, ResponsivePie, ResponsivePieCanvas, arcPropType, usePie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieCanvas", function() { return PieCanvas$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieDefaultProps", function() { return PieDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieLayout", function() { return PieLayout$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiePropTypes", function() { return PiePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsivePie", function() { return ResponsivePie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsivePieCanvas", function() { return ResponsivePieCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcPropType", function() { return arcPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePie", function() { return usePie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/setDisplayName */ "./node_modules/recompose/setDisplayName.js");
/* harmony import */ var recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js");
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose_pure__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recompose_defaultProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose/defaultProps */ "./node_modules/recompose/defaultProps.js");
/* harmony import */ var recompose_defaultProps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recompose_defaultProps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose/withPropsOnChange */ "./node_modules/recompose/withPropsOnChange.js");
/* harmony import */ var recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nivo_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nivo/core */ "./node_modules/@nivo/core/dist/nivo-core.esm.js");
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var _nivo_legends__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nivo/legends */ "./node_modules/@nivo/legends/dist/nivo-legends.esm.js");
/* harmony import */ var _nivo_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nivo/tooltip */ "./node_modules/@nivo/tooltip/dist/nivo-tooltip.esm.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_12__);














function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PieLayout =
function (_Component) {
  _inherits(PieLayout, _Component);
  function PieLayout() {
    _classCallCheck(this, PieLayout);
    return _possibleConstructorReturn(this, _getPrototypeOf(PieLayout).apply(this, arguments));
  }
  _createClass(PieLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arcs = _this$props.arcs,
          arcGenerator = _this$props.arcGenerator,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          width = _this$props.width,
          height = _this$props.height,
          centerX = _this$props.centerX,
          centerY = _this$props.centerY,
          radius = _this$props.radius,
          innerRadius = _this$props.innerRadius,
          debug = _this$props.debug,
          render = _this$props.children;
      return render({
        arcs: arcs,
        arcGenerator: arcGenerator,
        startAngle: startAngle,
        endAngle: endAngle,
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
        radius: radius,
        innerRadius: innerRadius,
        debug: debug
      });
    }
  }]);
  return PieLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty(PieLayout, "propTypes", {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })).isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  fit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  sortByValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  padAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  arcs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  arcGenerator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  centerX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  centerY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cornerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  debug: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    points: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    box: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }).isRequired,
    ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});
var PieLayoutDefaultProps = {
  fit: true,
  sortByValue: false,
  innerRadius: 0,
  startAngle: 0,
  endAngle: 360,
  padAngle: 0,
  cornerRadius: 0
};
var enhance = function enhance(Component) {
  return recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(recompose_defaultProps__WEBPACK_IMPORTED_MODULE_6___default()(PieLayoutDefaultProps), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['colors'], function (_ref) {
    var colors = _ref.colors;
    return {
      getColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getOrdinalColorScale"])(colors, 'id')
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['width', 'height', 'innerRadius', 'startAngle', 'endAngle', 'fit', 'cornerRadius'], function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height,
        _innerRadius = _ref2.innerRadius,
        startAngle = _ref2.startAngle,
        endAngle = _ref2.endAngle,
        fit = _ref2.fit,
        cornerRadius = _ref2.cornerRadius;
    var radius = Math.min(width, height) / 2;
    var innerRadius = radius * Math.min(_innerRadius, 1);
    var centerX = width / 2;
    var centerY = height / 2;
    var boundingBox;
    if (fit === true) {
      var _computeArcBoundingBo = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["computeArcBoundingBox"])(centerX, centerY, radius, startAngle - 90, endAngle - 90),
          points = _computeArcBoundingBo.points,
          box = _objectWithoutProperties(_computeArcBoundingBo, ["points"]);
      var ratio = Math.min(width / box.width, height / box.height);
      var adjustedBox = {
        width: box.width * ratio,
        height: box.height * ratio
      };
      adjustedBox.x = (width - adjustedBox.width) / 2;
      adjustedBox.y = (height - adjustedBox.height) / 2;
      centerX = (centerX - box.x) / box.width * box.width * ratio + adjustedBox.x;
      centerY = (centerY - box.y) / box.height * box.height * ratio + adjustedBox.y;
      boundingBox = {
        box: box,
        ratio: ratio,
        points: points
      };
      radius = radius * ratio;
      innerRadius = innerRadius * ratio;
    }
    var arcGenerator = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])().outerRadius(radius).innerRadius(innerRadius).cornerRadius(cornerRadius);
    return {
      centerX: centerX,
      centerY: centerY,
      radius: radius,
      innerRadius: innerRadius,
      arcGenerator: arcGenerator,
      debug: boundingBox
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['sortByValue', 'padAngle', 'startAngle', 'endAngle'], function (_ref3) {
    var sortByValue = _ref3.sortByValue,
        padAngle = _ref3.padAngle,
        startAngle = _ref3.startAngle,
        endAngle = _ref3.endAngle;
    var pie$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["pie"])().value(function (d) {
      return d.value;
    }).padAngle(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["degreesToRadians"])(padAngle)).startAngle(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["degreesToRadians"])(startAngle)).endAngle(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["degreesToRadians"])(endAngle));
    if (sortByValue !== true) pie$1.sortValues(null);
    return {
      pie: pie$1
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['pie', 'data'], function (_ref4) {
    var pie = _ref4.pie,
        data = _ref4.data;
    return {
      arcs: pie(data).map(function (arc) {
        var angle = Math.abs(arc.endAngle - arc.startAngle);
        return _objectSpread({}, arc, {
          angle: angle,
          angleDeg: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(angle)
        });
      })
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['arcs', 'getColor'], function (_ref5) {
    var arcs = _ref5.arcs,
        getColor = _ref5.getColor;
    return {
      arcs: arcs.map(function (arc) {
        return _objectSpread({}, arc, {
          color: getColor(arc.data)
        });
      })
    };
  }), recompose_pure__WEBPACK_IMPORTED_MODULE_5___default.a)(Component);
};
var PieLayout$1 = recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3___default()('PieLayout')(enhance(PieLayout));

var arcPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  angleDeg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});
var PiePropTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })).isRequired,
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  fit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  padAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  sortByValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cornerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  borderWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  borderColor: _nivo_colors__WEBPACK_IMPORTED_MODULE_9__["inheritedColorPropType"].isRequired,
  enableRadialLabels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  radialLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  radialLabelsSkipAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  radialLabelsTextXOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  radialLabelsTextColor: _nivo_colors__WEBPACK_IMPORTED_MODULE_9__["inheritedColorPropType"].isRequired,
  radialLabelsLinkOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  radialLabelsLinkDiagonalLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  radialLabelsLinkHorizontalLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  radialLabelsLinkStrokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  radialLabelsLinkColor: _nivo_colors__WEBPACK_IMPORTED_MODULE_9__["inheritedColorPropType"].isRequired,
  enableSlicesLabels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  sliceLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  slicesLabelsSkipAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  slicesLabelsTextColor: _nivo_colors__WEBPACK_IMPORTED_MODULE_9__["inheritedColorPropType"].isRequired,
  colors: _nivo_colors__WEBPACK_IMPORTED_MODULE_9__["ordinalColorsPropType"].isRequired,
  defs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['*']), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired
  })).isRequired,
  isInteractive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  lockTooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  tooltipFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  legends: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_nivo_legends__WEBPACK_IMPORTED_MODULE_10__["LegendPropShape"])).isRequired
};
var PieDefaultProps = {
  sortByValue: false,
  innerRadius: 0,
  padAngle: 0,
  cornerRadius: 0,
  startAngle: 0,
  endAngle: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(Math.PI * 2),
  fit: true,
  borderWidth: 0,
  borderColor: {
    from: 'color',
    modifiers: [['darker', 1]]
  },
  enableRadialLabels: true,
  radialLabel: 'id',
  radialLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  radialLabelsLinkColor: {
    theme: 'axis.ticks.line.stroke'
  },
  enableSlicesLabels: true,
  sliceLabel: 'value',
  slicesLabelsTextColor: {
    theme: 'labels.text.fill'
  },
  colors: {
    scheme: 'nivo'
  },
  defs: [],
  fill: [],
  isInteractive: true,
  onClick: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["noop"],
  onMouseEnter: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["noop"],
  onMouseLeave: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["noop"],
  lockTooltip: true,
  legends: []
};

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }
function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PieSlice = function PieSlice(_ref) {
  var data = _ref.data,
      path = _ref.path,
      color = _ref.color,
      fill = _ref.fill,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor,
      showTooltip = _ref.showTooltip,
      hideTooltip = _ref.hideTooltip,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      tooltipFormat = _ref.tooltipFormat,
      tooltip = _ref.tooltip,
      theme = _ref.theme;
  var handleTooltip = function handleTooltip(e) {
    return showTooltip(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_11__["BasicTooltip"], {
      id: data.label || data.id,
      value: data.value,
      enableChip: true,
      color: color,
      theme: theme,
      format: tooltipFormat,
      renderContent: typeof tooltip === 'function' ? tooltip.bind(null, _objectSpread$1({
        color: color
      }, data)) : null
    }), e);
  };
  var handleMouseEnter = function handleMouseEnter(e) {
    onMouseEnter(data, e);
    handleTooltip(e);
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    onMouseLeave(data, e);
    hideTooltip(e);
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    key: data.id,
    d: path,
    fill: fill,
    strokeWidth: borderWidth,
    stroke: borderColor,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleTooltip,
    onMouseLeave: handleMouseLeave,
    onClick: onClick
  });
};
PieSlice.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired,
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  borderWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tooltipFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showTooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hideTooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  }).isRequired
};
var enhance$1 = recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['data', 'onClick'], function (_ref2) {
  var data = _ref2.data,
      _onClick = _ref2.onClick;
  return {
    onClick: function onClick(event) {
      return _onClick(data, event);
    }
  };
}), recompose_pure__WEBPACK_IMPORTED_MODULE_5___default.a);
var PieSlice$1 = enhance$1(PieSlice);

var computeRadialLabels = function computeRadialLabels(arcs, _ref) {
  var getLabel = _ref.getLabel,
      radius = _ref.radius,
      skipAngle = _ref.skipAngle,
      linkOffset = _ref.linkOffset,
      linkDiagonalLength = _ref.linkDiagonalLength,
      linkHorizontalLength = _ref.linkHorizontalLength,
      textXOffset = _ref.textXOffset;
  return arcs.filter(function (arc) {
    return skipAngle === 0 || arc.angleDeg > skipAngle;
  }).map(function (arc) {
    var angle = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["absoluteAngleRadians"])(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["midAngle"])(arc) - Math.PI / 2);
    var positionA = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["positionFromAngle"])(angle, radius + linkOffset);
    var positionB = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["positionFromAngle"])(angle, radius + linkOffset + linkDiagonalLength);
    var positionC;
    var labelPosition;
    var textAlign;
    if (Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["absoluteAngleDegrees"])(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(angle)) < 90 || Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["absoluteAngleDegrees"])(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(angle)) >= 270) {
      positionC = {
        x: positionB.x + linkHorizontalLength,
        y: positionB.y
      };
      labelPosition = {
        x: positionB.x + linkHorizontalLength + textXOffset,
        y: positionB.y
      };
      textAlign = 'left';
    } else {
      positionC = {
        x: positionB.x - linkHorizontalLength,
        y: positionB.y
      };
      labelPosition = {
        x: positionB.x - linkHorizontalLength - textXOffset,
        y: positionB.y
      };
      textAlign = 'right';
    }
    return {
      arc: arc,
      text: getLabel(arc.data),
      position: labelPosition,
      align: textAlign,
      line: [positionA, positionB, positionC]
    };
  });
};

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }
function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }
function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }
function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }
function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var lineGenerator = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])().x(function (d) {
  return d.x;
}).y(function (d) {
  return d.y;
});
var PieRadialLabels =
function (_Component) {
  _inherits$1(PieRadialLabels, _Component);
  function PieRadialLabels() {
    _classCallCheck$1(this, PieRadialLabels);
    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(PieRadialLabels).apply(this, arguments));
  }
  _createClass$1(PieRadialLabels, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arcs = _this$props.arcs,
          label = _this$props.label,
          radius = _this$props.radius,
          skipAngle = _this$props.skipAngle,
          linkOffset = _this$props.linkOffset,
          linkDiagonalLength = _this$props.linkDiagonalLength,
          linkHorizontalLength = _this$props.linkHorizontalLength,
          linkStrokeWidth = _this$props.linkStrokeWidth,
          textXOffset = _this$props.textXOffset,
          textColor = _this$props.textColor,
          linkColor = _this$props.linkColor,
          theme = _this$props.theme;
      var labels = computeRadialLabels(arcs, {
        getLabel: label,
        radius: radius,
        skipAngle: skipAngle,
        linkOffset: linkOffset,
        linkDiagonalLength: linkDiagonalLength,
        linkHorizontalLength: linkHorizontalLength,
        textXOffset: textXOffset
      });
      return labels.map(function (label) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: label.arc.data.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: lineGenerator(label.line),
          fill: "none",
          style: {
            fill: 'none',
            stroke: linkColor(label.arc, theme)
          },
          strokeWidth: linkStrokeWidth
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          transform: "translate(".concat(label.position.x, ", ").concat(label.position.y, ")")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          textAnchor: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["textPropsByEngine"].svg.align[label.align],
          dominantBaseline: "central",
          style: _objectSpread$2({}, theme.labels.text, {
            fill: textColor(label.arc.data, theme)
          })
        }, label.text)));
      });
    }
  }]);
  return PieRadialLabels;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty$2(PieRadialLabels, "propTypes", {
  arcs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(arcPropType).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  skipAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  linkOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  linkDiagonalLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  linkHorizontalLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  linkStrokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textXOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  linkColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    axis: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["axisThemePropType"].isRequired,
    labels: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["labelsThemePropType"].isRequired
  }).isRequired
});
_defineProperty$2(PieRadialLabels, "defaultProps", {
  skipAngle: 0,
  linkOffset: 0,
  linkDiagonalLength: 16,
  linkHorizontalLength: 24,
  linkStrokeWidth: 1,
  textXOffset: 6
});

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }
function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }
function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }
function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }
function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }
function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var sliceStyle = {
  pointerEvents: 'none'
};
var PieSlicesLabels =
function (_Component) {
  _inherits$2(PieSlicesLabels, _Component);
  function PieSlicesLabels() {
    _classCallCheck$2(this, PieSlicesLabels);
    return _possibleConstructorReturn$2(this, _getPrototypeOf$2(PieSlicesLabels).apply(this, arguments));
  }
  _createClass$2(PieSlicesLabels, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arcs = _this$props.arcs,
          label = _this$props.label,
          radius = _this$props.radius,
          skipAngle = _this$props.skipAngle,
          innerRadius = _this$props.innerRadius,
          textColor = _this$props.textColor,
          theme = _this$props.theme;
      var centerRadius = innerRadius + (radius - innerRadius) / 2;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, arcs.filter(function (arc) {
        return skipAngle === 0 || arc.angleDeg > skipAngle;
      }).map(function (arc) {
        var angle = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["midAngle"])(arc) - Math.PI / 2;
        var position = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["positionFromAngle"])(angle, centerRadius);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          key: arc.data.id,
          transform: "translate(".concat(position.x, ", ").concat(position.y, ")"),
          style: sliceStyle
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          textAnchor: "middle",
          dominantBaseline: "central",
          style: _objectSpread$3({}, theme.labels.text, {
            fill: textColor(arc.data, theme)
          })
        }, label(arc.data)));
      }));
    }
  }]);
  return PieSlicesLabels;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty$3(PieSlicesLabels, "propTypes", {
  arcs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(arcPropType).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  skipAngle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    labels: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["labelsThemePropType"].isRequired
  }).isRequired
});
_defineProperty$3(PieSlicesLabels, "defaultProps", {
  skipAngle: 0
});

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }
function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }
function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }
function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }
function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PieLegends =
function (_Component) {
  _inherits$3(PieLegends, _Component);
  function PieLegends() {
    _classCallCheck$3(this, PieLegends);
    return _possibleConstructorReturn$3(this, _getPrototypeOf$3(PieLegends).apply(this, arguments));
  }
  _createClass$3(PieLegends, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          legends = _this$props.legends,
          data = _this$props.data,
          theme = _this$props.theme;
      return legends.map(function (legend, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_legends__WEBPACK_IMPORTED_MODULE_10__["BoxLegendSvg"], _extends({
          key: i
        }, legend, {
          containerWidth: width,
          containerHeight: height,
          data: data,
          theme: theme
        }));
      });
    }
  }]);
  return PieLegends;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty$4(PieLegends, "propTypes", {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  arcs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(arcPropType).isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  legends: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_nivo_legends__WEBPACK_IMPORTED_MODULE_10__["LegendPropShape"])).isRequired,
  theme: _nivo_core__WEBPACK_IMPORTED_MODULE_8__["themePropType"].isRequired
});
var enhance$2 = function enhance(Component) {
  return recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['arcs'], function (_ref) {
    var arcs = _ref.arcs;
    return {
      data: arcs.map(function (_ref2) {
        var color = _ref2.color,
            _ref2$data = _ref2.data,
            id = _ref2$data.id,
            label = _ref2$data.label,
            fill = _ref2.fill;
        return {
          id: id,
          label: label || id,
          color: color,
          fill: fill
        };
      })
    };
  }), recompose_pure__WEBPACK_IMPORTED_MODULE_5___default.a)(Component);
};
var PieLegends$1 = recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3___default()('PieLegends')(enhance$2(PieLegends));

function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }
function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }
function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }
function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }
function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Pie =
function (_Component) {
  _inherits$4(Pie, _Component);
  function Pie() {
    _classCallCheck$4(this, Pie);
    return _possibleConstructorReturn$4(this, _getPrototypeOf$4(Pie).apply(this, arguments));
  }
  _createClass$4(Pie, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          sortByValue = _this$props.sortByValue,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          padAngle = _this$props.padAngle,
          fit = _this$props.fit,
          innerRadius = _this$props.innerRadius,
          cornerRadius = _this$props.cornerRadius,
          margin = _this$props.margin,
          width = _this$props.width,
          height = _this$props.height,
          outerWidth = _this$props.outerWidth,
          outerHeight = _this$props.outerHeight,
          colors = _this$props.colors,
          colorBy = _this$props.colorBy,
          borderWidth = _this$props.borderWidth,
          _borderColor = _this$props.borderColor,
          enableRadialLabels = _this$props.enableRadialLabels,
          getRadialLabel = _this$props.getRadialLabel,
          radialLabelsSkipAngle = _this$props.radialLabelsSkipAngle,
          radialLabelsLinkOffset = _this$props.radialLabelsLinkOffset,
          radialLabelsLinkDiagonalLength = _this$props.radialLabelsLinkDiagonalLength,
          radialLabelsLinkHorizontalLength = _this$props.radialLabelsLinkHorizontalLength,
          radialLabelsLinkStrokeWidth = _this$props.radialLabelsLinkStrokeWidth,
          radialLabelsTextXOffset = _this$props.radialLabelsTextXOffset,
          radialLabelsTextColor = _this$props.radialLabelsTextColor,
          radialLabelsLinkColor = _this$props.radialLabelsLinkColor,
          enableSlicesLabels = _this$props.enableSlicesLabels,
          getSliceLabel = _this$props.getSliceLabel,
          slicesLabelsSkipAngle = _this$props.slicesLabelsSkipAngle,
          slicesLabelsTextColor = _this$props.slicesLabelsTextColor,
          theme = _this$props.theme,
          defs = _this$props.defs,
          fill = _this$props.fill,
          isInteractive = _this$props.isInteractive,
          onClick = _this$props.onClick,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseLeave = _this$props.onMouseLeave,
          tooltipFormat = _this$props.tooltipFormat,
          tooltip = _this$props.tooltip,
          legends = _this$props.legends;
      var borderColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(_borderColor, theme);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieLayout$1, {
        width: width,
        height: height,
        data: data,
        sortByValue: sortByValue,
        startAngle: startAngle,
        endAngle: endAngle,
        fit: fit,
        padAngle: padAngle,
        innerRadius: innerRadius,
        cornerRadius: cornerRadius,
        colors: colors,
        colorBy: colorBy
      }, function (_ref) {
        var centerX = _ref.centerX,
            centerY = _ref.centerY,
            radius = _ref.radius,
            innerRadius = _ref.innerRadius,
            arcs = _ref.arcs,
            arcGenerator = _ref.arcGenerator;
        var boundDefs = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["bindDefs"])(defs, arcs, fill, {
          dataKey: 'data'
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          isInteractive: isInteractive,
          theme: theme,
          animate: false
        }, function (_ref2) {
          var showTooltip = _ref2.showTooltip,
              hideTooltip = _ref2.hideTooltip;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["SvgWrapper"], {
            width: outerWidth,
            height: outerHeight,
            margin: margin,
            defs: boundDefs,
            theme: theme
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
            transform: "translate(".concat(centerX, ",").concat(centerY, ")")
          }, arcs.map(function (arc) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieSlice$1, {
              key: arc.data.id,
              data: arc.data,
              path: arcGenerator(arc),
              color: arc.color,
              fill: arc.fill ? arc.fill : arc.color,
              borderWidth: borderWidth,
              borderColor: borderColor(arc),
              showTooltip: showTooltip,
              hideTooltip: hideTooltip,
              tooltipFormat: tooltipFormat,
              tooltip: tooltip,
              onClick: onClick,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              theme: theme
            });
          }), enableRadialLabels && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieRadialLabels, {
            arcs: arcs,
            radius: radius,
            label: getRadialLabel,
            skipAngle: radialLabelsSkipAngle,
            linkOffset: radialLabelsLinkOffset,
            linkDiagonalLength: radialLabelsLinkDiagonalLength,
            linkHorizontalLength: radialLabelsLinkHorizontalLength,
            linkStrokeWidth: radialLabelsLinkStrokeWidth,
            textXOffset: radialLabelsTextXOffset,
            textColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(radialLabelsTextColor, theme),
            linkColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(radialLabelsLinkColor, theme),
            theme: theme
          }), enableSlicesLabels && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieSlicesLabels, {
            arcs: arcs,
            radius: radius,
            innerRadius: innerRadius,
            theme: theme,
            label: getSliceLabel,
            skipAngle: slicesLabelsSkipAngle,
            textColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(slicesLabelsTextColor, theme)
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieLegends$1, {
            width: width,
            height: height,
            arcs: arcs,
            legends: legends,
            theme: theme
          }));
        });
      });
    }
  }]);
  return Pie;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty$5(Pie, "propTypes", PiePropTypes);
var enhance$3 = function enhance(Component) {
  return recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(recompose_defaultProps__WEBPACK_IMPORTED_MODULE_6___default()(PieDefaultProps), Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["withTheme"])(), Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["withDimensions"])(), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['radialLabel'], function (_ref3) {
    var radialLabel = _ref3.radialLabel;
    return {
      getRadialLabel: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["getLabelGenerator"])(radialLabel)
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_7___default()(['sliceLabel'], function (_ref4) {
    var sliceLabel = _ref4.sliceLabel;
    return {
      getSliceLabel: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["getLabelGenerator"])(sliceLabel)
    };
  }), recompose_pure__WEBPACK_IMPORTED_MODULE_5___default.a)(Component);
};
var Pie$1 = recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3___default()('Pie')(enhance$3(Pie));

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var ResponsivePie = function ResponsivePie(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["ResponsiveWrapper"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pie$1, _extends$1({
      width: width,
      height: height
    }, props));
  });
};

var enhance$4 = (function (Component) {
  return recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(recompose_defaultProps__WEBPACK_IMPORTED_MODULE_6___default()(PieDefaultProps), Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["withTheme"])(), Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["withDimensions"])(), recompose_pure__WEBPACK_IMPORTED_MODULE_5___default.a)(Component);
});

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }
function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var drawSliceLabels = function drawSliceLabels(ctx, arcs, _ref) {
  var arcGenerator = _ref.arcGenerator,
      getLabel = _ref.getLabel,
      skipAngle = _ref.skipAngle,
      getTextColor = _ref.getTextColor,
      theme = _ref.theme;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = "".concat(theme.labels.text.fontSize, "px ").concat(theme.labels.text.fontFamily);
  arcs.filter(function (arc) {
    return skipAngle === 0 || arc.angleDeg > skipAngle;
  }).forEach(function (arc) {
    var _arcGenerator$centroi = arcGenerator.centroid(arc),
        _arcGenerator$centroi2 = _slicedToArray(_arcGenerator$centroi, 2),
        centroidX = _arcGenerator$centroi2[0],
        centroidY = _arcGenerator$centroi2[1];
    var sliceLabel = getLabel(arc.data);
    var textColor = getTextColor(arc, theme);
    ctx.save();
    ctx.translate(centroidX, centroidY);
    ctx.fillStyle = textColor;
    ctx.fillText(sliceLabel, 0, 0);
    ctx.restore();
  });
};
var drawRadialLabels = function drawRadialLabels(ctx, arcs, _ref2) {
  var radius = _ref2.radius,
      getLabel = _ref2.getLabel,
      skipAngle = _ref2.skipAngle,
      linkOffset = _ref2.linkOffset,
      linkDiagonalLength = _ref2.linkDiagonalLength,
      linkHorizontalLength = _ref2.linkHorizontalLength,
      linkStrokeWidth = _ref2.linkStrokeWidth,
      textXOffset = _ref2.textXOffset,
      getTextColor = _ref2.getTextColor,
      getLinkColor = _ref2.getLinkColor,
      theme = _ref2.theme;
  var radialLabels = computeRadialLabels(arcs, {
    getLabel: getLabel,
    radius: radius,
    skipAngle: skipAngle,
    linkOffset: linkOffset,
    linkDiagonalLength: linkDiagonalLength,
    linkHorizontalLength: linkHorizontalLength,
    textXOffset: textXOffset
  });
  ctx.textBaseline = 'middle';
  ctx.font = "".concat(theme.labels.text.fontSize, "px ").concat(theme.labels.text.fontFamily);
  radialLabels.forEach(function (label) {
    var dataWithColor = _objectSpread$4({}, label.arc.data, {
      color: label.arc.color
    });
    ctx.save();
    ctx.translate(label.position.x, label.position.y);
    ctx.fillStyle = getTextColor(dataWithColor, theme);
    ctx.textAlign = _nivo_core__WEBPACK_IMPORTED_MODULE_8__["textPropsByEngine"].canvas.align[label.align];
    ctx.fillText(label.text, 0, 0);
    ctx.restore();
    ctx.beginPath();
    ctx.strokeStyle = getLinkColor(dataWithColor, theme);
    ctx.lineWidth = linkStrokeWidth;
    label.line.forEach(function (point, index) {
      if (index === 0) ctx.moveTo(point.x, point.y);else ctx.lineTo(point.x, point.y);
    });
    if (linkStrokeWidth > 0) ctx.stroke();
  });
};

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }
function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PieTooltip = function PieTooltip(_ref) {
  var data = _ref.data,
      color = _ref.color,
      tooltipFormat = _ref.tooltipFormat,
      tooltip = _ref.tooltip,
      theme = _ref.theme;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_11__["BasicTooltip"], {
    id: data.label,
    value: data.value,
    enableChip: true,
    color: color,
    theme: theme,
    format: tooltipFormat,
    renderContent: typeof tooltip === 'function' ? tooltip.bind(null, _objectSpread$5({
      color: color
    }, data)) : null
  });
};
PieTooltip.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tooltipFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  }).isRequired
};
var PieTooltip$1 = recompose_pure__WEBPACK_IMPORTED_MODULE_5___default()(PieTooltip);

function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } return target; }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit$1(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }
function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }
function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }
function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }
function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PieCanvasRenderer =
function (_Component) {
  _inherits$5(PieCanvasRenderer, _Component);
  function PieCanvasRenderer() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck$5(this, PieCanvasRenderer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn$5(this, (_getPrototypeOf2 = _getPrototypeOf$5(PieCanvasRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty$8(_assertThisInitialized$5(_this), "getArcFromMouse", function (event) {
      var _getRelativeCursor = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["getRelativeCursor"])(_this.surface, event),
          _getRelativeCursor2 = _slicedToArray$1(_getRelativeCursor, 2),
          x = _getRelativeCursor2[0],
          y = _getRelativeCursor2[1];
      var _this$props = _this.props,
          centerX = _this$props.centerX,
          centerY = _this$props.centerY,
          margin = _this$props.margin,
          radius = _this$props.radius,
          innerRadius = _this$props.innerRadius,
          arcs = _this$props.arcs;
      return Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["getHoveredArc"])(margin.left + centerX, margin.top + centerY, radius, innerRadius, arcs, x, y);
    });
    _defineProperty$8(_assertThisInitialized$5(_this), "handleMouseHover", function (showTooltip, hideTooltip) {
      return function (event) {
        if (_this.props.isInteractive !== true) return;
        var arc = _this.getArcFromMouse(event);
        if (arc) {
          showTooltip(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieTooltip$1, {
            data: arc.data,
            color: arc.color,
            theme: _this.props.theme
          }), event);
        } else {
          hideTooltip();
        }
      };
    });
    _defineProperty$8(_assertThisInitialized$5(_this), "handleMouseLeave", function (hideTooltip) {
      return function () {
        if (_this.props.isInteractive !== true) return;
        hideTooltip();
      };
    });
    _defineProperty$8(_assertThisInitialized$5(_this), "handleClick", function (event) {
      var arc = _this.getArcFromMouse(event);
      if (arc) _this.props.onClick(arc.data, event);
    });
    return _this;
  }
  _createClass$5(PieCanvasRenderer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ctx = this.surface.getContext('2d');
      this.draw(this.props);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      if (this.props.outerWidth !== props.outerWidth || this.props.outerHeight !== props.outerHeight || this.props.isInteractive !== props.isInteractive || this.props.theme !== props.theme) {
        return true;
      }
      this.draw(props);
      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.ctx = this.surface.getContext('2d');
      this.draw(this.props);
    }
  }, {
    key: "draw",
    value: function draw(props) {
      var _this2 = this;
      var arcs = props.arcs,
          arcGenerator = props.arcGenerator,
          width = props.width,
          height = props.height,
          centerX = props.centerX,
          centerY = props.centerY,
          radius = props.radius,
          outerWidth = props.outerWidth,
          outerHeight = props.outerHeight,
          pixelRatio = props.pixelRatio,
          margin = props.margin,
          borderWidth = props.borderWidth,
          borderColor = props.borderColor,
          enableSlicesLabels = props.enableSlicesLabels,
          enableRadialLabels = props.enableRadialLabels,
          legends = props.legends,
          theme = props.theme;
      this.surface.width = outerWidth * pixelRatio;
      this.surface.height = outerHeight * pixelRatio;
      this.ctx.scale(pixelRatio, pixelRatio);
      this.ctx.fillStyle = theme.background;
      this.ctx.fillRect(0, 0, outerWidth, outerHeight);
      this.ctx.save();
      this.ctx.translate(margin.left, margin.top);
      arcGenerator.context(this.ctx);
      this.ctx.save();
      this.ctx.translate(centerX, centerY);
      var getBorderColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(borderColor, theme);
      arcs.forEach(function (arc) {
        _this2.ctx.beginPath();
        _this2.ctx.fillStyle = arc.color;
        _this2.ctx.strokeStyle = getBorderColor(_objectSpread$6({}, arc.data, {
          color: arc.color
        }));
        _this2.ctx.lineWidth = borderWidth;
        arcGenerator(arc);
        _this2.ctx.fill();
        if (borderWidth > 0) _this2.ctx.stroke();
      });
      if (enableSlicesLabels === true) {
        var sliceLabel = props.sliceLabel,
            slicesLabelsSkipAngle = props.slicesLabelsSkipAngle,
            slicesLabelsTextColor = props.slicesLabelsTextColor;
        drawSliceLabels(this.ctx, arcs, {
          arcGenerator: arcGenerator,
          skipAngle: slicesLabelsSkipAngle,
          getLabel: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["getLabelGenerator"])(sliceLabel),
          getTextColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(slicesLabelsTextColor, theme),
          theme: theme
        });
      }
      if (enableRadialLabels === true) {
        var radialLabel = props.radialLabel,
            radialLabelsSkipAngle = props.radialLabelsSkipAngle,
            radialLabelsLinkOffset = props.radialLabelsLinkOffset,
            radialLabelsLinkStrokeWidth = props.radialLabelsLinkStrokeWidth,
            radialLabelsLinkDiagonalLength = props.radialLabelsLinkDiagonalLength,
            radialLabelsLinkHorizontalLength = props.radialLabelsLinkHorizontalLength,
            radialLabelsTextXOffset = props.radialLabelsTextXOffset,
            radialLabelsTextColor = props.radialLabelsTextColor,
            radialLabelsLinkColor = props.radialLabelsLinkColor;
        drawRadialLabels(this.ctx, arcs, {
          radius: radius,
          getLabel: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["getLabelGenerator"])(radialLabel),
          skipAngle: radialLabelsSkipAngle,
          linkOffset: radialLabelsLinkOffset,
          linkDiagonalLength: radialLabelsLinkDiagonalLength,
          linkHorizontalLength: radialLabelsLinkHorizontalLength,
          linkStrokeWidth: radialLabelsLinkStrokeWidth,
          textXOffset: radialLabelsTextXOffset,
          getTextColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(radialLabelsTextColor, theme),
          getLinkColor: Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["getInheritedColorGenerator"])(radialLabelsLinkColor, theme),
          theme: theme
        });
      }
      this.ctx.restore();
      legends.forEach(function (legend) {
        Object(_nivo_legends__WEBPACK_IMPORTED_MODULE_10__["renderLegendToCanvas"])(_this2.ctx, _objectSpread$6({}, legend, {
          data: arcs.map(function (arc) {
            return {
              id: arc.data.id,
              label: arc.data.id,
              color: arc.color
            };
          }),
          containerWidth: width,
          containerHeight: height,
          theme: theme
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
          outerWidth = _this$props2.outerWidth,
          outerHeight = _this$props2.outerHeight,
          pixelRatio = _this$props2.pixelRatio,
          isInteractive = _this$props2.isInteractive,
          theme = _this$props2.theme;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        isInteractive: isInteractive,
        theme: theme,
        animate: false
      }, function (_ref) {
        var showTooltip = _ref.showTooltip,
            hideTooltip = _ref.hideTooltip;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
          ref: function ref(surface) {
            _this3.surface = surface;
          },
          width: outerWidth * pixelRatio,
          height: outerHeight * pixelRatio,
          style: {
            width: outerWidth,
            height: outerHeight
          },
          onMouseEnter: _this3.handleMouseHover(showTooltip, hideTooltip),
          onMouseMove: _this3.handleMouseHover(showTooltip, hideTooltip),
          onMouseLeave: _this3.handleMouseLeave(hideTooltip),
          onClick: _this3.handleClick
        });
      });
    }
  }]);
  return PieCanvasRenderer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty$8(PieCanvasRenderer, "propTypes", {
  arcs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(arcPropType).isRequired,
  arcGenerator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pixelRatio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  outerWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  outerHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  centerX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  centerY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isInteractive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

function _typeof$6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }
function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }
function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }
function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }
function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }
function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }
function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PieCanvas =
function (_Component) {
  _inherits$6(PieCanvas, _Component);
  function PieCanvas() {
    _classCallCheck$6(this, PieCanvas);
    return _possibleConstructorReturn$6(this, _getPrototypeOf$6(PieCanvas).apply(this, arguments));
  }
  _createClass$6(PieCanvas, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          sortByValue = _this$props.sortByValue,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          fit = _this$props.fit,
          padAngle = _this$props.padAngle,
          innerRadius = _this$props.innerRadius,
          cornerRadius = _this$props.cornerRadius,
          width = _this$props.width,
          height = _this$props.height,
          colors = _this$props.colors,
          colorBy = _this$props.colorBy,
          topProps = _objectWithoutProperties$1(_this$props, ["data", "sortByValue", "startAngle", "endAngle", "fit", "padAngle", "innerRadius", "cornerRadius", "width", "height", "colors", "colorBy"]);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieLayout$1, {
        width: width,
        height: height,
        data: data,
        sortByValue: sortByValue,
        startAngle: startAngle,
        endAngle: endAngle,
        fit: fit,
        padAngle: padAngle,
        innerRadius: innerRadius,
        cornerRadius: cornerRadius,
        colors: colors,
        colorBy: colorBy
      }, function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieCanvasRenderer, _extends$2({}, topProps, props));
      });
    }
  }]);
  return PieCanvas;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
_defineProperty$9(PieCanvas, "propTypes", PiePropTypes);
var PieCanvas$1 = recompose_setDisplayName__WEBPACK_IMPORTED_MODULE_3___default()('PieCanvas')(enhance$4(PieCanvas));

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var ResponsivePieCanvas = function ResponsivePieCanvas(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["ResponsiveWrapper"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PieCanvas$1, _extends$3({
      width: width,
      height: height
    }, props));
  });
};

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$a(target, key, source[key]); }); } return target; }
function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var usePie = function usePie(_ref) {
  var data = _ref.data,
      radius = _ref.radius,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? function (v) {
    return v;
  } : _ref$value,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === void 0 ? 0 : _ref$startAngle,
      _ref$endAngle = _ref.endAngle,
      endAngle = _ref$endAngle === void 0 ? 360 : _ref$endAngle,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === void 0 ? 0 : _ref$innerRadius,
      _ref$cornerRadius = _ref.cornerRadius,
      cornerRadius = _ref$cornerRadius === void 0 ? 0 : _ref$cornerRadius,
      _ref$sortByValue = _ref.sortByValue,
      sortByValue = _ref$sortByValue === void 0 ? false : _ref$sortByValue,
      _ref$padAngle = _ref.padAngle,
      padAngle = _ref$padAngle === void 0 ? 0 : _ref$padAngle;
  var arcGenerator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])().outerRadius(radius).innerRadius(innerRadius).cornerRadius(cornerRadius);
  }, [radius, innerRadius, cornerRadius]);
  var getValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return typeof value === 'function' ? value : function (d) {
      return lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(d, value);
    };
  }, [value]);
  var pie$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var computedPie = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["pie"])().value(getValue).padAngle(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["degreesToRadians"])(padAngle)).startAngle(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["degreesToRadians"])(startAngle)).endAngle(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["degreesToRadians"])(endAngle));
    if (sortByValue !== true) computedPie.sortValues(null);
    return computedPie;
  }, [getValue, padAngle, startAngle, endAngle, sortByValue]);
  var arcs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return pie$1(data).map(function (arc) {
      var angle = arc.endAngle - (arc.endAngle - arc.startAngle) * 0.5;
      return _objectSpread$7({}, arc, {
        startAngleDeg: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(angle.startAngle),
        endAngleDeg: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(arc.endAngle),
        angle: angle,
        angleDeg: Object(_nivo_core__WEBPACK_IMPORTED_MODULE_8__["radiansToDegrees"])(angle)
      });
    });
  }, [data, pie$1]);
  return {
    arcs: arcs,
    arcGenerator: arcGenerator
  };
};




/***/ })

}]);
//# sourceMappingURL=5.52b05d2b110036423c61.chunk.js.map