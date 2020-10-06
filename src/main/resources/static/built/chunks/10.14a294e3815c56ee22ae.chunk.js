(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/components/dashboard/js/mapbox-testing/bart-station.json":
/*!**********************************************************************!*\
  !*** ./src/components/dashboard/js/mapbox-testing/bart-station.json ***!
  \**********************************************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"User\",\"continent\":\"Europe\",\"subContinent\":\"Eastern Europe\",\"country\":\"Ukraine\",\"region\":\"Mykolaiv Oblast\",\"city\":\"Mykolaiv\",\"coordinates\":[31.9946,46.975]},{\"name\":\"12th St. Oakland City Center (12TH)\",\"coordinates\":[31.9946,46.975]}]");

/***/ }),

/***/ "./src/components/dashboard/js/mapbox-testing/layers.js":
/*!**************************************************************!*\
  !*** ./src/components/dashboard/js/mapbox-testing/layers.js ***!
  \**************************************************************/
/*! exports provided: clusterLayer, clusterCountLayer, unclusteredPointLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterLayer", function() { return clusterLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterCountLayer", function() { return clusterCountLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unclusteredPointLayer", function() { return unclusteredPointLayer; });
var clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
};
var clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};
var unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};

/***/ }),

/***/ "./src/components/dashboard/js/mapbox-testing/map-box.js":
/*!***************************************************************!*\
  !*** ./src/components/dashboard/js/mapbox-testing/map-box.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers */ "./src/components/dashboard/js/mapbox-testing/layers.js");
/* harmony import */ var _bart_station_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bart-station.json */ "./src/components/dashboard/js/mapbox-testing/bart-station.json");
var _bart_station_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./bart-station.json */ "./src/components/dashboard/js/mapbox-testing/bart-station.json", 1);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import MARKER_STYLE from './marker-style';



var MapBox = function MapBox() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: '100%',
    height: 500,
    latitude: 37.729,
    longitude: -122.36,
    zoom: 11,
    bearing: 0,
    pitch: 50
  }),
      _useState2 = _slicedToArray(_useState, 2),
      viewport = _useState2[0],
      setViewport = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    doubleClickZoom: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      settings = _useState4[0],
      setSettings = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      interactionState = _useState6[0],
      setInteractionState = _useState6[1];

  var _sourceRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

  var _onClick = function _onClick(event) {
    var feature = event.features[0];
    console.log("feature", feature);
    var clusterId;

    if (event.features[0] === null) {
      clusterId = feature.properties.cluster_id;
      console.log("feature", clusterId);
    }

    ;

    var mapboxSource = _sourceRef.current.getSource();

    mapboxSource.getClusterExpansionZoom(clusterId, function (err, zoom) {
      if (err) {
        return;
      }

      setViewport(_objectSpread(_objectSpread({}, viewport), {}, {
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom: zoom,
        transitionDuration: 500
      }));
    });
  };

  var _renderMarker = function _renderMarker(station, i) {
    var name = station.name,
        coordinates = station.coordinates;
    return (
      /*#__PURE__*/
      // <Marker
      //     key={i}
      //     longitude={coordinates[0]}
      //     latitude={coordinates[1]}
      //     captureDrag={false}
      //     captureDoubleClick={false}
      // >
      //     <div className="station">
      //         <span>{name}</span>
      //     </div>
      // </Marker>
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_map_gl__WEBPACK_IMPORTED_MODULE_1__["Source"], {
        type: "geojson",
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
        ref: _sourceRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_map_gl__WEBPACK_IMPORTED_MODULE_1__["Layer"], _layers__WEBPACK_IMPORTED_MODULE_2__["clusterLayer"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_map_gl__WEBPACK_IMPORTED_MODULE_1__["Layer"], _layers__WEBPACK_IMPORTED_MODULE_2__["clusterCountLayer"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_map_gl__WEBPACK_IMPORTED_MODULE_1__["Layer"], _layers__WEBPACK_IMPORTED_MODULE_2__["unclusteredPointLayer"]))
    );
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_map_gl__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, viewport, settings, {
    // mapStyle="mapbox://styles/mapbox/dark-v9"
    // onViewportChange={nextViewport => setViewport(nextViewport)}
    // onInteractionStateChange={interactionState => setInteractionState(interactionState)}
    mapStyle: "mapbox://styles/mapbox/dark-v9",
    onViewportChange: function onViewportChange(viewport) {
      return setViewport(viewport);
    },
    interactionState: function interactionState(_interactionState) {
      return setInteractionState(_interactionState);
    },
    interactiveLayerIds: [_layers__WEBPACK_IMPORTED_MODULE_2__["clusterLayer"].id],
    onClick: function onClick(e) {
      return _onClick(e);
    },
    mapboxApiAccessToken: localStorage.getItem('MapboxToken')
  }), _bart_station_json__WEBPACK_IMPORTED_MODULE_3__.map(_renderMarker));
};

/* harmony default export */ __webpack_exports__["default"] = (MapBox);

/***/ })

}]);
//# sourceMappingURL=10.14a294e3815c56ee22ae.chunk.js.map