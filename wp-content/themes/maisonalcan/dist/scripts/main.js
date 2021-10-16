/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/themes/sage/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(10);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_historique__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_contact__ = __webpack_require__(9);
// import external dependencies


// Import everything from autoload


// import local dependencies






/** Populate Router instance with DOM routes */
var routes = new __WEBPACK_IMPORTED_MODULE_1__util_Router__["a" /* default */]({
  // All pages
  common: __WEBPACK_IMPORTED_MODULE_2__routes_common__["a" /* default */],
  // Home page
  home: __WEBPACK_IMPORTED_MODULE_3__routes_home__["a" /* default */],
  // Historique page
  historique: __WEBPACK_IMPORTED_MODULE_4__routes_historique__["a" /* default */],
  // Contact page
  contact: __WEBPACK_IMPORTED_MODULE_5__routes_contact__["a" /* default */],
});

// Load Events
jQuery(document).ready(function () { return routes.loadEvents(); });

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(4);


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */
var Router = function Router(routes) {
  this.routes = routes;
};

/**
 * Fire Router events
 * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
 * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
 * @param {string} [arg] Any custom argument to be passed to the event.
 */
Router.prototype.fire = function fire (route, event, arg) {
    if ( event === void 0 ) event = 'init';

  document.dispatchEvent(new CustomEvent('routed', {
    bubbles: true,
    detail: {
      route: route,
      fn: event,
    },
  }));
    
  var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';
  if (fire) {
    this.routes[route][event](arg);
  }
};

/**
 * Automatically load and fire Router events
 *
 * Events are fired in the following order:
 ** common init
 ** page-specific init
 ** page-specific finalize
 ** common finalize
 */
Router.prototype.loadEvents = function loadEvents () {
    var this$1 = this;

  // Fire common init JS
  this.fire('common');

  // Fire page-specific init JS, and then finalize JS
  document.body.className
    .toLowerCase()
    .replace(/-/g, '_')
    .split(/\s+/)
    .map(__WEBPACK_IMPORTED_MODULE_0__camelCase__["a" /* default */])
    .forEach(function (className) {
      this$1.fire(className);
      this$1.fire(className, 'finalize');
    });

  // Fire common finalize JS
  this.fire('common', 'finalize');
};

/* harmony default export */ __webpack_exports__["a"] = (Router);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["a"] = (function (str) { return ("" + (str.charAt(0).toLowerCase()) + (str.replace(/[\W_]/g, '|').split('|')
  .map(function (part) { return ("" + (part.charAt(0).toUpperCase()) + (part.slice(1))); })
  .join('')
  .slice(1))); });;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_arrow_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_arrow_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__util_arrow_json__);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // JavaScript to be fired on all pages;
  },
  finalize: function finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    //Locomotive Scroll
    // eslint-disable-next-line no-unused-vars, no-undef
    if(!LocomotiveScroll) {
      document.querySelector('html').classList.remove('has-scroll-init');
    }
    else {
      // eslint-disable-next-line no-unused-vars, no-undef
      var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        offset: ['20%', 0],
      });

      //Trigger des lotties quand on arrive sur l'élément'
      scroll.on('call', function (func, state, elem) {
        if(func === 'arrow' && !elem.el.classList.contains('drawed')) {
          elem.el.classList.add('drawed');
          if(!elem.el.querySelector('.arrow svg')) {
            setTimeout(function () {
              var params = {
                container: elem.el.querySelector('.arrow'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: __WEBPACK_IMPORTED_MODULE_0__util_arrow_json___default.a,
              };
        
              // eslint-disable-next-line no-undef, no-unused-vars
              var anim = lottie.loadAnimation(params);
            }, 1000);
          }
        }
      });
    }

    //Besoin de la ligne suivante pour que le scroll soit mesuré correctement
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'));
    }, 2000);

    //Nav
    document.querySelector('.header .menu-toggle').addEventListener('click', function () {
      document.querySelector('html').classList.toggle('nav-open');
      window.scrollTo(0, 0);
    });
  },
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"v":"5.7.4","fr":60,"ip":0,"op":300,"w":1200,"h":1816,"nm":"ARROW 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Arrow","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[599.599,907.332,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[1013,1013,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[108.137,164.484],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path 14","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[9.648,60.257,0],"ix":2,"l":2},"a":{"a":0,"k":[45.112,21.985,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,0],[45.253,43.576],[90.224,0]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.005,0.028],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 14","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"t":137,"s":[100]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_outExpo(t, b, c, d) {\n    var OUT_EXPO_CORRECTION = 1.000976;\n    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1, val2, val2, val3;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = $bm_sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = $bm_sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = $bm_sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outExpo(t, sX, eX, d);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            val3 = easeandwizz_outExpo(t, sZ, eZ, d);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":21,"op":300,"st":-20,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path 13","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-22.172,0,0],"ix":2,"l":2},"a":{"a":0,"k":[31.896,82.242,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,0],[63.793,60.356],[63.793,164.484]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 13","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":85,"s":[100]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_outExpo(t, b, c, d) {\n    var OUT_EXPO_CORRECTION = 1.000976;\n    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1, val2, val2, val3;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = $bm_sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = $bm_sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = $bm_sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outExpo(t, sX, eX, d);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            val3 = easeandwizz_outExpo(t, sZ, eZ, d);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // eslint-disable-next-line no-unused-vars, no-undef
    var swiperHistory = new Swiper('.history .cards', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      spaceBetween: 35,
      pagination: {
        el: '.history .pager',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1.3,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 52,
        },
      },
    });
  },
  finalize: function finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // eslint-disable-next-line no-unused-vars, no-undef
    var swiperHistory = new Swiper('.facts .inner', {
      // Optional parameters
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 35,
      pagination: {
        el: '.facts .pager',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 100,
          spaceBetween: 0,
        },
      },
    });
  },
  finalize: function finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    
  },
  finalize: function finalize() {
    // Trigger resize locosroll après un form submit
    var wpcf7Elm = document.querySelector( '.wpcf7' );
    if(wpcf7Elm) {
      ['wpcf7invalid','wpcf7spam','wpcf7mailsent','wpcf7mailfailed','wpcf7submit'].forEach( function (evt) { return wpcf7Elm.addEventListener(evt, function(){
          setTimeout(function () {  
            window.dispatchEvent(new Event('resize'));
          }, 0);
        }, false); }
      );
    }
  },
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map