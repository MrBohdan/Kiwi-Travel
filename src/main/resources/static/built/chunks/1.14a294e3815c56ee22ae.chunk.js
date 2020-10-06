(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@nivo/axes/dist/nivo-axes.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@nivo/axes/dist/nivo-axes.esm.js ***!
  \*******************************************************/
/*! exports provided: Axes, Axis, Grid, axisPropType, axisPropTypes, renderAxesToCanvas, renderAxisToCanvas, renderGridLinesToCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axes", function() { return Axes$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisPropType", function() { return axisPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisPropTypes", function() { return axisPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAxesToCanvas", function() { return renderAxesToCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAxisToCanvas", function() { return renderAxisToCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGridLinesToCanvas", function() { return renderGridLinesToCanvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nivo_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nivo/core */ "./node_modules/@nivo/core/dist/nivo-core.esm.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");









function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var centerScale = function centerScale(scale) {
  var bandwidth = scale.bandwidth();
  if (bandwidth === 0) return scale;
  var offset = bandwidth / 2;
  if (scale.round()) {
    offset = Math.round(offset);
  }
  return function (d) {
    return scale(d) + offset;
  };
};
var timeByType = {
  millisecond: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMillisecond"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcMillisecond"]],
  second: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcSecond"]],
  minute: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcMinute"]],
  hour: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcHour"]],
  day: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcDay"]],
  week: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcWeek"]],
  sunday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeSunday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcSunday"]],
  monday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMonday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcMonday"]],
  tuesday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeTuesday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcTuesday"]],
  wednesday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeWednesday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcWednesday"]],
  thursday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeThursday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcThursday"]],
  friday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeFriday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcFriday"]],
  saturday: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeSaturday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcSaturday"]],
  month: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcMonth"]],
  year: [d3_time__WEBPACK_IMPORTED_MODULE_5__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_5__["utcYear"]]
};
var timeTypes = Object.keys(timeByType);
var timeIntervalRegexp = new RegExp("^every\\s*(\\d+)?\\s*(".concat(timeTypes.join('|'), ")s?$"), 'i');
var getScaleTicks = function getScaleTicks(scale, spec) {
  if (Array.isArray(spec)) {
    return spec;
  }
  if (scale.ticks) {
    if (spec === undefined) {
      return scale.ticks();
    }
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default()(spec)) {
      return scale.ticks(spec);
    }
    if (typeof spec === 'string') {
      var matches = spec.match(timeIntervalRegexp);
      if (matches) {
        var timeType = timeByType[matches[2]][scale.useUTC ? 1 : 0];
        if (matches[1] === undefined) {
          return scale.ticks(timeType);
        }
        return scale.ticks(timeType.every(Number(matches[1])));
      }
      throw new Error("Invalid tickValues: ".concat(spec));
    }
  }
  return scale.domain();
};
var computeCartesianTicks = function computeCartesianTicks(_ref) {
  var axis = _ref.axis,
      scale = _ref.scale,
      ticksPosition = _ref.ticksPosition,
      tickValues = _ref.tickValues,
      tickSize = _ref.tickSize,
      tickPadding = _ref.tickPadding,
      tickRotation = _ref.tickRotation,
      _ref$engine = _ref.engine,
      engine = _ref$engine === void 0 ? 'svg' : _ref$engine;
  var values = getScaleTicks(scale, tickValues);
  var textProps = _nivo_core__WEBPACK_IMPORTED_MODULE_3__["textPropsByEngine"][engine];
  var position = scale.bandwidth ? centerScale(scale) : scale;
  var line = {
    lineX: 0,
    lineY: 0
  };
  var text = {
    textX: 0,
    textY: 0
  };
  var translate;
  var textAlign = textProps.align.center;
  var textBaseline = textProps.baseline.center;
  if (axis === 'x') {
    translate = function translate(d) {
      return {
        x: position(d),
        y: 0
      };
    };
    line.lineY = tickSize * (ticksPosition === 'after' ? 1 : -1);
    text.textY = (tickSize + tickPadding) * (ticksPosition === 'after' ? 1 : -1);
    if (ticksPosition === 'after') {
      textBaseline = textProps.baseline.top;
    } else {
      textBaseline = textProps.baseline.bottom;
    }
    if (tickRotation === 0) {
      textAlign = textProps.align.center;
    } else if (ticksPosition === 'after' && tickRotation < 0 || ticksPosition === 'before' && tickRotation > 0) {
      textAlign = textProps.align.right;
      textBaseline = textProps.baseline.center;
    } else if (ticksPosition === 'after' && tickRotation > 0 || ticksPosition === 'before' && tickRotation < 0) {
      textAlign = textProps.align.left;
      textBaseline = textProps.baseline.center;
    }
  } else {
    translate = function translate(d) {
      return {
        x: 0,
        y: position(d)
      };
    };
    line.lineX = tickSize * (ticksPosition === 'after' ? 1 : -1);
    text.textX = (tickSize + tickPadding) * (ticksPosition === 'after' ? 1 : -1);
    if (ticksPosition === 'after') {
      textAlign = textProps.align.left;
    } else {
      textAlign = textProps.align.right;
    }
  }
  var ticks = values.map(function (value) {
    return _objectSpread({
      key: value,
      value: value
    }, translate(value), line, text);
  });
  return {
    ticks: ticks,
    textAlign: textAlign,
    textBaseline: textBaseline
  };
};
var getFormatter = function getFormatter(format$1, scale) {
  if (!format$1 || typeof format$1 === 'function') return format$1;
  if (scale.type === 'time') {
    var f = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_6__["timeFormat"])(format$1);
    return function (d) {
      return f(new Date(d));
    };
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_7__["format"])(format$1);
};
var computeGridLines = function computeGridLines(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      scale = _ref2.scale,
      axis = _ref2.axis,
      _values = _ref2.values;
  var lineValues = Array.isArray(_values) ? _values : undefined;
  var lineCount = lodash_isNumber__WEBPACK_IMPORTED_MODULE_4___default()(_values) ? _values : undefined;
  var values = lineValues || getScaleTicks(scale, lineCount);
  var position = scale.bandwidth ? centerScale(scale) : scale;
  var lines;
  if (axis === 'x') {
    lines = values.map(function (v) {
      return {
        key: "".concat(v),
        x1: position(v),
        x2: position(v),
        y1: 0,
        y2: height
      };
    });
  } else if (axis === 'y') {
    lines = values.map(function (v) {
      return {
        key: "".concat(v),
        x1: 0,
        x2: width,
        y1: position(v),
        y2: position(v)
      };
    });
  }
  return lines;
};

var axisPropTypes = {
  ticksPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['before', 'after']),
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)])), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tickSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickRotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  renderTick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  legend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  legendPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['start', 'middle', 'end']),
  legendOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
var axisPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(axisPropTypes);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var AxisTick = function AxisTick(_ref) {
  var _value = _ref.value,
      x = _ref.x,
      y = _ref.y,
      opacity = _ref.opacity,
      rotate = _ref.rotate,
      format = _ref.format,
      lineX = _ref.lineX,
      lineY = _ref.lineY,
      _onClick = _ref.onClick,
      textX = _ref.textX,
      textY = _ref.textY,
      textBaseline = _ref.textBaseline,
      textAnchor = _ref.textAnchor;
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var value = _value;
  if (format !== undefined) {
    value = format(value);
  }
  var gStyle = {
    opacity: opacity
  };
  if (_onClick) {
    gStyle['cursor'] = 'pointer';
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", _extends({
    transform: "translate(".concat(x, ",").concat(y, ")")
  }, _onClick ? {
    onClick: function onClick(e) {
      return _onClick(e, value);
    }
  } : {}, {
    style: gStyle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: 0,
    x2: lineX,
    y1: 0,
    y2: lineY,
    style: theme.axis.ticks.line
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    dominantBaseline: textBaseline,
    textAnchor: textAnchor,
    transform: "translate(".concat(textX, ",").concat(textY, ") rotate(").concat(rotate, ")"),
    style: theme.axis.ticks.text
  }, value));
};
AxisTick.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)]).isRequired,
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  lineX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  lineY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  textBaseline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  textAnchor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
AxisTick.defaultProps = {
  opacity: 1,
  rotate: 0
};
var AxisTick$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(AxisTick);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }
function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var willEnter = function willEnter() {
  return {
    rotate: 0,
    opacity: 0,
    x: 0,
    y: 0
  };
};
var willLeave = function willLeave(springConfig) {
  return function (_ref) {
    var _ref$style = _ref.style,
        x = _ref$style.x,
        y = _ref$style.y,
        rotate = _ref$style.rotate;
    return {
      rotate: rotate,
      opacity: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(0, springConfig),
      x: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(x.val, springConfig),
      y: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(y.val, springConfig)
    };
  };
};
var defaultTickRenderer = function defaultTickRenderer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AxisTick$1, props);
};
var Axis = function Axis(_ref2) {
  var axis = _ref2.axis,
      scale = _ref2.scale,
      x = _ref2.x,
      y = _ref2.y,
      length = _ref2.length,
      ticksPosition = _ref2.ticksPosition,
      tickValues = _ref2.tickValues,
      tickSize = _ref2.tickSize,
      tickPadding = _ref2.tickPadding,
      tickRotation = _ref2.tickRotation,
      format = _ref2.format,
      renderTick = _ref2.renderTick,
      legend = _ref2.legend,
      legendPosition = _ref2.legendPosition,
      legendOffset = _ref2.legendOffset,
      onClick = _ref2.onClick;
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var _useMotionConfig = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_3__["useMotionConfig"])(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.springConfig;
  var formatValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return getFormatter(format, scale);
  }, [format, scale]);
  var _computeCartesianTick = computeCartesianTicks({
    axis: axis,
    scale: scale,
    ticksPosition: ticksPosition,
    tickValues: tickValues,
    tickSize: tickSize,
    tickPadding: tickPadding,
    tickRotation: tickRotation
  }),
      ticks = _computeCartesianTick.ticks,
      textAlign = _computeCartesianTick.textAlign,
      textBaseline = _computeCartesianTick.textBaseline;
  var legendNode = null;
  if (legend !== undefined) {
    var legendX = 0;
    var legendY = 0;
    var legendRotation = 0;
    var textAnchor;
    if (axis === 'y') {
      legendRotation = -90;
      legendX = legendOffset;
      if (legendPosition === 'start') {
        textAnchor = 'start';
        legendY = length;
      } else if (legendPosition === 'middle') {
        textAnchor = 'middle';
        legendY = length / 2;
      } else if (legendPosition === 'end') {
        textAnchor = 'end';
      }
    } else {
      legendY = legendOffset;
      if (legendPosition === 'start') {
        textAnchor = 'start';
      } else if (legendPosition === 'middle') {
        textAnchor = 'middle';
        legendX = length / 2;
      } else if (legendPosition === 'end') {
        textAnchor = 'end';
        legendX = length;
      }
    }
    legendNode = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      transform: "translate(".concat(legendX, ", ").concat(legendY, ") rotate(").concat(legendRotation, ")"),
      textAnchor: textAnchor,
      style: _objectSpread$1({
        dominantBaseline: 'central'
      }, theme.axis.legend.text)
    }, legend);
  }
  if (animate !== true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(".concat(x, ",").concat(y, ")")
    }, ticks.map(function (tick, tickIndex) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(renderTick, _objectSpread$1({
        tickIndex: tickIndex,
        format: formatValue,
        rotate: tickRotation,
        textBaseline: textBaseline,
        textAnchor: textAlign
      }, tick, onClick ? {
        onClick: onClick
      } : {}));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      style: theme.axis.domain.line,
      x1: 0,
      x2: axis === 'x' ? length : 0,
      y1: 0,
      y2: axis === 'x' ? 0 : length
    }), legendNode);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"], {
    style: {
      x: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(x, springConfig),
      y: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(y, springConfig)
    }
  }, function (xy) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(".concat(xy.x, ",").concat(xy.y, ")")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["TransitionMotion"], {
      willEnter: willEnter,
      willLeave: willLeave(springConfig),
      styles: ticks.map(function (tick) {
        return {
          key: "".concat(tick.key),
          data: tick,
          style: {
            opacity: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(1, springConfig),
            x: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(tick.x, springConfig),
            y: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(tick.y, springConfig),
            rotate: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(tickRotation, springConfig)
          }
        };
      })
    }, function (interpolatedStyles) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, interpolatedStyles.map(function (_ref3, tickIndex) {
        var style = _ref3.style,
            tick = _ref3.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(renderTick, _objectSpread$1({
          tickIndex: tickIndex,
          format: formatValue,
          textBaseline: textBaseline,
          textAnchor: textAlign
        }, tick, style, onClick ? {
          onClick: onClick
        } : {}));
      }));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"], {
      style: {
        x2: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(axis === 'x' ? length : 0, springConfig),
        y2: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(axis === 'x' ? 0 : length, springConfig)
      }
    }, function (values) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", _extends$1({
        style: theme.axis.domain.line,
        x1: 0,
        y1: 0
      }, values));
    }), legendNode);
  });
};
Axis.propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['x', 'y']).isRequired,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  length: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  ticksPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['before', 'after']).isRequired,
  tickValues: axisPropTypes.tickValues,
  tickSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  tickPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  tickRotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  renderTick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  legend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  legendPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['start', 'middle', 'end']).isRequired,
  legendOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Axis.defaultProps = {
  x: 0,
  y: 0,
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  renderTick: defaultTickRenderer,
  legendPosition: 'end',
  legendOffset: 0
};
var Axis$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Axis);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var positions = ['top', 'right', 'bottom', 'left'];
var Axes = function Axes(_ref) {
  var xScale = _ref.xScale,
      yScale = _ref.yScale,
      width = _ref.width,
      height = _ref.height,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var axes = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  return positions.map(function (position) {
    var axis = axes[position];
    if (!axis) return null;
    var isXAxis = position === 'top' || position === 'bottom';
    var ticksPosition = position === 'top' || position === 'left' ? 'before' : 'after';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis$1, _extends$2({
      key: position
    }, axis, {
      axis: isXAxis ? 'x' : 'y',
      x: position === 'right' ? width : 0,
      y: position === 'bottom' ? height : 0,
      scale: isXAxis ? xScale : yScale,
      length: isXAxis ? width : height,
      ticksPosition: ticksPosition
    }));
  });
};
Axes.propTypes = {
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  top: axisPropType,
  right: axisPropType,
  bottom: axisPropType,
  left: axisPropType
};
var Axes$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Axes);

