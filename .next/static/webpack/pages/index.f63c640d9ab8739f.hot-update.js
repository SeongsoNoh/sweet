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

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _Mypage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mypage */ \"./components/Mypage.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sidebar = {\n    open: {\n        clipPath: \"circle(2200px at 40px 40px)\",\n        transition: {\n            type: \"spring\",\n            stiffness: 20,\n            restDelta: 2\n        }\n    },\n    closed: {\n        clipPath: \"circle(30px at 40px 40px)\",\n        transition: {\n            delay: 0.3,\n            type: \"spring\",\n            stiffness: 400,\n            damping: 40\n        }\n    }\n};\nfunction Layout() {\n    _s();\n    // const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);\n    // const handleDarkMode = () => {\n    //   setIsDarkMode(!isDarkMode);\n    //   localStorage.setItem(\"isDarkMode\", JSON.stringify(!isDarkMode));\n    // };\n    var ref = _slicedToArray((0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useCycle)(false, true), 2), isOpen = ref[0], toggleOpen = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var homeClick = function() {\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-14 w-full relative flex justify-center items-center p-2 border-b\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return toggleOpen();\n                        },\n                        className: \"cursor-pointer\",\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsX, {\n                            size: 32\n                        }, void 0, false, {\n                            fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsPerson, {\n                            size: 32\n                        }, void 0, false, {\n                            fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 41\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-violet-500 font-bold flex justify-center cursor-pointer\",\n                        onClick: homeClick,\n                        children: [\n                            \"Sweet\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 22 22\",\n                                className: \"fill-violet-500 w-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: false,\n                    animate: isOpen ? \"open\" : \"closed\",\n                    className: \"absolute z-10 w-full h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"w-full bg-white h-full\",\n                        variants: sidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Mypage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            toggle: isOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this) : null\n            }, void 0, false, {\n                fileName: \"/Users/sooo._./carrot-tweet/components/Layout.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"WdV67li22wca7RKsmM8JVxa4YcM=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useCycle,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUV2QjtBQUM0QztBQUV4QztBQUNVOztBQUV4QyxJQUFNTyxPQUFPLEdBQUc7SUFDZEMsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRyw2QkFBMkI7UUFDdENDLFVBQVUsRUFBRTtZQUNWQyxJQUFJLEVBQUUsUUFBUTtZQUNkQyxTQUFTLEVBQUUsRUFBRTtZQUNiQyxTQUFTLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7SUFDREMsTUFBTSxFQUFFO1FBQ05MLFFBQVEsRUFBRSwyQkFBMkI7UUFDckNDLFVBQVUsRUFBRTtZQUNWSyxLQUFLLEVBQUUsR0FBRztZQUNWSixJQUFJLEVBQUUsUUFBUTtZQUNkQyxTQUFTLEVBQUUsR0FBRztZQUNkSSxPQUFPLEVBQUUsRUFBRTtTQUNaO0tBQ0Y7Q0FDRjtBQUVjLFNBQVNDLE1BQU0sR0FBRzs7SUFDL0Isa0VBQWtFO0lBQ2xFLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMscUVBQXFFO0lBQ3JFLEtBQUs7SUFDTCxJQUE2QmhCLEdBQXFCLGtCQUFyQkEsdURBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQTNDaUIsTUFBTSxHQUFnQmpCLEdBQXFCLEdBQXJDLEVBQUVrQixVQUFVLEdBQUlsQixHQUFxQixHQUF6QjtJQUN6QixJQUFNbUIsTUFBTSxHQUFHZCxzREFBUyxFQUFFO0lBQzFCLElBQU1lLFNBQVMsR0FBRyxXQUFNO1FBQ3RCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUNELHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7a0NBQ2pGLDhEQUFDRCxLQUFHO3dCQUFDRSxPQUFPLEVBQUU7bUNBQU1OLFVBQVUsRUFBRTt5QkFBQTt3QkFBRUssU0FBUyxFQUFDLGdCQUFnQjtrQ0FDekROLE1BQU0saUJBQUcsOERBQUNkLCtDQUFHOzRCQUFDc0IsSUFBSSxFQUFFLEVBQUU7Ozs7O2dDQUFJLGlCQUFHLDhEQUFDdkIsb0RBQVE7NEJBQUN1QixJQUFJLEVBQUUsRUFBRTs7Ozs7Z0NBQUk7Ozs7OzRCQUNoRDtrQ0FDTiw4REFBQ0MsSUFBRTt3QkFDREgsU0FBUyxFQUFDLDhEQUE4RDt3QkFDeEVDLE9BQU8sRUFBRUosU0FBUzs7NEJBQ25CLE9BRUM7MENBQUEsOERBQUNPLEtBQUc7Z0NBQUNDLE9BQU8sRUFBQyxXQUFXO2dDQUFDTCxTQUFTLEVBQUMscUJBQXFCOzBDQUN0RCw0RUFBQ00sR0FBQzs4Q0FDQSw0RUFBQ0MsTUFBSTt3Q0FBQ0MsQ0FBQyxFQUFDLGttQkFBa21COzs7Ozs0Q0FBUTs7Ozs7d0NBQ2huQjs7Ozs7b0NBQ0E7Ozs7Ozs0QkFDSDtrQ0FDTCw4REFBQ1QsS0FBRzs7Ozs0QkFBTzs7Ozs7O29CQVNQOzBCQUNOLDhEQUFDQSxLQUFHOzBCQUNETCxNQUFNLGlCQUNMLDhEQUFDbEIscURBQVU7b0JBQ1RpQyxPQUFPLEVBQUUsS0FBSztvQkFDZEMsT0FBTyxFQUFFaEIsTUFBTSxHQUFHLE1BQU0sR0FBRyxRQUFRO29CQUNuQ00sU0FBUyxFQUFDLCtCQUErQjs4QkFFekMsNEVBQUN4QixxREFBVTt3QkFBQ3dCLFNBQVMsRUFBQyx3QkFBd0I7d0JBQUNXLFFBQVEsRUFBRTVCLE9BQU87a0NBQzlELDRFQUFDRiwrQ0FBTTs0QkFBQytCLE1BQU0sRUFBRWxCLE1BQU07Ozs7O2dDQUFJOzs7Ozs0QkFDZjs7Ozs7d0JBQ0YsR0FDWCxJQUFJOzs7OztvQkFDSjs7b0JBQ0wsQ0FDSDtDQUNIO0dBckR1QkQsTUFBTTs7UUFNQ2hCLG1EQUFRO1FBQ3RCSyxrREFBUzs7O0FBUEZXLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzNjOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB0aGVtZVN0YXRlIH0gZnJvbSBcInBhZ2VzL2F0b21zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc1N1bkZpbGwsIEJzTW9vbkZpbGwsIEJzUGVyc29uLCBCc1ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IE15cGFnZSBmcm9tIFwiLi9NeXBhZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBzaWRlYmFyID0ge1xuICBvcGVuOiB7XG4gICAgY2xpcFBhdGg6IGBjaXJjbGUoMjIwMHB4IGF0IDQwcHggNDBweClgLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICBzdGlmZm5lc3M6IDIwLFxuICAgICAgcmVzdERlbHRhOiAyLFxuICAgIH0sXG4gIH0sXG4gIGNsb3NlZDoge1xuICAgIGNsaXBQYXRoOiBcImNpcmNsZSgzMHB4IGF0IDQwcHggNDBweClcIixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC4zLFxuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgICAgZGFtcGluZzogNDAsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCgpIHtcbiAgLy8gY29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlUmVjb2lsU3RhdGUodGhlbWVTdGF0ZSk7XG4gIC8vIGNvbnN0IGhhbmRsZURhcmtNb2RlID0gKCkgPT4ge1xuICAvLyAgIHNldElzRGFya01vZGUoIWlzRGFya01vZGUpO1xuICAvLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNEYXJrTW9kZVwiLCBKU09OLnN0cmluZ2lmeSghaXNEYXJrTW9kZSkpO1xuICAvLyB9O1xuICBjb25zdCBbaXNPcGVuLCB0b2dnbGVPcGVuXSA9IHVzZUN5Y2xlKGZhbHNlLCB0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhvbWVDbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNCB3LWZ1bGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yIGJvcmRlci1iXCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdG9nZ2xlT3BlbigpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIHtpc09wZW4gPyA8QnNYIHNpemU9ezMyfSAvPiA6IDxCc1BlcnNvbiBzaXplPXszMn0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXZpb2xldC01MDAgZm9udC1ib2xkIGZsZXgganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hvbWVDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIFN3ZWV0XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDIyIDIyXCIgY2xhc3NOYW1lPVwiZmlsbC12aW9sZXQtNTAwIHctNVwiPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNjQzIDQuOTM3Yy0uODM1LjM3LTEuNzMyLjYyLTIuNjc1LjczMy45NjItLjU3NiAxLjctMS40OSAyLjA0OC0yLjU3OC0uOS41MzQtMS44OTcuOTIyLTIuOTU4IDEuMTMtLjg1LS45MDQtMi4wNi0xLjQ3LTMuNC0xLjQ3LTIuNTcyIDAtNC42NTggMi4wODYtNC42NTggNC42NiAwIC4zNjQuMDQyLjcxOC4xMiAxLjA2LTMuODczLS4xOTUtNy4zMDQtMi4wNS05LjYwMi00Ljg2OC0uNC42OS0uNjMgMS40OS0uNjMgMi4zNDIgMCAxLjYxNi44MjMgMy4wNDMgMi4wNzIgMy44NzgtLjc2NC0uMDI1LTEuNDgyLS4yMzQtMi4xMS0uNTgzdi4wNmMwIDIuMjU3IDEuNjA1IDQuMTQgMy43MzcgNC41NjgtLjM5Mi4xMDYtLjgwMy4xNjItMS4yMjcuMTYyLS4zIDAtLjU5My0uMDI4LS44NzctLjA4Mi41OTMgMS44NSAyLjMxMyAzLjE5OCA0LjM1MiAzLjIzNC0xLjU5NSAxLjI1LTMuNjA0IDEuOTk1LTUuNzg2IDEuOTk1LS4zNzYgMC0uNzQ3LS4wMjItMS4xMTItLjA2NSAyLjA2MiAxLjMyMyA0LjUxIDIuMDkzIDcuMTQgMi4wOTMgOC41NyAwIDEzLjI1NS03LjA5OCAxMy4yNTUtMTMuMjU0IDAtLjItLjAwNS0uNDAyLS4wMTQtLjYwMi45MS0uNjU4IDEuNy0xLjQ3NyAyLjMyMy0yLjQxelwiPjwvcGF0aD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgey8qIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRGFya01vZGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGJnLXRyYW5zcGFyZW50IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjMsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSB9IH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgID5cbiAgICAgICAgICB7aXNEYXJrTW9kZSA/IDxCc1N1bkZpbGwgY2xhc3NOYW1lPVwiXCIgLz4gOiA8QnNNb29uRmlsbCAvPn1cbiAgICAgICAgPC9tb3Rpb24uYnV0dG9uPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHctZnVsbCBoLXNjcmVlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGgtZnVsbFwiIHZhcmlhbnRzPXtzaWRlYmFyfT5cbiAgICAgICAgICAgICAgPE15cGFnZSB0b2dnbGU9e2lzT3Blbn0gLz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlQ3ljbGUiLCJSZWFjdCIsIkJzUGVyc29uIiwiQnNYIiwiTXlwYWdlIiwidXNlUm91dGVyIiwic2lkZWJhciIsIm9wZW4iLCJjbGlwUGF0aCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY2xvc2VkIiwiZGVsYXkiLCJkYW1waW5nIiwiTGF5b3V0IiwiaXNPcGVuIiwidG9nZ2xlT3BlbiIsInJvdXRlciIsImhvbWVDbGljayIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsImgyIiwic3ZnIiwidmlld0JveCIsImciLCJwYXRoIiwiZCIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

});