webpackHotUpdate_N_E("pages/index",{

/***/ "./components/molecules/jumbotron/Jumbotron.js":
/*!*****************************************************!*\
  !*** ./components/molecules/jumbotron/Jumbotron.js ***!
  \*****************************************************/
/*! exports provided: Jumbotron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return Jumbotron; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Jumbotron.module.css */ "./components/molecules/jumbotron/Jumbotron.module.css");
/* harmony import */ var _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Alexander Valladares\\Documents\\NextJs-Projects\\components\\molecules\\jumbotron\\Jumbotron.js",
    _this = undefined;



var Jumbotron = function Jumbotron() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jumbotron,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nextimage,
      alt: "cart-personal",
      src: "/cart-personal.png",
      layout: "fill"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.gradient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.h1,
        children: "Lanza tu Marca"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Jumbotron_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.butonCta,
        children: "Registrate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};
_c = Jumbotron;

var _c;

$RefreshReg$(_c, "Jumbotron");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvanVtYm90cm9uL0p1bWJvdHJvbi5qcyJdLCJuYW1lcyI6WyJKdW1ib3Ryb24iLCJzdHlsZSIsImp1bWJvdHJvbiIsIm5leHRpbWFnZSIsImdyYWRpZW50Iiwid3JhcHBlciIsImgxIiwiYnV0b25DdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDREQUFLLENBQUNDLFNBQXRCO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFTLEVBQUVELDREQUFLLENBQUNFLFNBRG5CO0FBRUUsU0FBRyxFQUFDLGVBRk47QUFHRSxTQUFHLEVBQUMsb0JBSE47QUFJRSxZQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBRUYsNERBQUssQ0FBQ0c7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFBSyxlQUFTLEVBQUVILDREQUFLLENBQUNJLE9BQXRCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFSiw0REFBSyxDQUFDSyxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxpQkFBUyxFQUFFTCw0REFBSyxDQUFDTSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FoQk07S0FBTVAsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZGJmMzRkZjAyODgyYzRlMGQ2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9KdW1ib3Ryb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEp1bWJvdHJvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmp1bWJvdHJvbn0+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUubmV4dGltYWdlfVxyXG4gICAgICAgIGFsdD1cImNhcnQtcGVyc29uYWxcIlxyXG4gICAgICAgIHNyYz1cIi9jYXJ0LXBlcnNvbmFsLnBuZ1wiXHJcbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmFkaWVudH0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS5oMX0+TGFuemEgdHUgTWFyY2E8L2gxPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYnV0b25DdGF9PlJlZ2lzdHJhdGU8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==