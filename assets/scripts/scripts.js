// -----------------------------------------------------------
// SWAN CORE  by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// PREVENT DEFAULT for href="#" links
// -----------------------------------------------------------

var nullAnchors = document.querySelectorAll("a[href='#']");

for (var i = 0; i < nullAnchors.length; i++) {
    nullAnchors[i].addEventListener("click", preventDefaultEvent);
}

function preventDefaultEvent(event) {
    event.preventDefault();
}

// -----------------------------------------------------------
// MENU by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// MENU RESPONSIVE
// -----------------------------------------------------------

var menu = document.querySelector(".menu"),
    menuShow = document.querySelector(".btnMenu"),
    menuFadeBg = document.querySelector(".menu-modal-bg");

function showMobileBtn() {
    if (window.innerWidth <= 768) {
        menu.className = "menu-mobile";
    } else {
        menu.className = "menu";
    }
 }

// On click Events
menuShow.onclick = function(event){
     menu.className += " is-visible";
     menuFadeBg.className += " is-visible";
     event.preventDefault();
};
// Shame but works
menuFadeBg.onclick = function(event){
     // Delete and Write menu classes
     menu.className = "";
     menu.className = "menu-mobile";
     // Delete and Write fade screen classes
     menuFadeBg.className = "";
     menuFadeBg.className = "menu-modal-bg";
     event.preventDefault();
};

// ACTIVE MENU ITEM
// -----------------------------------------------------------

  function activeMenuItem() {
    var menulinks = document.querySelector(".menu, .menu-mobile").getElementsByTagName("a"),
        i = 0,
        length = menulinks.length,
        fullpath = location.href.split("#")[0];

    for(; i < length; i++) {
        if(menulinks[i].href.split("#")[0] === fullpath) {
            menulinks[i].className += " active";
        }
    }
}

// Execute Functions
document.addEventListener("DOMContentLoaded", activeMenuItem);
showMobileBtn();
window.onresize = function() {
  showMobileBtn();
}

// -----------------------------------------------------------
// SWITCH THEME  by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// SWITCH STYLESHEET (Black Swan / White Swan)
// -----------------------------------------------------------

// Execute Function
document.addEventListener("DOMContentLoaded", currentThemeValue);

var btnSwapTheme = document.getElementById("swap-theme"),
    blackSwan = document.styleSheets[0],
    whiteSwan = document.styleSheets[1];

btnSwapTheme.onchange = function() {
  if (whiteSwan.disabled === false) {
      whiteSwan.disabled = true;
      btnSwapTheme.checked = true;
      localStorage.setItem("currentTheme", "black");
  } else {
      whiteSwan.disabled = false;
      btnSwapTheme.checked = false;
      localStorage.setItem("currentTheme", "white");
  }

}

function currentThemeValue() {
    if (localStorage.getItem("currentTheme") === "black" ) {
        whiteSwan.disabled = true;
        btnSwapTheme.checked = true;
    } else {
        whiteSwan.disabled = false;
        btnSwapTheme.checked = false;
    }
}

// -----------------------------------------------------------
// TOGGLE  by Sebastian Serna - 2016
// -----------------------------------------------------------
// Provisional vanilla code // This solution is temporal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// TOGGLE (Hide / Show element)
// -----------------------------------------------------------

var toggleBtn = document.querySelectorAll(".js-toggle");

for (var i = 0; i < toggleBtn.length; i++) {

    toggleBtn[i].addEventListener("click", function (event) {
      var nextEl = this.nextElementSibling;

      if (nextEl.className === "js-toggle-hidden") {
          nextEl.className = "js-toggle-visible";
      } else {
          nextEl.className = "js-toggle-hidden";
      }
  });
}

// -----------------------------------------------------------
// MAP VIEW  by Sebastian Serna - 2016
// -----------------------------------------------------------
// Based on CodyHouse https://codyhouse.co/gem/custom-google-map/
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


document.addEventListener("DOMContentLoaded", customMap);

var markerSvgPath = "/themes/swan-october/assets/images/icon-location.svg";
var markerPngPath = "/themes/swan-october/assets/images/icon-location.png";

function customMap() {
	//set your google maps parameters
	var latitude = 51.5255069,
		longitude = -0.0836207,
		map_zoom = 14;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? markerPngPath : markerSvgPath ;

	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2d313f',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#f5f5f5"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#f5f5f5"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#eeeeee"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#e5e5e5"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#ffffff"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#dadada"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.line",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#e5e5e5"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.station",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#eeeeee"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#c9c9c9"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  }
	];

	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
    //inizialize the map
	var map = new google.maps.Map(document.querySelector(".mapview-canvas"), map_options);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
	  	var controlUIzoomIn= document.querySelector(".mapview-zoom-in"),
	  		controlUIzoomOut= document.querySelector(".mapview-zoom-out");
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
}