var GridLine = function GridLine(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", props);
};
GridLine.propTypes = {
  x1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  x2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  y2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
GridLine.defaultProps = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0
};
var GridLine$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(GridLine);

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var GridLines = function GridLines(_ref) {
  var type = _ref.type,
      lines = _ref.lines;
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var _useMotionConfig = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_3__["useMotionConfig"])(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.springConfig;
  var lineWillEnter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return function (_ref2) {
      var style = _ref2.style;
      return {
        opacity: 0,
        x1: type === 'x' ? 0 : style.x1.val,
        x2: type === 'x' ? 0 : style.x2.val,
        y1: type === 'y' ? 0 : style.y1.val,
        y2: type === 'y' ? 0 : style.y2.val
      };
    };
  }, [type]);
  var lineWillLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return function (_ref3) {
      var style = _ref3.style;
      return {
        opacity: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(0, springConfig),
        x1: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(style.x1.val, springConfig),
        x2: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(style.x2.val, springConfig),
        y1: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(style.y1.val, springConfig),
        y2: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(style.y2.val, springConfig)
      };
    };
  }, [springConfig]);
  if (!animate) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, lines.map(function (line) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridLine$1, _extends$3({
        key: line.key
      }, line, theme.grid.line));
    }));
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["TransitionMotion"], {
    willEnter: lineWillEnter,
    willLeave: lineWillLeave,
    styles: lines.map(function (line) {
      return {
        key: line.key,
        style: {
          opacity: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(1, springConfig),
          x1: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(line.x1 || 0, springConfig),
          x2: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(line.x2 || 0, springConfig),
          y1: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(line.y1 || 0, springConfig),
          y2: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(line.y2 || 0, springConfig)
        }
      };
    })
  }, function (interpolatedStyles) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, interpolatedStyles.map(function (interpolatedStyle) {
      var key = interpolatedStyle.key,
          style = interpolatedStyle.style;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridLine$1, _extends$3({
        key: key
      }, theme.grid.line, style));
    }));
  });
};
GridLines.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['x', 'y']).isRequired,
  lines: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    x1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    x2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    y1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    y2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired
};
var GridLines$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(GridLines);

var Grid = function Grid(_ref) {
  var width = _ref.width,
      height = _ref.height,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      xValues = _ref.xValues,
      yValues = _ref.yValues;
  var xLines = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!xScale) return false;
    return computeGridLines({
      width: width,
      height: height,
      scale: xScale,
      axis: 'x',
      values: xValues
    });
  }, [xScale, xValues]);
  var yLines = yScale ? computeGridLines({
    width: width,
    height: height,
    scale: yScale,
    axis: 'y',
    values: yValues
  }) : false;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, xLines && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridLines$1, {
    type: "x",
    lines: xLines
  }), yLines && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GridLines$1, {
    type: "y",
    lines: yLines
  }));
};
Grid.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  xValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)]))]),
  yValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)]))])
};
var Grid$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Grid);

var degreesToRadians = function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
};

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }
function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var renderAxisToCanvas = function renderAxisToCanvas(ctx, _ref) {
  var axis = _ref.axis,
      scale = _ref.scale,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y,
      length = _ref.length,
      ticksPosition = _ref.ticksPosition,
      tickValues = _ref.tickValues,
      _ref$tickSize = _ref.tickSize,
      tickSize = _ref$tickSize === void 0 ? 5 : _ref$tickSize,
      _ref$tickPadding = _ref.tickPadding,
      tickPadding = _ref$tickPadding === void 0 ? 5 : _ref$tickPadding,
      _ref$tickRotation = _ref.tickRotation,
      tickRotation = _ref$tickRotation === void 0 ? 0 : _ref$tickRotation,
      format = _ref.format,
      legend = _ref.legend,
      _ref$legendPosition = _ref.legendPosition,
      legendPosition = _ref$legendPosition === void 0 ? 'end' : _ref$legendPosition,
      _ref$legendOffset = _ref.legendOffset,
      legendOffset = _ref$legendOffset === void 0 ? 0 : _ref$legendOffset,
      theme = _ref.theme;
  var _computeCartesianTick = computeCartesianTicks({
    axis: axis,
    scale: scale,
    ticksPosition: ticksPosition,
    tickValues: tickValues,
    tickSize: tickSize,
    tickPadding: tickPadding,
    tickRotation: tickRotation,
    engine: 'canvas'
  }),
      ticks = _computeCartesianTick.ticks,
      textAlign = _computeCartesianTick.textAlign,
      textBaseline = _computeCartesianTick.textBaseline;
  ctx.save();
  ctx.translate(x, y);
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = "".concat(theme.axis.ticks.text.fontSize, "px ").concat(theme.axis.ticks.text.fontFamily);
  if (theme.axis.domain.line.strokeWidth > 0) {
    ctx.lineWidth = theme.axis.domain.line.strokeWidth;
    ctx.lineCap = 'square';
    ctx.strokeStyle = theme.axis.domain.line.stroke;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(axis === 'x' ? length : 0, axis === 'x' ? 0 : length);
    ctx.stroke();
  }
  ticks.forEach(function (tick) {
    if (theme.axis.ticks.line.strokeWidth > 0) {
      ctx.lineWidth = theme.axis.ticks.line.strokeWidth;
      ctx.lineCap = 'square';
      ctx.strokeStyle = theme.axis.ticks.line.stroke;
      ctx.beginPath();
      ctx.moveTo(tick.x, tick.y);
      ctx.lineTo(tick.x + tick.lineX, tick.y + tick.lineY);
      ctx.stroke();
    }
    var value = format !== undefined ? format(tick.value) : tick.value;
    ctx.save();
    ctx.translate(tick.x + tick.textX, tick.y + tick.textY);
    ctx.rotate(degreesToRadians(tickRotation));
    ctx.fillStyle = theme.axis.ticks.text.fill;
    ctx.fillText(value, 0, 0);
    ctx.restore();
  });
  if (legend !== undefined) {
    var legendX = 0;
    var legendY = 0;
    var legendRotation = 0;
    var _textAlign;
    if (axis === 'y') {
      legendRotation = -90;
      legendX = legendOffset;
      if (legendPosition === 'start') {
        _textAlign = 'start';
        legendY = length;
      } else if (legendPosition === 'middle') {
        _textAlign = 'center';
        legendY = length / 2;
      } else if (legendPosition === 'end') {
        _textAlign = 'end';
      }
    } else {
      legendY = legendOffset;
      if (legendPosition === 'start') {
        _textAlign = 'start';
      } else if (legendPosition === 'middle') {
        _textAlign = 'center';
        legendX = length / 2;
      } else if (legendPosition === 'end') {
        _textAlign = 'end';
        legendX = length;
      }
    }
    ctx.translate(legendX, legendY);
    ctx.rotate(degreesToRadians(legendRotation));
    ctx.font = "".concat(theme.axis.legend.text.fontWeight ? "".concat(theme.axis.legend.text.fontWeight, " ") : '').concat(theme.axis.legend.text.fontSize, "px ").concat(theme.axis.legend.text.fontFamily);
    ctx.fillStyle = theme.axis.legend.text.fill;
    ctx.textAlign = _textAlign;
    ctx.textBaseline = 'middle';
    ctx.fillText(legend, 0, 0);
  }
  ctx.restore();
};
var positions$1 = ['top', 'right', 'bottom', 'left'];
var renderAxesToCanvas = function renderAxesToCanvas(ctx, _ref2) {
  var xScale = _ref2.xScale,
      yScale = _ref2.yScale,
      width = _ref2.width,
      height = _ref2.height,
      top = _ref2.top,
      right = _ref2.right,
      bottom = _ref2.bottom,
      left = _ref2.left,
      theme = _ref2.theme;
  var axes = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  positions$1.forEach(function (position) {
    var axis = axes[position];
    if (!axis) return null;
    var isXAxis = position === 'top' || position === 'bottom';
    var ticksPosition = position === 'top' || position === 'left' ? 'before' : 'after';
    var scale = isXAxis ? xScale : yScale;
    var format = getFormatter(axis.format, scale);
    renderAxisToCanvas(ctx, _objectSpread$2({}, axis, {
      axis: isXAxis ? 'x' : 'y',
      x: position === 'right' ? width : 0,
      y: position === 'bottom' ? height : 0,
      scale: scale,
      format: format,
      length: isXAxis ? width : height,
      ticksPosition: ticksPosition,
      theme: theme
    }));
  });
};
var renderGridLinesToCanvas = function renderGridLinesToCanvas(ctx, _ref3) {
  var width = _ref3.width,
      height = _ref3.height,
      scale = _ref3.scale,
      axis = _ref3.axis,
      values = _ref3.values;
  var lines = computeGridLines({
    width: width,
    height: height,
    scale: scale,
    axis: axis,
    values: values
  });
  lines.forEach(function (line) {
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();
  });
};




/***/ }),

/***/ "./node_modules/@nivo/line/dist/nivo-line.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@nivo/line/dist/nivo-line.esm.js ***!
  \*******************************************************/
/*! exports provided: Line, LineCanvas, LineCanvasDefaultProps, LineCanvasPropTypes, LineDefaultProps, LinePropTypes, ResponsiveLine, ResponsiveLineCanvas, useAreaGenerator, useLine, useLineGenerator, useSlices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineCanvas", function() { return LineCanvas$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineCanvasDefaultProps", function() { return LineCanvasDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineCanvasPropTypes", function() { return LineCanvasPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineDefaultProps", function() { return LineDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePropTypes", function() { return LinePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveLine", function() { return ResponsiveLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveLineCanvas", function() { return ResponsiveLineCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAreaGenerator", function() { return useAreaGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLine", function() { return useLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLineGenerator", function() { return useLineGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSlices", function() { return useSlices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/core */ "./node_modules/@nivo/core/dist/nivo-core.esm.js");
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var _nivo_axes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nivo/axes */ "./node_modules/@nivo/axes/dist/nivo-axes.esm.js");
/* harmony import */ var _nivo_legends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nivo/legends */ "./node_modules/@nivo/legends/dist/nivo-legends.esm.js");
/* harmony import */ var _nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nivo/tooltip */ "./node_modules/@nivo/tooltip/dist/nivo-tooltip.esm.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _nivo_scales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nivo/scales */ "./node_modules/@nivo/scales/dist/nivo-scales.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nivo_voronoi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nivo/voronoi */ "./node_modules/@nivo/voronoi/dist/nivo-voronoi.esm.js");












var LinePointTooltip = function LinePointTooltip(_ref) {
  var point = _ref.point;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["BasicTooltip"], {
    id: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "x: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, point.data.xFormatted), ", y:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, point.data.yFormatted)),
    enableChip: true,
    color: point.serieColor
  });
};
LinePointTooltip.propTypes = {
  point: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
var PointTooltip = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LinePointTooltip);

