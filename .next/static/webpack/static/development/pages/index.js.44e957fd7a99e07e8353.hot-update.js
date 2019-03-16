webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ServiceItem.js":
/*!***********************************!*\
  !*** ./components/ServiceItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\JavaScriptProjects\\codemachine\\components\\ServiceItem.js";


var ServiceItem = function ServiceItem(service) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/.svg",
    alt: "",
    className: "responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Web Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae."));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceItem);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceItem.js */ "./components/ServiceItem.js");
var _jsxFileName = "D:\\JavaScriptProjects\\codemachine\\components\\Services.js";



var Services = function Services() {
  var services = [{
    icon: '/static/images/data.svg',
    title: "Web Applications",
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae.'
  }, {
    icon: '/static/images/application.svg',
    title: "Mobile Applications",
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae.'
  }, {
    icon: '/static/images/web.svg',
    title: "Wordpress",
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut distinctio, magni perferendis veritatis vitae.'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cm-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "What We Do"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, services.map(function (service, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceItem_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      service: service,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=index.js.44e957fd7a99e07e8353.hot-update.js.map