// -----------------------------------------------------------
// MODAL DIALOG
// -----------------------------------------------------------
// Based on Vanilla Modal https://github.com/thephuse/vanilla-modal
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('VanillaModal', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.VanillaModal = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var VanillaModal = function () {

    /**
     * @param {Object} [userSettings]
     */

    function VanillaModal(userSettings) {
      _classCallCheck(this, VanillaModal);

      this.$$ = {
        modal: '.modal',
        modalInner: '.modal-inner',
        modalContent: '.modal-content',
        open: '[rel="modal:open"]',
        close: '[rel="modal:close"]',
        page: 'body',
        class: 'modal-visible',
        loadClass: 'vanilla-modal',
        clickOutside: true,
        closeKeys: [27],
        transitions: true,
        transitionEnd: null,
        onBeforeOpen: null,
        onBeforeClose: null,
        onOpen: null,
        onClose: null
      };

      this._applyUserSettings(userSettings);
      this.error = false;
      this.isOpen = false;
      this.current = null;
      this.open = this._open.bind(this);
      this.close = this._close.bind(this);
      this.$$.transitionEnd = this._transitionEndVendorSniff();
      this.$ = this._setupDomNodes();

      if (!this.error) {
        this._addLoadedCssClass();
        this._events().add();
      } else {
        console.error('Please fix errors before proceeding.');
      }
    }

    /**
     * @param {Object} userSettings
     */


    _createClass(VanillaModal, [{
      key: '_applyUserSettings',
      value: function _applyUserSettings(userSettings) {
        if ((typeof userSettings === 'undefined' ? 'undefined' : _typeof(userSettings)) === 'object') {
          for (var i in userSettings) {
            if (userSettings.hasOwnProperty(i)) {
              this.$$[i] = userSettings[i];
            }
          }
        }
      }
    }, {
      key: '_transitionEndVendorSniff',
      value: function _transitionEndVendorSniff() {
        if (this.$$.transitions === false) return;
        var el = document.createElement('div');
        var transitions = {
          'transition': 'transitionend',
          'OTransition': 'otransitionend',
          'MozTransition': 'transitionend',
          'WebkitTransition': 'webkitTransitionEnd'
        };
        for (var i in transitions) {
          if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
          }
        }
      }
    }, {
      key: '_getNode',
      value: function _getNode(selector, parent) {
        var targetNode = parent || document;
        var node = targetNode.querySelector(selector);
        if (!node) {
          this.error = true;
          return console.error(selector + ' not found in document.');
        }
        return node;
      }
    }, {
      key: '_setupDomNodes',
      value: function _setupDomNodes() {
        var $ = {};
        $.modal = this._getNode(this.$$.modal);
        $.page = this._getNode(this.$$.page);
        $.modalInner = this._getNode(this.$$.modalInner, this.modal);
        $.modalContent = this._getNode(this.$$.modalContent, this.modal);
        return $;
      }
    }, {
      key: '_addLoadedCssClass',
      value: function _addLoadedCssClass() {
        this._addClass(this.$.page, this.$$.loadClass);
      }
    }, {
      key: '_addClass',
      value: function _addClass(el, className) {
        if (el instanceof HTMLElement === false) return;
        var cssClasses = el.className.split(' ');
        if (cssClasses.indexOf(className) === -1) {
          cssClasses.push(className);
        }
        el.className = cssClasses.join(' ');
      }
    }, {
      key: '_removeClass',
      value: function _removeClass(el, className) {
        if (el instanceof HTMLElement === false) return;
        var cssClasses = el.className.split(' ');
        if (cssClasses.indexOf(className) > -1) {
          cssClasses.splice(cssClasses.indexOf(className), 1);
        }
        el.className = cssClasses.join(' ');
      }
    }, {
      key: '_setOpenId',
      value: function _setOpenId() {
        var id = this.current.id || 'anonymous';
        this.$.page.setAttribute('data-current-modal', id);
      }
    }, {
      key: '_removeOpenId',
      value: function _removeOpenId() {
        this.$.page.removeAttribute('data-current-modal');
      }
    }, {
      key: '_getElementContext',
      value: function _getElementContext(e) {
        if (e && typeof e.hash === 'string') {
          return document.querySelector(e.hash);
        } else if (typeof e === 'string') {
          return document.querySelector(e);
        } else {
          return console.error('No selector supplied to open()');
        }
      }
    }, {
      key: '_open',
      value: function _open(matches, e) {
        this._releaseNode();
        this.current = this._getElementContext(matches);
        if (this.current instanceof HTMLElement === false) return console.error('VanillaModal target must exist on page.');
        if (typeof this.$$.onBeforeOpen === 'function') this.$$.onBeforeOpen.call(this, e);
        this._captureNode();
        this._addClass(this.$.page, this.$$.class);
        this._setOpenId();
        this.isOpen = true;
        if (typeof this.$$.onOpen === 'function') this.$$.onOpen.call(this, e);
      }
    }, {
      key: '_detectTransition',
      value: function _detectTransition() {
        var css = window.getComputedStyle(this.$.modal, null);
        var transitionDuration = ['transitionDuration', 'oTransitionDuration', 'MozTransitionDuration', 'webkitTransitionDuration'];
        var hasTransition = transitionDuration.filter(function (i) {
          if (typeof css[i] === 'string' && parseFloat(css[i]) > 0) {
            return true;
          }
        });
        return hasTransition.length ? true : false;
      }
    }, {
      key: '_close',
      value: function _close(e) {
        if (this.isOpen === true) {
          this.isOpen = false;
          if (typeof this.$$.onBeforeClose === 'function') this.$$.onBeforeClose.call(this, e);
          this._removeClass(this.$.page, this.$$.class);
          var transitions = this._detectTransition();
          if (this.$$.transitions && this.$$.transitionEnd && transitions) {
            this._closeModalWithTransition(e);
          } else {
            this._closeModal(e);
          }
        }
      }
    }, {
      key: '_closeModal',
      value: function _closeModal(e) {
        this._removeOpenId(this.$.page);
        this._releaseNode();
        this.isOpen = false;
        this.current = null;
        if (typeof this.$$.onClose === 'function') this.$$.onClose.call(this, e);
      }
    }, {
      key: '_closeModalWithTransition',
      value: function _closeModalWithTransition(e) {
        var _closeTransitionHandler = function () {
          this.$.modal.removeEventListener(this.$$.transitionEnd, _closeTransitionHandler);
          this._closeModal(e);
        }.bind(this);
        this.$.modal.addEventListener(this.$$.transitionEnd, _closeTransitionHandler);
      }
    }, {
      key: '_captureNode',
      value: function _captureNode() {
        if (this.current) {
          while (this.current.childNodes.length > 0) {
            this.$.modalContent.appendChild(this.current.childNodes[0]);
          }
        }
      }
    }, {
      key: '_releaseNode',
      value: function _releaseNode() {
        if (this.current) {
          while (this.$.modalContent.childNodes.length > 0) {
            this.current.appendChild(this.$.modalContent.childNodes[0]);
          }
        }
      }
    }, {
      key: '_closeKeyHandler',
      value: function _closeKeyHandler(e) {
        if (Object.prototype.toString.call(this.$$.closeKeys) !== '[object Array]' || this.$$.closeKeys.length === 0) return;
        if (this.$$.closeKeys.indexOf(e.which) > -1 && this.isOpen === true) {
          e.preventDefault();
          this.close(e);
        }
      }
    }, {
      key: '_outsideClickHandler',
      value: function _outsideClickHandler(e) {
        if (this.$$.clickOutside !== true) return;
        var node = e.target;
        while (node && node != document.body) {
          if (node === this.$.modalInner) return;
          node = node.parentNode;
        }
        this.close(e);
      }
    }, {
      key: '_matches',
      value: function _matches(e, selector) {
        var el = e.target;
        var matches = (el.document || el.ownerDocument).querySelectorAll(selector);
        for (var i = 0; i < matches.length; i++) {
          var child = el;
          while (child && child !== document.body) {
            if (child === matches[i]) return child;
            child = child.parentNode;
          }
        }
        return null;
      }
    }, {
      key: '_delegateOpen',
      value: function _delegateOpen(e) {
        var matches = this._matches(e, this.$$.open);
        if (matches) {
          e.preventDefault();
          e.delegateTarget = matches;
          return this.open(matches, e);
        }
      }
    }, {
      key: '_delegateClose',
      value: function _delegateClose(e) {
        if (this._matches(e, this.$$.close)) {
          e.preventDefault();
          return this.close(e);
        }
      }
    }, {
      key: '_events',
      value: function _events() {

        var _closeKeyHandler = this._closeKeyHandler.bind(this);
        var _outsideClickHandler = this._outsideClickHandler.bind(this);
        var _delegateOpen = this._delegateOpen.bind(this);
        var _delegateClose = this._delegateClose.bind(this);

        var add = function add() {
          this.$.modal.addEventListener('click', _outsideClickHandler, false);
          document.addEventListener('keydown', _closeKeyHandler, false);
          document.addEventListener('click', _delegateOpen, false);
          document.addEventListener('click', _delegateClose, false);
        };

        this.destroy = function () {
          this.close();
          this.$.modal.removeEventListener('click', _outsideClickHandler);
          document.removeEventListener('keydown', _closeKeyHandler);
          document.removeEventListener('click', _delegateOpen);
          document.removeEventListener('click', _delegateClose);
        };

        return {
          add: add.bind(this)
        };
      }
    }]);

    return VanillaModal;
  }();

  exports.default = VanillaModal;
  module.exports = exports['default'];
});