var Chip = function Chip(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      display: 'block',
      width: '12px',
      height: '12px',
      background: color
    }
  });
};
Chip.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};
var SliceTooltip = function SliceTooltip(_ref2) {
  var slice = _ref2.slice,
      axis = _ref2.axis;
  var otherAxis = axis === 'x' ? 'y' : 'x';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["TableTooltip"], {
    rows: slice.points.map(function (point) {
      return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chip, {
        key: "chip",
        color: point.serieColor
      }), point.serieId, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        key: "value"
      }, point.data["".concat(otherAxis, "Formatted")])];
    })
  });
};
SliceTooltip.propTypes = {
  slice: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  axis: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['x', 'y']).isRequired
};
var SliceTooltip$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(SliceTooltip);

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var commonPropTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]).isRequired,
    data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
      x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]),
      y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)])
    })).isRequired
  })).isRequired,
  xScale: _nivo_scales__WEBPACK_IMPORTED_MODULE_7__["scalePropType"].isRequired,
  xFormat: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  yScale: _nivo_scales__WEBPACK_IMPORTED_MODULE_7__["scalePropType"].isRequired,
  yFormat: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  layers: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'slices', 'points', 'mesh', 'legends']), prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func])).isRequired,
  curve: _nivo_core__WEBPACK_IMPORTED_MODULE_1__["lineCurvePropType"].isRequired,
  axisTop: _nivo_axes__WEBPACK_IMPORTED_MODULE_3__["axisPropType"],
  axisRight: _nivo_axes__WEBPACK_IMPORTED_MODULE_3__["axisPropType"],
  axisBottom: _nivo_axes__WEBPACK_IMPORTED_MODULE_3__["axisPropType"],
  axisLeft: _nivo_axes__WEBPACK_IMPORTED_MODULE_3__["axisPropType"],
  enableGridX: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  enableGridY: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  gridXValues: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]))]),
  gridYValues: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]))]),
  enablePoints: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  pointSymbol: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  pointSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  pointColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any.isRequired,
  pointBorderWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  pointBorderColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any.isRequired,
  markers: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    axis: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['x', 'y']).isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]).isRequired,
    style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
  })),
  colors: _nivo_colors__WEBPACK_IMPORTED_MODULE_2__["ordinalColorsPropType"].isRequired,
  enableArea: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  areaOpacity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  areaBlendMode: _nivo_core__WEBPACK_IMPORTED_MODULE_1__["blendModePropType"].isRequired,
  areaBaselineValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]).isRequired,
  lineWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  legends: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape(_nivo_legends__WEBPACK_IMPORTED_MODULE_4__["LegendPropShape"])).isRequired,
  isInteractive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  debugMesh: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]).isRequired,
  tooltipFormat: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  enableSlices: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['x', 'y', false]).isRequired,
  debugSlices: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  sliceTooltip: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]).isRequired,
  enableCrosshair: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  crosshairType: _nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["crosshairPropTypes"].type.isRequired
};
var LinePropTypes = _objectSpread({}, commonPropTypes, {
  enablePointLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  useMesh: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
}, _nivo_core__WEBPACK_IMPORTED_MODULE_1__["motionPropTypes"], _nivo_core__WEBPACK_IMPORTED_MODULE_1__["defsPropTypes"]);
var LineCanvasPropTypes = _objectSpread({
  pixelRatio: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
}, commonPropTypes);
var commonDefaultProps = {
  curve: 'linear',
  xScale: {
    type: 'point'
  },
  yScale: {
    type: 'linear',
    min: 0,
    max: 'auto'
  },
  layers: ['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends'],
  axisBottom: {},
  axisLeft: {},
  enableGridX: true,
  enableGridY: true,
  enablePoints: true,
  pointSize: 6,
  pointColor: {
    from: 'color'
  },
  pointBorderWidth: 0,
  pointBorderColor: {
    theme: 'background'
  },
  colors: {
    scheme: 'nivo'
  },
  enableArea: false,
  areaBaselineValue: 0,
  areaOpacity: 0.2,
  areaBlendMode: 'normal',
  lineWidth: 2,
  legends: [],
  isInteractive: true,
  tooltip: PointTooltip,
  enableSlices: false,
  debugSlices: false,
  sliceTooltip: SliceTooltip$1,
  debugMesh: false,
  enableCrosshair: true,
  crosshairType: 'bottom-left'
};
var LineDefaultProps = _objectSpread({}, commonDefaultProps, {
  enablePointLabel: false,
  useMesh: false,
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
  defs: [],
  fill: []
});
var LineCanvasDefaultProps = _objectSpread({}, commonDefaultProps, {
  pixelRatio: global.window && global.window.devicePixelRatio ? global.window.devicePixelRatio : 1
});

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }
function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
var useLineGenerator = function useLineGenerator(_ref) {
  var curve = _ref.curve;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(d3_shape__WEBPACK_IMPORTED_MODULE_6__["line"])().defined(function (d) {
      return d.x !== null && d.y !== null;
    }).x(function (d) {
      return d.x;
    }).y(function (d) {
      return d.y;
    }).curve(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["curveFromProp"])(curve));
  }, [curve]);
};
var useAreaGenerator = function useAreaGenerator(_ref2) {
  var curve = _ref2.curve,
      yScale = _ref2.yScale,
      areaBaselineValue = _ref2.areaBaselineValue;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(d3_shape__WEBPACK_IMPORTED_MODULE_6__["area"])().defined(function (d) {
      return d.x !== null && d.y !== null;
    }).x(function (d) {
      return d.x;
    }).y1(function (d) {
      return d.y;
    }).curve(Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["curveFromProp"])(curve)).y0(yScale(areaBaselineValue));
  }, [curve, yScale, areaBaselineValue]);
};
var usePoints = function usePoints(_ref3) {
  var series = _ref3.series,
      getPointColor = _ref3.getPointColor,
      getPointBorderColor = _ref3.getPointBorderColor,
      formatX = _ref3.formatX,
      formatY = _ref3.formatY;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return series.reduce(function (acc, serie) {
      return [].concat(_toConsumableArray(acc), _toConsumableArray(serie.data.filter(function (datum) {
        return datum.position.x !== null && datum.position.y !== null;
      }).map(function (datum, i) {
        var point = {
          id: "".concat(serie.id, ".").concat(i),
          index: acc.length + i,
          serieId: serie.id,
          serieColor: serie.color,
          x: datum.position.x,
          y: datum.position.y
        };
        point.color = getPointColor(serie);
        point.borderColor = getPointBorderColor(point);
        point.data = _objectSpread$1({}, datum.data, {
          xFormatted: formatX(datum.data.x),
          yFormatted: formatY(datum.data.y)
        });
        return point;
      })));
    }, []);
  }, [series, getPointColor, getPointBorderColor, formatX, formatY]);
};
var useSlices = function useSlices(_ref4) {
  var enableSlices = _ref4.enableSlices,
      points = _ref4.points,
      width = _ref4.width,
      height = _ref4.height;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (enableSlices === false) return [];
    if (enableSlices === 'x') {
      var map = new Map();
      points.forEach(function (point) {
        if (point.data.x === null || point.data.y === null) return;
        if (!map.has(point.x)) map.set(point.x, [point]);else map.get(point.x).push(point);
      });
      return Array.from(map.entries()).sort(function (a, b) {
        return a[0] - b[0];
      }).map(function (_ref5, i, slices) {
        var _ref6 = _slicedToArray(_ref5, 2),
            x = _ref6[0],
            slicePoints = _ref6[1];
        var prevSlice = slices[i - 1];
        var nextSlice = slices[i + 1];
        var x0;
        if (!prevSlice) x0 = x;else x0 = x - (x - prevSlice[0]) / 2;
        var sliceWidth;
        if (!nextSlice) sliceWidth = width - x0;else sliceWidth = x - x0 + (nextSlice[0] - x) / 2;
        return {
          id: x,
          x0: x0,
          x: x,
          y0: 0,
          y: 0,
          width: sliceWidth,
          height: height,
          points: slicePoints.reverse()
        };
      });
    } else if (enableSlices === 'y') {
      var _map = new Map();
      points.forEach(function (point) {
        if (point.data.x === null || point.data.y === null) return;
        if (!_map.has(point.y)) _map.set(point.y, [point]);else _map.get(point.y).push(point);
      });
      return Array.from(_map.entries()).sort(function (a, b) {
        return a[0] - b[0];
      }).map(function (_ref7, i, slices) {
        var _ref8 = _slicedToArray(_ref7, 2),
            y = _ref8[0],
            slicePoints = _ref8[1];
        var prevSlice = slices[i - 1];
        var nextSlice = slices[i + 1];
        var y0;
        if (!prevSlice) y0 = y;else y0 = y - (y - prevSlice[0]) / 2;
        var sliceHeight;
        if (!nextSlice) sliceHeight = height - y0;else sliceHeight = y - y0 + (nextSlice[0] - y) / 2;
        return {
          id: y,
          x0: 0,
          x: 0,
          y0: y0,
          y: y,
          width: width,
          height: sliceHeight,
          points: slicePoints.reverse()
        };
      });
    }
  }, [enableSlices, points]);
};
var useLine = function useLine(_ref9) {
  var data = _ref9.data,
      _ref9$xScale = _ref9.xScale,
      xScaleSpec = _ref9$xScale === void 0 ? LineDefaultProps.xScale : _ref9$xScale,
      xFormat = _ref9.xFormat,
      _ref9$yScale = _ref9.yScale,
      yScaleSpec = _ref9$yScale === void 0 ? LineDefaultProps.yScale : _ref9$yScale,
      yFormat = _ref9.yFormat,
      width = _ref9.width,
      height = _ref9.height,
      _ref9$colors = _ref9.colors,
      colors = _ref9$colors === void 0 ? LineDefaultProps.colors : _ref9$colors,
      _ref9$curve = _ref9.curve,
      curve = _ref9$curve === void 0 ? LineDefaultProps.curve : _ref9$curve,
      _ref9$areaBaselineVal = _ref9.areaBaselineValue,
      areaBaselineValue = _ref9$areaBaselineVal === void 0 ? LineDefaultProps.areaBaselineValue : _ref9$areaBaselineVal,
      _ref9$pointColor = _ref9.pointColor,
      pointColor = _ref9$pointColor === void 0 ? LineDefaultProps.pointColor : _ref9$pointColor,
      _ref9$pointBorderColo = _ref9.pointBorderColor,
      pointBorderColor = _ref9$pointBorderColo === void 0 ? LineDefaultProps.pointBorderColor : _ref9$pointBorderColo,
      _ref9$enableSlices = _ref9.enableSlices,
      enableSlices = _ref9$enableSlices === void 0 ? LineDefaultProps.enableSlicesTooltip : _ref9$enableSlices;
  var formatX = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useValueFormatter"])(xFormat);
  var formatY = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useValueFormatter"])(yFormat);
  var getColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_2__["useOrdinalColorScale"])(colors, 'id');
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var getPointColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_2__["useInheritedColor"])(pointColor, theme);
  var getPointBorderColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_2__["useInheritedColor"])(pointBorderColor, theme);
  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_nivo_scales__WEBPACK_IMPORTED_MODULE_7__["computeXYScalesForSeries"])(data, xScaleSpec, yScaleSpec, width, height);
  }, [data, xScaleSpec, yScaleSpec, width, height]),
      xScale = _useMemo.xScale,
      yScale = _useMemo.yScale,
      rawSeries = _useMemo.series;
  var series = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return rawSeries.map(function (serie) {
      return _objectSpread$1({}, serie, {
        color: getColor(serie)
      });
    });
  }, [rawSeries, getColor]);
  var points = usePoints({
    series: series,
    getPointColor: getPointColor,
    getPointBorderColor: getPointBorderColor,
    formatX: formatX,
    formatY: formatY
  });
  var slices = useSlices({
    enableSlices: enableSlices,
    points: points,
    width: width,
    height: height
  });
  var lineGenerator = useLineGenerator({
    curve: curve
  });
  var areaGenerator = useAreaGenerator({
    curve: curve,
    yScale: yScale,
    areaBaselineValue: areaBaselineValue
  });
  return {
    lineGenerator: lineGenerator,
    areaGenerator: areaGenerator,
    getColor: getColor,
    series: series,
    xScale: xScale,
    yScale: yScale,
    slices: slices,
    points: points
  };
};

var Areas = function Areas(_ref) {
  var areaGenerator = _ref.areaGenerator,
      areaOpacity = _ref.areaOpacity,
      areaBlendMode = _ref.areaBlendMode,
      lines = _ref.lines;
  var _useMotionConfig = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useMotionConfig"])(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.springConfig;
  if (animate !== true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, lines.slice(0).reverse().map(function (_ref2) {
      var id = _ref2.id,
          data = _ref2.data,
          areaColor = _ref2.color,
          fill = _ref2.fill;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: id,
        d: areaGenerator(data.map(function (d) {
          return d.position;
        })),
        fill: fill ? fill : areaColor,
        fillOpacity: areaOpacity,
        strokeWidth: 0,
        style: {
          mixBlendMode: areaBlendMode
        }
      });
    }));
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, lines.slice(0).reverse().map(function (_ref3) {
    var id = _ref3.id,
        data = _ref3.data,
        areaColor = _ref3.color,
        fill = _ref3.fill;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["SmartMotion"], {
      key: id,
      style: function style(spring) {
        return {
          d: spring(areaGenerator(data.map(function (d) {
            return d.position;
          })), springConfig),
          fill: spring(areaColor, springConfig)
        };
      }
    }, function (style) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        key: id,
        d: style.d,
        fill: fill ? fill : areaColor,
        fillOpacity: areaOpacity,
        strokeWidth: 0,
        style: {
          mixBlendMode: areaBlendMode
        }
      });
    });
  }));
};
Areas.propTypes = {
  areaGenerator: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  areaOpacity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  areaBlendMode: _nivo_core__WEBPACK_IMPORTED_MODULE_1__["blendModePropType"].isRequired,
  lines: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object).isRequired
};
var Areas$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Areas);

var LinesItem = function LinesItem(_ref) {
  var lineGenerator = _ref.lineGenerator,
      id = _ref.id,
      points = _ref.points,
      color = _ref.color,
      thickness = _ref.thickness;
  var _useMotionConfig = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useMotionConfig"])(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.springConfig;
  if (animate !== true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: id,
      d: lineGenerator(points),
      fill: "none",
      strokeWidth: thickness,
      stroke: color
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["SmartMotion"], {
    key: id,
    style: function style(spring) {
      return {
        d: spring(lineGenerator(points), springConfig),
        stroke: spring(color, springConfig)
      };
    }
  }, function (style) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: id,
      d: style.d,
      fill: "none",
      strokeWidth: thickness,
      stroke: style.stroke
    });
  });
};
LinesItem.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]).isRequired,
  points: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]),
    y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number])
  })),
  lineGenerator: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
};
var LinesItem$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LinesItem);

var Lines = function Lines(_ref) {
  var lines = _ref.lines,
      lineGenerator = _ref.lineGenerator,
      lineWidth = _ref.lineWidth;
  return lines.map(function (_ref2) {
    var id = _ref2.id,
        data = _ref2.data,
        color = _ref2.color;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinesItem$1, {
      key: id,
      id: id,
      points: data.map(function (d) {
        return d.position;
      }),
      lineGenerator: lineGenerator,
      color: color,
      thickness: lineWidth
    });
  });
};
Lines.propTypes = {
  lines: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]).isRequired,
    color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
      data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
        x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]),
        y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)])
      }).isRequired,
      position: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
        x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
        y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
      }).isRequired
    })).isRequired
  })).isRequired,
  lineWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  lineGenerator: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
