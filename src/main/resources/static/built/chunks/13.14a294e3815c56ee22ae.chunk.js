(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/components/dashboard/js/metrics/session-Duration-Responsive-Line.js":
/*!*********************************************************************************!*\
  !*** ./src/components/dashboard/js/metrics/session-Duration-Responsive-Line.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/line */ "./node_modules/@nivo/line/dist/nivo-line.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




var CustomSymbol = function CustomSymbol(_ref) {
  var size = _ref.size,
      color = _ref.color,
      borderWidth = _ref.borderWidth,
      borderColor = _ref.borderColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    fill: "#fff",
    r: size / 2,
    strokeWidth: borderWidth,
    stroke: borderColor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: size / 5,
    strokeWidth: borderWidth,
    stroke: borderColor,
    fill: color,
    fillOpacity: 0.35
  }));
}; // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


var SessionDurationResponsiveLine = function SessionDurationResponsiveLine(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_line__WEBPACK_IMPORTED_MODULE_1__["ResponsiveLine"], {
    data: data,
    margin: {
      top: 20,
      right: 55,
      bottom: 45,
      left: 60
    },
    xScale: {
      type: 'point'
    },
    yScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: false,
      reverse: false
    },
    curve: "monotoneX",
    enablePointLabel: true,
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: 'top',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 25,
      legendOffset: 36,
      legendPosition: 'middle'
    },
    axisLeft: {
      orient: 'left',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Sessions-Duration',
      legendOffset: -55,
      legendPosition: 'middle'
    },
    colors: {
      scheme: 'nivo'
    },
    pointSymbol: CustomSymbol,
    pointSize: 10,
    pointColor: {
      theme: 'background'
    },
    pointBorderWidth: 1,
    pointBorderColor: {
      from: 'serieColor'
    },
    pointLabel: "users",
    pointLabelYOffset: -12,
    useMesh: true,
    enableSlices: 'x',
    sliceTooltip: function sliceTooltip(_ref3) {
      var slice = _ref3.slice;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          background: "var(--light-pink)",
          padding: '0.1rem 1rem',
          border: '1px solid var(--dark-brown)',
          borderRadius: '5px'
        }
      }, slice.points.map(function (point) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: point.id,
          style: {
            color: "var(--dark-brown)",
            padding: '0.1rem 0'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Date:"), " ", point.data.x), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, point.serieId, ":"), " ", point.data.yFormatted);
      }));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SessionDurationResponsiveLine);

/***/ })

}]);
//# sourceMappingURL=13.14a294e3815c56ee22ae.chunk.js.map