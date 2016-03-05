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

	var layout = __webpack_require__(2);
	m.route(document.body, "/", {
	  "/": m(layout, { body: __webpack_require__(3) }),
	  "/login": m(layout, { body: __webpack_require__(5) }),
	  "/register": m(layout, { body: __webpack_require__(6) }),
	  "/content/:content_id": m(layout, { body: __webpack_require__(7) })
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var navbarWrapper = __webpack_require__(4);

	// wierd navbar srtucture api ;-)
	var links = [{
	  text: "register", url: "/register", direction: "right", drops: [{ text: "As student", url: "/student" }, { text: "As Admin", url: "/admin" }]
	}, { text: "login", url: "/login", direction: "right" }, { text: "home", url: "/", direction: "right" }];

	module.exports = {
	  view: (ctrl, args) => {
	    return m(".app", [m(navbarWrapper, {
	      color: "blue",
	      logo: {
	        position: "left",
	        text: "DEDASH"
	      },
	      links: links
	    }), args.body ? args.body : m("div", "body here")]);
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	*peoples created content comes here placed in cards, cute ones
	*then when clicked it goest to /content route where the content
	*clicked is rendered
	*/

	module.exports = {
	  view: (ctrl, args) => {
	    return m(".app", [m("h1", "content area")]);
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(8);

	module.exports = {
	  view: (ctrl, args) => {
	    return m("nav", { class: args.color }, [m("div", { class: "nav-wrapper" }, [m("a", { class: "brand-logo " + args.logo.position }, args.logo.text), m("ul", { id: "nav-mobile", class: "hide-on-med-and-down" }, [
	    //construct the nav items
	    args.links.map(link => m(navItem, {
	      text: link.text,
	      url: link.url,
	      direction: link.direction,
	      drops: link.drops ? link.drops.map(drop => m(navItem, {
	        text: drop.text,
	        url: drop.url
	      })) : console.log(" ")
	    }))
	    //awesomeness drop
	    ])])]);
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  view: (ctrl, args) => m("h1", "login")
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  view: () => m("h1", "register")
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
	*peoples created content comes here , you scroll down to show the content being viewed if its a long thing etc
	*if its a video etc
	*/

	module.exports = {
	  view: (ctrl, args) => m("h1", "home")
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var randrom = Math.random();
	console.log(randrom);
	module.exports = {
	  view: (ctrl, args) => {
	    args.drops ? console.log(args.drops) : console.log(" ");

	    return m("span", [
	    //render normal link
	    m("li", {
	      class: args.direction + " " + (m.route() === args.url ? "active" : " ")

	    }, [m("a", {
	      href: args.url,
	      class: args.drops ? " dropdown-button" : " ",
	      config: m.route,
	      "data-activates": randrom
	    }, args.text)]),

	    //make drop links in case there is a drop in the json
	    args.drops ? m("ul", {
	      class: "dropdown-content",
	      id: randrom,
	      config: function () {
	        $('.dropdown-button').dropdown({
	          inDuration: 300,
	          outDuration: 225,
	          constrain_width: false, // Does not change width of dropdown to that of the activator
	          hover: true, // Activate on hover
	          gutter: 0, // Spacing from edge
	          belowOrigin: true, // Displays dropdown below the button
	          alignment: 'left' // Displays dropdown with edge aligned to the left of button
	        });
	      }
	    }, [args.drops.map(() => m("li", {
	      class: m.route() === args.url ? "active" : " "
	    }, [m("a", {
	      href: args.url,
	      config: m.route
	    }, args.text)]))]) : console.log("no drops for this one")]);
	  }
	};

/***/ }
/******/ ]);