var Lines$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Lines);

var SlicesItem = function SlicesItem(_ref) {
  var slice = _ref.slice,
      axis = _ref.axis,
      debug = _ref.debug,
      tooltip = _ref.tooltip,
      isCurrent = _ref.isCurrent,
      setCurrent = _ref.setCurrent;
  var _useTooltip = Object(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["useTooltip"])(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;
  var handleMouseEnter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    showTooltipFromEvent(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tooltip, {
      slice: slice,
      axis: axis
    }), event, 'right');
    setCurrent(slice);
  }, [showTooltipFromEvent, tooltip, slice]);
  var handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    showTooltipFromEvent(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tooltip, {
      slice: slice,
      axis: axis
    }), event, 'right');
  }, [showTooltipFromEvent, tooltip, slice]);
  var handleMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    hideTooltip();
    setCurrent(null);
  }, [hideTooltip]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: slice.x0,
    y: slice.y0,
    width: slice.width,
    height: slice.height,
    stroke: "red",
    strokeWidth: debug ? 1 : 0,
    strokeOpacity: 0.75,
    fill: "red",
    fillOpacity: isCurrent && debug ? 0.35 : 0,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  });
};
SlicesItem.propTypes = {
  slice: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  axis: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['x', 'y']).isRequired,
  debug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
  isCurrent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  setCurrent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
var SlicesItem$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(SlicesItem);

var Slices = function Slices(_ref) {
  var slices = _ref.slices,
      axis = _ref.axis,
      debug = _ref.debug,
      height = _ref.height,
      tooltip = _ref.tooltip,
      current = _ref.current,
      setCurrent = _ref.setCurrent;
  return slices.map(function (slice) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlicesItem$1, {
      key: slice.id,
      slice: slice,
      axis: axis,
      debug: debug,
      height: height,
      tooltip: tooltip,
      setCurrent: setCurrent,
      isCurrent: current !== null && current.id === slice.id
    });
  });
};
Slices.propTypes = {
  slices: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date)]).isRequired,
    x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
    y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
    points: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object).isRequired
  })).isRequired,
  axis: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['x', 'y']).isRequired,
  debug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]).isRequired,
  current: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  setCurrent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
var Slices$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Slices);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Points = function Points(_ref) {
  var points = _ref.points,
      symbol = _ref.symbol,
      size = _ref.size,
      borderWidth = _ref.borderWidth,
      enableLabel = _ref.enableLabel,
      label = _ref.label,
      labelYOffset = _ref.labelYOffset;
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var _useMotionConfig = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useMotionConfig"])(),
      animate = _useMotionConfig.animate,
      springConfig = _useMotionConfig.springConfig;
  var getLabel = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["getLabelGenerator"])(label);
  var mappedPoints = points.map(function (point) {
    var mappedPoint = {
      id: point.id,
      x: point.x,
      y: point.y,
      datum: point.data,
      fill: point.color,
      stroke: point.borderColor,
      label: enableLabel ? getLabel(point.data) : null
    };
    return mappedPoint;
  });
  if (animate !== true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, mappedPoints.map(function (point) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["DotsItem"], {
        key: point.id,
        x: point.x,
        y: point.y,
        datum: point.datum,
        symbol: symbol,
        size: size,
        color: point.fill,
        borderWidth: borderWidth,
        borderColor: point.stroke,
        label: point.label,
        labelYOffset: labelYOffset,
        theme: theme
      });
    }));
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_9__["TransitionMotion"], {
    styles: mappedPoints.map(function (point) {
      return {
        key: point.id,
        data: point,
        style: {
          x: Object(react_motion__WEBPACK_IMPORTED_MODULE_9__["spring"])(point.x, springConfig),
          y: Object(react_motion__WEBPACK_IMPORTED_MODULE_9__["spring"])(point.y, springConfig),
          size: Object(react_motion__WEBPACK_IMPORTED_MODULE_9__["spring"])(size, springConfig)
        }
      };
    })
  }, function (interpolatedStyles) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, interpolatedStyles.map(function (_ref2) {
      var key = _ref2.key,
          style = _ref2.style,
          point = _ref2.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["DotsItem"], _extends({
        key: key
      }, style, {
        symbol: symbol,
        datum: point.datum,
        color: point.fill,
        borderWidth: borderWidth,
        borderColor: point.stroke,
        label: point.label,
        labelYOffset: labelYOffset,
        theme: theme
      }));
    }));
  });
};
Points.propTypes = {
  points: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  borderWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  enableLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]).isRequired,
  labelYOffset: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
Points.defaultProps = {
  enableLabel: false,
  label: 'yFormatted'
};
var Points$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Points);

