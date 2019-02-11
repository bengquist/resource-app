webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/initApollo.ts":
/*!***************************!*\
  !*** ./lib/initApollo.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (false) {}

var authLink = setContext(function (_, _ref) {
  var headers = _ref.headers;
  // get the authentication token from local storage if it exists
  var token = localStorage.getItem("token"); // return the headers to the context so httpLink can read them

  return {
    headers: _objectSpread({}, headers, {
      authorization: token ? "Bearer ".concat(token) : ""
    })
  };
});

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: true,
    ssrMode: !true,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["HttpLink"](_objectSpread({
      uri: "http://localhost:4000/graphql",
      // Server URL (must be absolute)
      credentials: "same-origin"
    }, authLink)),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (false) {} // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ })

})
//# sourceMappingURL=_app.js.914d9b82f3f4270e9260.hot-update.js.map