(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/dashboard/js/metrics/sessions-By-Device-Pie-Chart.js":
/*!*****************************************************************************!*\
  !*** ./src/components/dashboard/js/metrics/sessions-By-Device-Pie-Chart.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nivo_pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/pie */ "./node_modules/@nivo/pie/dist/nivo-pie.esm.js");

 // make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

var SessionsByDevicePie = function SessionsByDevicePie(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nivo_pie__WEBPACK_IMPORTED_MODULE_1__["ResponsivePie"], {
    data: data,
    margin: {
      top: 40,
      right: 80,
      bottom: 150,
      left: 80
    },
    innerRadius: 0.6,
    padAngle: 2,
    cornerRadius: 5,
    colors: {
      scheme: 'nivo'
    },
    borderWidth: 1,
    sortByValue: true,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.2]]
    },
    radialLabelsSkipAngle: 10,
    radialLabelsTextXOffset: 6,
    radialLabelsTextColor: "var(--dark-brown)",
    radialLabelsLinkOffset: -17,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsLinkColor: {
      from: 'color'
    },
    slicesLabelsSkipAngle: 10,
    slicesLabelsTextColor: "var(--dark-brown)",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    legends: [{
      anchor: 'bottom',
      direction: 'row',
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: 'var(--dark-brown)',
      symbolSize: 18,
      symbolShape: 'circle',
      effects: [{
        on: 'hover',
        style: {
          itemTextColor: 'var(--dark-brown)'
        }
      }]
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SessionsByDevicePie);

/***/ })

}]);
//# sourceMappingURL=6.2bb7d70975c27c999349.chunk.js.map