var Mesh = function Mesh(_ref) {
  var points = _ref.points,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      setCurrent = _ref.setCurrent,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      debug = _ref.debug;
  var _useTooltip = Object(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["useTooltip"])(),
      showTooltipAt = _useTooltip.showTooltipAt,
      hideTooltip = _useTooltip.hideTooltip;
  var handleMouseEnter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (point, event) {
    showTooltipAt(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tooltip, {
      point: point
    }), [point.x + margin.left, point.y + margin.top], 'top');
    setCurrent(point);
    onMouseEnter && onMouseEnter(point, event);
  }, [setCurrent, showTooltipAt, tooltip, onMouseEnter, margin]);
  var handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (point, event) {
    showTooltipAt(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tooltip, {
      point: point
    }), [point.x + margin.left, point.y + margin.top], 'top');
    setCurrent(point);
    onMouseMove && onMouseMove(point, event);
  }, [setCurrent, showTooltipAt, tooltip, onMouseMove]);
  var handleMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (point, event) {
    hideTooltip();
    setCurrent(null);
    onMouseLeave && onMouseLeave(point, event);
  }, [hideTooltip, setCurrent, onMouseLeave]);
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (point, event) {
    onClick && onClick(point, event);
  }, [onClick]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_voronoi__WEBPACK_IMPORTED_MODULE_10__["Mesh"], {
    nodes: points,
    width: width,
    height: height,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    debug: debug
  });
};
Mesh.propTypes = {
  points: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object).isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  setCurrent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]).isRequired,
  debug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
};
var Mesh$1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Mesh);

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }
function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit$1(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var Line = function Line(props) {
  var data = props.data,
      xScaleSpec = props.xScale,
      xFormat = props.xFormat,
      yScaleSpec = props.yScale,
      yFormat = props.yFormat,
      layers = props.layers,
      curve = props.curve,
      areaBaselineValue = props.areaBaselineValue,
      colors = props.colors,
      partialMargin = props.margin,
      width = props.width,
      height = props.height,
      axisTop = props.axisTop,
      axisRight = props.axisRight,
      axisBottom = props.axisBottom,
      axisLeft = props.axisLeft,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      gridXValues = props.gridXValues,
      gridYValues = props.gridYValues,
      lineWidth = props.lineWidth,
      enableArea = props.enableArea,
      areaOpacity = props.areaOpacity,
      areaBlendMode = props.areaBlendMode,
      enablePoints = props.enablePoints,
      pointSymbol = props.pointSymbol,
      pointSize = props.pointSize,
      pointColor = props.pointColor,
      pointBorderWidth = props.pointBorderWidth,
      pointBorderColor = props.pointBorderColor,
      enablePointLabel = props.enablePointLabel,
      pointLabel = props.pointLabel,
      pointLabelFormat = props.pointLabelFormat,
      pointLabelYOffset = props.pointLabelYOffset,
      defs = props.defs,
      fill = props.fill,
      markers = props.markers,
      legends = props.legends,
      isInteractive = props.isInteractive,
      useMesh = props.useMesh,
      debugMesh = props.debugMesh,
      onMouseEnter = props.onMouseEnter,
      onMouseMove = props.onMouseMove,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      tooltip = props.tooltip,
      enableSlices = props.enableSlices,
      debugSlices = props.debugSlices,
      sliceTooltip = props.sliceTooltip,
      enableCrosshair = props.enableCrosshair,
      crosshairType = props.crosshairType;
  var _useDimensions = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useDimensions"])(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;
  var _useLine = useLine({
    data: data,
    xScale: xScaleSpec,
    xFormat: xFormat,
    yScale: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    colors: colors,
    curve: curve,
    areaBaselineValue: areaBaselineValue,
    pointColor: pointColor,
    pointBorderColor: pointBorderColor,
    enableSlices: enableSlices
  }),
      lineGenerator = _useLine.lineGenerator,
      areaGenerator = _useLine.areaGenerator,
      series = _useLine.series,
      xScale = _useLine.xScale,
      yScale = _useLine.yScale,
      slices = _useLine.slices,
      points = _useLine.points;
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var getPointColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_2__["useInheritedColor"])(pointColor, theme);
  var getPointBorderColor = Object(_nivo_colors__WEBPACK_IMPORTED_MODULE_2__["useInheritedColor"])(pointBorderColor, theme);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray$1(_useState, 2),
      currentPoint = _useState2[0],
      setCurrentPoint = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray$1(_useState3, 2),
      currentSlice = _useState4[0],
      setCurrentSlice = _useState4[1];
  var legendData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return series.map(function (line) {
      return {
        id: line.id,
        label: line.id,
        color: line.color
      };
    }).reverse();
  }, [series]);
  var layerById = {
    grid: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_axes__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      key: "grid",
      theme: theme,
      width: innerWidth,
      height: innerHeight,
      xScale: enableGridX ? xScale : null,
      yScale: enableGridY ? yScale : null,
      xValues: gridXValues,
      yValues: gridYValues
    }),
    markers: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["CartesianMarkers"], {
      key: "markers",
      markers: markers,
      width: innerWidth,
      height: innerHeight,
      xScale: xScale,
      yScale: yScale,
      theme: theme
    }),
    axes: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_axes__WEBPACK_IMPORTED_MODULE_3__["Axes"], {
      key: "axes",
      xScale: xScale,
      yScale: yScale,
      width: innerWidth,
      height: innerHeight,
      theme: theme,
      top: axisTop,
      right: axisRight,
      bottom: axisBottom,
      left: axisLeft
    }),
    areas: null,
    lines: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lines$1, {
      key: "lines",
      lines: series,
      lineGenerator: lineGenerator,
      lineWidth: lineWidth
    }),
    slices: null,
    points: null,
    crosshair: null,
    mesh: null,
    legends: legends.map(function (legend, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_legends__WEBPACK_IMPORTED_MODULE_4__["BoxLegendSvg"], _extends$1({
        key: "legend.".concat(i)
      }, legend, {
        containerWidth: innerWidth,
        containerHeight: innerHeight,
        data: legend.data || legendData,
        theme: theme
      }));
    })
  };
  var boundDefs = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["bindDefs"])(defs, series, fill);
  if (enableArea) {
    layerById.areas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Areas$1, {
      key: "areas",
      areaGenerator: areaGenerator,
      areaOpacity: areaOpacity,
      areaBlendMode: areaBlendMode,
      lines: series
    });
  }
  if (isInteractive && enableSlices !== false) {
    layerById.slices = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slices$1, {
      key: "slices",
      slices: slices,
      axis: enableSlices,
      debug: debugSlices,
      height: innerHeight,
      tooltip: sliceTooltip,
      current: currentSlice,
      setCurrent: setCurrentSlice
    });
  }
  if (enablePoints) {
    layerById.points = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Points$1, {
      key: "points",
      points: points,
      symbol: pointSymbol,
      size: pointSize,
      color: getPointColor,
      borderWidth: pointBorderWidth,
      borderColor: getPointBorderColor,
      enableLabel: enablePointLabel,
      label: pointLabel,
      labelFormat: pointLabelFormat,
      labelYOffset: pointLabelYOffset
    });
  }
  if (isInteractive && enableCrosshair) {
    if (currentPoint !== null) {
      layerById.crosshair = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["Crosshair"], {
        key: "crosshair",
        width: innerWidth,
        height: innerHeight,
        x: currentPoint.x,
        y: currentPoint.y,
        type: crosshairType
      });
    }
    if (currentSlice !== null) {
      layerById.crosshair = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["Crosshair"], {
        key: "crosshair",
        width: innerWidth,
        height: innerHeight,
        x: currentSlice.x,
        y: currentSlice.y,
        type: enableSlices
      });
    }
  }
  if (isInteractive && useMesh && enableSlices === false) {
    layerById.mesh = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mesh$1, {
      key: "mesh",
      points: points,
      width: innerWidth,
      height: innerHeight,
      margin: margin,
      current: currentPoint,
      setCurrent: setCurrentPoint,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      debug: debugMesh
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["SvgWrapper"], {
    defs: boundDefs,
    width: outerWidth,
    height: outerHeight,
    margin: margin
  }, layers.map(function (layer, i) {
    if (typeof layer === 'function') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: i
      }, layer(_objectSpread$2({}, props, {
        innerWidth: innerWidth,
        innerHeight: innerHeight,
        series: series,
        slices: slices,
        points: points,
        xScale: xScale,
        yScale: yScale,
        lineGenerator: lineGenerator,
        areaGenerator: areaGenerator,
        currentPoint: currentPoint,
        setCurrentPoint: setCurrentPoint,
        currentSlice: currentSlice,
        setCurrentSlice: setCurrentSlice
      })));
    }
    return layerById[layer];
  }));
};
Line.propTypes = LinePropTypes;
Line.defaultProps = LineDefaultProps;
var Line$1 = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["withContainer"])(Line);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var ResponsiveLine = function ResponsiveLine(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["ResponsiveWrapper"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line$1, _extends$2({
      width: width,
      height: height
    }, props));
  });
};

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }
function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$2(); }
function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit$2(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }
var LineCanvas = function LineCanvas(_ref) {
  var width = _ref.width,
      height = _ref.height,
      partialMargin = _ref.margin,
      pixelRatio = _ref.pixelRatio,
      data = _ref.data,
      xScaleSpec = _ref.xScale,
      xFormat = _ref.xFormat,
      yScaleSpec = _ref.yScale,
      yFormat = _ref.yFormat,
      curve = _ref.curve,
      layers = _ref.layers,
      colors = _ref.colors,
      lineWidth = _ref.lineWidth,
      enableArea = _ref.enableArea,
      areaBaselineValue = _ref.areaBaselineValue,
      areaOpacity = _ref.areaOpacity,
      enablePoints = _ref.enablePoints,
      pointSize = _ref.pointSize,
      pointColor = _ref.pointColor,
      pointBorderWidth = _ref.pointBorderWidth,
      pointBorderColor = _ref.pointBorderColor,
      enableGridX = _ref.enableGridX,
      gridXValues = _ref.gridXValues,
      enableGridY = _ref.enableGridY,
      gridYValues = _ref.gridYValues,
      axisTop = _ref.axisTop,
      axisRight = _ref.axisRight,
      axisBottom = _ref.axisBottom,
      axisLeft = _ref.axisLeft,
      legends = _ref.legends,
      isInteractive = _ref.isInteractive,
      debugMesh = _ref.debugMesh,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      tooltip = _ref.tooltip;
  var canvasEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var _useDimensions = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useDimensions"])(width, height, partialMargin),
      margin = _useDimensions.margin,
      innerWidth = _useDimensions.innerWidth,
      innerHeight = _useDimensions.innerHeight,
      outerWidth = _useDimensions.outerWidth,
      outerHeight = _useDimensions.outerHeight;
  var theme = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray$2(_useState, 2),
      currentPoint = _useState2[0],
      setCurrentPoint = _useState2[1];
  var _useLine = useLine({
    data: data,
    xScale: xScaleSpec,
    xFormat: xFormat,
    yScale: yScaleSpec,
    yFormat: yFormat,
    width: innerWidth,
    height: innerHeight,
    colors: colors,
    curve: curve,
    areaBaselineValue: areaBaselineValue,
    pointColor: pointColor,
    pointBorderColor: pointBorderColor
  }),
      lineGenerator = _useLine.lineGenerator,
      areaGenerator = _useLine.areaGenerator,
      series = _useLine.series,
      xScale = _useLine.xScale,
      yScale = _useLine.yScale,
      points = _useLine.points;
  var _useVoronoiMesh = Object(_nivo_voronoi__WEBPACK_IMPORTED_MODULE_10__["useVoronoiMesh"])({
    points: points,
    width: innerWidth,
    height: innerHeight,
    debug: debugMesh
  }),
      delaunay = _useVoronoiMesh.delaunay,
      voronoi = _useVoronoiMesh.voronoi;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    canvasEl.current.width = outerWidth * pixelRatio;
    canvasEl.current.height = outerHeight * pixelRatio;
    var ctx = canvasEl.current.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, outerWidth, outerHeight);
    ctx.translate(margin.left, margin.top);
    layers.forEach(function (layer) {
      if (layer === 'grid' && theme.grid.line.strokeWidth > 0) {
        ctx.lineWidth = theme.grid.line.strokeWidth;
        ctx.strokeStyle = theme.grid.line.stroke;
        enableGridX && Object(_nivo_axes__WEBPACK_IMPORTED_MODULE_3__["renderGridLinesToCanvas"])(ctx, {
          width: innerWidth,
          height: innerHeight,
          scale: xScale,
          axis: 'x',
          values: gridXValues
        });
        enableGridY && Object(_nivo_axes__WEBPACK_IMPORTED_MODULE_3__["renderGridLinesToCanvas"])(ctx, {
          width: innerWidth,
          height: innerHeight,
          scale: yScale,
          axis: 'y',
          values: gridYValues
        });
      }
      if (layer === 'axes') {
        Object(_nivo_axes__WEBPACK_IMPORTED_MODULE_3__["renderAxesToCanvas"])(ctx, {
          xScale: xScale,
          yScale: yScale,
          width: innerWidth,
          height: innerHeight,
          top: axisTop,
          right: axisRight,
          bottom: axisBottom,
          left: axisLeft,
          theme: theme
        });
      }
      if (layer === 'areas' && enableArea === true) {
        ctx.save();
        ctx.globalAlpha = areaOpacity;
        areaGenerator.context(ctx);
        series.forEach(function (serie) {
          ctx.fillStyle = serie.color;
          ctx.beginPath();
          areaGenerator(serie.data.map(function (d) {
            return d.position;
          }));
          ctx.fill();
        });
        ctx.restore();
      }
      if (layer === 'lines') {
        lineGenerator.context(ctx);
        series.forEach(function (serie) {
          ctx.strokeStyle = serie.color;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          lineGenerator(serie.data.map(function (d) {
            return d.position;
          }));
          ctx.stroke();
        });
      }
      if (layer === 'points' && enablePoints === true && pointSize > 0) {
        points.forEach(function (point) {
          ctx.fillStyle = point.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, pointSize / 2, 0, 2 * Math.PI);
          ctx.fill();
          if (pointBorderWidth > 0) {
            ctx.strokeStyle = point.borderColor;
            ctx.lineWidth = pointBorderWidth;
            ctx.stroke();
          }
        });
      }
      if (layer === 'mesh' && debugMesh === true) {
        Object(_nivo_voronoi__WEBPACK_IMPORTED_MODULE_10__["renderVoronoiToCanvas"])(ctx, voronoi);
        if (currentPoint) {
          Object(_nivo_voronoi__WEBPACK_IMPORTED_MODULE_10__["renderVoronoiCellToCanvas"])(ctx, voronoi, currentPoint.index);
        }
      }
      if (layer === 'legends') {
        var legendData = series.map(function (serie) {
          return {
            id: serie.id,
            label: serie.id,
            color: serie.color
          };
        }).reverse();
        legends.forEach(function (legend) {
          Object(_nivo_legends__WEBPACK_IMPORTED_MODULE_4__["renderLegendToCanvas"])(ctx, _objectSpread$3({}, legend, {
            data: legend.data || legendData,
            containerWidth: innerWidth,
            containerHeight: innerHeight,
            theme: theme
          }));
        });
      }
    });
  }, [canvasEl, outerWidth, outerHeight, layers, theme, lineGenerator, series, xScale, yScale, enableGridX, gridXValues, enableGridY, gridYValues, axisTop, axisRight, axisBottom, axisLeft, legends, points, enablePoints, pointSize, currentPoint]);
  var getPointFromMouseEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _getRelativeCursor = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["getRelativeCursor"])(canvasEl.current, event),
        _getRelativeCursor2 = _slicedToArray$2(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];
    if (!Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["isCursorInRect"])(margin.left, margin.top, innerWidth, innerHeight, x, y)) return null;
    var pointIndex = delaunay.find(x - margin.left, y - margin.top);
    return points[pointIndex];
  }, [canvasEl, margin, innerWidth, innerHeight, delaunay]);
  var _useTooltip = Object(_nivo_tooltip__WEBPACK_IMPORTED_MODULE_5__["useTooltip"])(),
      showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
      hideTooltip = _useTooltip.hideTooltip;
  var handleMouseHover = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var point = getPointFromMouseEvent(event);
    setCurrentPoint(point);
    if (point) {
      showTooltipFromEvent(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tooltip, {
        point: point
      }), event);
    } else {
      hideTooltip();
    }
  }, [getPointFromMouseEvent, setCurrentPoint, showTooltipFromEvent, hideTooltip, tooltip]);
  var handleMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    hideTooltip();
    setCurrentPoint(null);
    currentPoint && onMouseLeave && onMouseLeave(currentPoint, event);
  }, [hideTooltip, setCurrentPoint, onMouseLeave]);
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (onClick) {
      var point = getPointFromMouseEvent(event);
      point && onClick(point, event);
    }
  }, [getPointFromMouseEvent, onClick]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: canvasEl,
    width: outerWidth * pixelRatio,
    height: outerHeight * pixelRatio,
    style: {
      width: outerWidth,
      height: outerHeight,
      cursor: isInteractive ? 'auto' : 'normal'
    },
    onMouseEnter: isInteractive ? handleMouseHover : undefined,
    onMouseMove: isInteractive ? handleMouseHover : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive ? handleClick : undefined
  });
};
LineCanvas.propTypes = LineCanvasPropTypes;
LineCanvas.defaultProps = LineCanvasDefaultProps;
var LineCanvas$1 = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["withContainer"])(LineCanvas);

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var ResponsiveLineCanvas = function ResponsiveLineCanvas(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["ResponsiveWrapper"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineCanvas$1, _extends$3({
      width: width,
      height: height
    }, props));
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@nivo/scales/dist/nivo-scales.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@nivo/scales/dist/nivo-scales.esm.js ***!
  \***********************************************************/
/*! exports provided: compareDateValues, compareValues, computeAxisSlices, computeScale, computeXSlices, computeXYScalesForSeries, computeYSlices, generateSeriesAxis, generateSeriesXY, getOtherAxis, linearScale, linearScalePropTypes, logScale, logScalePropTypes, pointScale, pointScalePropTypes, scalePropType, stackAxis, stackX, stackY, timeScale, timeScalePropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDateValues", function() { return compareDateValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValues", function() { return compareValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAxisSlices", function() { return computeAxisSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeScale", function() { return computeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeXSlices", function() { return computeXSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeXYScalesForSeries", function() { return computeXYScalesForSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeYSlices", function() { return computeYSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSeriesAxis", function() { return generateSeriesAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSeriesXY", function() { return generateSeriesXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherAxis", function() { return getOtherAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearScale", function() { return linearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearScalePropTypes", function() { return linearScalePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logScale", function() { return logScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logScalePropTypes", function() { return logScalePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointScale", function() { return pointScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointScalePropTypes", function() { return pointScalePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePropType", function() { return scalePropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackAxis", function() { return stackAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackX", function() { return stackX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackY", function() { return stackY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeScale", function() { return timeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeScalePropTypes", function() { return timeScalePropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isDate */ "./node_modules/lodash/isDate.js");
/* harmony import */ var lodash_isDate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isDate__WEBPACK_IMPORTED_MODULE_7__);









var linearScale = function linearScale(_ref, xy, width, height) {
  var axis = _ref.axis,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 'auto' : _ref$max,
      _ref$stacked = _ref.stacked,
      stacked = _ref$stacked === void 0 ? false : _ref$stacked,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  var values = xy[axis];
  var size = axis === 'x' ? width : height;
  var minValue = min;
  if (min === 'auto') {
    minValue = stacked === true ? values.minStacked : values.min;
  }
  var maxValue = max;
  if (max === 'auto') {
    maxValue = stacked === true ? values.maxStacked : values.max;
  }
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound(axis === 'x' ? [0, size] : [size, 0]);
  if (reverse === true) scale.domain([maxValue, minValue]);else scale.domain([minValue, maxValue]);
  scale.type = 'linear';
  scale.stacked = stacked;
  return scale;
};
var linearScalePropTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['linear']).isRequired,
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  stacked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};

var logScale = function logScale(_ref, xy, width, height) {
  var axis = _ref.axis,
      _ref$base = _ref.base,
      base = _ref$base === void 0 ? 10 : _ref$base,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 'auto' : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 'auto' : _ref$max;
  var values = xy[axis];
  var size = axis === 'x' ? width : height;
  var hasZero = values.all.some(function (v) {
    return v === 0;
  });
  var sign;
  var hasMixedSign = false;
  values.all.forEach(function (v) {
    if (hasMixedSign === true) return;
    if (sign === undefined) {
      sign = Math.sign(v);
    } else if (Math.sign(v) !== sign) {
      hasMixedSign = true;
    }
  });
  if (hasZero || hasMixedSign) {
    throw new Error(["a log scale domain must be strictly-positive or strictly-negative,", "and must not include or cross zero."].join('\n'));
  }
  var minValue = min;
  if (min === 'auto') {
    minValue = values.min;
  }
  var maxValue = max;
  if (max === 'auto') {
    maxValue = values.max;
  }
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().domain([minValue, maxValue]).rangeRound(axis === 'x' ? [0, size] : [size, 0]).base(base).nice();
  scale.type = 'log';
  return scale;
};
var logScalePropTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['log']).isRequired,
  base: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])
};

var pointScale = function pointScale(_ref, xy, width, height) {
  var axis = _ref.axis;
  var values = xy[axis];
  var size = axis === 'x' ? width : height;
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scalePoint"])().range([0, size]).domain(values.all);
  scale.type = 'point';
  return scale;
};
var pointScalePropTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['point']).isRequired
};

