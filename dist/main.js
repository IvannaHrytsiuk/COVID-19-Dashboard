/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  padding: 1rem;\\n  margin: 1rem; }\\n\\n.tableBlock {\\n  width: 500px;\\n  position: relative; }\\n  .tableBlock img {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    width: 30px;\\n    height: 30px;\\n    z-index: 1;\\n    cursor: pointer; }\\n\\n.table-scroll {\\n  display: block;\\n  border-spacing: 0;\\n  border: 1px solid;\\n  width: 100%; }\\n  .table-scroll thead {\\n    background-color: #f1f1f1;\\n    position: relative;\\n    display: block;\\n    width: 100%; }\\n  .table-scroll tbody {\\n    display: block;\\n    position: relative;\\n    width: 100%;\\n    border-top: 1px solid rgba(0, 0, 0, 0.2); }\\n  .table-scroll tr {\\n    width: 100%;\\n    display: flex; }\\n  .table-scroll td, .table-scroll th {\\n    flex-basis: 100%;\\n    flex-grow: 2;\\n    display: block;\\n    padding: 1rem;\\n    text-align: left; }\\n\\n.table-scroll tbody tr:nth-child(2n) {\\n  background-color: rgba(130, 130, 170, 0.1); }\\n\\n#searchCountry {\\n  background-image: url(\\\"https://firebasestorage.googleapis.com/v0/b/snowshop-829da.appspot.com/o/search.png?alt=media&token=511bbf61-1df1-4189-ae3f-ca1dacd4dc52\\\");\\n  background-position: 10px 12px;\\n  background-size: 20px;\\n  background-repeat: no-repeat;\\n  width: 50%;\\n  font-size: 16px;\\n  padding: 12px 20px 12px 40px;\\n  border: 1px solid #ddd;\\n  margin-bottom: 12px; }\\n\\n.countryList {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0; }\\n  .countryList li {\\n    cursor: pointer; }\\n    .countryList li img {\\n      width: 20px;\\n      height: 20px;\\n      margin-right: 10px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://COVID-19-Dashboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://COVID-19-Dashboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/index */ \"./src/scripts/index.js\");\n\r\n\r\n__webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/apis/apiCovid.js":
/*!**************************************!*
  !*** ./src/scripts/apis/apiCovid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => /* binding */ getData\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\r\nasync function getData(url) {\r\n    try {\r\n        const response = await fetch(`${url}`);\r\n        return await response.json();\r\n    } catch (err) {\r\n        console.error(err);\r\n    }\r\n    // eslint-disable-next-line no-undef\r\n    const data = response.json();\r\n    return data;\r\n}\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/scripts/apis/apiCovid.js?");

/***/ }),

/***/ "./src/scripts/apis/apiFlags.js":
/*!**************************************!*
  !*** ./src/scripts/apis/apiFlags.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFlags\": () => /* binding */ getFlags\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\r\nasync function getFlags(url) {\r\n    try {\r\n        const response = await fetch(`${url}`);\r\n        return await response.json();\r\n    } catch (err) {\r\n        console.error(err);\r\n    }\r\n    // eslint-disable-next-line no-undef\r\n    const data = response.json();\r\n    return data;\r\n}\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/scripts/apis/apiFlags.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tablePaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablePaint */ \"./src/scripts/tablePaint.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ \"./src/scripts/search.js\");\n// import { getData } from './apis/apiCovid';\r\n\r\n\r\n\r\nconst table = new _tablePaint__WEBPACK_IMPORTED_MODULE_0__.Table();\r\ntable.checkSwitcher();\r\n\r\ndocument.querySelector('.switcher').addEventListener('click', () => {\r\n    table.checkSwitcher();\r\n});\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apis_apiFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis/apiFlags */ \"./src/scripts/apis/apiFlags.js\");\n/* harmony import */ var _tablePaint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablePaint */ \"./src/scripts/tablePaint.js\");\n\r\n\r\n\r\nlet mainArr;\r\n\r\ndocument.getElementById('searchCountry').addEventListener('focus', () => {\r\n    (0,_apis_apiFlags__WEBPACK_IMPORTED_MODULE_0__.getFlags)('https://restcountries.eu/rest/v2/all?fields=name;population;flag').then((data) => {\r\n        mainArr = data;\r\n        // eslint-disable-next-line no-use-before-define\r\n        paintSearch(data);\r\n    });\r\n});\r\n\r\nfunction paintSearch(arr) {\r\n    document.querySelector('.countryList').innerHTML = '';\r\n    for (let i = 0; arr.length > 15 ? i < 15 : i < arr.length; i += 1) {\r\n        document.querySelector('.countryList').innerHTML += `<li class=\"country\"><img src=\"${arr[i].flag}\">${arr[i].name}</li>`;\r\n    }\r\n    for (let i = 0; i < document.querySelectorAll('.country').length; i += 1) {\r\n        // eslint-disable-next-line no-loop-func\r\n        document.querySelectorAll('.country')[i].addEventListener('click', (e) => {\r\n            // eslint-disable-next-line no-use-before-define\r\n            rememberCountry(e.target.textContent);\r\n            document.querySelector('.countryList').innerHTML = '';\r\n            document.getElementById('searchCountry').value = '';\r\n            const table = new _tablePaint__WEBPACK_IMPORTED_MODULE_1__.Table();\r\n            table.checkSwitcher();\r\n        });\r\n    }\r\n}\r\n\r\ndocument.getElementById('searchCountry').addEventListener('keyup', (e) => {\r\n    // eslint-disable-next-line prefer-destructuring\r\n    const value = e.target.value.toUpperCase();\r\n    const newArr = [];\r\n    for (let i = 0; i < mainArr.length; i += 1) {\r\n        if (mainArr[i].name.toUpperCase().indexOf(value) > -1) {\r\n            newArr.push(mainArr[i]);\r\n        }\r\n    }\r\n    paintSearch(newArr);\r\n});\r\n\r\nfunction rememberCountry(country) {\r\n    sessionStorage.setItem('country', country);\r\n}\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/scripts/search.js?");

/***/ }),

