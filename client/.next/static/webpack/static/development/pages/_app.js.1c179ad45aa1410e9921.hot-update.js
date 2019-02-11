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
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (false) {}

var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__["setContext"])(function (_, _ref) {
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

/***/ }),

/***/ "./node_modules/apollo-link-context/lib/bundle.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/apollo-link-context/lib/bundle.esm.js ***!
  \************************************************************/
/*! exports provided: setContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var setContext = function (setter) {
    return new apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"](function (operation, forward) {
        var request = __rest(operation, []);
        return new apollo_link__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            var handle;
            Promise.resolve(request)
                .then(function (req) { return setter(req, operation.getContext()); })
                .then(operation.setContext)
                .then(function () {
                handle = forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                });
            })
                .catch(observer.error.bind(observer));
            return function () {
                if (handle)
                    handle.unsubscribe();
            };
        });
    });
};


//# sourceMappingURL=bundle.esm.js.map


/***/ })

})
//# sourceMappingURL=_app.js.1c179ad45aa1410e9921.hot-update.js.map