var _precisionCutOffsByTy;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TIME_PRECISION_MILLISECOND = 'millisecond';
var TIME_PRECISION_SECOND = 'second';
var TIME_PRECISION_MINUTE = 'minute';
var TIME_PRECISION_HOUR = 'hour';
var TIME_PRECISION_DAY = 'day';
var TIME_PRECISION_MONTH = 'month';
var TIME_PRECISION_YEAR = 'year';
var timePrecisions = [TIME_PRECISION_MILLISECOND, TIME_PRECISION_SECOND, TIME_PRECISION_MINUTE, TIME_PRECISION_HOUR, TIME_PRECISION_DAY, TIME_PRECISION_MONTH, TIME_PRECISION_YEAR];
var precisionCutOffs = [function (date) {
  return date.setMilliseconds(0);
}, function (date) {
  return date.setSeconds(0);
}, function (date) {
  return date.setMinutes(0);
}, function (date) {
  return date.setHours(0);
}, function (date) {
  return date.setDate(1);
}, function (date) {
  return date.setMonth(0);
}];
var precisionCutOffsByType = (_precisionCutOffsByTy = {}, _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_MILLISECOND, []), _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_SECOND, precisionCutOffs.slice(0, 1)), _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_MINUTE, precisionCutOffs.slice(0, 2)), _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_HOUR, precisionCutOffs.slice(0, 3)), _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_DAY, precisionCutOffs.slice(0, 4)), _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_MONTH, precisionCutOffs.slice(0, 5)), _defineProperty(_precisionCutOffsByTy, TIME_PRECISION_YEAR, precisionCutOffs.slice(0, 6)), _precisionCutOffsByTy);
var createPrecisionMethod = function createPrecisionMethod(precision) {
  return function (date) {
    precisionCutOffsByType[precision].forEach(function (cutOff) {
      cutOff(date);
    });
    return date;
  };
};
var createDateNormalizer = function createDateNormalizer(_ref) {
  var _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'native' : _ref$format,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 'millisecond' : _ref$precision,
      _ref$useUTC = _ref.useUTC,
      useUTC = _ref$useUTC === void 0 ? true : _ref$useUTC;
  var precisionFn = createPrecisionMethod(precision);
  if (format === 'native') return function (v) {
    return precisionFn(v);
  };
  var parseTime = useUTC ? Object(d3_time_format__WEBPACK_IMPORTED_MODULE_2__["utcParse"])(format) : Object(d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeParse"])(format);
  return function (v) {
    return precisionFn(parseTime(v));
  };
};

var timeScale = function timeScale(_ref, xy, width, height) {
  var axis = _ref.axis,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'native' : _ref$format,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? TIME_PRECISION_MILLISECOND : _ref$precision,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 'auto' : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 'auto' : _ref$max,
      _ref$useUTC = _ref.useUTC,
      useUTC = _ref$useUTC === void 0 ? true : _ref$useUTC;
  var values = xy[axis];
  var size = axis === 'x' ? width : height;
  var normalize = createDateNormalizer({
    format: format,
    precision: precision,
    useUTC: useUTC
  });
  var minValue = min;
  if (min === 'auto') {
    minValue = values.min;
  } else if (format !== 'native') {
    minValue = normalize(min);
  }
  var maxValue = max;
  if (max === 'auto') {
    maxValue = values.max;
  } else if (format !== 'native') {
    maxValue = normalize(max);
  }
  var scale = useUTC ? Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleUtc"])() : Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleTime"])();
  scale.domain([minValue, maxValue]).range([0, size]);
  scale.type = 'time';
  scale.useUTC = useUTC;
  return scale;
};
var timeScalePropTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['time']).isRequired,
  format: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(timePrecisions)
};

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }
function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var getOtherAxis = function getOtherAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
};
var compareValues = function compareValues(a, b) {
  return a === b;
};
var compareDateValues = function compareDateValues(a, b) {
  return a.getTime() === b.getTime();
};
var computeXYScalesForSeries = function computeXYScalesForSeries(_series, xScaleSpec, yScaleSpec, width, height) {
  var series = _series.map(function (serie) {
    return _objectSpread({}, serie, {
      data: serie.data.map(function (d) {
        return {
          data: _objectSpread({}, d)
        };
      })
    });
  });
  var xy = generateSeriesXY(series, xScaleSpec, yScaleSpec);
  if (xScaleSpec.stacked === true) {
    stackX(yScaleSpec.type, xy, series);
  }
  if (yScaleSpec.stacked === true) {
    stackY(xScaleSpec.type, xy, series);
  }
  var xScale = computeScale(_objectSpread({}, xScaleSpec, {
    axis: 'x'
  }), xy, width, height);
  var yScale = computeScale(_objectSpread({}, yScaleSpec, {
    axis: 'y'
  }), xy, width, height);
  series.forEach(function (serie) {
    serie.data.forEach(function (d) {
      d.position = {
        x: xScale.stacked === true ? d.data.xStacked === null ? null : xScale(d.data.xStacked) : d.data.x === null ? null : xScale(d.data.x),
        y: yScale.stacked === true ? d.data.yStacked === null ? null : yScale(d.data.yStacked) : d.data.y === null ? null : yScale(d.data.y)
      };
    });
  });
  return _objectSpread({}, xy, {
    series: series,
    xScale: xScale,
    yScale: yScale
  });
};
var computeScale = function computeScale(spec, xy, width, height) {
  if (spec.type === 'linear') return linearScale(spec, xy, width, height);else if (spec.type === 'point') return pointScale(spec, xy, width, height);else if (spec.type === 'time') return timeScale(spec, xy, width, height);else if (spec.type === 'log') return logScale(spec, xy, width, height);
};
var generateSeriesXY = function generateSeriesXY(series, xScaleSpec, yScaleSpec) {
  return {
    x: generateSeriesAxis(series, 'x', xScaleSpec),
    y: generateSeriesAxis(series, 'y', yScaleSpec)
  };
};
var generateSeriesAxis = function generateSeriesAxis(series, axis, scaleSpec) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function (d) {
    return d.data[axis];
  } : _ref$getValue,
      _ref$setValue = _ref.setValue,
      setValue = _ref$setValue === void 0 ? function (d, v) {
    d.data[axis] = v;
  } : _ref$setValue;
  if (scaleSpec.type === 'linear') {
    series.forEach(function (serie) {
      serie.data.forEach(function (d) {
        setValue(d, getValue(d) === null ? null : parseFloat(getValue(d)));
      });
    });
  } else if (scaleSpec.type === 'time' && scaleSpec.format !== 'native') {
    var parseTime = createDateNormalizer(scaleSpec);
    series.forEach(function (serie) {
      serie.data.forEach(function (d) {
        setValue(d, getValue(d) === null ? null : parseTime(getValue(d)));
      });
    });
  }
  var all = [];
  series.forEach(function (serie) {
    serie.data.forEach(function (d) {
      all.push(getValue(d));
    });
  });
  var min, max;
  if (scaleSpec.type === 'linear') {
    all = lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default()(all);
    all = lodash_sortBy__WEBPACK_IMPORTED_MODULE_5___default()(all, function (v) {
      return v;
    });
    min = Math.min.apply(Math, _toConsumableArray(all));
    max = Math.max.apply(Math, _toConsumableArray(all));
  } else if (scaleSpec.type === 'time') {
    all = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4___default()(all, function (v) {
      return v.getTime();
    });
    all = all.slice(0).sort(function (a, b) {
      return b - a;
    }).reverse();
    min = all[0];
    max = lodash_last__WEBPACK_IMPORTED_MODULE_6___default()(all);
  } else {
    all = lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default()(all);
    min = all[0];
    max = lodash_last__WEBPACK_IMPORTED_MODULE_6___default()(all);
  }
  return {
    all: all,
    min: min,
    max: max
  };
};
var stackAxis = function stackAxis(axis, otherType, xy, series) {
  var otherAxis = getOtherAxis(axis);
  var all = [];
  xy[otherAxis].all.forEach(function (v) {
    var compare = lodash_isDate__WEBPACK_IMPORTED_MODULE_7___default()(v) ? compareDateValues : compareValues;
    var stack = [];
    series.forEach(function (serie) {
      var datum = serie.data.find(function (d) {
        return compare(d.data[otherAxis], v);
      });
      var value = null;
      var stackValue = null;
      if (datum !== undefined) {
        value = datum.data[axis];
        if (value !== null) {
          var head = lodash_last__WEBPACK_IMPORTED_MODULE_6___default()(stack);
          if (head === undefined) {
            stackValue = value;
          } else if (head !== null) {
            stackValue = head + value;
          }
        }
        datum.data["".concat(axis, "Stacked")] = stackValue;
      }
      stack.push(stackValue);
      all.push(stackValue);
    });
  });
  all = all.filter(function (v) {
    return v !== null;
  });
  xy[axis].minStacked = Math.min.apply(Math, _toConsumableArray(all));
  xy[axis].maxStacked = Math.max.apply(Math, _toConsumableArray(all));
};
var stackX = function stackX(xy, otherType, series) {
  return stackAxis('x', xy, otherType, series);
};
var stackY = function stackY(xy, otherType, series) {
  return stackAxis('y', xy, otherType, series);
};
var computeAxisSlices = function computeAxisSlices(axis, data) {
  var otherAxis = getOtherAxis(axis);
  return data[otherAxis].all.map(function (v) {
    var _slice;
    var slice = (_slice = {
      id: v
    }, _defineProperty$1(_slice, otherAxis, data["".concat(otherAxis, "Scale")](v)), _defineProperty$1(_slice, "data", []), _slice);
    var compare = lodash_isDate__WEBPACK_IMPORTED_MODULE_7___default()(v) ? compareDateValues : compareValues;
    data.series.forEach(function (serie) {
      var datum = serie.data.find(function (d) {
        return compare(d.data[otherAxis], v);
      });
      if (datum !== undefined) {
        slice.data.push(_objectSpread({}, datum, {
          serie: serie
        }));
      }
    });
    slice.data.reverse();
    return slice;
  });
};
var computeXSlices = function computeXSlices(data) {
  return computeAxisSlices('x', data);
};
var computeYSlices = function computeYSlices(data) {
  return computeAxisSlices('y', data);
};

var scalePropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(linearScalePropTypes), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(pointScalePropTypes), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(timeScalePropTypes), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(logScalePropTypes)]);




/***/ }),

/***/ "./node_modules/@nivo/voronoi/dist/nivo-voronoi.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@nivo/voronoi/dist/nivo-voronoi.esm.js ***!
  \*************************************************************/
/*! exports provided: Mesh, ResponsiveVoronoi, Voronoi, VoronoiDefaultProps, VoronoiPropTypes, computeMesh, computeMeshPoints, renderVoronoiCellToCanvas, renderVoronoiToCanvas, useVoronoiMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveVoronoi", function() { return ResponsiveVoronoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voronoi", function() { return Voronoi$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoronoiDefaultProps", function() { return VoronoiDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoronoiPropTypes", function() { return VoronoiPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMesh", function() { return computeMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMeshPoints", function() { return computeMeshPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderVoronoiCellToCanvas", function() { return renderVoronoiCellToCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderVoronoiToCanvas", function() { return renderVoronoiToCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVoronoiMesh", function() { return useVoronoiMesh; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/core */ "./node_modules/@nivo/core/dist/nivo-core.esm.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_delaunay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-delaunay */ "./node_modules/d3-delaunay/src/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose_defaultProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose/defaultProps */ "./node_modules/recompose/defaultProps.js");
/* harmony import */ var recompose_defaultProps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose_defaultProps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose/withPropsOnChange */ "./node_modules/recompose/withPropsOnChange.js");
/* harmony import */ var recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js");
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose_pure__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);










var VoronoiPropTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]).isRequired,
    x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
    y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
  })).isRequired,
  xDomain: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number).isRequired,
  yDomain: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number).isRequired,
  layers: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['links', 'cells', 'points', 'bounds']), prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func])).isRequired,
  enableLinks: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  linkLineWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  linkLineColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  enableCells: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  cellLineWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  cellLineColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  enablePoints: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  pointSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  pointColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  delaunay: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  voronoi: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
var VoronoiDefaultProps = {
  xDomain: [0, 1],
  yDomain: [0, 1],
  layers: ['links', 'cells', 'points', 'bounds'],
  enableLinks: false,
  linkLineWidth: 1,
  linkLineColor: '#bbb',
  enableCells: true,
  cellLineWidth: 2,
  cellLineColor: '#000',
  enablePoints: true,
  pointSize: 4,
  pointColor: '#666'
};

