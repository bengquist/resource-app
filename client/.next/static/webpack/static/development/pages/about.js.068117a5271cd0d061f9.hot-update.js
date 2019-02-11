webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./node_modules/apollo-client/ApolloClient.js":
false,

/***/ "./node_modules/apollo-client/core/ObservableQuery.js":
false,

/***/ "./node_modules/apollo-client/core/QueryManager.js":
false,

/***/ "./node_modules/apollo-client/core/networkStatus.js":
false,

/***/ "./node_modules/apollo-client/core/types.js":
false,

/***/ "./node_modules/apollo-client/data/mutations.js":
false,

/***/ "./node_modules/apollo-client/data/queries.js":
false,

/***/ "./node_modules/apollo-client/data/store.js":
false,

/***/ "./node_modules/apollo-client/errors/ApolloError.js":
false,

/***/ "./node_modules/apollo-client/index.js":
false,

/***/ "./node_modules/apollo-client/scheduler/scheduler.js":
false,

/***/ "./node_modules/apollo-client/util/Observable.js":
false,

/***/ "./node_modules/apollo-client/version.js":
false,

/***/ "./node_modules/apollo-link-dedup/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
false,

/***/ "./node_modules/apollo-utilities/lib/directives.js":
false,

/***/ "./node_modules/apollo-utilities/lib/fragments.js":
false,

/***/ "./node_modules/apollo-utilities/lib/getFromAST.js":
false,

/***/ "./node_modules/apollo-utilities/lib/index.js":
false,

/***/ "./node_modules/apollo-utilities/lib/storeUtils.js":
false,

/***/ "./node_modules/apollo-utilities/lib/transform.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/assign.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/cloneDeep.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/environment.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/errorHandling.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/filterInPlace.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/isEqual.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/maybeDeepFreeze.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/stripSymbols.js":
false,

/***/ "./node_modules/apollo-utilities/lib/util/warnOnce.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
false,

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/graphql/language/printer.mjs":
false,

/***/ "./node_modules/graphql/language/visitor.mjs":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/lodash.flowright/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/react-apollo/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/react-apollo/react-apollo.browser.umd.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
false,

/***/ "./node_modules/zen-observable/index.js":
false,

/***/ "./node_modules/zen-observable/lib/Observable.js":
false,

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\resource-app\\client\\pages\\about.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    users {\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AboutPage = function AboutPage() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About | Next.js + TypeScript Example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "LOGIN"));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.068117a5271cd0d061f9.hot-update.js.map