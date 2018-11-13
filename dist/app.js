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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/elements/EmptySearchbox.js":
/*!*******************************************!*\
  !*** ./src/js/elements/EmptySearchbox.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
*
* Simple method for an appearing / disappearing 'clear input' icon
* for your input text fields
* @author: Patrick Teulings
*
*/

var EmptySearchbox = function () {
  function EmptySearchbox(_elem) {
    _classCallCheck(this, EmptySearchbox);

    this.elem = _elem;

    this.config = {
      target: '.js-target',
      emptyTrigger: '.js-empty-trigger'
    };

    Object.assign(this.config, JSON.parse(this.elem.dataset.config));

    this.target = this.elem.querySelector(this.config.target);
    this.trigger = this.elem.querySelector(this.config.emptyTrigger);

    this.addEvents();
  }

  /**
  *
  * @desc Adds our initial events
  * @param
  * @returns
  *
  */

  _createClass(EmptySearchbox, [{
    key: 'addEvents',
    value: function addEvents() {
      var _this = this;

      this.target.addEventListener('keyup', function (e) {
        _this.handleKeyDown();
      });

      this.trigger.addEventListener('click', function (e) {
        _this.resetField();
      });
    }

    /**
    *
    * @desc Check whether the input field is empty or not
    *
    */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown() {
      if (this.target.value !== '') {
        this.trigger.classList.add('is-active');
      } else {
        this.resetField();
      }
    }

    /**
    *
    * @desc Resets our fields content
    *
    */

  }, {
    key: 'resetField',
    value: function resetField() {
      this.target.value = '';
      this.trigger.classList.remove('is-active');
    }
  }]);

  return EmptySearchbox;
}();

exports.default = EmptySearchbox;

/***/ }),

/***/ "./src/js/modules/toggle/ElementToggle.js":
/*!************************************************!*\
  !*** ./src/js/modules/toggle/ElementToggle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementToggle = function () {
  // Constructor always gets called, pass initial params here
  function ElementToggle(_elem) {
    _classCallCheck(this, ElementToggle);

    this.elem = _elem;
    this.config = JSON.parse(_elem.dataset.config);
    this.trigger = '';
    this.target = '';
    this.activeClass = this.config.activeClass;
    this.isOpen = false;
    this.initialize();
  }

  _createClass(ElementToggle, [{
    key: 'initialize',
    value: function initialize() {
      this.isOpen = this.config.initialState && !this.config.initialState === 'open';
      this.trigger = this.elem.querySelector(this.config.toggleTrigger);
      this.target = this.elem.querySelector(this.config.toggleTarget);
      this.addEvents();
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this = this;

      this.trigger.onclick = function (e) {
        return _this.toggleElement(e);
      };
    }
  }, {
    key: 'toggleElement',
    value: function toggleElement() {
      if (this.isOpen) {
        this.closeElement();
      } else {
        this.openElement();
      }
    }
  }, {
    key: 'openElement',
    value: function openElement() {
      this.trigger.classList.add('is-open');
      this.target.classList.add('is-open');
      this.isOpen = true;
    }
  }, {
    key: 'closeElement',
    value: function closeElement() {
      this.trigger.classList.remove('is-open');
      this.target.classList.remove('is-open');
      this.isOpen = false;
    }
  }]);

  return ElementToggle;
}();

exports.default = ElementToggle;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ElementToggle = __webpack_require__(/*! ./modules/toggle/ElementToggle */ "./src/js/modules/toggle/ElementToggle.js");

var _ElementToggle2 = _interopRequireDefault(_ElementToggle);

var _EmptySearchbox = __webpack_require__(/*! ./elements/EmptySearchbox */ "./src/js/elements/EmptySearchbox.js");

var _EmptySearchbox2 = _interopRequireDefault(_EmptySearchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggles = document.querySelectorAll('[data-module="toggle"]');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = toggles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var toggle = _step.value;

    var toggler = new _ElementToggle2.default(toggle);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var searchboxes = document.querySelectorAll('[data-module="searchbox"]');

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = searchboxes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var searchbox = _step2.value;

    searchbox = new _EmptySearchbox2.default(searchbox);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/js/script.js ./src/scss/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/script.js */"./src/js/script.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map