var enhance = (function (Component) {
  return recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(recompose_defaultProps__WEBPACK_IMPORTED_MODULE_5___default()(VoronoiDefaultProps), Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(), Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["withDimensions"])(), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_6___default()(['xDomain', 'yDomain', 'width', 'height'], function (_ref) {
    var xDomain = _ref.xDomain,
        yDomain = _ref.yDomain,
        width = _ref.width,
        height = _ref.height;
    return {
      xScale: Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().domain(xDomain).range([0, width]),
      yScale: Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().domain(yDomain).range([0, height])
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_6___default()(['data', 'xScale', 'yScale'], function (_ref2) {
    var data = _ref2.data,
        xScale = _ref2.xScale,
        yScale = _ref2.yScale;
    return {
      scaledPoints: data.map(function (d) {
        return {
          data: d,
          x: xScale(d.x),
          y: yScale(d.y)
        };
      })
    };
  }), recompose_withPropsOnChange__WEBPACK_IMPORTED_MODULE_6___default()(['scaledPoints', 'width', 'height'], function (_ref3) {
    var scaledPoints = _ref3.scaledPoints,
        width = _ref3.width,
        height = _ref3.height;
    var delaunay = d3_delaunay__WEBPACK_IMPORTED_MODULE_3__["Delaunay"].from(scaledPoints.map(function (p) {
      return [p.x, p.y];
    }));
    var voronoi = delaunay.voronoi([0, 0, width, height]);
    return {
      delaunay: delaunay,
      voronoi: voronoi
    };
  }), recompose_pure__WEBPACK_IMPORTED_MODULE_7___default.a)(Component);
});

var Voronoi = function Voronoi(_ref) {
  var delaunay = _ref.delaunay,
      voronoi = _ref.voronoi,
      data = _ref.data,
      layers = _ref.layers,
      margin = _ref.margin,
      width = _ref.width,
      height = _ref.height,
      outerWidth = _ref.outerWidth,
      outerHeight = _ref.outerHeight,
      enableLinks = _ref.enableLinks,
      linkLineWidth = _ref.linkLineWidth,
      linkLineColor = _ref.linkLineColor,
      enableCells = _ref.enableCells,
      cellLineWidth = _ref.cellLineWidth,
      cellLineColor = _ref.cellLineColor,
      enablePoints = _ref.enablePoints,
      pointSize = _ref.pointSize,
      pointColor = _ref.pointColor,
      theme = _ref.theme;
  var context = {
    width: width,
    height: height,
    data: data,
    delaunay: delaunay,
    voronoi: voronoi
  };
  var layerById = {
    bounds: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: "bounds",
      fill: "none",
      stroke: cellLineColor,
      strokeWidth: cellLineWidth,
      d: voronoi.renderBounds()
    })
  };
  if (enableLinks === true) {
    layerById.links = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: "links",
      stroke: linkLineColor,
      strokeWidth: linkLineWidth,
      fill: "none",
      d: delaunay.render()
    });
  }
  if (enableCells === true) {
    layerById.cells = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: "cells",
      d: voronoi.render(),
      fill: "none",
      stroke: cellLineColor,
      strokeWidth: cellLineWidth
    });
  }
  if (enablePoints === true) {
    layerById.points = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      key: "points",
      stroke: "none",
      fill: pointColor,
      d: delaunay.renderPoints(undefined, pointSize / 2)
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isInteractive: false,
    theme: theme,
    animate: false
  }, function () {
    return (
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["SvgWrapper"], {
        width: outerWidth,
        height: outerHeight,
        margin: margin,
        theme: theme
      }, layers.map(function (layer, i) {
        if (typeof layer === 'function') {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            key: i
          }, layer(context));
        }
        return layerById[layer];
      }))
    );
  });
};
Voronoi.propTypes = VoronoiPropTypes;
var Voronoi$1 = enhance(Voronoi);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ResponsiveVoronoi = function ResponsiveVoronoi(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["ResponsiveWrapper"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Voronoi$1, _extends({
      width: width,
      height: height
    }, props));
  });
};

var getAccessor = function getAccessor(directive) {
  return typeof directive === 'function' ? directive : function (d) {
    return d[directive];
  };
};
var computeMeshPoints = function computeMeshPoints(_ref) {
  var points = _ref.points,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 'x' : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 'y' : _ref$y;
  var getX = getAccessor(x);
  var getY = getAccessor(y);
  return points.map(function (p) {
    return [getX(p), getY(p)];
  });
};
var computeMesh = function computeMesh(_ref2) {
  var points = _ref2.points,
      width = _ref2.width,
      height = _ref2.height,
      debug = _ref2.debug;
  var delaunay = d3_delaunay__WEBPACK_IMPORTED_MODULE_3__["Delaunay"].from(points);
  var voronoi = debug === true ? delaunay.voronoi([0, 0, width, height]) : undefined;
  return {
    delaunay: delaunay,
    voronoi: voronoi
  };
};

var useVoronoiMesh = function useVoronoiMesh(_ref) {
  var points = _ref.points,
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      debug = _ref.debug;
  var points2d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return computeMeshPoints({
      points: points,
      x: x,
      y: y
    });
  }, [points, x, y]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return computeMesh({
      points: points2d,
      width: width,
      height: height,
      debug: debug
    });
  }, [points2d, width, height, debug]);
};

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Mesh = function Mesh(_ref) {
  var nodes = _ref.nodes,
      width = _ref.width,
      height = _ref.height,
      x = _ref.x,
      y = _ref.y,
      debug = _ref.debug,
      onMouseEnter = _ref.onMouseEnter,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick;
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];
  var _useVoronoiMesh = useVoronoiMesh({
    points: nodes,
    x: x,
    y: y,
    width: width,
    height: height,
    debug: debug
  }),
      delaunay = _useVoronoiMesh.delaunay,
      voronoi = _useVoronoiMesh.voronoi;
  var voronoiPath = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return debug ? voronoi.render() : undefined;
  });
  var getIndexAndNodeFromEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _getRelativeCursor = Object(_nivo_core__WEBPACK_IMPORTED_MODULE_1__["getRelativeCursor"])(elementRef.current, event),
        _getRelativeCursor2 = _slicedToArray(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];
    var index = delaunay.find(x, y);
    return [index, index !== undefined ? nodes[index] : null];
  }, [delaunay]);
  var handleMouseEnter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _getIndexAndNodeFromE = getIndexAndNodeFromEvent(event),
        _getIndexAndNodeFromE2 = _slicedToArray(_getIndexAndNodeFromE, 2),
        index = _getIndexAndNodeFromE2[0],
        node = _getIndexAndNodeFromE2[1];
    if (currentIndex !== index) setCurrentIndex(index);
    node && onMouseEnter && onMouseEnter(node, event);
  }, [getIndexAndNodeFromEvent, setCurrentIndex]);
  var handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _getIndexAndNodeFromE3 = getIndexAndNodeFromEvent(event),
        _getIndexAndNodeFromE4 = _slicedToArray(_getIndexAndNodeFromE3, 2),
        index = _getIndexAndNodeFromE4[0],
        node = _getIndexAndNodeFromE4[1];
    if (currentIndex !== index) setCurrentIndex(index);
    node && onMouseMove && onMouseMove(node, event);
  }, [getIndexAndNodeFromEvent, setCurrentIndex]);
  var handleMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    setCurrentIndex(null);
    if (onMouseLeave) {
      var previousNode;
      if (currentIndex !== undefined && currentIndex !== null) {
        previousNode = nodes[currentIndex];
      }
      previousNode && onMouseLeave(previousNode, event);
    }
  }, [setCurrentIndex, currentIndex, nodes]);
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _getIndexAndNodeFromE5 = getIndexAndNodeFromEvent(event),
        _getIndexAndNodeFromE6 = _slicedToArray(_getIndexAndNodeFromE5, 2),
        index = _getIndexAndNodeFromE6[0],
        node = _getIndexAndNodeFromE6[1];
    if (currentIndex !== index) setCurrentIndex(index);
    onClick && onClick(node, event);
  }, [getIndexAndNodeFromEvent, setCurrentIndex]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    ref: elementRef
  }, debug && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: voronoiPath,
    stroke: "red",
    strokeWidth: 1,
    opacity: 0.75
  }), currentIndex !== null && debug && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "red",
    opacity: 0.35,
    d: voronoi.renderCell(currentIndex)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: width,
    height: height,
    fill: "red",
    opacity: 0,
    style: {
      cursor: 'auto'
    },
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }));
};
Mesh.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  nodes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]).isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]).isRequired,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  debug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
};
Mesh.defaultProps = {
  x: 'x',
  y: 'y',
  debug: false
};

var renderVoronoiToCanvas = function renderVoronoiToCanvas(ctx, voronoi) {
  ctx.save();
  ctx.globalAlpha = 0.75;
  ctx.beginPath();
  voronoi.render(ctx);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
};
var renderVoronoiCellToCanvas = function renderVoronoiCellToCanvas(ctx, voronoi, index) {
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  voronoi.renderCell(index, ctx);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.restore();
};




/***/ }),

/***/ "./node_modules/d3-delaunay/src/delaunay.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-delaunay/src/delaunay.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delaunay; });
/* harmony import */ var delaunator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delaunator */ "./node_modules/delaunator/index.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-delaunay/src/path.js");
/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polygon.js */ "./node_modules/d3-delaunay/src/polygon.js");
/* harmony import */ var _voronoi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voronoi.js */ "./node_modules/d3-delaunay/src/voronoi.js");





const tau = 2 * Math.PI, pow = Math.pow;

function pointX(p) {
  return p[0];
}

function pointY(p) {
  return p[1];
}

// A triangulation is collinear if all its triangles have a non-null area
function collinear(d) {
  const {triangles, coords} = d;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = 2 * triangles[i],
          b = 2 * triangles[i + 1],
          c = 2 * triangles[i + 2],
          cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1])
                - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}

function jitter(x, y, r) {
  return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
}

class Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay("length" in points
        ? flatArray(points, fx, fy, that)
        : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new delaunator__WEBPACK_IMPORTED_MODULE_0__["default"](points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator, points = this.points;

    // check for collinear
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({length: points.length/2}, (_,i) => i)
        .sort((i, j) => points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]); // for exact neighbors
      const e = this.collinear[0], f = this.collinear[this.collinear.length - 1],
        bounds = [ points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1] ],
        r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const p = jitter(points[2 * i], points[2 * i + 1], r);
        points[2 * i] = p[0];
        points[2 * i + 1] = p[1];
      }
      this._delaunator = new delaunator__WEBPACK_IMPORTED_MODULE_0__["default"](points);
    } else {
      delete this.collinear;
    }

    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);

    // Compute an index from each point to an (arbitrary) incoming halfedge
    // Used to give the first neighbor of each point; for this reason,
    // on the hull we give priority to exterior halfedges
    for (let e = 0, n = halfedges.length; e < n; ++e) {
      const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
      if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
    }
    for (let i = 0, n = hull.length; i < n; ++i) {
      hullIndex[hull[i]] = i;
    }

    // degenerate case: 1 or 2 (distinct) points
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      this.triangles[1] = hull[1];
      this.triangles[2] = hull[1];
      inedges[hull[0]] = 1;
      if (hull.length === 2) inedges[hull[1]] = 0;
    }
  }
  voronoi(bounds) {
    return new _voronoi_js__WEBPACK_IMPORTED_MODULE_3__["default"](this, bounds);
  }
  *neighbors(i) {
    const {inedges, hull, _hullIndex, halfedges, triangles, collinear} = this;

    // degenerate case with several collinear points
    if (collinear) {
      const l = collinear.indexOf(i);
      if (l > 0) yield collinear[l - 1];
      if (l < collinear.length - 1) yield collinear[l + 1];
      return;
    }

    const e0 = inedges[i];
    if (e0 === -1) return; // coincident point
    let e = e0, p0 = -1;
    do {
      yield p0 = triangles[e];
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) return; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        const p = hull[(_hullIndex[i] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e !== e0);
  }
  find(x, y, i = 0) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
    const i0 = i;
    let c;
    while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
    return c;
  }
  _step(i, x, y) {
    const {inedges, hull, _hullIndex, halfedges, triangles, points} = this;
    if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
    let c = i;
    let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
    const e0 = inedges[i];
    let e = e0;
    do {
      let t = triangles[e];
      const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
      if (dt < dc) dc = dt, c = t;
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        e = hull[(_hullIndex[i] + 1) % hull.length];
        if (e !== t) {
          if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc) return e;
        }
        break;
      }
    } while (e !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {points, halfedges, triangles} = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = triangles[i] * 2;
      const tj = triangles[j] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r = 2) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {points} = this;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x = points[i], y = points[i + 1];
      context.moveTo(x + r, y);
      context.arc(x, y, r, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {hull, points} = this;
    const h = hull[0] * 2, n = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i = 1; i < n; ++i) {
      const h = 2 * hull[i];
      context.lineTo(points[h], points[h + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i, context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {points, triangles} = this;
    const t0 = triangles[i *= 3] * 2;
    const t1 = triangles[i + 1] * 2;
    const t2 = triangles[i + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const {triangles} = this;
    for (let i = 0, n = triangles.length / 3; i < n; ++i) {
      yield this.trianglePolygon(i);
    }
  }
  trianglePolygon(i) {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.renderTriangle(i, polygon);
    return polygon.value();
  }
}

function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array[i * 2] = fx.call(that, p, i, points);
    array[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array;
}

function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-delaunay/src/index.js ***!
  \***********************************************/
/*! exports provided: Delaunay, Voronoi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delaunay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delaunay.js */ "./node_modules/d3-delaunay/src/delaunay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delaunay", function() { return _delaunay_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _voronoi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voronoi.js */ "./node_modules/d3-delaunay/src/voronoi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Voronoi", function() { return _voronoi_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./node_modules/d3-delaunay/src/path.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-delaunay/src/path.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
const epsilon = 1e-6;

class Path {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }
  moveTo(x, y) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x, y) {
    this._ += `L${this._x1 = +x},${this._y1 = +y}`;
  }
  arc(x, y, r) {
    x = +x, y = +y, r = +r;
    const x0 = x + r;
    const y0 = y;
    if (r < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
    if (!r) return;
    this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x, y, w, h) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
  }
  value() {
    return this._ || null;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/polygon.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-delaunay/src/polygon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x, y) {
    this._.push([x, y]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x, y) {
    this._.push([x, y]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/voronoi.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-delaunay/src/voronoi.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Voronoi; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-delaunay/src/path.js");
/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polygon.js */ "./node_modules/d3-delaunay/src/polygon.js");



class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const {delaunay: {points, hull, triangles}, vectors} = this;

    // Compute circumcenters.
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2) {
      const t1 = triangles[i] * 2;
      const t2 = triangles[i + 1] * 2;
      const t3 = triangles[i + 2] * 2;
      const x1 = points[t1];
      const y1 = points[t1 + 1];
      const x2 = points[t2];
      const y2 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];

      const dx = x2 - x1;
      const dy = y2 - y1;
      const ex = x3 - x1;
      const ey = y3 - y1;
      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const ab = (dx * ey - dy * ex) * 2;

      if (!ab) {
        // degenerate case (collinear diagram)
        x = (x1 + x3) / 2 - 1e8 * ey;
        y = (y1 + y3) / 2 + 1e8 * ex;
      }
      else if (Math.abs(ab) < 1e-8) {
        // almost equal points (degenerate triangle)
        x = (x1 + x3) / 2;
        y = (y1 + y3) / 2;
      } else {
        const d = 1 / ab;
        x = x1 + (ey * bl - dy * cl) * d;
        y = y1 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j] = x;
      circumcenters[j + 1] = y;
    }

    // Compute exterior cell rays.
    let h = hull[hull.length - 1];
    let p0, p1 = h * 4;
    let x0, x1 = points[2 * h];
    let y0, y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i = 0; i < hull.length; ++i) {
      h = hull[i];
      p0 = p1, x0 = x1, y0 = y1;
      p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    const {delaunay: {halfedges, inedges, hull}, circumcenters, vectors} = this;
    if (hull.length <= 1) return null;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = Math.floor(i / 3) * 2;
      const tj = Math.floor(j / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i = 0; i < hull.length; ++i) {
      h0 = h1, h1 = hull[i];
      const t = Math.floor(inedges[h1] / 3) * 2;
      const x = circumcenters[t];
      const y = circumcenters[t + 1];
      const v = h0 * 4;
      const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
      if (p) this._renderSegment(x, y, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i, context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    const points = this._clip(i);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n = points.length;
    while (points[0] === points[n-2] && points[1] === points[n-1] && n > 1) n -= 2;
    for (let i = 2; i < n; i += 2) {
      if (points[i] !== points[i-2] || points[i+1] !== points[i-1])
        context.lineTo(points[i], points[i + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const {delaunay: {points}} = this;
    for (let i = 0, n = points.length / 2; i < n; ++i) {
      const cell = this.cellPolygon(i);
      if (cell) cell.index = i, yield cell;
    }
  }
  cellPolygon(i) {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.renderCell(i, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i, x, y) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
    return this.delaunay._step(i, x, y) === i;
  }
  *neighbors(i) {
    const ci = this._clip(i);
    if (ci) for (const j of this.delaunay.neighbors(i)) {
      const cj = this._clip(j);
      // find the common edge
      if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
        for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
          if (ci[ai] == cj[aj]
          && ci[ai + 1] == cj[aj + 1]
          && ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj]
          && ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]
          ) {
            yield j;
            break loop;
          }
        }
      }
    }
  }
  _cell(i) {
    const {circumcenters, delaunay: {inedges, halfedges, triangles}} = this;
    const e0 = inedges[i];
    if (e0 === -1) return null; // coincident point
    const points = [];
    let e = e0;
    do {
      const t = Math.floor(e / 3);
      points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
    } while (e !== e0 && e !== -1);
    return points;
  }
  _clip(i) {
    // degenerate case (1 valid point: return the box)
    if (i === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i);
    if (points === null) return null;
    const {vectors: V} = this;
    const v = i * 4;
    return V[v] || V[v + 1]
        ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3])
        : this._clipFinite(i, points);
  }
  _clipFinite(i, points) {
    const n = points.length;
    let P = null;
    let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
    let c0, c1 = this._regioncode(x1, y1);
    let e0, e1;
    for (let j = 0; j < n; j += 2) {
      x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
      c0 = c1, c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P) P.push(x1, y1);
        else P = [x1, y1];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx0, sy0);
          else P = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        if (P) P.push(sx1, sy1);
        else P = [sx1, sy1];
      }
    }
    if (P) {
      e0 = e1, e1 = this._edgecode(P[0], P[1]);
      if (e0 && e1) this._edge(i, e0, e1, P, P.length);
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    while (true) {
      if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x, y, c = c0 || c1;
      if (c & 0b1000) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
      else if (c & 0b0100) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
      else if (c & 0b0010) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
      else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
      if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
      else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
    let P = Array.from(points), p;
    if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
    if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
    if (P = this._clipFinite(i, P)) {
      for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
        c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
        if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
      }
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P;
  }
  _edge(i, e0, e1, P, j) {
    while (e0 !== e1) {
      let x, y;
      switch (e0) {
        case 0b0101: e0 = 0b0100; continue; // top-left
        case 0b0100: e0 = 0b0110, x = this.xmax, y = this.ymin; break; // top
        case 0b0110: e0 = 0b0010; continue; // top-right
        case 0b0010: e0 = 0b1010, x = this.xmax, y = this.ymax; break; // right
        case 0b1010: e0 = 0b1000; continue; // bottom-right
        case 0b1000: e0 = 0b1001, x = this.xmin, y = this.ymax; break; // bottom
        case 0b1001: e0 = 0b0001; continue; // bottom-left
        case 0b0001: e0 = 0b0101, x = this.xmin, y = this.ymin; break; // left
      }
      if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
        P.splice(j, 0, x, y), j += 2;
      }
    }
    if (P.length > 4) {
      for (let i = 0; i < P.length; i+= 2) {
        const j = (i + 2) % P.length, k = (i + 4) % P.length;
        if (P[i] === P[j] && P[j] === P[k]
        || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1])
          P.splice(j, 2), i -= 2;
      }
    }
    return j;
  }
  _project(x0, y0, vx, vy) {
    let t = Infinity, c, x, y;
    if (vy < 0) { // top
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
    } else if (vy > 0) { // bottom
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
    }
    if (vx > 0) { // right
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
    } else if (vx < 0) { // left
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
    }
    return [x, y];
  }
  _edgecode(x, y) {
    return (x === this.xmin ? 0b0001
        : x === this.xmax ? 0b0010 : 0b0000)
        | (y === this.ymin ? 0b0100
        : y === this.ymax ? 0b1000 : 0b0000);
  }
  _regioncode(x, y) {
    return (x < this.xmin ? 0b0001
        : x > this.xmax ? 0b0010 : 0b0000)
        | (y < this.ymin ? 0b0100
        : y > this.ymax ? 0b1000 : 0b0000);
  }
}


/***/ }),

/***/ "./node_modules/delaunator/index.js":
/*!******************************************!*\
  !*** ./node_modules/delaunator/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delaunator; });

const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);

class Delaunator {

    static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);

        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }

        return new Delaunator(coords);
    }

    constructor(coords) {
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

        this.coords = coords;

        // arrays that will store the triangulation graph
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);

        // temporary arrays for tracking the edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n); // edge to prev edge
        this._hullNext = new Uint32Array(n); // edge to next edge
        this._hullTri = new Uint32Array(n); // edge to adjacent triangle
        this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

        // temporary arrays for sorting points
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);

        this.update();
    }

    update() {
        const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
        const n = coords.length >> 1;

        // populate an array of point indices; calculate input data bbox
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < n; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        let minDist = Infinity;
        let i0, i1, i2;

        // pick a seed point close to the center
        for (let i = 0; i < n; i++) {
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];

        minDist = Infinity;

        // find the point closest to the seed
        for (let i = 0; i < n; i++) {
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];

        let minRadius = Infinity;

        // find the third point which forms the smallest circumcircle with the first two
        for (let i = 0; i < n; i++) {
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];

        if (minRadius === Infinity) {
            // order collinear points by dx (or dy if all x are identical)
            // and return the list as a hull
            for (let i = 0; i < n; i++) {
                this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for (let i = 0, d0 = -Infinity; i < n; i++) {
                const id = this._ids[i];
                if (this._dists[id] > d0) {
                    hull[j++] = id;
                    d0 = this._dists[id];
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
        }

        // swap the order of the seed points for counter-clockwise orientation
        if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }

        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;

        for (let i = 0; i < n; i++) {
            this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        }

        // sort the points by distance from the seed triangle circumcenter
        quicksort(this._ids, this._dists, 0, n - 1);

        // set up the seed triangle as the starting hull
        this._hullStart = i0;
        let hullSize = 3;

        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;

        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;

        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;

        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);

        for (let k = 0, xp, yp; k < this._ids.length; k++) {
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];

            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;

            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;

            // find a visible edge on the convex hull using edge hash
            let start = 0;
            for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }

            start = hullPrev[start];
            let e = start, q;
            while (q = hullNext[e], !orient(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1])) {
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue; // likely a near-duplicate point; skip it

            // add the first triangle from the point
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

            // recursively flip triangles from the point until they satisfy the Delaunay condition
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t; // keep track of boundary triangles on the hull
            hullSize++;

            // walk forward through the hull, adding more triangles and flipping recursively
            let n = hullNext[e];
            while (q = hullNext[n], orient(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1])) {
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n; // mark as removed
                hullSize--;
                n = q;
            }

            // walk backward from the other side, adding more triangles and flipping
            if (e === start) {
                while (q = hullPrev[e], orient(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1])) {
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e; // mark as removed
                    hullSize--;
                    e = q;
                }
            }

            // update the hull indices
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;

            // save the two new edges in the hash table
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }

        this.hull = new Uint32Array(hullSize);
        for (let i = 0, e = this._hullStart; i < hullSize; i++) {
            this.hull[i] = e;
            e = hullNext[e];
        }

        // trim typed triangle mesh arrays
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }

    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(a) {
        const {_triangles: triangles, _halfedges: halfedges, coords} = this;

        let i = 0;
        let ar = 0;

        // recursion eliminated with a fixed-size stack
        while (true) {
            const b = halfedges[a];

            /* if the pair of triangles doesn't satisfy the Delaunay condition
             * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
             * then do the same check/flip recursively for the new pair of triangles
             *
             *           pl                    pl
             *          /||\                  /  \
             *       al/ || \bl            al/    \a
             *        /  ||  \              /      \
             *       /  a||b  \    flip    /___ar___\
             *     p0\   ||   /p1   =>   p0\---bl---/p1
             *        \  ||  /              \      /
             *       ar\ || /br             b\    /br
             *          \||/                  \  /
             *           pr                    pr
             */
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;

            if (b === -1) { // convex hull edge
                if (i === 0) break;
                a = EDGE_STACK[--i];
                continue;
            }

            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;

            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];

            const illegal = inCircle(
                coords[2 * p0], coords[2 * p0 + 1],
                coords[2 * pr], coords[2 * pr + 1],
                coords[2 * pl], coords[2 * pl + 1],
                coords[2 * p1], coords[2 * p1 + 1]);

            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;

                const hbl = halfedges[bl];

                // edge swapped on the other side of the hull (rare); fix the halfedge reference
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    } while (e !== this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);

                const br = b0 + (b + 1) % 3;

                // don't worry about hitting the cap: it can only happen on extremely degenerate input
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i === 0) break;
                a = EDGE_STACK[--i];
            }
        }

        return ar;
    }

    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }

    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;

        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;

        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);

        this.trianglesLen += 3;

        return t;
    }
}

// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

// return 2d orientation sign if we're confident in it through J. Shewchuk's error bound check
function orientIfSure(px, py, rx, ry, qx, qy) {
    const l = (ry - py) * (qx - px);
    const r = (rx - px) * (qy - py);
    return Math.abs(l - r) >= 3.3306690738754716e-16 * Math.abs(l + r) ? l - r : 0;
}

// a more robust orientation test that's stable in a given triangle (to fix robustness issues)
function orient(rx, ry, qx, qy, px, py) {
    const sign = orientIfSure(px, py, rx, ry, qx, qy) ||
    orientIfSure(rx, ry, qx, qy, px, py) ||
    orientIfSure(qx, qy, px, py, rx, ry);
    return sign < 0;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    return dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) < 0;
}

function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;

    return x * x + y * y;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;

    return {x, y};
}

function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
        for (let i = left + 1; i <= right; i++) {
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = (left + right) >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

        const temp = ids[i];
        const tempDist = dists[temp];
        while (true) {
            do i++; while (dists[ids[i]] < tempDist);
            do j--; while (dists[ids[j]] > tempDist);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;

        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsDate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseIsDate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

module.exports = baseIsDate;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseOrderBy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ "./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ "./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseSortBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_compareAscending.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_compareMultiple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ "./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/isDate.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/isDate.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(/*! ./_baseIsDate */ "./node_modules/lodash/_baseIsDate.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

module.exports = isDate;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/sortBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ "./node_modules/lodash/_baseOrderBy.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "./node_modules/lodash/uniqBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/uniqBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "./node_modules/recompose/pure.js":
/*!****************************************!*\
  !*** ./node_modules/recompose/pure.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _shouldUpdate = _interopRequireDefault(__webpack_require__(/*! ./shouldUpdate */ "./node_modules/recompose/shouldUpdate.js"));

var _shallowEqual = _interopRequireDefault(__webpack_require__(/*! ./shallowEqual */ "./node_modules/recompose/shallowEqual.js"));

var _setDisplayName = _interopRequireDefault(__webpack_require__(/*! ./setDisplayName */ "./node_modules/recompose/setDisplayName.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! ./wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate.default)(function (props, nextProps) {
    return !(0, _shallowEqual.default)(props, nextProps);
  });

  if (true) {
    return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var _default = pure;
exports.default = _default;

/***/ }),

/***/ "./node_modules/recompose/shouldUpdate.js":
/*!************************************************!*\
  !*** ./node_modules/recompose/shouldUpdate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _setDisplayName = _interopRequireDefault(__webpack_require__(/*! ./setDisplayName */ "./node_modules/recompose/setDisplayName.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! ./wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate =
    /*#__PURE__*/
    function (_Component) {
      (0, _inheritsLoose2.default)(ShouldUpdate, _Component);

      function ShouldUpdate() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = ShouldUpdate.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _proto.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (true) {
      return (0, _setDisplayName.default)((0, _wrapDisplayName.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }

    return ShouldUpdate;
  };
};

var _default = shouldUpdate;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=1.14a294e3815c56ee22ae.chunk.js.map