/***/ "./src/scripts/tableMood.js":
/*!**********************************!*
  !*** ./src/scripts/tableMood.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableMood\": () => /* binding */ TableMood\n/* harmony export */ });\n/* harmony import */ var _tablePaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablePaint */ \"./src/scripts/tablePaint.js\");\n/* harmony import */ var _apis_apiCovid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis/apiCovid */ \"./src/scripts/apis/apiCovid.js\");\n\r\n\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\nclass TableMood {\r\n    constructor(mood) {\r\n        this.mood = mood;\r\n    }\r\n\r\n    // eslint-disable-next-line class-methods-use-this\r\n    changeMood() {\r\n        const table = new _tablePaint__WEBPACK_IMPORTED_MODULE_0__.Table();\r\n        if (sessionStorage.getItem('country')) {\r\n            (0,_apis_apiCovid__WEBPACK_IMPORTED_MODULE_1__.getData)('https://api.covid19api.com/summary').then((data) => {\r\n                for (let i = 0; i < data.Countries.length; i += 1) {\r\n                    if (data.Countries[i].Country === sessionStorage.getItem('country')) {\r\n                        if (this.mood === 0) {\r\n                            table.paintTableTotalCountry(data.Countries[i].NewConfirmed, data.Countries[i].NewDeaths, data.Countries[i].NewRecovered);\r\n                            console.log('dayCountry');\r\n                        } else {\r\n                            table.paintTableTotalCountry(data.Countries[i].TotalConfirmed, data.Countries[i].TotalDeaths, data.Countries[i].TotalRecovered);\r\n                            console.log('totalCountry');\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n        } else {\r\n            (0,_apis_apiCovid__WEBPACK_IMPORTED_MODULE_1__.getData)('https://api.covid19api.com/summary').then((data) => {\r\n                if (this.mood === 0) {\r\n                    table.paintTableTotal(data.Global.NewConfirmed, data.Global.NewDeaths, data.Global.NewRecovered);\r\n                    console.log('day');\r\n                } else {\r\n                    table.paintTableTotal(data.Global.TotalConfirmed, data.Global.TotalDeaths, data.Global.TotalRecovered);\r\n                    console.log('total');\r\n                }\r\n            });\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/scripts/tableMood.js?");

/***/ }),

/***/ "./src/scripts/tablePaint.js":
/*!***********************************!*
  !*** ./src/scripts/tablePaint.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": () => /* binding */ Table\n/* harmony export */ });\n/* harmony import */ var _tableMood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableMood */ \"./src/scripts/tableMood.js\");\n\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\nclass Table {\r\n    constructor() {\r\n        this.switcher = 0;\r\n    }\r\n\r\n    checkSwitcher() {\r\n        if (this.switcher === 0) {\r\n            this.switcher = 1;\r\n        } else {\r\n            this.switcher = 0;\r\n        }\r\n        const mood = new _tableMood__WEBPACK_IMPORTED_MODULE_0__.TableMood(this.switcher);\r\n        return mood.changeMood();\r\n    }\r\n\r\n    // eslint-disable-next-line class-methods-use-this\r\n    paintTableTotalCountry(cases, death, recovered) {\r\n        document.querySelector('tbody').innerHTML = '';\r\n        document.querySelector('tbody').innerHTML += `<tr> <th>${cases}</th><th>${death}</th><th>${recovered}</th></tr>`;\r\n    }\r\n\r\n    // eslint-disable-next-line class-methods-use-this\r\n    paintTableTotal(cases, death, recovered) {\r\n        document.querySelector('tbody').innerHTML = '';\r\n        document.querySelector('tbody').innerHTML += `<tr> <th>${cases}</th><th>${death}</th><th>${recovered}</th></tr>`;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://COVID-19-Dashboard/./src/scripts/tablePaint.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;