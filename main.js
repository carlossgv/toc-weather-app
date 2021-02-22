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

/***/ "./weather/index.js":
/*!**************************!*\
  !*** ./weather/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./weather/utils.js\");\n\n\nconst form = document.querySelector('form');\nconst input = document.querySelector('input');\nconst loader = document.querySelector('.loader');\nconst main = document.querySelector('.main');\nloader.style.display = 'none';\n\nform.addEventListener('submit', function (e) {\n  main.style.display = 'none';\n  loader.style.display = 'block';\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.default)(input.value).then((weather) => {\n    loader.style.display = 'none';\n    for (let prop in weather) {\n      let div = document.querySelector(`.${prop}_div`);\n      div.innerHTML = '';\n\n      let h3 = document.createElement('h3');\n      h3.innerHTML = `${weather[prop]}`;\n\n      div.append(h3);\n      main.append(div);\n\n      console.log(prop, weather[prop]);\n    }\n    main.style.display = 'block';\n  });\n\n  input.value = '';\n\n  e.preventDefault();\n});\n\nif (false) {}\n\n\n//# sourceURL=webpack://weather-app-toc/./weather/index.js?");

/***/ }),

/***/ "./weather/utils.js":
/*!**************************!*\
  !*** ./weather/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchWeather = async (city) => {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cc2320d0a9fdacdd2495b7390e523460`\n  );\n  const weatherInfo = await response.json();\n\n  return weatherInfo;\n};\n\nconst getWeather = async (city) => {\n  let weatherInfo = await fetchWeather(city);\n  const weather = new Weather(weatherInfo);\n\n  return weather;\n};\n\nclass Weather {\n  constructor(weatherInfo) {\n    this.name = weatherInfo.name;\n    this.temp = `Temp: ${weatherInfo.main.temp}°C`;\n    this.temp_max = `Max. Temp: ${weatherInfo.main.temp_max}°C`;\n    this.temp_min = `Min. Temp: ${weatherInfo.main.temp_min}°C`;\n    this.humidity = `Humidity: ${weatherInfo.main.humidity}%`;\n    this.weather_main = weatherInfo.weather[0].main;\n    // this.weather_icon = weatherInfo.weather[0].icon;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather-app-toc/./weather/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./weather/index.js");
/******/ 	
/******/ })()
;