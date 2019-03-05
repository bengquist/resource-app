webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/initApollo.ts":
/*!***************************!*\
  !*** ./lib/initApollo.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import console = require("console");

var apolloClient = null;
var isBrowser = true;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default.a;
}

function create(initialState, _ref) {
  var getToken = _ref.getToken;
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])(function (_, _ref2) {
    var headers = _ref2.headers;
    var token = getToken();
    var newHeaders = {
      headers: _objectSpread({}, headers, {
        authentication: {
          cookie: token ? "token=".concat(token) : ""
        }
      })
    };
    return newHeaders;
  });
  var httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
    uri: "http://localhost:4000/graphql",
    credentials: "same-origin",
    headers: authLink.authenication ? authLink : {}
  }); // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.71e34c7c76c8f53b187c.hot-update.js.map