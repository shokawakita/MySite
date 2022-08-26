/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/API.js":
/*!***********************!*\
  !*** ./src/js/API.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\n\n\nfunction API() {\n  var profile = document.getElementById('profile-img');\n  var skillsImgs = document.querySelectorAll('.skills-imgs img');\n\n  function callback(entries, obs) {\n    entries.forEach(function (entry) {\n      if (!entry.isIntersecting) {\n        return;\n      }\n\n      entry.target.classList.add('appear');\n      obs.unobserve(entry.target);\n    });\n  }\n\n  var options = {\n    threshold: .25\n  };\n  var observers = new IntersectionObserver(callback, options);\n  observers.observe(profile);\n  skillsImgs.forEach(function (skill) {\n    observers.observe(skill);\n  });\n}\n\n//# sourceURL=webpack://sassproject/./src/js/API.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/common.scss */ \"./src/scss/common.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/footer.scss */ \"./src/scss/footer.scss\");\n/* harmony import */ var _scss_menu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/menu.scss */ \"./src/scss/menu.scss\");\n/* harmony import */ var _scss_pageback_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/pageback.scss */ \"./src/scss/pageback.scss\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./API */ \"./src/js/API.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _pageTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageTop */ \"./src/js/pageTop.js\");\n\n\n\n\n\n\n\n\n\n(0,_API__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_pageTop__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://sassproject/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n\n\nfunction menu() {\n  // difinition\n  var open = document.getElementById('menu-open');\n  var ul = document.querySelector('#menu > nav > ul'); // menuをクリックしたときにリストを表示機能\n\n  function menuClickEvent() {\n    open.addEventListener('click', function () {\n      open.classList.toggle('hidden');\n      ul.parentElement.parentElement.classList.toggle('appear');\n    });\n    ul.childNodes.forEach(function (list) {\n      list.addEventListener('click', function () {\n        open.classList.remove('hidden');\n        document.getElementById('menu').classList.remove('appear');\n      });\n    });\n  } // menu画面にて、背景をクリックしたときにリストを切り替える\n  // ul.parentElement.parentElement.addEventListener('click', () => {\n  //   open.classList.remove('hidden');\n  //   ul.parentElement.parentElement.classList.remove('appear');\n  //   for(let i = 3; i < 12; i++){\n  //     if(i === 7){continue;}\n  //     ul.children[i].classList.remove('appear');\n  //   }\n  // });\n\n\n  menuClickEvent();\n}\n\n//# sourceURL=webpack://sassproject/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/pageTop.js":
/*!***************************!*\
  !*** ./src/js/pageTop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageTop)\n/* harmony export */ });\n\n\nfunction pageTop() {\n  // Intersectionobserverでheaderとto-topを監視する\n  var pageTop = document.getElementById('to-top');\n  var header = document.querySelector('header');\n\n  function callback(entries) {\n    entries.forEach(function (entry) {\n      if (!entry.isIntersecting) {\n        pageTop.classList.add('appear');\n        header.classList.add('appear');\n      } else {\n        pageTop.classList.remove('appear');\n        header.classList.remove('appear');\n      }\n    });\n  }\n\n  var observer = new IntersectionObserver(callback);\n  observer.observe(document.getElementById('target')); // to-topのスクロールをなめらかにする\n\n  pageTop.addEventListener('click', function (el) {\n    el.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  });\n}\n\n//# sourceURL=webpack://sassproject/./src/js/pageTop.js?");

/***/ }),

/***/ "./src/scss/common.scss":
/*!******************************!*\
  !*** ./src/scss/common.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sassproject/./src/scss/common.scss?");

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sassproject/./src/scss/footer.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sassproject/./src/scss/header.scss?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sassproject/./src/scss/main.scss?");

/***/ }),

/***/ "./src/scss/menu.scss":
/*!****************************!*\
  !*** ./src/scss/menu.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sassproject/./src/scss/menu.scss?");

/***/ }),

/***/ "./src/scss/pageback.scss":
/*!********************************!*\
  !*** ./src/scss/pageback.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sassproject/./src/scss/pageback.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;