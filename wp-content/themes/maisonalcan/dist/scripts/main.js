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
module.exports = __webpack_require__(11);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_home__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_historique__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_contact__ = __webpack_require__(10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_loading_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_loading_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__util_loading_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_arrow_json__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_arrow_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__util_arrow_json__);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // JavaScript to be fired on all pages;
  },
  finalize: function finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

    function initToute() {
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
                  animationData: __WEBPACK_IMPORTED_MODULE_1__util_arrow_json___default.a,
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
    }

    //Show loader once per session
    var loaderElem = document.querySelector('.loader');
    if (!sessionStorage.getItem('loaded')) {
      sessionStorage.setItem('loaded', true);

      var paramsLoader = {
        container: loaderElem.querySelector('.svg'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: __WEBPACK_IMPORTED_MODULE_0__util_loading_json___default.a,
      };

      // eslint-disable-next-line no-undef, no-unused-vars
      var animLoader = lottie.loadAnimation(paramsLoader);
      animLoader.onLoopComplete = function () {
        loaderElem.classList.add('is-complete');
        setTimeout(function () {
          initToute();
          
          setTimeout(function () {
            animLoader.destroy();
            loaderElem.remove();
          }, 250);
        }, 250);
      }
    }
    else {
      loaderElem.remove();
      initToute();
    }
  },
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"v":"5.7.4","fr":60,"ip":0,"op":270,"w":1920,"h":1893,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,946.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[165,165,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"MASK 7","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"07","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-90.25,45,0],"to":[15.083,-7.708,0],"ti":[-15.083,7.708,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[0.25,-1.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0.25,-1.25,0],"to":[14.917,7.667,0],"ti":[-14.917,-7.667,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[89.75,44.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[89.75,44.75,0],"to":[-30,0.042,0],"ti":[30,-0.042,0]},{"t":239,"s":[-90.25,45,0]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;","l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,331.031],[28.5,334.906],[28.5,443.719],[38,443.719],[38,334.906]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,331.031],[28.5,334.906],[28.5,443.719],[38,443.719],[38,334.906]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[1]},{"t":149,"s":[7]}],"ix":5,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.127,0.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"MASK 6","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"06","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-73.75,38.5,0],"to":[12.333,-6.625,0],"ti":[-12.333,6.625,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[0.25,-1.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0.25,-1.25,0],"to":[12.25,6.5,0],"ti":[-12.25,-6.5,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[73.75,37.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[73.75,37.75,0],"to":[-24.583,0.125,0],"ti":[24.583,-0.125,0]},{"t":239,"s":[-73.75,38.5,0]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;","l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,331.031],[28.5,334.906],[28.5,443.719],[38,443.719],[38,334.906]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,331.031],[28.5,334.906],[28.5,443.719],[38,443.719],[38,334.906]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[2.5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[2.5]},{"t":149,"s":[7]}],"ix":5,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.127,0.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"MASK 5","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"05","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-58.75,31,0],"to":[9.833,-5.375,0],"ti":[-9.833,5.375,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[0.25,-1.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0.25,-1.25,0],"to":[9.667,5.417,0],"ti":[-9.667,-5.417,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[58.25,31.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[58.25,31.25,0],"to":[-19.5,-0.042,0],"ti":[19.5,0.042,0]},{"t":239,"s":[-58.75,31,0]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;","l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,321.906],[22.25,331.156],[22.25,449.969],[44.25,449.969],[44.25,331.156]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,321.906],[22.25,331.156],[22.25,449.969],[44.25,449.969],[44.25,331.156]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[3.4]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[3.4]},{"t":149,"s":[7]}],"ix":5,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.127,0.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"MASK 4","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"04","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-43.25,23.25,0],"to":[7.25,-4.083,0],"ti":[-7.25,4.083,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[0.25,-1.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0.25,-1.25,0],"to":[7.167,4,0],"ti":[-7.167,-4,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[43.25,22.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[43.25,22.75,0],"to":[-14.417,0.083,0],"ti":[14.417,-0.083,0]},{"t":239,"s":[-43.25,23.25,0]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;","l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,309.656],[13.25,326.406],[13.25,458.969],[53.25,458.969],[53.25,326.406]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,309.656],[13.25,326.406],[13.25,458.969],[53.25,458.969],[53.25,326.406]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[4.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[4.3]},{"t":149,"s":[7]}],"ix":5,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.127,0.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"MASK 3","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"03","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-28.25,14.75,0],"to":[4.75,-2.667,0],"ti":[-4.75,2.667,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[0.25,-1.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0.25,-1.25,0],"to":[4.5,2.833,0],"ti":[-4.5,-2.833,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[27.25,15.75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[27.25,15.75,0],"to":[-9.25,-0.167,0],"ti":[9.25,0.167,0]},{"t":239,"s":[-28.25,14.75,0]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;","l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,297.156],[3.25,321.406],[3.25,468.969],[63.25,468.969],[63.25,321.406]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,297.156],[3.25,321.406],[3.25,468.969],[63.25,468.969],[63.25,321.406]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[5.2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[5.2]},{"t":149,"s":[7]}],"ix":5,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.127,0.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"MASK 2","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"02","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-14.25,6.75,0],"to":[2.417,-1.333,0],"ti":[-2.417,1.333,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[0.25,-1.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0.25,-1.25,0],"to":[2.25,1.083,0],"ti":[-2.25,-1.083,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[13.75,5.25,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[13.75,5.25,0],"to":[-4.667,0.25,0],"ti":[4.667,-0.25,0]},{"t":239,"s":[-14.25,6.75,0]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;","l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,283.156],[-7.5,315.656],[-7.5,479.469],[74,479.469],[74,315.656]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,283.156],[-7.5,315.656],[-7.5,479.469],[74,479.469],[74,315.656]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[7]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[6.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[6.1]},{"t":149,"s":[7]}],"ix":5,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.127,0.267],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"MASK","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":98,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.94028894761,0.16826023775,0.16826023775,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.190064852845,0.977111816406,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"01","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[34.5,379,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[33.5,267.5],[-19.5,310],[-19.5,491],[86.5,491],[86.5,310]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":149,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.5,267.5],[-19.5,320],[-19.5,491],[86.5,491],[86.5,301]],"c":true}]},{"t":239,"s":[{"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[25.5,267.5],[-19.5,301],[-19.5,491],[86.5,491],[86.5,320]],"c":true}]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_inoutExpo(t, b, c, d) {\n    var CORRECTION = 0.000976563;\n    var v;\n    if ((t /= d / 2) < 1) {\n        v = $bm_sub(Math.pow(2, $bm_mul(10, $bm_sub(t, 1))), CORRECTION);\n    } else {\n        v = $bm_sum($bm_sum($bm_neg(Math.pow(2, $bm_mul(-10, $bm_sub(t, 1)))), 2), CORRECTION);\n    }\n    return $bm_sum(b, $bm_mul($bm_div(v, 2), c));\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1.time;\n    eX = $bm_sub(key2.time, key1.time);\n    if (time < key1.time || time > key2.time) {\n        return null;\n    } else {\n        return valueAtTime(easeandwizz_inoutExpo(t, sX, eX, d));\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":7,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270,"st":0,"bm":0}],"markers":[]}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"v":"5.7.4","fr":60,"ip":0,"op":300,"w":1200,"h":1816,"nm":"ARROW 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Arrow","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[599.599,907.332,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[1013,1013,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[108.137,164.484],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path 14","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[9.648,60.257,0],"ix":2,"l":2},"a":{"a":0,"k":[45.112,21.985,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,0],[45.253,43.576],[90.224,0]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.005,0.028],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 14","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"t":137,"s":[100]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_outExpo(t, b, c, d) {\n    var OUT_EXPO_CORRECTION = 1.000976;\n    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1, val2, val2, val3;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = $bm_sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = $bm_sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = $bm_sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outExpo(t, sX, eX, d);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            val3 = easeandwizz_outExpo(t, sZ, eZ, d);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":21,"op":300,"st":-20,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path 13","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-22.172,0,0],"ix":2,"l":2},"a":{"a":0,"k":[31.896,82.242,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,0],[63.793,60.356],[63.793,164.484]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Path 13","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":85,"s":[100]}],"ix":2,"x":"var $bm_rt;\nfunction easeandwizz_outExpo(t, b, c, d) {\n    var OUT_EXPO_CORRECTION = 1.000976;\n    return t == d ? b + c : c * OUT_EXPO_CORRECTION * (-Math.pow(2, -10 * t / d) + 1) + b;\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1, val2, val2, val3;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key($bm_sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = $bm_sub(time, key1.time);\n    d = $bm_sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = $bm_sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = $bm_sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = $bm_sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outExpo(t, sX, eX, d);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outExpo(t, sY, eY, d);\n            val3 = easeandwizz_outExpo(t, sZ, eZ, d);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map