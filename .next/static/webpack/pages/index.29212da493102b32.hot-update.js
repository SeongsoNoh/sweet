"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/client/useUser.ts":
/*!*******************************!*\
  !*** ./lib/client/useUser.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nfunction useUser() {\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/user/me\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.ok) {\n            router.replace(\"/login\");\n        }\n        if (data && data.ok && router.pathname === \"/login\") {\n            router.replace(\"/profile\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    return {\n        user: data === null || data === void 0 ? void 0 : data.profile,\n        isLoading: !data && !error\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ047QUFDVDtBQU9WLFNBQVNHLE9BQU8sR0FBRztJQUNoQyxJQUF3QkQsR0FBdUMsR0FBdkNBLCtDQUFNLENBQWtCLGNBQWMsQ0FBQyxFQUF2REUsSUFBSSxHQUFZRixHQUF1QyxDQUF2REUsSUFBSSxFQUFFQyxLQUFLLEdBQUtILEdBQXVDLENBQWpERyxLQUFLO0lBQ25CLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUcsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0csRUFBRSxFQUFFO1lBQ3BCRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUlKLElBQUksSUFBSUEsSUFBSSxDQUFDRyxFQUFFLElBQUlELE1BQU0sQ0FBQ0csUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNuREgsTUFBTSxDQUFDRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUI7S0FDRixFQUFFO1FBQUNKLElBQUk7UUFBRUUsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUNuQixPQUFPO1FBQUVJLElBQUksRUFBRU4sSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVPLE9BQU87UUFBRUMsU0FBUyxFQUFFLENBQUNSLElBQUksSUFBSSxDQUFDQyxLQUFLO0tBQUUsQ0FBQztDQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L3VzZVVzZXIudHM/ZWQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmludGVyZmFjZSBQcm9maWxlUmVzcG9uc2Uge1xuICBvazogYm9vbGVhbjtcbiAgcHJvZmlsZTogVXNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPFByb2ZpbGVSZXNwb25zZT4oXCIvYXBpL3VzZXIvbWVcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmICFkYXRhLm9rKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5vayAmJiByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xvZ2luXCIpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL3Byb2ZpbGVcIik7XG4gICAgfVxuICB9LCBbZGF0YSwgcm91dGVyXSk7XG4gIHJldHVybiB7IHVzZXI6IGRhdGE/LnByb2ZpbGUsIGlzTG9hZGluZzogIWRhdGEgJiYgIWVycm9yIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsIm9rIiwicmVwbGFjZSIsInBhdGhuYW1lIiwidXNlciIsInByb2ZpbGUiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client/useUser.ts\n");

/***/ })

});