// -----------------------------------------------------------
// SCROLL SMOOTH
// -----------------------------------------------------------
// Based on Smooth Scroll https://github.com/cferdinandi/smooth-scroll
// and Gum Shoe https://github.com/cferdinandi/gumshoe
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.smoothScroll = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//

	var smoothScroll = {}; // Object for public APIs
	var supports = 'querySelector' in document && 'addEventListener' in root; // Feature test
	var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;

	// Default settings
	var defaults = {
		selector: '[data-scroll]',
		selectorHeader: null,
		speed: 500,
		easing: 'easeInOutCubic',
		offset: 0,
		callback: function () {}
	};


	//
	// Methods
	//

	/**
	 * Merge two or more objects. Returns a new object.
	 * @private
	 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get the height of an element.
	 * @private
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function ( elem ) {
		return Math.max( elem.scrollHeight, elem.offsetHeight, elem.clientHeight );
	};

	/**
	 * Get the closest matching element up the DOM tree.
	 * @private
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	var getClosest = function ( elem, selector ) {

		// Element.matches() polyfill
		if (!Element.prototype.matches) {
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function(s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}

		// Get closest match
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( elem.matches( selector ) ) return elem;
		}

		return null;

	};

	/**
	 * Escape special characters for use with querySelector
	 * @private
	 * @param {String} id The anchor ID to escape
	 * @author Mathias Bynens
	 * @link https://github.com/mathiasbynens/CSS.escape
	 */
	var escapeCharacters = function ( id ) {

		// Remove leading hash
		if ( id.charAt(0) === '#' ) {
			id = id.substr(1);
		}

		var string = String(id);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then throw an
			// `InvalidCharacterError` exception and terminate these steps.
			if (codeUnit === 0x0000) {
				throw new InvalidCharacterError(
					'Invalid character: the input contains U+0000.'
				);
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index === 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit === 0x002D
				)
			) {
				// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit === 0x002D ||
				codeUnit === 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// http://dev.w3.org/csswg/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}

		return '#' + result;

	};

	/**
	 * Calculate the easing pattern
	 * @private
	 * @link https://gist.github.com/gre/1650294
	 * @param {String} type Easing pattern
	 * @param {Number} time Time animation should take to complete
	 * @returns {Number}
	 */
	var easingPattern = function ( type, time ) {
		var pattern;
		if ( type === 'easeInQuad' ) pattern = time * time; // accelerating from zero velocity
		if ( type === 'easeOutQuad' ) pattern = time * (2 - time); // decelerating to zero velocity
		if ( type === 'easeInOutQuad' ) pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
		if ( type === 'easeInCubic' ) pattern = time * time * time; // accelerating from zero velocity
		if ( type === 'easeOutCubic' ) pattern = (--time) * time * time + 1; // decelerating to zero velocity
		if ( type === 'easeInOutCubic' ) pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
		if ( type === 'easeInQuart' ) pattern = time * time * time * time; // accelerating from zero velocity
		if ( type === 'easeOutQuart' ) pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
		if ( type === 'easeInOutQuart' ) pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
		if ( type === 'easeInQuint' ) pattern = time * time * time * time * time; // accelerating from zero velocity
		if ( type === 'easeOutQuint' ) pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
		if ( type === 'easeInOutQuint' ) pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
		return pattern || time; // no easing, no acceleration
	};

	/**
	 * Calculate how far to scroll
	 * @private
	 * @param {Element} anchor The anchor element to scroll to
	 * @param {Number} headerHeight Height of a fixed header, if any
	 * @param {Number} offset Number of pixels by which to offset scroll
	 * @returns {Number}
	 */
	var getEndLocation = function ( anchor, headerHeight, offset ) {
		var location = 0;
		if (anchor.offsetParent) {
			do {
				location += anchor.offsetTop;
				anchor = anchor.offsetParent;
			} while (anchor);
		}
		location = Math.max(location - headerHeight - offset, 0);
		return Math.min(location, getDocumentHeight() - getViewportHeight());
	};

	/**
	 * Determine the viewport's height
	 * @private
	 * @returns {Number}
	 */
	var getViewportHeight = function() {
		return Math.max( document.documentElement.clientHeight, root.innerHeight || 0 );
	};

	/**
	 * Determine the document's height
	 * @private
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	};

	/**
	 * Convert data-options attribute into an object of key/value pairs
	 * @private
	 * @param {String} options Link-specific options as a data attribute string
	 * @returns {Object}
	 */
	var getDataOptions = function ( options ) {
		return !options || !(typeof JSON === 'object' && typeof JSON.parse === 'function') ? {} : JSON.parse( options );
	};

	/**
	 * Get the height of the fixed header
	 * @private
	 * @param  {Node}   header The header
	 * @return {Number}        The height of the header
	 */
	var getHeaderHeight = function ( header ) {
		return !header ? 0 : ( getHeight( header ) + header.offsetTop );
	};

	/**
	 * Bring the anchored element into focus
	 * @private
	 */
	var adjustFocus = function ( anchor, endLocation, isNum ) {

		// Don't run if scrolling to a number on the page
		if ( isNum ) return;

		// Otherwise, bring anchor element into focus
		anchor.focus();
		if ( document.activeElement.id !== anchor.id ) {
			anchor.setAttribute( 'tabindex', '-1' );
			anchor.focus();
			anchor.style.outline = 'none';
		}
		root.scrollTo( 0 , endLocation );

	};

	/**
	 * Start/stop the scrolling animation
	 * @public
	 * @param {Node|Number} anchor  The element or position to scroll to
	 * @param {Element}     toggle  The element that toggled the scroll event
	 * @param {Object}      options
	 */
	smoothScroll.animateScroll = function ( anchor, toggle, options ) {

		// Options and overrides
		var overrides = getDataOptions( toggle ? toggle.getAttribute('data-options') : null );
		var animateSettings = extend( settings || defaults, options || {}, overrides ); // Merge user options with defaults

		// Selectors and variables
		var isNum = Object.prototype.toString.call( anchor ) === '[object Number]' ? true : false;
		var anchorElem = isNum || !anchor.tagName ? null : anchor;
		if ( !isNum && !anchorElem ) return;
		var startLocation = root.pageYOffset; // Current location on the page
		if ( animateSettings.selectorHeader && !fixedHeader ) {
			// Get the fixed header if not already set
			fixedHeader = document.querySelector( animateSettings.selectorHeader );
		}
		if ( !headerHeight ) {
			// Get the height of a fixed header if one exists and not already set
			headerHeight = getHeaderHeight( fixedHeader );
		}
		var endLocation = isNum ? anchor : getEndLocation( anchorElem, headerHeight, parseInt(animateSettings.offset, 10) ); // Location to scroll to
		var distance = endLocation - startLocation; // distance to travel
		var documentHeight = getDocumentHeight();
		var timeLapsed = 0;
		var percentage, position;

		/**
		 * Stop the scroll animation when it reaches its target (or the bottom/top of page)
		 * @private
		 * @param {Number} position Current position on the page
		 * @param {Number} endLocation Scroll to location
		 * @param {Number} animationInterval How much to scroll on this loop
		 */
		var stopAnimateScroll = function ( position, endLocation, animationInterval ) {
			var currentLocation = root.pageYOffset;
			if ( position == endLocation || currentLocation == endLocation || ( (root.innerHeight + currentLocation) >= documentHeight ) ) {

				// Clear the animation timer
				clearInterval(animationInterval);

				// Bring the anchored element into focus
				adjustFocus( anchor, endLocation, isNum );

				// Run callback after animation complete
				animateSettings.callback( anchor, toggle );

			}
		};

		/**
		 * Loop scrolling animation
		 * @private
		 */
		var loopAnimateScroll = function () {
			timeLapsed += 16;
			percentage = ( timeLapsed / parseInt(animateSettings.speed, 10) );
			percentage = ( percentage > 1 ) ? 1 : percentage;
			position = startLocation + ( distance * easingPattern(animateSettings.easing, percentage) );
			root.scrollTo( 0, Math.floor(position) );
			stopAnimateScroll(position, endLocation, animationInterval);
		};

		/**
		 * Set interval timer
		 * @private
		 */
		var startAnimateScroll = function () {
			clearInterval(animationInterval);
			animationInterval = setInterval(loopAnimateScroll, 16);
		};

		/**
		 * Reset position to fix weird iOS bug
		 * @link https://github.com/cferdinandi/smooth-scroll/issues/45
		 */
		if ( root.pageYOffset === 0 ) {
			root.scrollTo( 0, 0 );
		}

		// Start scrolling animation
		startAnimateScroll();

	};

	/**
	 * Handle has change event
	 * @private
	 */
	var hashChangeHandler = function (event) {

		// Get hash from URL
		// var hash = decodeURIComponent( escapeCharacters( root.location.hash ) );
		var hash;
		try {
			hash = escapeCharacters( decodeURIComponent( root.location.hash ) );
		} catch(e) {
			hash = escapeCharacters( root.location.hash );
		}

		// Only run if there's an anchor element to scroll to
		if ( !anchor ) return;

		// Reset the anchor element's ID
		anchor.id = anchor.getAttribute( 'data-scroll-id' );

		// Scroll to the anchored content
		smoothScroll.animateScroll( anchor, toggle );

		// Reset anchor and toggle
		anchor = null;
		toggle = null;

	};

	/**
	 * If smooth scroll element clicked, animate scroll
	 * @private
	 */
	var clickHandler = function (event) {

		// Don't run if right-click or command/control + click
		if ( event.button !== 0 || event.metaKey || event.ctrlKey ) return;

		// Check if a smooth scroll link was clicked
		toggle = getClosest( event.target, settings.selector );
		if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;

		// Only run if link is an anchor and points to the current page
		if ( toggle.hostname !== root.location.hostname || toggle.pathname !== root.location.pathname || !/#/.test(toggle.href) ) return;

		// Get the sanitized hash
		// var hash = decodeURIComponent( escapeCharacters( toggle.hash ) );
		// console.log(hash);
		var hash;
		try {
			hash = escapeCharacters( decodeURIComponent( toggle.hash ) );
		} catch(e) {
			hash = escapeCharacters( toggle.hash );
		}

		// If the hash is empty, scroll to the top of the page
		if ( hash === '#' ) {

			// Prevent default link behavior
			event.preventDefault();

			// Set the anchored element
			anchor = document.body;

			// Save or create the ID as a data attribute and remove it (prevents scroll jump)
			var id = anchor.id ? anchor.id : 'smooth-scroll-top';
			anchor.setAttribute( 'data-scroll-id', id );
			anchor.id = '';

			// If no hash change event will happen, fire manually
			// Otherwise, update the hash
			if ( root.location.hash.substring(1) === id ) {
				hashChangeHandler();
			} else {
				root.location.hash = id;
			}

			return;

		}

		// Get the anchored element
		anchor = document.querySelector( hash );

		// If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
		if ( !anchor ) return;
		anchor.setAttribute( 'data-scroll-id', anchor.id );
		anchor.id = '';

		// If no hash change event will happen, fire manually
		if ( toggle.hash === root.location.hash ) {
			event.preventDefault();
			hashChangeHandler();
		}

	};

	/**
	 * On window scroll and resize, only run events at a rate of 15fps for better performance
	 * @private
	 * @param  {Function} eventTimeout Timeout function
	 * @param  {Object} settings
	 */
	var resizeThrottler = function (event) {
		if ( !eventTimeout ) {
			eventTimeout = setTimeout(function() {
				eventTimeout = null; // Reset timeout
				headerHeight = getHeaderHeight( fixedHeader ); // Get the height of a fixed header if one exists
			}, 66);
		}
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	smoothScroll.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove event listeners
		document.removeEventListener( 'click', clickHandler, false );
		root.removeEventListener( 'resize', resizeThrottler, false );

		// Reset varaibles
		settings = null;
		anchor = null;
		toggle = null;
		fixedHeader = null;
		headerHeight = null;
		eventTimeout = null;
		animationInterval = null;
	};

	/**
	 * Initialize Smooth Scroll
	 * @public
	 * @param {Object} options User settings
	 */
	smoothScroll.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		smoothScroll.destroy();

		// Selectors and variables
		settings = extend( defaults, options || {} ); // Merge user options with defaults
		fixedHeader = settings.selectorHeader ? document.querySelector( settings.selectorHeader ) : null; // Get the fixed header
		headerHeight = getHeaderHeight( fixedHeader );

		// When a toggle is clicked, run the click handler
		document.addEventListener( 'click', clickHandler, false );

		// Listen for hash changes
		root.addEventListener('hashchange', hashChangeHandler, false);

		// If window is resized and there's a fixed header, recalculate its size
		if ( fixedHeader ) {
			root.addEventListener( 'resize', resizeThrottler, false );
		}

	};


	//
	// Public APIs
	//

	return smoothScroll;

});

