/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var layout = __webpack_require__(8);
	m.route(document.body, "/", {
	  "/": m(layout, { body: __webpack_require__(9) }),
	  "/login": m(layout, { body: __webpack_require__(6) }),
	  "/register": m(layout, { body: __webpack_require__(7) })
	});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  view: (ctrl, args) => m("h1", "login")
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  view: () => m("h1", "register")
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  view: (ctrl, args) => {
	    return m(".app", [
	    //any links that will be persistant accross all pages
	    m("a", { href: "/", config: m.route }, "home"), m("a", { href: "/register", config: m.route }, "register"), m("a", { href: "/login", config: m.route }, "login"), args.body ? args.body : m("div", "body here")]);
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  view: (ctrl, args) => m("h1", "home")
	};

/***/ }
/******/ ]);