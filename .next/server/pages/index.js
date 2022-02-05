"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Titulo(props) {\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"8b94c9a3767554e0\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8b94c9a3767554e0\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// Componente React\n// function HomePage() {\n//     // JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Titulo tag=\"h2\">Boas vindas de volta!</Titulo>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    // const username = 'FelipeMenegueli';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('FelipeMenegueli');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                // backgroundColor: appConfig.theme.colors.primary[500],\n                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/jaguar-f-type-drivers-seat.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function(infosDoEvento) {\n                            infosDoEvento.preventDefault();\n                            console.log('Alguem submeteu o form');\n                            window.location.href = '/chat';\n                            roteamento.push('/chat');\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Boas vindas!\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function handler(event) {\n                                    console.log('Usuario digitou', event.target.value);\n                                    // onde ta o valor?\n                                    const valor = event.target.value;\n                                    // trocar o valor da variavel\n                                    // atraves do react e avise que precisa\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\Arquivos PC\\\\Felipe\\\\ImersaoAlura\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFPOzRCQUNqQkUsT0FBTyxFQUFFLENBQU07NEJBQ2ZHLGVBQWUsRUFBRWpDLG9FQUFvQzs0QkFDckRvRSxNQUFNLEVBQUUsQ0FBVzs0QkFDbkJDLFdBQVcsRUFBRXJFLG9FQUFvQzs0QkFDakQ2QixZQUFZLEVBQUUsQ0FBTTs0QkFDcEJ5QyxJQUFJLEVBQUUsQ0FBQzs0QkFDUEMsU0FBUyxFQUFFLENBQU87d0JBQ3BCLENBQUM7O3dHQUVBeEUsdURBQUs7Z0NBQ0ppQixVQUFVLEVBQUUsQ0FBQztvQ0FDWGEsWUFBWSxFQUFFLENBQUs7b0NBQ25CZ0IsWUFBWSxFQUFFLENBQU07Z0NBQ3RCLENBQUM7Z0NBQ0QyQixHQUFHLEdBQUcsbUJBQW1CLEVBQUU1RCxRQUFRLENBQUMsSUFBSTs7Ozs7O3dHQUV6Q2Ysc0RBQUk7Z0NBQ0hpRCxPQUFPLEVBQUMsQ0FBTztnQ0FDZjlCLFVBQVUsRUFBRSxDQUFDO29DQUNYK0IsS0FBSyxFQUFFL0Msb0VBQW9DO29DQUMzQ2lDLGVBQWUsRUFBRWpDLG9FQUFvQztvQ0FDckQ4QixPQUFPLEVBQUUsQ0FBVTtvQ0FDbkJELFlBQVksRUFBRSxDQUFRO2dDQUN4QixDQUFDOzBDQUVBakIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbWVyc2FvQWx1cmEvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKSB7XHJcbiAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXX07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIENvbXBvbmVudGUgUmVhY3RcclxuLy8gZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbi8vICAgICAvLyBKU1hcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbi8vICAgICAgICAgICAgIDxUaXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdHVsbz5cclxuLy8gICAgICAgICAgICAgPGgyPkRpc2NvcmQgLSBBbHVyYSBNYXRyaXg8L2gyPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gIC8vIGNvbnN0IHVzZXJuYW1lID0gJ0ZlbGlwZU1lbmVndWVsaSc7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCdGZWxpcGVNZW5lZ3VlbGknKTtcclxuICAgIGNvbnN0IHJvdGVhbWVudG8gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICBcclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9qYWd1YXItZi10eXBlLWRyaXZlcnMtc2VhdC5qcGcpJyxcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgIHNtOiAncm93JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2Z1bmN0aW9uIChpbmZvc0RvRXZlbnRvKXtcclxuICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWxndWVtIHN1Ym1ldGV1IG8gZm9ybScpXHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPScvY2hhdCdcclxuICAgICAgICAgICAgICByb3RlYW1lbnRvLnB1c2goJy9jaGF0Jyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzITwvVGl0dWxvPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxyXG4gICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgey8qIDwgaW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXN1YXJpbyBkaWdpdG91JyxldmVudC50YXJnZXQudmFsdWUgKVxyXG4gICAgICAgICAgICAgIC8vIG9uZGUgdGEgbyB2YWxvcj9cclxuICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAvLyB0cm9jYXIgbyB2YWxvciBkYSB2YXJpYXZlbFxyXG4gICAgICAgICAgICAgIC8vIGF0cmF2ZXMgZG8gcmVhY3QgZSBhdmlzZSBxdWUgcHJlY2lzYVxyXG4gICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcclxuICAgICAgICAgICAgfX0gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gaGFuZGxlcihldmVudCl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gZGlnaXRvdScsZXZlbnQudGFyZ2V0LnZhbHVlIClcclxuICAgICAgICAgICAgICAvLyBvbmRlIHRhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgLy8gdHJvY2FyIG8gdmFsb3IgZGEgdmFyaWF2ZWxcclxuICAgICAgICAgICAgICAvLyBhdHJhdmVzIGRvIHJlYWN0IGUgYXZpc2UgcXVlIHByZWNpc2FcclxuICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3RlYW1lbnRvIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsImFzIiwib25TdWJtaXQiLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHVzaCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvciIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsb3IiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwicHJpbWFyeSIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord","theme":{"colors":{"primary":{"100":"#caf0f8","200":"#ade8f4","300":"#90e0ef","400":"#48cae4","500":"#00b4d8","600":"#0096c7","700":"#0077b6","800":"#023e8a","900":"#03045e","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();