// -----------------------------------------------------------
// GUMSHOE
// -----------------------------------------------------------
// Based on Gum Shoe https://github.com/cferdinandi/gumshoe
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*!
 * gumshoe v3.3.2: A simple, framework-agnostic scrollspy script.
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/gumshoe
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.gumshoe = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, (function (root) {

	'use strict';

	//
	// Variables
	//

	var gumshoe = {}; // Object for public APIs
	var supports = 'querySelector' in document && 'addEventListener' in root && 'classList' in document.createElement('_'); // Feature test
	var navs = []; // Array for nav elements
	var settings, eventTimeout, docHeight, header, headerHeight, currentNav;

	// Default settings
	var defaults = {
		selector: '[data-gumshoe] a',
		selectorHeader: '[data-gumshoe-header]',
		container: root,
		offset: 0,
		activeClass: 'active',
		callback: function () {}
	};


	//
	// Methods
	//

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists.
	 * @private
	 * @author Todd Motto
	 * @link   https://github.com/toddmotto/foreach
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function}              callback   Callback function for each iteration
	 * @param {Array|Object|NodeList} scope      Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function ( collection, callback, scope ) {
		if ( Object.prototype.toString.call( collection ) === '[object Object]' ) {
			for ( var prop in collection ) {
				if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
					callback.call( scope, collection[prop], prop, collection );
				}
			}
		} else {
			for ( var i = 0, len = collection.length; i < len; i++ ) {
				callback.call( scope, collection[i], i, collection );
			}
		}
	};

	/**
	 * Merge two or more objects. Returns a new object.
	 * @private
	 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get the height of an element.
	 * @private
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function ( elem ) {
		return Math.max( elem.scrollHeight, elem.offsetHeight, elem.clientHeight );
	};

	/**
	 * Get the document element's height
	 * @private
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	};

	/**
	 * Get an element's distance from the top of the Document.
	 * @private
	 * @param  {Node} elem The element
	 * @return {Number}    Distance from the top in pixels
	 */
	var getOffsetTop = function ( elem ) {
		var location = 0;
		if (elem.offsetParent) {
			do {
				location += elem.offsetTop;
				elem = elem.offsetParent;
			} while (elem);
		} else {
			location = elem.offsetTop;
		}
		location = location - headerHeight - settings.offset;
		return location >= 0 ? location : 0;
	};

	/**
	 * Determine if an element is in the viewport
	 * @param  {Node}    elem The element
	 * @return {Boolean}      Returns true if element is in the viewport
	 */
	var isInViewport = function ( elem ) {
		var distance = elem.getBoundingClientRect();
		return (
			distance.top >= 0 &&
			distance.left >= 0 &&
			distance.bottom <= (root.innerHeight || document.documentElement.clientHeight) &&
			distance.right <= (root.innerWidth || document.documentElement.clientWidth)
		);
	};

	/**
	 * Arrange nagivation elements from furthest from the top to closest
	 * @private
	 */
	var sortNavs = function () {
		navs.sort( (function (a, b) {
			if (a.distance > b.distance) {
				return -1;
			}
			if (a.distance < b.distance) {
				return 1;
			}
			return 0;
		}));
	};

	/**
	 * Calculate the distance of elements from the top of the document
	 * @public
	 */
	gumshoe.setDistances = function () {

		// Calculate distances
		docHeight = getDocumentHeight(); // The document
		headerHeight = header ? ( getHeight(header) + getOffsetTop(header) ) : 0; // The fixed header
		forEach(navs, (function (nav) {
			nav.distance = getOffsetTop(nav.target); // Each navigation target
		}));

		// When done, organization navigation elements
		sortNavs();

	};

	/**
	 * Get all navigation elements and store them in an array
	 * @private
	 */
	var getNavs = function () {

		// Get all navigation links
		var navLinks = document.querySelectorAll( settings.selector );

		// For each link, create an object of attributes and push to an array
		forEach( navLinks, (function (nav) {
			if ( !nav.hash ) return;
			var target = document.querySelector( nav.hash );
			if ( !target ) return;
			navs.push({
				nav: nav,
				target: target,
				parent: nav.parentNode.tagName.toLowerCase() === 'li' ? nav.parentNode : null,
				distance: 0
			});
		}));

	};


	/**
	 * Remove the activation class from the currently active navigation element
	 * @private
	 */
	var deactivateCurrentNav = function () {
		if ( currentNav ) {
			currentNav.nav.classList.remove( settings.activeClass );
			if ( currentNav.parent ) {
				currentNav.parent.classList.remove( settings.activeClass );
			}
		}
	};

	/**
	 * Add the activation class to the currently active navigation element
	 * @private
	 * @param  {Node} nav The currently active nav
	 */
	var activateNav = function ( nav ) {

		// If a current Nav is set, deactivate it
		deactivateCurrentNav();

		// Activate the current target's navigation element
		nav.nav.classList.add( settings.activeClass );
		if ( nav.parent ) {
			nav.parent.classList.add( settings.activeClass );
		}

		settings.callback( nav ); // Callback after methods are run

		// Set new currentNav
		currentNav = {
			nav: nav.nav,
			parent: nav.parent
		};

	};

	/**
	 * Determine which navigation element is currently active and run activation method
	 * @public
	 * @returns {Object} The current nav data.
	 */
	gumshoe.getCurrentNav = function () {

		// Get current position from top of the document
		var position = root.pageYOffset;

		// If at the bottom of the page and last section is in the viewport, activate the last nav
		if ( (root.innerHeight + position) >= docHeight && isInViewport( navs[0].target ) ) {
			activateNav( navs[0] );
			return navs[0];
		}

		// Otherwise, loop through each nav until you find the active one
		for (var i = 0, len = navs.length; i < len; i++) {
			var nav = navs[i];
			if ( nav.distance <= position ) {
				activateNav( nav );
				return nav;
			}
		}

		// If no active nav is found, deactivate the current nav
		deactivateCurrentNav();
		settings.callback();

	};

	/**
	 * If nav element has active class on load, set it as currently active navigation
	 * @private
	 */
	var setInitCurrentNav = function () {
		forEach(navs, (function (nav) {
			if ( nav.nav.classList.contains( settings.activeClass ) ) {
				currentNav = {
					nav: nav.nav,
					parent: nav.parent
				};
			}
		}));
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	gumshoe.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove event listeners
		settings.container.removeEventListener('resize', eventThrottler, false);
		settings.container.removeEventListener('scroll', eventThrottler, false);

		// Reset variables
		navs = [];
		settings = null;
		eventTimeout = null;
		docHeight = null;
		header = null;
		headerHeight = null;
		currentNav = null;

	};

	/**
	 * On window scroll and resize, only run events at a rate of 15fps for better performance
	 * @private
	 * @param  {Function} eventTimeout Timeout function
	 * @param  {Object} settings
	 */
	var eventThrottler = function (event) {
		if ( !eventTimeout ) {
			eventTimeout = setTimeout((function() {

				eventTimeout = null; // Reset timeout

				// If scroll event, get currently active nav
				if ( event.type === 'scroll' ) {
					gumshoe.getCurrentNav();
				}

				// If resize event, recalculate distances and then get currently active nav
				if ( event.type === 'resize' ) {
					gumshoe.setDistances();
					gumshoe.getCurrentNav();
				}

			}), 66);
		}
	};

	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	gumshoe.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		gumshoe.destroy();

		// Set variables
		settings = extend( defaults, options || {} ); // Merge user options with defaults
		header = document.querySelector( settings.selectorHeader ); // Get fixed header
		getNavs(); // Get navigation elements

		// If no navigation elements exist, stop running gumshoe
		if ( navs.length === 0 ) return;

		// Run init methods
		setInitCurrentNav();
		gumshoe.setDistances();
		gumshoe.getCurrentNav();

		// Listen for events
		settings.container.addEventListener('resize', eventThrottler, false);
		settings.container.addEventListener('scroll', eventThrottler, false);

	};


	//
	// Public APIs
	//

	return gumshoe;

}));

// -----------------------------------------------------------
// SLIDESHOW
// -----------------------------------------------------------
// Based on Swipe v2.2.3 https://github.com/lyfeyaj/swipe/
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// if the module has no dependencies, the above pattern can be simplified to
// eslint-disable-next-line no-extra-semi
;(function (root, factory) {
  // eslint-disable-next-line no-undef
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    // eslint-disable-next-line no-undef
    define([], function(){
      root.Swipe = factory();
      return root.Swipe;
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.Swipe = factory();
  }
}(this, function () {
  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
             typeof global == 'object' && global.global === global && global ||
             this;

  var _document = root.document;

  function Swipe(container, options) {

    'use strict';

    options = options || {};

    // setup initial vars
    var start = {};
    var delta = {};
    var isScrolling;

    // setup auto slideshow
    var delay = options.auto || 0;
    var interval;

    // utilities
    // simple no operation function
    var noop = function() {};
    // offload a functions execution
    var offloadFn = function(fn) { setTimeout(fn || noop, 0); };
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered.
    var throttle = function (fn, threshhold) {
      threshhold = threshhold || 100;
      var timeout = null;

      function cancel() {
        if (timeout) clearTimeout(timeout);
      }

      function throttledFn() {
        var context = this;
        var args = arguments;
        cancel();
        timeout = setTimeout(function() {
          timeout = null;
          fn.apply(context, args);
        }, threshhold);
      }

      // allow remove throttled timeout
      throttledFn.cancel = cancel;

      return throttledFn;
    };

    // check browser capabilities
    var browser = {
      addEventListener: !!root.addEventListener,
      // eslint-disable-next-line no-undef
      touch: ('ontouchstart' in root) || root.DocumentTouch && _document instanceof DocumentTouch,
      transitions: (function(temp) {
        var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
        for ( var i in props ) {
          if (temp.style[ props[i] ] !== undefined){
            return true;
          }
        }
        return false;
      })(_document.createElement('swipe'))
    };

    // quit if no root element
    if (!container) return;

    var element = container.children[0];
    var slides, slidePos, width, length;
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    options.continuous = options.continuous !== undefined ? options.continuous : true;

    // AutoRestart option: auto restart slideshow after user's touch event
    options.autoRestart = options.autoRestart !== undefined ? options.autoRestart : false;

    // throttled setup
    var throttledSetup = throttle(setup);

    // setup event capturing
    var events = {

      handleEvent: function(event) {
        switch (event.type) {
          case 'mousedown':
          case 'touchstart': this.start(event); break;
          case 'mousemove':
          case 'touchmove': this.move(event); break;
          case 'mouseup':
          case 'mouseleave':
          case 'touchend': this.end(event); break;
          case 'webkitTransitionEnd':
          case 'msTransitionEnd':
          case 'oTransitionEnd':
          case 'otransitionend':
          case 'transitionend': this.transitionEnd(event); break;
          case 'resize': throttledSetup(); break;
        }

        if (options.stopPropagation) {
          event.stopPropagation();
        }
      },

      start: function(event) {
        var touches;

        if (isMouseEvent(event)) {
          touches = event;
          event.preventDefault(); // For desktop Safari drag
        } else {
          touches = event.touches[0];
        }

        // measure start values
        start = {

          // get initial touch coords
          x: touches.pageX,
          y: touches.pageY,

          // store time to determine touch duration
          time: +new Date()

        };

        // used for testing first move event
        isScrolling = undefined;

        // reset delta and end measurements
        delta = {};

        // attach touchmove and touchend listeners
        if (isMouseEvent(event)) {
          element.addEventListener('mousemove', this, false);
          element.addEventListener('mouseup', this, false);
          element.addEventListener('mouseleave', this, false);
        } else {
          element.addEventListener('touchmove', this, false);
          element.addEventListener('touchend', this, false);
        }

      },

      move: function(event) {
        var touches;

        if (isMouseEvent(event)) {
          touches = event;
        } else {
          // ensure swiping with one touch and not pinching
          if ( event.touches.length > 1 || event.scale && event.scale !== 1) {
            return;
          }

          if (options.disableScroll) {
            event.preventDefault();
          }

          touches = event.touches[0];
        }

        // measure change in x and y
        delta = {
          x: touches.pageX - start.x,
          y: touches.pageY - start.y
        };

        // determine if scrolling test has run - one time test
        if ( typeof isScrolling === 'undefined') {
          isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
        }

        // if user is not trying to scroll vertically
        if (!isScrolling) {

          // prevent native scrolling
          event.preventDefault();

          // stop slideshow
          stop();

          // increase resistance if first or last slide
          if (options.continuous) { // we don't add resistance at the end

            translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

          } else {

            delta.x =
              delta.x /
              ( (!index && delta.x > 0 ||             // if first slide and sliding left
                 index === slides.length - 1 &&        // or if last slide and sliding right
                 delta.x < 0                           // and if sliding at all
                ) ?
               ( Math.abs(delta.x) / width + 1 )      // determine resistance level
               : 1 );                                 // no resistance if false

            // translate 1:1
            translate(index-1, delta.x + slidePos[index-1], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(index+1, delta.x + slidePos[index+1], 0);
          }
        }
      },

      end: function(event) {

        // measure duration
        var duration = +new Date() - start.time;

        // determine if slide attempt triggers next/prev slide
        var isValidSlide =
            Number(duration) < 250 &&         // if slide duration is less than 250ms
            Math.abs(delta.x) > 20 ||         // and if slide amt is greater than 20px
            Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

        // determine if slide attempt is past start and end
        var isPastBounds =
            !index && delta.x > 0 ||                      // if first slide and slide amt is greater than 0
            index === slides.length - 1 && delta.x < 0;   // or if last slide and slide amt is less than 0

        if (options.continuous) {
          isPastBounds = false;
        }

        // OLD determine direction of swipe (true:right, false:left)
        // determine direction of swipe (1: backward, -1: forward)
        var direction = Math.abs(delta.x) / delta.x;

        // if not scrolling vertically
        if (!isScrolling) {

          if (isValidSlide && !isPastBounds) {

            // if we're moving right
            if (direction < 0) {

              if (options.continuous) { // we need to get the next in this direction in place

                move(circle(index-1), -width, 0);
                move(circle(index+2), width, 0);

              } else {
                move(index-1, -width, 0);
              }

              move(index, slidePos[index]-width, speed);
              move(circle(index+1), slidePos[circle(index+1)]-width, speed);
              index = circle(index+1);

            } else {
              if (options.continuous) { // we need to get the next in this direction in place

                move(circle(index+1), width, 0);
                move(circle(index-2), -width, 0);

              } else {
                move(index+1, width, 0);
              }

              move(index, slidePos[index]+width, speed);
              move(circle(index-1), slidePos[circle(index-1)]+width, speed);
              index = circle(index-1);
            }

            runCallback(getPos(), slides[index], direction);

          } else {

            if (options.continuous) {

              move(circle(index-1), -width, speed);
              move(index, 0, speed);
              move(circle(index+1), width, speed);

            } else {

              move(index-1, -width, speed);
              move(index, 0, speed);
              move(index+1, width, speed);
            }
          }
        }

        // kill touchmove and touchend event listeners until touchstart called again
        if (isMouseEvent(event)) {
          element.removeEventListener('mousemove', events, false);
          element.removeEventListener('mouseup', events, false);
          element.removeEventListener('mouseleave', events, false);
        } else {
          element.removeEventListener('touchmove', events, false);
          element.removeEventListener('touchend', events, false);
        }

      },

      transitionEnd: function(event) {
        var currentIndex = parseInt(event.target.getAttribute('data-index'), 10);
        if (currentIndex === index) {
          if (delay || options.autoRestart) restart();

          runTransitionEnd(getPos(), slides[index]);
        }
      }
    };

    // trigger setup
    setup();

    // start auto slideshow if applicable
    if (delay) begin();

    // Expose the Swipe API
    return {
      // initialize
      setup: setup,

      // go to slide
      slide: function(to, speed) {
        stop();
        slide(to, speed);
      },

      // move to previous
      prev: function() {
        stop();
        prev();
      },

      // move to next
      next: function() {
        stop();
        next();
      },

      // Restart slideshow
      restart: restart,

      // cancel slideshow
      stop: stop,

      // return current index position
      getPos: getPos,

      // return total number of slides
      getNumSlides: function() { return length; },

      // completely remove swipe
      kill: kill
    };

    // remove all event listeners
    function detachEvents() {
      if (browser.addEventListener) {
        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('mousedown', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        root.removeEventListener('resize', events, false);
      } else {
        root.onresize = null;
      }
    }

    // add event listeners
    function attachEvents() {
      if (browser.addEventListener) {

        // set touchstart event on element
        if (browser.touch) {
          element.addEventListener('touchstart', events, false);
        }

        if (options.draggable) {
          element.addEventListener('mousedown', events, false);
        }

        if (browser.transitions) {
          element.addEventListener('webkitTransitionEnd', events, false);
          element.addEventListener('msTransitionEnd', events, false);
          element.addEventListener('oTransitionEnd', events, false);
          element.addEventListener('otransitionend', events, false);
          element.addEventListener('transitionend', events, false);
        }

        // set resize event on window
        root.addEventListener('resize', events, false);

      } else {
        root.onresize = throttledSetup; // to play nice with old IE
      }
    }

    function setup() {
      // cache slides
      slides = element.children;
      length = slides.length;

      // set continuous to false if only one slide
      if (slides.length < 2) {
        options.continuous = false;
      }

      // special case if two slides
      if (browser.transitions && options.continuous && slides.length < 3) {
        var clone0 = slides[0].cloneNode(true);
        var clone1 = element.children[1].cloneNode(true);
        element.appendChild(clone0);
        element.appendChild(clone1);

        // tag these slides as clones (to remove them on kill)
        clone0.setAttribute('data-cloned', true);
        clone1.setAttribute('data-cloned', true);

        slides = element.children;
      }

      // create an array to store current positions of each slide
      slidePos = new Array(slides.length);

      // determine width of each slide
      width = container.getBoundingClientRect().width || container.offsetWidth;

      element.style.width = (slides.length * width * 2) + 'px';

      // stack elements
      var pos = slides.length;
      while(pos--) {
        var slide = slides[pos];

        slide.style.width = width + 'px';
        slide.setAttribute('data-index', pos);

        if (browser.transitions) {
          slide.style.left = (pos * -width) + 'px';
          move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
        }
      }

      // reposition elements before and after index
      if (options.continuous && browser.transitions) {
        move(circle(index-1), -width, 0);
        move(circle(index+1), width, 0);
      }

      if (!browser.transitions) {
        element.style.left = (index * -width) + 'px';
      }

      container.style.visibility = 'visible';

      // reinitialize events
      detachEvents();
      attachEvents();
    }

    function prev() {
      if (options.continuous) {
        slide(index-1);
      }
      else if (index) {
        slide(index-1);
      }
    }

    function next() {

      if (options.continuous) {
        slide(index+1);
      } else if (index < slides.length - 1) {
        slide(index+1);
      }
    }

    function runCallback(pos, index, dir) {
      if (options.callback) {
        options.callback(pos, index, dir);
      }
    }

    function runTransitionEnd(pos, index) {
      if (options.transitionEnd) {
        options.transitionEnd(pos, index);
      }
    }

    function circle(index) {

      // a simple positive modulo using slides.length
      return (slides.length + (index % slides.length)) % slides.length;
    }

    function getPos() {
      // Fix for the clone issue in the event of 2 slides
      var currentIndex = index;

      if (currentIndex >= length) {
        currentIndex = currentIndex - length;
      }

      return currentIndex;
    }

    function slide(to, slideSpeed) {

      // ensure to is of type 'number'
      to = typeof to !== 'number' ? parseInt(to, 10) : to;

      // do nothing if already on requested slide
      if (index === to) return;

      if (browser.transitions) {

        var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

        // get the actual position of the slide
        if (options.continuous) {
          var natural_direction = direction;
          direction = -slidePos[circle(to)] / width;

          // if going forward but to < index, use to = slides.length + to
          // if going backward but to > index, use to = -slides.length + to
          if (direction !== natural_direction) {
            to = -direction * slides.length + to;
          }

        }

        var diff = Math.abs(index-to) - 1;

        // move all the slides between index and to in the right direction
        while (diff--) {
          move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
        }

        to = circle(to);

        move(index, width * direction, slideSpeed || speed);
        move(to, 0, slideSpeed || speed);

        if (options.continuous) { // we need to get the next in place
          move(circle(to - direction), -(width * direction), 0);
        }

      } else {

        to = circle(to);
        animate(index * -width, to * -width, slideSpeed || speed);
        // no fallback for a circular continuous if the browser does not accept transitions
      }

      index = to;
      offloadFn(function() {
        runCallback(getPos(), slides[index], direction);
      });
    }

    function move(index, dist, speed) {
      translate(index, dist, speed);
      slidePos[index] = dist;
    }

    function translate(index, dist, speed) {

      var slide = slides[index];
      var style = slide && slide.style;

      if (!style) return;

      style.webkitTransitionDuration =
        style.MozTransitionDuration =
        style.msTransitionDuration =
        style.OTransitionDuration =
        style.transitionDuration = speed + 'ms';

      style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
      style.msTransform =
        style.MozTransform =
        style.OTransform = 'translateX(' + dist + 'px)';

    }

    function animate(from, to, speed) {

      // if not an animation, just reposition
      if (!speed) {
        element.style.left = to + 'px';
        return;
      }

      var start = +new Date();

      var timer = setInterval(function() {
        var timeElap = +new Date() - start;

        if (timeElap > speed) {

          element.style.left = to + 'px';

          if (delay || options.autoRestart) restart();

          runTransitionEnd(getPos(), slides[index]);

          clearInterval(timer);

          return;
        }

        element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';
      }, 4);

    }

    function begin() {
      interval = setTimeout(next, delay);
    }

    function stop() {
      delay = 0;
      clearTimeout(interval);
    }

    function restart() {
      stop();
      delay = options.auto || 0;
      begin();
    }

    function isMouseEvent(e) {
      return /^mouse/.test(e.type);
    }

    function kill() {
      // cancel slideshow
      stop();

      // remove inline styles
      container.style.visibility = '';

      // reset element
      element.style.width = '';
      element.style.left = '';

      // reset slides
      var pos = slides.length;
      while (pos--) {

        if (browser.transitions) {
          translate(pos, 0, 0);
        }

        var slide = slides[pos];

        // if the slide is tagged as clone, remove it
        if (slide.getAttribute('data-cloned')) {
          var _parent = slide.parentElement;
          _parent.removeChild(slide);
        }

        // remove styles
        slide.style.width = '';
        slide.style.left = '';

        slide.style.webkitTransitionDuration =
          slide.style.MozTransitionDuration =
          slide.style.msTransitionDuration =
          slide.style.OTransitionDuration =
          slide.style.transitionDuration = '';

        slide.style.webkitTransform =
          slide.style.msTransform =
          slide.style.MozTransform =
          slide.style.OTransform = '';

        // remove custom attributes (?)
        // slide.removeAttribute('data-index');
      }

      // remove all events
      detachEvents();

      // remove throttled function timeout
      throttledSetup.cancel();
    }
  }

  if ( root.jQuery || root.Zepto ) {
    (function($) {
      $.fn.Swipe = function(params) {
        return this.each(function() {
          $(this).data('Swipe', new Swipe($(this)[0], params));
        });
      };
    })( root.jQuery || root.Zepto );
  }

  return Swipe;
}));

// -----------------------------------------------------------
// Svg4Everyone version	2.1.4
// -----------------------------------------------------------
// https://github.com/jonathantneal/svg4everybody/blob/master/dist/svg4everybody.js
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.4 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""),
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)),
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent);
                if (svg) {
                    var src = use.getAttribute("xlink:href") || use.getAttribute("href");
                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
                        // remove the <use> element
                        parent.removeChild(use);
                        // parse the src and get the url and id
                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                        // if the link is external
                        if (url.length) {
                            // get the cached xhr request
                            var xhr = requests[url];
                            // ensure the xhr request exists
                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(),
                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                            xhr._embeds.push({
                                parent: parent,
                                svg: svg,
                                id: id
                            }), // prepare the xhr ready state change event
                            loadreadystatechange(xhr);
                        } else {
                            // embed the local id into the svg
                            embed(parent, document.getElementById(id));
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
 
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1S 2U("2a\'t 4k M 4K 2g 3l 4G 4H");(6(){6 r(f,e){I(!M.1R(f))1S 3m("3s 15 4R");K a=f.1w;f=M(f.1m,t(f)+(e||""));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.4s?"i":"")+(f.4p?"m":"")+(f.4v?"x":"")+(f.3n?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m("2a\'t 5r 5I 5F 5B 5C 15 5E 5p");H r(f)}I(v)1S 2U("2a\'t W 3l M 59 5m 5g 5x 5i");e=e||"";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h==="[")b=M.2I;Y I(h==="]")b=M.1B;a.U(h);c++}a=15(a.1K(""),n.Q.W(e,w,""));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v="1.5.0";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,"g"+(E?"y":"")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+"/"+(e||"");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,"g")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5e=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U("2a\'t 55 1h 54 3q")}};M.1R=6(f){H 53.Z.1q.W(f)==="[2m 15]"};M.3p=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,"g"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1m,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()==="3f"&&e.1i("${")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+="";I(1j e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24"$":H"$";24"&":H d[0];24"`":H d[d.L-1].1a(0,d[d.L-2]);24"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||"":"$")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,"")||h)b.U("")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H"("});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H"("});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?"":"(?:)"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H""});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"},M.1B,6(){H J.2K("x")});M.1h(/\\./,6(){H"[\\\\s\\\\S]"},M.1B,6(){H J.2K("s")})})();1j 2e!="1d"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1i("3e")==0?a:"3e"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={"#":"1c",".":"1l"}[b.1o(0,1)]||"3h",g,i;g=h!="3h"?b.1o(1):b.5u();I((a[h]||"").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g("4U"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1W;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2s;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<17 1g="\'+b+\'">\'+c+"</17>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1i("\\t")==-1)H h;O(K g=0;(g=h.1i("\\t"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i=="3f")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2h="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1E.36("1k"),b=[],c=0;c<a.L;c++)a[c].3s=="20"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".20",R);a=p(a,".3O",R);K c=1E.4i("3t");I(!(!a||!b||p(a,"3t"))){B(b.1c);r(b,"1m");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K("\\r");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,"4u",6(){c.2G.4E(c);b.1l=b.1l.Q("1m","")})}}I(1j 3F!="1d"&&1j M=="1d")M=3F("M").M;K e={2v:{"1g-27":"","2i-1s":1,"2z-1s-2t":11,1M:N,1t:N,"42-45":R,"43-22":4,1u:R,16:R,"3V-17":R,2l:11,"41-40":R,2k:11,"1z-1k":11},13:{1W:"&2s;",2M:R,46:11,44:11,34:"4n",1x:{21:"4o 1m",2P:"?",1X:"1v\\n\\n",3E:"4r\'t 4t 1D O: ",4g:"4m 4B\'t 51 O 1z-1k 4F: ",37:\'<!4T 1z 4S "-//4V//3H 4W 1.0 4Z//4Y" "1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J"><1z 4I="1Z://2y.3L.3K/4L/5L"><3J><4N 1Z-4M="5G-5M" 6K="2O/1z; 6J=6I-8" /><1t>6L 1v</1t></3J><3B 1L="25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;"><T 1L="2O-3D:3C;3w-32:1.6z;"><T 1L="25-22:6A-6E;">1v</T><T 1L="25-22:.6C;3w-6B:6R;"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h="1Z://3u.2w/1v" 1F="38" 1L="2f:#3y">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h="6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O" 1L="2f:#3y">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>\'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/"([^\\\\"\\n]|\\\\.)*"/g,6o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6p:1f M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3z"),6s:1f M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3z"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c=\'<T 1g="16">\',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+="</T>";H c},2o:6(a,b,c){H\'<2W><a 2h="#" 1g="6e 6h\'+b+" "+b+\'">\'+c+"</a></2W>"},2b:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".20",R).1c);K d=6(h){H(h=15(h+"6f(\\\\w+)").X(c))?h[1]:N}("6g");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:["21","2P"],21:{1H:6(a){I(a.V("2l")!=R)H"";K b=a.V("1t");H e.16.2o(a,"21",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q("47","")}},2P:{2B:6(){K a="68=0";a+=", 18="+(31.30-33)/2+", 32="+(31.2Z-2Y)/2+", 30=33, 2Z=2Y";a=a.Q(/^,/,"");a=1P.6Z("","38",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M("^\\\\[(?<2V>(.*?))\\\\]$"),s=1f M("(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1T.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k["1z-1k"]=="R"||e.2v["1z-1k"]==R){d=1f e.4l(j);j="4O"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i("<![6G[")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i("]]\\>")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||"")!="")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||"")!="")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,"4k",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i="2F 1H 2Q".1e(" ");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]=="2m")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V("2i-1s"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V("1M",[]);I(1j b!="2m"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=["1s","6i"+b,"P"+a,"6r"+(b%2==0?1:2).1q()];J.3U(b)&&a.U("67");b==0&&a.U("1N");H\'<T 1g="\'+a.1K(" ")+\'">\'+c+"</T>"},3Q:6(a,b){K c="",d=a.1e("\\n").L,h=2u(J.V("2i-1s")),g=J.V("2z-1s-2t");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l="0"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2z-1s-2t");K d=2u(J.V("2i-1s"));a="";O(K h=J.V("1D"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(" ",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?\'<17 1g="\'+h+\' 5N">\'+j+"</17>":"")+i)}H a},4f:6(a){H a?"<4a>"+a+"</4a>":""},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1D",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+"48")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+"48");H h},1H:6(a){K b="",c=["20"],d;I(J.V("2k")==R)J.1n.16=J.1n.1u=11;1l="20";J.V("2l")==R&&c.U("47");I((1u=J.V("1u"))==11)c.U("6S");c.U(J.V("1g-27"));c.U(J.V("1D"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("43-22");I(J.V("42-45")==R)a=n(a,b);Y{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,"\\n");I(e.13.44==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K("\\n")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V("41-40"))b=E(b);1j 2H!="1d"&&2H.3S&&2H.3S.1C(/5s/)&&c.U("5t");H b=\'<T 1c="\'+t(J.1c)+\'" 1g="\'+c.1K(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<3Z 5z="0" 5H="0" 5J="0">\'+J.4f(J.V("1t"))+"<3T><3P>"+(1u?\'<2d 1g="1u">\'+J.3Q(a)+"</2d>":"")+\'<2d 1g="17"><T 1g="3O">\'+b+"</T></2d></3P></3T></3Z></T>"},2F:6(a){I(a===N)a="";J.17=a;K b=J.3Y("T");b.3X=J.1H(a);J.V("16")&&w(p(b,".16"),"5c",e.16.2b);J.V("3V-17")&&w(p(b,".17"),"56",f);H b},2Q:6(a){J.1c=""+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V("2k")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5f:6(a){J.28={18:{1I:a.18,23:"1k"},1b:{1I:a.1b,23:"1k"},17:1f M("(?<18>"+a.18.1m+")(?<17>.*?)(?<1b>"+a.1b.1m+")","5o")}}};H e}();1j 2e!="1d"&&(2e.1v=1v);',62,441,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||div|push|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|RegExp|toolbar|code|left|captureNames|slice|right|id|undefined|split|new|class|addToken|indexOf|typeof|script|className|source|params|substr|apply|toString|String|line|title|gutter|SyntaxHighlighter|_xregexp|strings|lt|html|test|OUTSIDE_CLASS|match|brush|document|target|gt|getHtml|regex|global|join|style|highlight|break|concat|window|Math|isRegExp|throw|value|brushes|brushName|space|alert|vars|http|syntaxhighlighter|expandSource|size|css|case|font|Fa|name|htmlScript|dA|can|handler|gm|td|exports|color|in|href|first|discoveredBrushes|light|collapse|object|cache|getButtonHtml|trigger|pattern|getLineHtml|nbsp|numbers|parseInt|defaults|com|items|www|pad|highlighters|execute|focus|func|all|getDiv|parentNode|navigator|INSIDE_CLASS|regexList|hasFlag|Match|useScriptTags|hasNamedCapture|text|help|init|br|input|gi|Error|values|span|list|250|height|width|screen|top|500|tagName|findElements|getElementsByTagName|aboutDialog|_blank|appendChild|charAt|Array|copyAsGlobal|setFlag|highlighter_|string|attachEvent|nodeName|floor|backref|output|the|TypeError|sticky|Za|iterate|freezeTokens|scope|type|textarea|alexgorbatchev|version|margin|2010|005896|gs|regexLib|body|center|align|noBrush|require|childNodes|DTD|xhtml1|head|org|w3|url|preventDefault|container|tr|getLineNumbersHtml|isNaN|userAgent|tbody|isLineHighlighted|quick|void|innerHTML|create|table|links|auto|smart|tab|stripBrs|tabs|bloggerMode|collapsed|plain|getCodeLinesHtml|caption|getMatchesHtml|findMatches|figureOutLineNumbers|removeNestedMatches|getTitleHtml|brushNotHtmlScript|substring|createElement|Highlighter|load|HtmlScript|Brush|pre|expand|multiline|min|Can|ignoreCase|find|blur|extended|toLowerCase|aliases|addEventListener|innerText|textContent|wasn|select|createTextNode|removeChild|option|same|frame|xmlns|dtd|twice|1999|equiv|meta|htmlscript|transitional|1E3|expected|PUBLIC|DOCTYPE|on|W3C|XHTML|TR|EN|Transitional||configured|srcElement|Object|after|run|dblclick|matchChain|valueOf|constructor|default|switch|click|round|execAt|forHtmlScript|token|gimy|functions|getKeywords|1E6|escape|within|random|sgi|another|finally|supply|MSIE|ie|toUpperCase|catch|returnValue|definition|event|border|imsx|constructing|one|Infinity|from|when|Content|cellpadding|flags|cellspacing|try|xhtml|Type|spaces|2930402|hosted_button_id|lastIndexOf|donate|active|development|keep|to|xclick|_s|Xml|please|like|you|paypal|cgi|cmd|webscr|bin|highlighted|scrollbars|aspScriptTags|phpScriptTags|sort|max|scriptScriptTags|toolbar_item|_|command|command_|number|getElementById|doubleQuotedString|singleLinePerlComments|singleLineCComments|multiLineCComments|singleQuotedString|multiLineDoubleQuotedString|xmlComments|alt|multiLineSingleQuotedString|If|https|1em|000|fff|background|5em|xx|bottom|75em|Gorbatchev|large|serif|CDATA|continue|utf|charset|content|About|family|sans|Helvetica|Arial|Geneva|3em|nogutter|Copyright|syntax|close|write|2004|Alex|open|JavaScript|highlighter|July|02|replaceChild|offset|83'.split('|'),0,{}))


// XML Brush (file shBrushXml.js)

;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)', 'xg').exec(code),
				result = []
				;
		
			if (match.attributes != null) 
			{
				var attributes,
					regex = new XRegExp('(?<name> [\\w:\\-\\.]+)' +
										'\\s*=\\s*' +
										'(?<value> ".*?"|\'.*?\'|\\w+)',
										'xg');

				while ((attributes = regex.exec(code)) != null) 
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}
	
		this.regexList = [
			{ regex: new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();