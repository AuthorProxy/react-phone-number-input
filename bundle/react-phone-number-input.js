(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define("react-phone-number-input", ["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["react-phone-number-input"] = factory(require("React"), require("ReactDOM"));
	else
		root["react-phone-number-input"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_52__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(40)('wks')
  , uid        = __webpack_require__(25)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(60)
  , hide      = __webpack_require__(11)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(62)
  , toPrimitive    = __webpack_require__(42)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(63)
  , defined = __webpack_require__(33);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(23);
module.exports = __webpack_require__(4) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(68)
  , enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = get_phone_code;
/* harmony export (immutable) */ __webpack_exports__["k"] = get_national_number_pattern;
/* harmony export (immutable) */ __webpack_exports__["b"] = get_formats;
/* unused harmony export get_national_prefix */
/* unused harmony export get_national_prefix_formatting_rule */
/* harmony export (immutable) */ __webpack_exports__["l"] = get_national_prefix_for_parsing;
/* harmony export (immutable) */ __webpack_exports__["m"] = get_national_prefix_transform_rule;
/* unused harmony export get_national_prefix_is_optional_when_formatting */
/* harmony export (immutable) */ __webpack_exports__["n"] = get_leading_digits;
/* harmony export (immutable) */ __webpack_exports__["e"] = get_format_pattern;
/* harmony export (immutable) */ __webpack_exports__["j"] = get_format_format;
/* harmony export (immutable) */ __webpack_exports__["d"] = get_format_leading_digits_patterns;
/* harmony export (immutable) */ __webpack_exports__["h"] = get_format_national_prefix_formatting_rule;
/* harmony export (immutable) */ __webpack_exports__["o"] = get_format_national_prefix_is_optional_when_formatting;
/* harmony export (immutable) */ __webpack_exports__["g"] = get_format_national_prefix_is_mandatory_when_formatting;
/* harmony export (immutable) */ __webpack_exports__["i"] = get_format_uses_national_prefix;
/* harmony export (immutable) */ __webpack_exports__["c"] = get_format_international_format;
/* harmony export (immutable) */ __webpack_exports__["f"] = get_metadata_by_country_phone_code;
/* harmony export (immutable) */ __webpack_exports__["p"] = get_types;
/* harmony export (immutable) */ __webpack_exports__["y"] = get_type_fixed_line;
/* harmony export (immutable) */ __webpack_exports__["z"] = get_type_mobile;
/* harmony export (immutable) */ __webpack_exports__["r"] = get_type_toll_free;
/* harmony export (immutable) */ __webpack_exports__["q"] = get_type_premium_rate;
/* harmony export (immutable) */ __webpack_exports__["u"] = get_type_personal_number;
/* harmony export (immutable) */ __webpack_exports__["x"] = get_type_voice_mail;
/* harmony export (immutable) */ __webpack_exports__["w"] = get_type_uan;
/* harmony export (immutable) */ __webpack_exports__["v"] = get_type_pager;
/* harmony export (immutable) */ __webpack_exports__["t"] = get_type_voip;
/* harmony export (immutable) */ __webpack_exports__["s"] = get_type_shared_cost;
/* unused harmony export get_country_phone_code */
function get_phone_code(country_metadata) {
	return country_metadata[0];
}

function get_national_number_pattern(country_metadata) {
	return country_metadata[1];
}

function get_formats(country_metadata) {
	return country_metadata[2] || [];
}

function get_national_prefix(country_metadata) {
	return country_metadata[3];
}

function get_national_prefix_formatting_rule(country_metadata) {
	return country_metadata[4];
}

function get_national_prefix_for_parsing(country_metadata) {
	var national_prefix_for_parsing = country_metadata[5];

	// If `national_prefix_for_parsing` is not set explicitly,
	// then infer it from `national_prefix` (if any)
	if (!national_prefix_for_parsing) {
		national_prefix_for_parsing = get_national_prefix(country_metadata);
	}

	return national_prefix_for_parsing;
}

function get_national_prefix_transform_rule(country_metadata) {
	return country_metadata[6];
}

function get_national_prefix_is_optional_when_formatting(country_metadata) {
	return country_metadata[7];
}

function get_leading_digits(country_metadata) {
	return country_metadata[8];
}

function get_format_pattern(format_array) {
	return format_array[0];
}

function get_format_format(format_array) {
	return format_array[1];
}

function get_format_leading_digits_patterns(format_array) {
	return format_array[2] || [];
}

function get_format_national_prefix_formatting_rule(format_array, country_metadata) {
	return format_array[3] || get_national_prefix_formatting_rule(country_metadata);
}

function get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata) {
	return format_array[4] || get_national_prefix_is_optional_when_formatting(country_metadata);
}

function get_format_national_prefix_is_mandatory_when_formatting(format_array, country_metadata) {
	var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format_array, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when the national prefix formatting rule
	// contains no national prefix itself, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	return national_prefix_formatting_rule &&
	// Check that national prefix formatting rule is not a dummy one.
	// Check that national prefix formatting rule actually has national prefix digit(s).
	get_format_uses_national_prefix(national_prefix_formatting_rule) &&
	// Or maybe national prefix is optional for this format
	!get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata);
}

// Checks whether national prefix formatting rule contains national prefix
function get_format_uses_national_prefix(national_prefix_formatting_rule) {
	// Check that national prefix formatting rule is not a dummy one
	return national_prefix_formatting_rule !== '$1' &&
	// Check that national prefix formatting rule actually has national prefix digit(s)
	/\d/.test(national_prefix_formatting_rule.replace('$1', ''));
}

function get_format_international_format(format_array) {
	return format_array[5] || get_format_format(format_array);
}

// Formatting information for regions which share
// a country calling code is contained by only one region
// for performance reasons. For example, for NANPA region
// ("North American Numbering Plan Administration",
//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
// it will be contained in the metadata for `US`.
function get_metadata_by_country_phone_code(country_phone_code, metadata) {
	var country_code = metadata.country_phone_code_to_countries[country_phone_code][0];
	return metadata.countries[country_code];
}

function get_types(country_metadata) {
	return country_metadata[9];
}

function get_type(country_metadata, index) {
	return get_types(country_metadata) ? get_types(country_metadata)[index] : undefined;
}

function get_type_fixed_line(country_metadata) {
	return get_type(country_metadata, 0);
}

function get_type_mobile(country_metadata) {
	return get_type(country_metadata, 1);
}

function get_type_toll_free(country_metadata) {
	return get_type(country_metadata, 2);
}

function get_type_premium_rate(country_metadata) {
	return get_type(country_metadata, 3);
}

function get_type_personal_number(country_metadata) {
	return get_type(country_metadata, 4);
}

function get_type_voice_mail(country_metadata) {
	return get_type(country_metadata, 5);
}

function get_type_uan(country_metadata) {
	return get_type(country_metadata, 6);
}

function get_type_pager(country_metadata) {
	return get_type(country_metadata, 7);
}

function get_type_voip(country_metadata) {
	return get_type(country_metadata, 8);
}

function get_type_shared_cost(country_metadata) {
	return get_type(country_metadata, 9);
}

function get_country_phone_code(country, country_metadata) {
	return get_phone_code(country_metadata[country]);
}
//# sourceMappingURL=metadata.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PLUS_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VALID_DIGITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VALID_PUNCTUATION; });
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* unused harmony export normalize */
/* unused harmony export replace_characters */
/* harmony export (immutable) */ __webpack_exports__["j"] = is_viable_phone_number;
/* harmony export (immutable) */ __webpack_exports__["e"] = extract_formatted_phone_number;
/* harmony export (immutable) */ __webpack_exports__["f"] = parse_phone_number;
/* harmony export (immutable) */ __webpack_exports__["g"] = parse_phone_number_and_country_phone_code;
/* harmony export (immutable) */ __webpack_exports__["h"] = strip_national_prefix;
/* harmony export (immutable) */ __webpack_exports__["i"] = find_country_code;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_number_type__ = __webpack_require__(28);


// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js









var PLUS_CHARS = '+\uFF0B';

// Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).
var VALID_DIGITS = '0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9';

// `DASHES` will be right after the opening square bracket of the "character class"
var DASHES = '-\u2010-\u2015\u2212\u30FC\uFF0D';
var SLASHES = '\uFF0F/';
var DOTS = '\uFF0E.';
var WHITESPACE = ' \xA0\xAD\u200B\u2060\u3000';
var BRACKETS = '()\uFF08\uFF09\uFF3B\uFF3D\\[\\]';
var TILDES = '~\u2053\u223C\uFF5E';

// Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.
var VALID_PUNCTUATION = '' + DASHES + SLASHES + DOTS + WHITESPACE + BRACKETS + TILDES;

//  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  Note VALID_PUNCTUATION starts with a -, so must be the first in the range.
//  (wtf did they mean by saying that; probably nothing)
//
var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}';
//
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//
var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

// The combined regular expression for valid phone numbers:
//
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
// Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' +
// Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER +
// screw phone number extensions
// '(?:' + EXTN_PATTERNS_FOR_PARSING + ')?' +
'$', 'i');

// This consists of the plus symbol, digits, and arabic-indic digits.
var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']');

// Regular expression of trailing characters that we want to remove.
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + ']+$');

var LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+');

// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
var DIGIT_MAPPINGS = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'\uFF10': '0', // Fullwidth digit 0
	'\uFF11': '1', // Fullwidth digit 1
	'\uFF12': '2', // Fullwidth digit 2
	'\uFF13': '3', // Fullwidth digit 3
	'\uFF14': '4', // Fullwidth digit 4
	'\uFF15': '5', // Fullwidth digit 5
	'\uFF16': '6', // Fullwidth digit 6
	'\uFF17': '7', // Fullwidth digit 7
	'\uFF18': '8', // Fullwidth digit 8
	'\uFF19': '9', // Fullwidth digit 9
	'\u0660': '0', // Arabic-indic digit 0
	'\u0661': '1', // Arabic-indic digit 1
	'\u0662': '2', // Arabic-indic digit 2
	'\u0663': '3', // Arabic-indic digit 3
	'\u0664': '4', // Arabic-indic digit 4
	'\u0665': '5', // Arabic-indic digit 5
	'\u0666': '6', // Arabic-indic digit 6
	'\u0667': '7', // Arabic-indic digit 7
	'\u0668': '8', // Arabic-indic digit 8
	'\u0669': '9', // Arabic-indic digit 9
	'\u06F0': '0', // Eastern-Arabic digit 0
	'\u06F1': '1', // Eastern-Arabic digit 1
	'\u06F2': '2', // Eastern-Arabic digit 2
	'\u06F3': '3', // Eastern-Arabic digit 3
	'\u06F4': '4', // Eastern-Arabic digit 4
	'\u06F5': '5', // Eastern-Arabic digit 5
	'\u06F6': '6', // Eastern-Arabic digit 6
	'\u06F7': '7', // Eastern-Arabic digit 7
	'\u06F8': '8', // Eastern-Arabic digit 8
	'\u06F9': '9' // Eastern-Arabic digit 9
};

// The maximum length of the country calling code.
var MAX_LENGTH_COUNTRY_CODE = 3;

// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2;

// The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.
var MAX_LENGTH_FOR_NSN = 17;

// We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.
var MAX_INPUT_STRING_LENGTH = 250;

var default_options = {
	country: {}
};

// `options`:
//  {
//    country:
//    {
//      restrict - (a two-letter country code)
//                 the phone number must be in this country
//
//      default - (a two-letter country code)
//                default country to use for phone number parsing and validation
//                (if no country code could be derived from the phone number)
//    }
//  }
//
// Returns `{ country, number }`
//
// Example use cases:
//
// ```js
// parse('8 (800) 555-35-35', 'RU')
// parse('8 (800) 555-35-35', 'RU', metadata)
// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
// parse('+7 800 555 35 35')
// parse('+7 800 555 35 35', metadata)
// ```
//
function parse(first_argument, second_argument, third_argument) {
	var _sort_out_arguments = sort_out_arguments(first_argument, second_argument, third_argument),
	    text = _sort_out_arguments.text,
	    options = _sort_out_arguments.options,
	    metadata = _sort_out_arguments.metadata;

	if (!options) {
		options = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, default_options);
	}

	// Validate country codes

	// Validate `default` country
	if (options.country.default && !metadata.countries[options.country.default]) {
		throw new Error('Unknown country code: ' + options.country.default);
	}

	// Validate `restrict` country
	if (options.country.restrict && !metadata.countries[options.country.restrict]) {
		throw new Error('Unknown country code: ' + options.country.restrict);
	}

	// Parse the phone number

	var formatted_phone_number = extract_formatted_phone_number(text);

	// If the phone number is not viable, then abort.
	if (!is_viable_phone_number(formatted_phone_number)) {
		return {};
	}

	var _parse_phone_number_a = parse_phone_number_and_country_phone_code(formatted_phone_number, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	// Maybe invalid country phone code encountered


	if (!number) {
		return {};
	}

	var country = void 0;
	var country_metadata = void 0;

	// Whether the phone number is formatted as an international phone number
	var is_international = false;

	if (country_phone_code) {
		is_international = true;

		// Check country restriction
		if (options.country.restrict && country_phone_code !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* get_phone_code */])(metadata.countries[options.country.restrict])) {
			return {};
		}

		// Formatting information for regions which share
		// a country calling code is contained by only one region
		// for performance reasons. For example, for NANPA region
		// ("North American Numbering Plan Administration",
		//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
		// it will be contained in the metadata for `US`.
		country_metadata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["f" /* get_metadata_by_country_phone_code */])(country_phone_code, metadata);

		// `country` will be set later,
		// because, for example, for NANPA countries
		// there are several countries corresponding
		// to the same `1` country phone code.
		// Therefore, to reliably determine the exact country,
		// national (significant) number should be parsed first.
	} else if (options.country.restrict || options.country.default) {
		country = options.country.restrict || options.country.default;
		country_metadata = metadata.countries[country];

		number = normalize(text);
	}

	if (!country_metadata) {
		return {};
	}

	var national_number = strip_national_prefix(number, country_metadata);

	var did_have_national_prefix = national_number !== number;

	// https://github.com/halt-hammerzeit/libphonenumber-js/issues/67
	// if (!is_international && !did_have_national_prefix &&
	// 		is_national_prefix_required(national_number, country_metadata))
	// {
	// 	return {}
	// }

	// Sometimes there are several countries
	// corresponding to the same country phone code
	// (e.g. NANPA countries all having `1` country phone code).
	// Therefore, to reliably determine the exact country,
	// national (significant) number should have been parsed first.
	//
	if (!country) {
		// When `metadata.json` is generated, all "ambiguous" country phone codes
		// get their countries populated with the full set of
		// "phone number type" regular expressions.
		country = find_country_code(country_phone_code, national_number, metadata);

		// Just in case there appears to be a bug in Google's metadata
		// and the exact country could not be extracted from the phone number.
		/* istanbul ignore if */
		if (!country) {
			return {};
		}

		// Update metadata to be for this specific country
		country_metadata = metadata.countries[country];
	}

	// Validate national (significant) number length.
	//
	// A sidenote:
	//
	// They say that sometimes national (significant) numbers
	// can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
	// https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
	// Such numbers will just be discarded.
	//
	if (national_number.length > MAX_LENGTH_FOR_NSN) {
		return {};
	}

	// National number pattern is different for each country,
	// even for those ones which are part of the "NANPA" group.
	var national_number_rule = new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["k" /* get_national_number_pattern */])(country_metadata));

	// Check if national phone number pattern matches the number
	if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common__["a" /* matches_entirely */])(national_number, national_number_rule)) {
		return {};
	}

	return { country: country, phone: national_number };
}

// Normalizes a string of characters representing a phone number.
// This converts wide-ascii and arabic-indic numerals to European numerals,
// and strips punctuation and alpha characters.
function normalize(number) {
	return replace_characters(number, DIGIT_MAPPINGS);
}

// For any character not being part of `replacements`
// it is removed from the phone number.
function replace_characters(text, replacements) {
	var replaced = '';

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(text), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			var replacement = replacements[character.toUpperCase()];

			if (replacement !== undefined) {
				replaced += replacement;
			}
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

	return replaced;
}

// Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//
function is_viable_phone_number(number) {
	return number.length >= MIN_LENGTH_FOR_NSN && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common__["a" /* matches_entirely */])(number, VALID_PHONE_NUMBER_PATTERN);
}

function extract_formatted_phone_number(text) {
	if (!text || text.length > MAX_INPUT_STRING_LENGTH) {
		return '';
	}

	// Attempt to extract a possible number from the string passed in

	var starts_at = text.search(PHONE_NUMBER_START_PATTERN);

	if (starts_at < 0) {
		return '';
	}

	return text
	// Trim everything to the left of the phone number
	.slice(starts_at)
	// Remove trailing non-numerical characters
	.replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}

// Parses a formatted phone number.
function parse_phone_number(number) {
	if (!number) {
		return '';
	}

	var is_international = LEADING_PLUS_CHARS_PATTERN.test(number);

	// Remove non-digits
	// (and strip the possible leading '+')
	number = normalize(number);

	if (is_international) {
		return '+' + number;
	}

	return number;
}

// Parses a formatted phone number
// and returns `{ country_phone_code, number }`
// where `number` is the national (significant) phone number.
//
// (aka `maybeExtractCountryPhoneCode`)
//
function parse_phone_number_and_country_phone_code(number, metadata) {
	number = parse_phone_number(number);

	if (!number) {
		return {};
	}

	// If this is not an international phone number,
	// then don't extract country phone code.
	if (number[0] !== '+') {
		return { number: number };
	}

	// Strip the leading '+' sign
	number = number.slice(1);

	// Fast abortion: country codes do not begin with a '0'
	if (number[0] === '0') {
		return {};
	}

	// The thing with country phone codes
	// is that they are orthogonal to each other
	// i.e. there's no such country phone code A
	// for which country phone code B exists
	// where B starts with A.
	// Therefore, while scanning digits,
	// if a valid country code is found,
	// that means that it is the country code.
	//
	var i = 1;
	while (i <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
		var country_phone_code = number.slice(0, i);

		if (metadata.country_phone_code_to_countries[country_phone_code]) {
			return { country_phone_code: country_phone_code, number: number.slice(i) };
		}

		i++;
	}

	return {};
}

// Strips any national prefix (such as 0, 1) present in the number provided
function strip_national_prefix(number, country_metadata) {
	var national_prefix_for_parsing = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["l" /* get_national_prefix_for_parsing */])(country_metadata);

	if (!number || !national_prefix_for_parsing) {
		return number;
	}

	// Attempt to parse the first digits as a national prefix
	var national_prefix_pattern = new RegExp('^(?:' + national_prefix_for_parsing + ')');
	var national_prefix_matcher = national_prefix_pattern.exec(number);

	// If no national prefix is present in the phone number,
	// but if the national prefix is optional for this country,
	// then consider this phone number valid.
	//
	// Google's reference `libphonenumber` implementation
	// wouldn't recognize such phone numbers as valid,
	// but I think it would perfectly make sense
	// to consider such phone numbers as valid
	// because if a national phone number was originally
	// formatted without the national prefix
	// then it must be parseable back into the original national number.
	// In other words, `parse(format(number))`
	// must always be equal to `number`.
	//
	if (!national_prefix_matcher) {
		return number;
	}

	var national_significant_number = void 0;

	// `national_prefix_for_parsing` capturing groups
	// (used only for really messy cases: Argentina, Brazil, Mexico, Somalia)
	var any_groups_were_captured = national_prefix_matcher[national_prefix_matcher.length - 1];
	var national_prefix_transform_rule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["m" /* get_national_prefix_transform_rule */])(country_metadata);

	// If the national number tranformation is needed then do it
	if (national_prefix_transform_rule && any_groups_were_captured) {
		national_significant_number = number.replace(national_prefix_pattern, national_prefix_transform_rule);
	}
	// Else, no transformation is necessary,
	// and just strip the national prefix.
	else {
			national_significant_number = number.slice(national_prefix_matcher[0].length);
		}

	// Verify the parsed national (significant) number for this country
	var national_number_rule = new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["k" /* get_national_number_pattern */])(country_metadata));

	// If the original number (before stripping national prefix) was viable,
	// and the resultant number is not, then prefer the original phone number.
	// This is because for some countries (e.g. Russia) the same digit could be both
	// a national prefix and a leading digit of a valid national phone number,
	// like `8` is the national prefix for Russia and both
	// `8 800 555 35 35` and `800 555 35 35` are valid numbers.
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common__["a" /* matches_entirely */])(number, national_number_rule) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common__["a" /* matches_entirely */])(national_significant_number, national_number_rule)) {
		return number;
	}

	// Return the parsed national (significant) number
	return national_significant_number;
}

function find_country_code(country_phone_code, national_phone_number, metadata) {
	// Is always non-empty, because `country_phone_code` is always valid
	var possible_countries = metadata.country_phone_code_to_countries[country_phone_code];

	// If there's just one country corresponding to the country code,
	// then just return it, without further phone number digits validation.
	if (possible_countries.length === 1) {
		return possible_countries[0];
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(possible_countries), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var country_code = _step2.value;

			var country = metadata.countries[country_code];

			// Leading digits check would be the simplest one
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["n" /* get_leading_digits */])(country)) {
				if (national_phone_number && national_phone_number.search(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["n" /* get_leading_digits */])(country)) === 0) {
					return country_code;
				}
			}
			// Else perform full validation with all of those bulky
			// fixed-line/mobile/etc regular expressions.
			else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__get_number_type__["a" /* default */])({ phone: national_phone_number, country: country_code }, metadata)) {
					return country_code;
				}
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
}

// export function is_national_prefix_required(national_number, country_metadata)
// {
// 	const format = choose_format_for_number(get_formats(country_metadata), national_number)
//
// 	if (format)
// 	{
// 		return get_format_national_prefix_is_mandatory_when_formatting(format, country_metadata)
// 	}
// }

// Sort out arguments
function sort_out_arguments(first_argument, second_argument, third_argument) {
	var text = void 0;
	var options = void 0;
	var metadata = void 0;

	if (typeof first_argument === 'string') {
		text = first_argument;
	}

	// Covert `resrict` country to an `options` object
	if (typeof second_argument === 'string') {
		var restrict_to_country = second_argument;

		options = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, default_options, {

			country: {
				restrict: restrict_to_country
			}
		});

		metadata = third_argument;
	} else {
		// Differentiate `metadata` from `options`
		if (second_argument && second_argument.countries) {
			metadata = second_argument;
		} else {
			options = second_argument;
			metadata = third_argument;
		}
	}

	// Sanity check
	if (!metadata) {
		throw new Error('Metadata not passed');
	}

	return { text: text, options: options, metadata: metadata };
}
//# sourceMappingURL=parse.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(87);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(85);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matches_entirely;
// Checks whether the entire input sequence can be matched
// against the regular expression.
function matches_entirely() {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var regular_expression = arguments[1];

	if (typeof regular_expression === 'string') {
		regular_expression = '^(?:' + regular_expression + ')$';
	}

	var matched_groups = text.match(regular_expression);
	return matched_groups && matched_groups[0].length === text.length;
}
//# sourceMappingURL=common.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FIRST_GROUP_PATTERN; });
/* harmony export (immutable) */ __webpack_exports__["b"] = format_national_number_using_format;
/* unused harmony export format_national_number */
/* unused harmony export choose_format_for_number */
/* harmony export (immutable) */ __webpack_exports__["d"] = local_to_international_style;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(13);

// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js







// Formats a phone number
//
// Example use cases:
//
// ```js
// format('8005553535', 'RU', 'International')
// format('8005553535', 'RU', 'International', metadata)
// format({ phone: '8005553535', country: 'RU' }, 'International')
// format({ phone: '8005553535', country: 'RU' }, 'International', metadata)
// format('+78005553535', 'National')
// format('+78005553535', 'National', metadata)
// ```
//
function format(first_argument, second_argument, third_argument, fourth_argument) {
	var _sort_out_arguments = sort_out_arguments(first_argument, second_argument, third_argument, fourth_argument),
	    input = _sort_out_arguments.input,
	    format_type = _sort_out_arguments.format_type,
	    metadata = _sort_out_arguments.metadata;

	var country_metadata = void 0;

	if (input.country) {
		country_metadata = metadata.countries[input.country];
	}

	var _parse_phone_number_a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__parse__["g" /* parse_phone_number_and_country_phone_code */])(input.phone, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	if (country_phone_code) {
		// Check country restriction
		if (input.country && country_metadata && country_phone_code !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* get_phone_code */])(country_metadata)) {
			return input.phone;
		}

		country_metadata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["f" /* get_metadata_by_country_phone_code */])(country_phone_code, metadata);
	}

	if (!country_metadata) {
		return input.phone;
	}

	switch (format_type) {
		case 'International':
			if (!number) {
				return '+' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* get_phone_code */])(country_metadata);
			}
			var national_number = format_national_number(number, 'International', false, country_metadata);
			return '+' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* get_phone_code */])(country_metadata) + ' ' + national_number;

		case 'International_plaintext':
			return '+' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* get_phone_code */])(country_metadata) + input.phone;

		case 'National':
			if (!number) {
				return '';
			}
			return format_national_number(number, 'National', false, country_metadata);
	}
}

// This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.
var FIRST_GROUP_PATTERN = /(\$\d)/;

function format_national_number_using_format(number, format, international, enforce_national_prefix, country_metadata) {
	var format_pattern_matcher = new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* get_format_pattern */])(format));

	var national_prefix_formatting_rule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["h" /* get_format_national_prefix_formatting_rule */])(format, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["o" /* get_format_national_prefix_is_optional_when_formatting */])(format, country_metadata) && !enforce_national_prefix;

	if (!international && !national_prefix_may_be_omitted) {
		return number.replace(format_pattern_matcher, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["j" /* get_format_format */])(format).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
	}

	var formatted_number = number.replace(format_pattern_matcher, international ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["c" /* get_format_international_format */])(format) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["j" /* get_format_format */])(format));

	if (international) {
		return local_to_international_style(formatted_number);
	}

	return formatted_number;
}

function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
	var format = choose_format_for_number(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["b" /* get_formats */])(country_metadata), number);

	if (!format) {
		return number;
	}

	return format_national_number_using_format(number, format, format_as === 'International', enforce_national_prefix, country_metadata);
}

function choose_format_for_number(available_formats, national_number) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _format = _step.value;

			// Validate leading digits
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* get_format_leading_digits_patterns */])(_format).length > 0) {
				// The last leading_digits_pattern is used here, as it is the most detailed
				var last_leading_digits_pattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* get_format_leading_digits_patterns */])(_format)[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* get_format_leading_digits_patterns */])(_format).length - 1];

				// If leading digits don't match then move on to the next phone number format
				if (national_number.search(last_leading_digits_pattern) !== 0) {
					continue;
				}
			}

			// Check that the national number matches the phone number format regular expression
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["a" /* matches_entirely */])(national_number, new RegExp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* get_format_pattern */])(_format)))) {
				return _format;
			}
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
}

// Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
function local_to_international_style(local) {
	return local
	// Remove brackets
	.replace(/[\(\)]/g, '')
	// Replace dashes with spaces
	.replace(/\-/g, ' ').trim();
}

// Sort out arguments
function sort_out_arguments() {
	var first_argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var second_argument = arguments[1];
	var third_argument = arguments[2];
	var fourth_argument = arguments[3];

	var input = void 0;
	var format_type = void 0;
	var metadata = void 0;

	// Sort out arguments
	if (typeof first_argument === 'string') {
		// If country code is supplied
		if (typeof third_argument === 'string') {
			// Will be `parse()`d later in code
			input = {
				phone: first_argument,
				country: second_argument
			};

			format_type = third_argument;
			metadata = fourth_argument;
		}
		// Just an international phone number is supplied
		else {
				// Will be `parse()`d later in code
				input = {
					phone: first_argument
				};

				if (typeof second_argument !== 'string') {
					throw new Error('Format type argument not passed for `format()`');
				}

				format_type = second_argument;
				metadata = third_argument;
			}
	} else {
		input = first_argument;
		format_type = second_argument;
		metadata = third_argument;
	}

	// Sanity check
	if (!metadata) {
		throw new Error('Metadata not passed');
	}

	switch (format_type) {
		case 'International':
		case 'International_plaintext':
		case 'National':
			break;
		default:
			throw new Error('Unknown format type argument passed to "format()": "' + format_type + '"');
	}

	return { input: input, format_type: format_type, metadata: metadata };
}
//# sourceMappingURL=format.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = get_number_type;
/* unused harmony export is_of_type */
/* harmony export (immutable) */ __webpack_exports__["b"] = sort_out_arguments;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata__ = __webpack_require__(13);






// Finds out national phone number type (fixed line, mobile, etc)
function get_number_type(first_argument, second_argument, third_argument) {
	var _sort_out_arguments = sort_out_arguments(first_argument, second_argument, third_argument),
	    input = _sort_out_arguments.input,
	    metadata = _sort_out_arguments.metadata;

	// Sanity check


	if (!metadata) {
		throw new Error('Metadata not passed');
	}

	// When no input was passed
	if (!input) {
		return;
	}

	// When `parse()` returned `{}`
	// meaning that the phone number is not a valid one.
	if (!input.country) {
		return;
	}

	var national_number = input.phone;
	var country_metadata = metadata.countries[input.country];

	// The following is copy-pasted from the original function:
	// https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835

	// Is this national number even valid for this country
	if (!is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["k" /* get_national_number_pattern */])(country_metadata))) {
		return; // 'UNKNOWN'
	}

	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["q" /* get_type_premium_rate */])(country_metadata))) {
		return 'PREMIUM_RATE';
	}

	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["r" /* get_type_toll_free */])(country_metadata))) {
		return 'TOLL_FREE';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["s" /* get_type_shared_cost */])(country_metadata))) {
		return 'SHARED_COST';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["t" /* get_type_voip */])(country_metadata))) {
		return 'VOIP';
	}

	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["u" /* get_type_personal_number */])(country_metadata))) {
		return 'PERSONAL_NUMBER';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["v" /* get_type_pager */])(country_metadata))) {
		return 'PAGER';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["w" /* get_type_uan */])(country_metadata))) {
		return 'UAN';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["x" /* get_type_voice_mail */])(country_metadata))) {
		return 'VOICEMAIL';
	}

	// Is it fixed line number
	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["y" /* get_type_fixed_line */])(country_metadata))) {
		// Because duplicate regular expressions are removed
		// to reduce metadata size, if there's no "mobile" pattern
		// then it means it was removed due to being a duplicate of some other pattern.
		//
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["z" /* get_type_mobile */])(country_metadata)) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		// Check if the number happens to qualify as both fixed line and mobile.
		// (no such country in the minimal metadata set)
		/* istanbul ignore if */
		if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["z" /* get_type_mobile */])(country_metadata))) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		return 'FIXED_LINE';
	}

	if (is_of_type(national_number, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["z" /* get_type_mobile */])(country_metadata))) {
		return 'MOBILE';
	}

	// return 'UNKNOWN'
}

function is_of_type(national_number, type) {
	// // Check if any possible number lengths are present;
	// // if so, we use them to avoid checking
	// // the validation pattern if they don't match.
	// // If they are absent, this means they match
	// // the general description, which we have
	// // already checked before a specific number type.
	// if (get_possible_lengths(type) &&
	// 	get_possible_lengths(type).indexOf(national_number.length) === -1)
	// {
	// 	return false
	// }

	// get_type_pattern(type) === type
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["a" /* matches_entirely */])(national_number, type);
}

// Sort out arguments
function sort_out_arguments(first_argument, second_argument, third_argument) {
	var input = void 0;
	var metadata = void 0;

	if (typeof first_argument === 'string') {
		// If country code is supplied
		if (typeof second_argument === 'string') {
			metadata = third_argument;

			// `parse` extracts phone numbers from raw text,
			// therefore it will cut off all "garbage" characters,
			// while this `validate` function needs to verify
			// that the phone number contains no "garbage"
			// therefore the explicit `is_viable_phone_number` check.
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse__["j" /* is_viable_phone_number */])(first_argument)) {
				input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse__["a" /* default */])(first_argument, second_argument, metadata);
			}
		}
		// Just an international phone number is supplied
		else {
				metadata = second_argument;

				// `parse` extracts phone numbers from raw text,
				// therefore it will cut off all "garbage" characters,
				// while this `validate` function needs to verify
				// that the phone number contains no "garbage"
				// therefore the explicit `is_viable_phone_number` check.
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse__["j" /* is_viable_phone_number */])(first_argument)) {
					input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse__["a" /* default */])(first_argument, metadata);
				}
			}
	} else {
		// The `first_argument` must be a valid phone number
		// as a whole, not just a part of it which gets parsed here.
		if (first_argument && first_argument.phone && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parse__["j" /* is_viable_phone_number */])(first_argument.phone)) {
			input = first_argument;
		}

		metadata = second_argument;
	}

	return { input: input, metadata: metadata };
}
//# sourceMappingURL=get number type.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(88);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(86);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(57);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(57);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(9)
  , dPs         = __webpack_require__(113)
  , enumBugKeys = __webpack_require__(34)
  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(61)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(106).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys')
  , uid    = __webpack_require__(25);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(35)
  , wksExt         = __webpack_require__(44)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(116)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(64)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(11)
  , Iterators     = __webpack_require__(19)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = count_occurences;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);

// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(string), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			if (character === symbol) {
				count++;
			}
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

	return count;
}
//# sourceMappingURL=helpers.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(143)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(142)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
	"country_phone_code_to_countries": {
		"1": [
			"US",
			"AG",
			"AI",
			"AS",
			"BB",
			"BM",
			"BS",
			"CA",
			"DM",
			"DO",
			"GD",
			"GU",
			"JM",
			"KN",
			"KY",
			"LC",
			"MP",
			"MS",
			"PR",
			"SX",
			"TC",
			"TT",
			"VC",
			"VG",
			"VI"
		],
		"7": [
			"RU",
			"KZ"
		],
		"20": [
			"EG"
		],
		"27": [
			"ZA"
		],
		"30": [
			"GR"
		],
		"31": [
			"NL"
		],
		"32": [
			"BE"
		],
		"33": [
			"FR"
		],
		"34": [
			"ES"
		],
		"36": [
			"HU"
		],
		"39": [
			"IT",
			"VA"
		],
		"40": [
			"RO"
		],
		"41": [
			"CH"
		],
		"43": [
			"AT"
		],
		"44": [
			"GB",
			"GG",
			"IM",
			"JE"
		],
		"45": [
			"DK"
		],
		"46": [
			"SE"
		],
		"47": [
			"NO",
			"SJ"
		],
		"48": [
			"PL"
		],
		"49": [
			"DE"
		],
		"51": [
			"PE"
		],
		"52": [
			"MX"
		],
		"53": [
			"CU"
		],
		"54": [
			"AR"
		],
		"55": [
			"BR"
		],
		"56": [
			"CL"
		],
		"57": [
			"CO"
		],
		"58": [
			"VE"
		],
		"60": [
			"MY"
		],
		"61": [
			"AU",
			"CC",
			"CX"
		],
		"62": [
			"ID"
		],
		"63": [
			"PH"
		],
		"64": [
			"NZ"
		],
		"65": [
			"SG"
		],
		"66": [
			"TH"
		],
		"81": [
			"JP"
		],
		"82": [
			"KR"
		],
		"84": [
			"VN"
		],
		"86": [
			"CN"
		],
		"90": [
			"TR"
		],
		"91": [
			"IN"
		],
		"92": [
			"PK"
		],
		"93": [
			"AF"
		],
		"94": [
			"LK"
		],
		"95": [
			"MM"
		],
		"98": [
			"IR"
		],
		"211": [
			"SS"
		],
		"212": [
			"MA",
			"EH"
		],
		"213": [
			"DZ"
		],
		"216": [
			"TN"
		],
		"218": [
			"LY"
		],
		"220": [
			"GM"
		],
		"221": [
			"SN"
		],
		"222": [
			"MR"
		],
		"223": [
			"ML"
		],
		"224": [
			"GN"
		],
		"225": [
			"CI"
		],
		"226": [
			"BF"
		],
		"227": [
			"NE"
		],
		"228": [
			"TG"
		],
		"229": [
			"BJ"
		],
		"230": [
			"MU"
		],
		"231": [
			"LR"
		],
		"232": [
			"SL"
		],
		"233": [
			"GH"
		],
		"234": [
			"NG"
		],
		"235": [
			"TD"
		],
		"236": [
			"CF"
		],
		"237": [
			"CM"
		],
		"238": [
			"CV"
		],
		"239": [
			"ST"
		],
		"240": [
			"GQ"
		],
		"241": [
			"GA"
		],
		"242": [
			"CG"
		],
		"243": [
			"CD"
		],
		"244": [
			"AO"
		],
		"245": [
			"GW"
		],
		"246": [
			"IO"
		],
		"247": [
			"AC"
		],
		"248": [
			"SC"
		],
		"249": [
			"SD"
		],
		"250": [
			"RW"
		],
		"251": [
			"ET"
		],
		"252": [
			"SO"
		],
		"253": [
			"DJ"
		],
		"254": [
			"KE"
		],
		"255": [
			"TZ"
		],
		"256": [
			"UG"
		],
		"257": [
			"BI"
		],
		"258": [
			"MZ"
		],
		"260": [
			"ZM"
		],
		"261": [
			"MG"
		],
		"262": [
			"RE",
			"YT"
		],
		"263": [
			"ZW"
		],
		"264": [
			"NA"
		],
		"265": [
			"MW"
		],
		"266": [
			"LS"
		],
		"267": [
			"BW"
		],
		"268": [
			"SZ"
		],
		"269": [
			"KM"
		],
		"290": [
			"SH",
			"TA"
		],
		"291": [
			"ER"
		],
		"297": [
			"AW"
		],
		"298": [
			"FO"
		],
		"299": [
			"GL"
		],
		"350": [
			"GI"
		],
		"351": [
			"PT"
		],
		"352": [
			"LU"
		],
		"353": [
			"IE"
		],
		"354": [
			"IS"
		],
		"355": [
			"AL"
		],
		"356": [
			"MT"
		],
		"357": [
			"CY"
		],
		"358": [
			"FI",
			"AX"
		],
		"359": [
			"BG"
		],
		"370": [
			"LT"
		],
		"371": [
			"LV"
		],
		"372": [
			"EE"
		],
		"373": [
			"MD"
		],
		"374": [
			"AM"
		],
		"375": [
			"BY"
		],
		"376": [
			"AD"
		],
		"377": [
			"MC"
		],
		"378": [
			"SM"
		],
		"380": [
			"UA"
		],
		"381": [
			"RS"
		],
		"382": [
			"ME"
		],
		"385": [
			"HR"
		],
		"386": [
			"SI"
		],
		"387": [
			"BA"
		],
		"389": [
			"MK"
		],
		"420": [
			"CZ"
		],
		"421": [
			"SK"
		],
		"423": [
			"LI"
		],
		"500": [
			"FK"
		],
		"501": [
			"BZ"
		],
		"502": [
			"GT"
		],
		"503": [
			"SV"
		],
		"504": [
			"HN"
		],
		"505": [
			"NI"
		],
		"506": [
			"CR"
		],
		"507": [
			"PA"
		],
		"508": [
			"PM"
		],
		"509": [
			"HT"
		],
		"590": [
			"GP",
			"BL",
			"MF"
		],
		"591": [
			"BO"
		],
		"592": [
			"GY"
		],
		"593": [
			"EC"
		],
		"594": [
			"GF"
		],
		"595": [
			"PY"
		],
		"596": [
			"MQ"
		],
		"597": [
			"SR"
		],
		"598": [
			"UY"
		],
		"599": [
			"CW",
			"BQ"
		],
		"670": [
			"TL"
		],
		"672": [
			"NF"
		],
		"673": [
			"BN"
		],
		"674": [
			"NR"
		],
		"675": [
			"PG"
		],
		"676": [
			"TO"
		],
		"677": [
			"SB"
		],
		"678": [
			"VU"
		],
		"679": [
			"FJ"
		],
		"680": [
			"PW"
		],
		"681": [
			"WF"
		],
		"682": [
			"CK"
		],
		"683": [
			"NU"
		],
		"685": [
			"WS"
		],
		"686": [
			"KI"
		],
		"687": [
			"NC"
		],
		"688": [
			"TV"
		],
		"689": [
			"PF"
		],
		"690": [
			"TK"
		],
		"691": [
			"FM"
		],
		"692": [
			"MH"
		],
		"800": [
			"001"
		],
		"808": [
			"001"
		],
		"850": [
			"KP"
		],
		"852": [
			"HK"
		],
		"853": [
			"MO"
		],
		"855": [
			"KH"
		],
		"856": [
			"LA"
		],
		"870": [
			"001"
		],
		"878": [
			"001"
		],
		"880": [
			"BD"
		],
		"881": [
			"001"
		],
		"882": [
			"001"
		],
		"883": [
			"001"
		],
		"886": [
			"TW"
		],
		"888": [
			"001"
		],
		"960": [
			"MV"
		],
		"961": [
			"LB"
		],
		"962": [
			"JO"
		],
		"963": [
			"SY"
		],
		"964": [
			"IQ"
		],
		"965": [
			"KW"
		],
		"966": [
			"SA"
		],
		"967": [
			"YE"
		],
		"968": [
			"OM"
		],
		"970": [
			"PS"
		],
		"971": [
			"AE"
		],
		"972": [
			"IL"
		],
		"973": [
			"BH"
		],
		"974": [
			"QA"
		],
		"975": [
			"BT"
		],
		"976": [
			"MN"
		],
		"977": [
			"NP"
		],
		"979": [
			"001"
		],
		"992": [
			"TJ"
		],
		"993": [
			"TM"
		],
		"994": [
			"AZ"
		],
		"995": [
			"GE"
		],
		"996": [
			"KG"
		],
		"998": [
			"UZ"
		]
	},
	"countries": {
		"AC": [
			"247",
			"[46]\\d{4}|[01589]\\d{5}"
		],
		"AD": [
			"376",
			"[16]\\d{5,8}|[37-9]\\d{5}",
			[
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"[137-9]|6[0-8]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"180",
						"180[02]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"690"
					]
				]
			]
		],
		"AE": [
			"971",
			"[2-79]\\d{7,8}|800\\d{2,9}",
			[
				[
					"([2-4679])(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2-4679][2-8]"
					]
				],
				[
					"(5\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"5"
					]
				],
				[
					"([479]00)(\\d)(\\d{5})",
					"$1 $2 $3",
					[
						"[479]0"
					],
					"$1"
				],
				[
					"([68]00)(\\d{2,9})",
					"$1 $2",
					[
						"60|8"
					],
					"$1"
				]
			],
			"0",
			"0$1"
		],
		"AF": [
			"93",
			"[2-7]\\d{8}",
			[
				[
					"([2-7]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2-7]"
					]
				]
			],
			"0",
			"0$1"
		],
		"AG": [
			"1",
			"[2589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"268"
		],
		"AI": [
			"1",
			"[2589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"264"
		],
		"AL": [
			"355",
			"[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}",
			[
				[
					"(4)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"4[0-6]"
					]
				],
				[
					"(6\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"6"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2358][2-5]|4[7-9]"
					]
				],
				[
					"(\\d{3})(\\d{3,5})",
					"$1 $2",
					[
						"[235][16-9]|8[016-9]|[79]"
					]
				]
			],
			"0",
			"0$1"
		],
		"AM": [
			"374",
			"[1-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"1|47"
					]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"4[1349]|[5-7]|9[1-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[23]"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"8|90"
					],
					"0 $1"
				]
			],
			"0",
			"(0$1)"
		],
		"AO": [
			"244",
			"[29]\\d{8}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3"
				]
			]
		],
		"AR": [
			"54",
			"11\\d{8}|[2368]\\d{9}|9\\d{10}",
			[
				[
					"([68]\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[68]"
					]
				],
				[
					"(9)(11)(\\d{4})(\\d{4})",
					"$2 15-$3-$4",
					[
						"911"
					],
					null,
					null,
					"$1 $2 $3-$4"
				],
				[
					"(9)(\\d{3})(\\d{3})(\\d{4})",
					"$2 15-$3-$4",
					[
						"9(?:2[234689]|3[3-8])",
						"9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))",
						"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))",
						"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"
					],
					null,
					null,
					"$1 $2 $3-$4"
				],
				[
					"(9)(\\d{4})(\\d{2})(\\d{4})",
					"$2 15-$3-$4",
					[
						"9[23]"
					],
					null,
					null,
					"$1 $2 $3-$4"
				],
				[
					"(11)(\\d{4})(\\d{4})",
					"$1 $2-$3",
					[
						"1"
					],
					null,
					"true"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2-$3",
					[
						"2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])",
						"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))",
						"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"
					],
					null,
					"true"
				],
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2-$3",
					[
						"[23]"
					],
					null,
					"true"
				]
			],
			"0",
			"0$1",
			"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?",
			"9$1"
		],
		"AS": [
			"1",
			"[5689]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"684"
		],
		"AT": [
			"43",
			"[1-9]\\d{3,12}",
			[
				[
					"(116\\d{3})",
					"$1",
					[
						"116"
					],
					"$1"
				],
				[
					"(1)(\\d{3,12})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(5\\d)(\\d{3,5})",
					"$1 $2",
					[
						"5[079]"
					]
				],
				[
					"(5\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"5[079]"
					]
				],
				[
					"(5\\d)(\\d{4})(\\d{4,7})",
					"$1 $2 $3",
					[
						"5[079]"
					]
				],
				[
					"(\\d{3})(\\d{3,10})",
					"$1 $2",
					[
						"316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"
					]
				],
				[
					"(\\d{4})(\\d{3,9})",
					"$1 $2",
					[
						"2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"
					]
				]
			],
			"0",
			"0$1"
		],
		"AU": [
			"61",
			"1\\d{4,9}|[2-578]\\d{8}",
			[
				[
					"([2378])(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[2378]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[45]|14"
					],
					"0$1"
				],
				[
					"(16)(\\d{3,4})",
					"$1 $2",
					[
						"16"
					],
					"0$1"
				],
				[
					"(16)(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					[
						"16"
					],
					"0$1"
				],
				[
					"(1[389]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[38]0|90)",
						"1(?:[38]00|90)"
					],
					"$1"
				],
				[
					"(180)(2\\d{3})",
					"$1 $2",
					[
						"180",
						"1802"
					],
					"$1"
				],
				[
					"(19\\d)(\\d{3})",
					"$1 $2",
					[
						"19[13]"
					],
					"$1"
				],
				[
					"(19\\d{2})(\\d{4})",
					"$1 $2",
					[
						"19[679]"
					],
					"$1"
				],
				[
					"(13)(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"13[1-9]"
					],
					"$1"
				]
			],
			"0",
			null,
			null,
			null,
			null,
			null,
			[
				"[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}",
				"14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
				"180(?:0\\d{3}|2)\\d{3}",
				"19(?:0[0126]\\d|[679])\\d{5}",
				"500\\d{6}",
				null,
				null,
				"16\\d{3,7}",
				"550\\d{6}",
				"13(?:00\\d{3}|45[0-4]|\\d)\\d{3}"
			]
		],
		"AW": [
			"297",
			"[25-9]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"AX": [
			"358",
			"[15]\\d{6,9}|2\\d{4,9}|3\\d{5,9}|4\\d{7,10}|[67]\\d{7,9}|8\\d{7,8}",
			[
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					[
						"(?:[16-8]0|300)"
					]
				],
				[
					"(116\\d{3})",
					"$1",
					[
						"116"
					],
					"$1"
				],
				[
					"(\\d{2})(\\d{3,9})",
					"$1 $2",
					[
						"1[3-9]|2[09]|4|50|7(?:[13]|5[03-9])"
					]
				],
				[
					"(\\d)(\\d{6,9})",
					"$1 $2",
					[
						"[25689][1-8]|3(?:0[1-9]|[1-8])"
					]
				],
				[
					"(39\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"39"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"18[1-8]\\d{4,6}",
				"4(?:[0-8]\\d{6,8}|9\\d{9})|50\\d{6,8}",
				"800\\d{5,6}",
				"[67]00\\d{5,6}",
				null,
				null,
				"10(?:0\\d{4,6}|[1-9]\\d{5,7})|2(?:0(?:0\\d{4,6}|[13-8]\\d{5,7}|2(?:[023]\\d{4,5}|[14-9]\\d{4,6})|9(?:[0-7]\\d{4,6}|[89]\\d{1,6}))|9\\d{6,8})|3(?:0(?:0\\d{3,7}|[1-9]\\d{5,7})|93\\d{5,7})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})"
			]
		],
		"AZ": [
			"994",
			"[1-9]\\d{8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"(?:1[28]|2(?:[45]2|[0-36])|365)"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[4-8]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"9"
					],
					"0$1"
				]
			],
			"0",
			"(0$1)"
		],
		"BA": [
			"387",
			"[3-9]\\d{7,8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2-$3",
					[
						"[3-5]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6[1-356]|[7-9]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"6[047]"
					]
				]
			],
			"0",
			"0$1"
		],
		"BB": [
			"1",
			"[2589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"246"
		],
		"BD": [
			"880",
			"[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}",
			[
				[
					"(2)(\\d{7,8})",
					"$1-$2",
					[
						"2"
					]
				],
				[
					"(\\d{2})(\\d{4,6})",
					"$1-$2",
					[
						"[3-79]1"
					]
				],
				[
					"(\\d{4})(\\d{3,6})",
					"$1-$2",
					[
						"1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"
					]
				],
				[
					"(\\d{3})(\\d{3,7})",
					"$1-$2",
					[
						"[3-79][2-9]|8"
					]
				]
			],
			"0",
			"0$1"
		],
		"BE": [
			"32",
			"[1-9]\\d{7,8}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"4[6-9]"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[23]|4[23]|9[2-4]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[156]|7[018]|8(?:0[1-9]|[1-79])"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"(?:80|9)0"
					]
				]
			],
			"0",
			"0$1"
		],
		"BF": [
			"226",
			"[25-7]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"BG": [
			"359",
			"[23567]\\d{5,7}|[489]\\d{6,8}",
			[
				[
					"(2)(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"2"
					]
				],
				[
					"(2)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"43[124-7]|70[1-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3",
					[
						"43[124-7]|70[1-9]"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[78]00"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"999"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					[
						"[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"48|8[7-9]|9[08]"
					]
				]
			],
			"0",
			"0$1"
		],
		"BH": [
			"973",
			"[136-9]\\d{7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"BI": [
			"257",
			"[267]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"BJ": [
			"229",
			"[2689]\\d{7}|7\\d{3}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"BL": [
			"590",
			"[56]\\d{8}",
			[
				[
					"([56]90)(\\d{2})(\\d{4})",
					"$1 $2-$3"
				]
			],
			"0",
			null,
			null,
			null,
			null,
			null,
			[
				"590(?:2[7-9]|5[12]|87)\\d{4}",
				"690(?:0[0-7]|[1-9]\\d)\\d{4}"
			]
		],
		"BM": [
			"1",
			"[4589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"441"
		],
		"BN": [
			"673",
			"[2-578]\\d{6}",
			[
				[
					"([2-578]\\d{2})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"BO": [
			"591",
			"[23467]\\d{7}",
			[
				[
					"([234])(\\d{7})",
					"$1 $2",
					[
						"[234]"
					]
				],
				[
					"([67]\\d{7})",
					"$1",
					[
						"[67]"
					]
				]
			],
			"0",
			null,
			"0(1\\d)?"
		],
		"BQ": [
			"599",
			"[347]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[13-7]"
					]
				],
				[
					"(9)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"9"
					]
				]
			],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",
				"(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"
			]
		],
		"BR": [
			"55",
			"[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))",
			[
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2-$3",
					[
						"[1-9][1-9]"
					],
					"($1)"
				],
				[
					"(\\d{2})(\\d{5})(\\d{4})",
					"$1 $2-$3",
					[
						"(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"
					],
					"($1)"
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"(?:300|40(?:0|20))"
					]
				],
				[
					"([3589]00)(\\d{2,3})(\\d{4})",
					"$1 $2 $3",
					[
						"[3589]00"
					],
					"0$1"
				]
			],
			"0",
			null,
			"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
			"$2"
		],
		"BS": [
			"1",
			"[2589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"242"
		],
		"BT": [
			"975",
			"[1-8]\\d{6,7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"1|77"
					]
				],
				[
					"([2-8])(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-68]|7[246]"
					]
				]
			]
		],
		"BW": [
			"267",
			"[2-79]\\d{6,7}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-6]"
					]
				],
				[
					"(7\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"7"
					]
				],
				[
					"(90)(\\d{5})",
					"$1 $2",
					[
						"9"
					]
				]
			]
		],
		"BY": [
			"375",
			"[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"17[0-3589]|2[4-9]|[34]",
						"17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"
					],
					"8 0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])",
						"1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"
					],
					"8 0$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{3})",
					"$1 $2-$3",
					[
						"1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
						"1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"
					],
					"8 0$1"
				],
				[
					"([89]\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8[01]|9"
					],
					"8 $1"
				],
				[
					"(82\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"82"
					],
					"8 $1"
				],
				[
					"(800)(\\d{3})",
					"$1 $2",
					[
						"800"
					],
					"8 $1"
				],
				[
					"(800)(\\d{2})(\\d{2,4})",
					"$1 $2 $3",
					[
						"800"
					],
					"8 $1"
				]
			],
			"8",
			null,
			"8?0?"
		],
		"BZ": [
			"501",
			"[2-8]\\d{6}|0\\d{10}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[2-8]"
					]
				],
				[
					"(0)(800)(\\d{4})(\\d{3})",
					"$1-$2-$3-$4",
					[
						"0"
					]
				]
			]
		],
		"CA": [
			"1",
			"[2-9]\\d{9}|3\\d{6}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			null,
			[
				"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}",
				"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
				"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}",
				"900[2-9]\\d{6}",
				"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}"
			]
		],
		"CC": [
			"61",
			"[1458]\\d{5,9}",
			[
				[
					"([2378])(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[2378]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[45]|14"
					],
					"0$1"
				],
				[
					"(16)(\\d{3,4})",
					"$1 $2",
					[
						"16"
					],
					"0$1"
				],
				[
					"(16)(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					[
						"16"
					],
					"0$1"
				],
				[
					"(1[389]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[38]0|90)",
						"1(?:[38]00|90)"
					],
					"$1"
				],
				[
					"(180)(2\\d{3})",
					"$1 $2",
					[
						"180",
						"1802"
					],
					"$1"
				],
				[
					"(19\\d)(\\d{3})",
					"$1 $2",
					[
						"19[13]"
					],
					"$1"
				],
				[
					"(19\\d{2})(\\d{4})",
					"$1 $2",
					[
						"19[679]"
					],
					"$1"
				],
				[
					"(13)(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"13[1-9]"
					],
					"$1"
				]
			],
			"0",
			null,
			null,
			null,
			null,
			null,
			[
				"89162\\d{4}",
				"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
				"180(?:0\\d{3}|2)\\d{3}",
				"190[0126]\\d{6}",
				"500\\d{6}",
				null,
				null,
				null,
				"550\\d{6}",
				"13(?:00\\d{2})?\\d{4}"
			]
		],
		"CD": [
			"243",
			"[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"12"
					]
				],
				[
					"([89]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8[0-2459]|9"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"88"
					]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"[1-6]"
					]
				]
			],
			"0",
			"0$1"
		],
		"CF": [
			"236",
			"[278]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"CG": [
			"242",
			"[028]\\d{8}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"801"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[02]"
					]
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"800"
					]
				]
			]
		],
		"CH": [
			"41",
			"[2-9]\\d{8}|860\\d{9}",
			[
				[
					"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2-7]|[89]1"
					]
				],
				[
					"([89]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8[047]|90"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"860"
					]
				]
			],
			"0",
			"0$1"
		],
		"CI": [
			"225",
			"[02-8]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"CK": [
			"682",
			"[2-8]\\d{4}",
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2"
				]
			]
		],
		"CL": [
			"56",
			"(?:[2-9]|600|123)\\d{7,8}",
			[
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2[23]"
					],
					"($1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[357]|4[1-35]|6[13-57]"
					],
					"($1)"
				],
				[
					"(9)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"9"
					]
				],
				[
					"(44)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"44"
					]
				],
				[
					"([68]00)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"60|8"
					],
					"$1"
				],
				[
					"(600)(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"60"
					],
					"$1"
				],
				[
					"(1230)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					],
					"$1"
				],
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					[
						"219"
					],
					"($1)"
				]
			],
			"0",
			"0$1",
			"0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"
		],
		"CM": [
			"237",
			"[2368]\\d{7,8}",
			[
				[
					"([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"[26]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[23]|88"
					]
				],
				[
					"(800)(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"80"
					]
				]
			]
		],
		"CN": [
			"86",
			"[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}",
			[
				[
					"(80\\d{2})(\\d{4})",
					"$1 $2",
					[
						"80[2678]"
					],
					"0$1",
					"true"
				],
				[
					"([48]00)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[48]00"
					]
				],
				[
					"(\\d{2})(\\d{5,6})",
					"$1 $2",
					[
						"(?:10|2\\d)[19]",
						"(?:10|2\\d)(?:10|9[56])",
						"(?:10|2\\d)(?:100|9[56])"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"[3-9]",
						"[3-9]\\d{2}[19]",
						"[3-9]\\d{2}(?:10|9[56])"
					],
					"0$1"
				],
				[
					"(21)(\\d{4})(\\d{4,6})",
					"$1 $2 $3",
					[
						"21"
					],
					"0$1",
					"true"
				],
				[
					"([12]\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"10[1-9]|2[02-9]",
						"10[1-9]|2[02-9]",
						"10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"
					],
					"0$1",
					"true"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"
					],
					"0$1",
					"true"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"
					],
					"0$1",
					"true"
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"807",
						"8078"
					],
					"0$1",
					"true"
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"1[3-578]"
					]
				],
				[
					"(10800)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"108",
						"1080",
						"10800"
					]
				],
				[
					"(\\d{3})(\\d{7,8})",
					"$1 $2",
					[
						"950"
					]
				]
			],
			"0",
			null,
			"(1(?:[129]\\d{3}|79\\d{2}))|0"
		],
		"CO": [
			"57",
			"(?:[13]\\d{0,3}|[24-8])\\d{7}",
			[
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"1(?:8[2-9]|9[0-3]|[2-7])|[24-8]",
						"1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"
					],
					"($1)"
				],
				[
					"(\\d{3})(\\d{7})",
					"$1 $2",
					[
						"3"
					]
				],
				[
					"(1)(\\d{3})(\\d{7})",
					"$1-$2-$3",
					[
						"1(?:80|9[04])",
						"1(?:800|9(?:0[01]|4[78]))"
					],
					"0$1",
					null,
					"$1 $2 $3"
				]
			],
			"0",
			null,
			"0([3579]|4(?:44|56))?"
		],
		"CR": [
			"506",
			"[24-9]\\d{7,9}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[24-7]|8[3-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[89]0"
					]
				]
			],
			null,
			null,
			"(19(?:0[012468]|1[09]|20|66|77|99))"
		],
		"CU": [
			"53",
			"[2-57]\\d{5,7}",
			[
				[
					"(\\d)(\\d{6,7})",
					"$1 $2",
					[
						"7"
					]
				],
				[
					"(\\d{2})(\\d{4,6})",
					"$1 $2",
					[
						"[2-4]"
					]
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"5"
					],
					"0$1"
				]
			],
			"0",
			"(0$1)"
		],
		"CV": [
			"238",
			"[259]\\d{6}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3"
				]
			]
		],
		"CW": [
			"599",
			"[169]\\d{6,7}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[13-7]"
					]
				],
				[
					"(9)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"9"
					]
				]
			],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}",
				"9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",
				null,
				null,
				null,
				null,
				null,
				"955\\d{5}",
				null,
				"60[0-2]\\d{4}"
			]
		],
		"CX": [
			"61",
			"[1458]\\d{5,9}",
			[
				[
					"([2378])(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[2378]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[45]|14"
					],
					"0$1"
				],
				[
					"(16)(\\d{3,4})",
					"$1 $2",
					[
						"16"
					],
					"0$1"
				],
				[
					"(16)(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					[
						"16"
					],
					"0$1"
				],
				[
					"(1[389]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[38]0|90)",
						"1(?:[38]00|90)"
					],
					"$1"
				],
				[
					"(180)(2\\d{3})",
					"$1 $2",
					[
						"180",
						"1802"
					],
					"$1"
				],
				[
					"(19\\d)(\\d{3})",
					"$1 $2",
					[
						"19[13]"
					],
					"$1"
				],
				[
					"(19\\d{2})(\\d{4})",
					"$1 $2",
					[
						"19[679]"
					],
					"$1"
				],
				[
					"(13)(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"13[1-9]"
					],
					"$1"
				]
			],
			"0",
			null,
			null,
			null,
			null,
			null,
			[
				"89164\\d{4}",
				"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
				"180(?:0\\d{3}|2)\\d{3}",
				"190[0126]\\d{6}",
				"500\\d{6}",
				null,
				null,
				null,
				"550\\d{6}",
				"13(?:00\\d{2})?\\d{4}"
			]
		],
		"CY": [
			"357",
			"[257-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{6})",
					"$1 $2"
				]
			]
		],
		"CZ": [
			"420",
			"[2-8]\\d{8}|9\\d{8,11}",
			[
				[
					"([2-9]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-8]|9[015-7]"
					]
				],
				[
					"(96\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"96"
					]
				],
				[
					"(9\\d)(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"9[36]"
					]
				]
			]
		],
		"DE": [
			"49",
			"[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})",
			[
				[
					"(1\\d{2})(\\d{7,8})",
					"$1 $2",
					[
						"1[67]"
					]
				],
				[
					"(15\\d{3})(\\d{6})",
					"$1 $2",
					[
						"15[0568]"
					]
				],
				[
					"(1\\d{3})(\\d{7})",
					"$1 $2",
					[
						"15"
					]
				],
				[
					"(\\d{2})(\\d{3,11})",
					"$1 $2",
					[
						"3[02]|40|[68]9"
					]
				],
				[
					"(\\d{3})(\\d{3,11})",
					"$1 $2",
					[
						"2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"
					]
				],
				[
					"(\\d{4})(\\d{2,11})",
					"$1 $2",
					[
						"[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])",
						"[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"
					]
				],
				[
					"(3\\d{4})(\\d{1,10})",
					"$1 $2",
					[
						"3"
					]
				],
				[
					"(800)(\\d{7,12})",
					"$1 $2",
					[
						"800"
					]
				],
				[
					"(\\d{3})(\\d)(\\d{4,10})",
					"$1 $2 $3",
					[
						"(?:18|90)0|137",
						"1(?:37|80)|900[1359]"
					]
				],
				[
					"(1\\d{2})(\\d{5,11})",
					"$1 $2",
					[
						"181"
					]
				],
				[
					"(18\\d{3})(\\d{6})",
					"$1 $2",
					[
						"185",
						"1850",
						"18500"
					]
				],
				[
					"(18\\d{2})(\\d{7})",
					"$1 $2",
					[
						"18[68]"
					]
				],
				[
					"(18\\d)(\\d{8})",
					"$1 $2",
					[
						"18[2-579]"
					]
				],
				[
					"(700)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"700"
					]
				],
				[
					"(138)(\\d{4})",
					"$1 $2",
					[
						"138"
					]
				],
				[
					"(15[013-68])(\\d{2})(\\d{8})",
					"$1 $2 $3",
					[
						"15[013-68]"
					]
				],
				[
					"(15[279]\\d)(\\d{2})(\\d{7})",
					"$1 $2 $3",
					[
						"15[279]"
					]
				],
				[
					"(1[67]\\d)(\\d{2})(\\d{7,8})",
					"$1 $2 $3",
					[
						"1(?:6[023]|7)"
					]
				]
			],
			"0",
			"0$1"
		],
		"DJ": [
			"253",
			"[27]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"DK": [
			"45",
			"[2-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"DM": [
			"1",
			"[57-9]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"767"
		],
		"DO": [
			"1",
			"[589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"8[024]9"
		],
		"DZ": [
			"213",
			"(?:[1-4]|[5-9]\\d)\\d{7}",
			[
				[
					"([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[1-4]"
					]
				],
				[
					"([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[5-8]"
					]
				],
				[
					"(9\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"9"
					]
				]
			],
			"0",
			"0$1"
		],
		"EC": [
			"593",
			"1\\d{9,10}|[2-8]\\d{7}|9\\d{8}",
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2-$3",
					[
						"[247]|[356][2-8]"
					],
					null,
					null,
					"$1-$2-$3"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"9"
					],
					"0$1"
				],
				[
					"(1800)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"1"
					],
					"$1"
				]
			],
			"0",
			"(0$1)"
		],
		"EE": [
			"372",
			"1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}",
			[
				[
					"([3-79]\\d{2})(\\d{4})",
					"$1 $2",
					[
						"[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]",
						"[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"
					]
				],
				[
					"(70)(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"70"
					]
				],
				[
					"(8000)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"800",
						"8000"
					]
				],
				[
					"([458]\\d{3})(\\d{3,4})",
					"$1 $2",
					[
						"40|5|8(?:00|[1-5])",
						"40|5|8(?:00[1-9]|[1-5])"
					]
				]
			]
		],
		"EG": [
			"20",
			"1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}",
			[
				[
					"(\\d)(\\d{7,8})",
					"$1 $2",
					[
						"[23]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1[012]|[89]00"
					]
				],
				[
					"(\\d{2})(\\d{6,7})",
					"$1 $2",
					[
						"1[35]|[4-6]|[89][2-9]"
					]
				]
			],
			"0",
			"0$1"
		],
		"EH": [
			"212",
			"[5-9]\\d{8}",
			[
				[
					"([5-7]\\d{2})(\\d{6})",
					"$1-$2",
					[
						"5(?:2[015-7]|3[0-4])|[67]"
					]
				],
				[
					"([58]\\d{3})(\\d{5})",
					"$1-$2",
					[
						"5(?:2[2-489]|3[5-9]|92)|892",
						"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"
					]
				],
				[
					"(5\\d{4})(\\d{4})",
					"$1-$2",
					[
						"5(?:29|38)",
						"5(?:29|38)[89]"
					]
				],
				[
					"([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"5(?:4[067]|5[03])"
					]
				],
				[
					"(8[09])(\\d{7})",
					"$1-$2",
					[
						"8(?:0|9[013-9])"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			"528[89]"
		],
		"ER": [
			"291",
			"[178]\\d{6}",
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3"
				]
			],
			"0",
			"0$1"
		],
		"ES": [
			"34",
			"[5-9]\\d{8}",
			[
				[
					"([89]00)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[89]00"
					]
				],
				[
					"([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[568]|[79][0-8]"
					]
				]
			]
		],
		"ET": [
			"251",
			"[1-59]\\d{8}",
			[
				[
					"([1-59]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3"
				]
			],
			"0",
			"0$1"
		],
		"FI": [
			"358",
			"[156]\\d{6,9}|2\\d{4,9}|3\\d{5,9}|4\\d{7,10}|7\\d{7,9}|[89]\\d{6,8}",
			[
				[
					"(\\d{3})(\\d{3,7})",
					"$1 $2",
					[
						"(?:[16-8]0|300)"
					]
				],
				[
					"(116\\d{3})",
					"$1",
					[
						"116"
					],
					"$1"
				],
				[
					"(\\d{2})(\\d{3,9})",
					"$1 $2",
					[
						"1[3-9]|2[09]|4|50|7(?:[13]|5[03-9])"
					]
				],
				[
					"(\\d)(\\d{6,9})",
					"$1 $2",
					[
						"[25689][1-8]|3(?:0[1-9]|[1-8])"
					]
				],
				[
					"(39\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"39"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"1[3-79][1-8]\\d{4,6}|[235689][1-8]\\d{5,7}",
				"4(?:[0-8]\\d{6,8}|9\\d{9})|50\\d{6,8}",
				"800\\d{5,6}",
				"[67]00\\d{5,6}",
				null,
				null,
				"10(?:0\\d{4,6}|[1-9]\\d{5,7})|2(?:0(?:0\\d{4,6}|[13-8]\\d{5,7}|2(?:[023]\\d{4,5}|[14-9]\\d{4,6})|9(?:[0-7]\\d{4,6}|[89]\\d{1,6}))|9\\d{6,8})|3(?:0(?:0\\d{3,7}|[1-9]\\d{5,7})|93\\d{5,7})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})"
			]
		],
		"FJ": [
			"679",
			"[35-9]\\d{6}|0\\d{10}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[35-9]"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"0"
					]
				]
			]
		],
		"FK": [
			"500",
			"[2-7]\\d{4}"
		],
		"FM": [
			"691",
			"[39]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"FO": [
			"298",
			"[2-9]\\d{5}",
			[
				[
					"(\\d{6})",
					"$1"
				]
			],
			null,
			null,
			"(10(?:01|[12]0|88))"
		],
		"FR": [
			"33",
			"[1-9]\\d{8}",
			[
				[
					"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"[1-79]"
					]
				],
				[
					"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"8"
					],
					"0 $1"
				]
			],
			"0",
			"0$1"
		],
		"GA": [
			"241",
			"0?\\d{7}",
			[
				[
					"(\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[2-7]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"0"
					]
				]
			]
		],
		"GB": [
			"44",
			"\\d{7,10}",
			[
				[
					"(7\\d{3})(\\d{6})",
					"$1 $2",
					[
						"7(?:[1-57-9]|62)",
						"7(?:[1-57-9]|624)"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2|5[56]|7[06]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:1|\\d1)|3|9[018]"
					]
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:387|5(?:24|39)|697|768|946)",
						"1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"
					]
				],
				[
					"(1\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(800)(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					]
				],
				[
					"(845)(46)(4\\d)",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					]
				],
				[
					"(8\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8(?:4[2-5]|7[0-3])"
					]
				],
				[
					"(80\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					]
				],
				[
					"([58]00)(\\d{6})",
					"$1 $2",
					[
						"[58]00"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}",
				"7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}",
				"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",
				"(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",
				"70\\d{8}",
				null,
				"(?:3[0347]|55)\\d{8}",
				"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
				"56\\d{8}",
				"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"
			]
		],
		"GD": [
			"1",
			"[4589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"473"
		],
		"GE": [
			"995",
			"[34578]\\d{8}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[348]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"7"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"5"
					],
					"$1"
				]
			],
			"0"
		],
		"GF": [
			"594",
			"[56]\\d{8}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			],
			"0",
			"0$1"
		],
		"GG": [
			"44",
			"[135789]\\d{6,9}",
			[
				[
					"(7\\d{3})(\\d{6})",
					"$1 $2",
					[
						"7(?:[1-57-9]|62)",
						"7(?:[1-57-9]|624)"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2|5[56]|7[06]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:1|\\d1)|3|9[018]"
					]
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:387|5(?:24|39)|697|768|946)",
						"1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"
					]
				],
				[
					"(1\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(800)(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					]
				],
				[
					"(845)(46)(4\\d)",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					]
				],
				[
					"(8\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8(?:4[2-5]|7[0-3])"
					]
				],
				[
					"(80\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					]
				],
				[
					"([58]00)(\\d{6})",
					"$1 $2",
					[
						"[58]00"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"1481[25-9]\\d{5}",
				"7(?:781\\d|839\\d|911[17])\\d{5}",
				"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",
				"(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",
				"70\\d{8}",
				null,
				"(?:3[0347]|55)\\d{8}",
				"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
				"56\\d{8}",
				"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"
			]
		],
		"GH": [
			"233",
			"[235]\\d{8}|8\\d{7}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[235]"
					]
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"8"
					]
				]
			],
			"0",
			"0$1"
		],
		"GI": [
			"350",
			"[2568]\\d{7}",
			[
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"2"
					]
				]
			]
		],
		"GL": [
			"299",
			"[1-689]\\d{5}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3"
				]
			]
		],
		"GM": [
			"220",
			"[2-9]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"GN": [
			"224",
			"[367]\\d{7,8}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"3"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[67]"
					]
				]
			]
		],
		"GP": [
			"590",
			"[56]\\d{8}",
			[
				[
					"([56]90)(\\d{2})(\\d{4})",
					"$1 $2-$3"
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}",
				"690(?:0[0-7]|[1-9]\\d)\\d{4}"
			]
		],
		"GQ": [
			"240",
			"[23589]\\d{8}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[235]"
					]
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"[89]"
					]
				]
			]
		],
		"GR": [
			"30",
			"[26-9]\\d{9}",
			[
				[
					"([27]\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"21|7"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2[2-9]1|[689]"
					]
				],
				[
					"(2\\d{3})(\\d{6})",
					"$1 $2",
					[
						"2[2-9][02-9]"
					]
				]
			]
		],
		"GT": [
			"502",
			"[2-7]\\d{7}|1[89]\\d{9}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[2-7]"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				]
			]
		],
		"GU": [
			"1",
			"[5689]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"671"
		],
		"GW": [
			"245",
			"(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})",
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"44|9[567]"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"40"
					]
				]
			]
		],
		"GY": [
			"592",
			"[2-46-9]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"HK": [
			"852",
			"[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[235-7]|[89](?:0[1-9]|[1-9])"
					]
				],
				[
					"(800)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"800"
					]
				],
				[
					"(900)(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"900"
					]
				],
				[
					"(900)(\\d{2,5})",
					"$1 $2",
					[
						"900"
					]
				]
			]
		],
		"HN": [
			"504",
			"[237-9]\\d{7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1-$2"
				]
			]
		],
		"HR": [
			"385",
			"[1-7]\\d{5,8}|[89]\\d{6,8}",
			[
				[
					"(1)(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"([2-5]\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-5]"
					]
				],
				[
					"(9\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"9"
					]
				],
				[
					"(6[01])(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"6[01]"
					]
				],
				[
					"([67]\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[67]"
					]
				],
				[
					"(80[01])(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"8"
					]
				],
				[
					"(80[01])(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			],
			"0",
			"0$1"
		],
		"HT": [
			"509",
			"[2-489]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3"
				]
			]
		],
		"HU": [
			"36",
			"[1-9]\\d{7,8}",
			[
				[
					"(1)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-9]"
					]
				]
			],
			"06",
			"($1)"
		],
		"ID": [
			"62",
			"(?:[1-79]\\d{6,10}|8\\d{7,11})",
			[
				[
					"(\\d{2})(\\d{5,8})",
					"$1 $2",
					[
						"2[124]|[36]1"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{5,8})",
					"$1 $2",
					[
						"[4579]|2[035-9]|[36][02-9]"
					],
					"(0$1)"
				],
				[
					"(8\\d{2})(\\d{3,4})(\\d{3})",
					"$1-$2-$3",
					[
						"8[1-35-9]"
					]
				],
				[
					"(8\\d{2})(\\d{4})(\\d{4,5})",
					"$1-$2-$3",
					[
						"8[1-35-9]"
					]
				],
				[
					"(1)(500)(\\d{3})",
					"$1 $2 $3",
					[
						"15"
					],
					"$1"
				],
				[
					"(177)(\\d{6,8})",
					"$1 $2",
					[
						"17"
					]
				],
				[
					"(800)(\\d{5,7})",
					"$1 $2",
					[
						"800"
					]
				],
				[
					"(804)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"804"
					]
				],
				[
					"(80\\d)(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"80[79]"
					]
				]
			],
			"0",
			"0$1"
		],
		"IE": [
			"353",
			"[124-9]\\d{6,9}",
			[
				[
					"(1)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"2[24-9]|47|58|6[237-9]|9[35-9]"
					]
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"40[24]|50[45]"
					]
				],
				[
					"(48)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"48"
					]
				],
				[
					"(818)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"81"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[24-69]|7[14]"
					]
				],
				[
					"([78]\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"76|8[35-9]"
					],
					"0$1"
				],
				[
					"(700)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"70"
					],
					"0$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:8[059]|5)",
						"1(?:8[059]0|5)"
					],
					"$1"
				]
			],
			"0",
			"(0$1)"
		],
		"IL": [
			"972",
			"1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}",
			[
				[
					"([2-489])(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[2-489]"
					],
					"0$1"
				],
				[
					"([57]\\d)(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[57]"
					],
					"0$1"
				],
				[
					"(153)(\\d{1,2})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					[
						"153"
					]
				],
				[
					"(1)([7-9]\\d{2})(\\d{3})(\\d{3})",
					"$1-$2-$3-$4",
					[
						"1[7-9]"
					]
				],
				[
					"(1255)(\\d{3})",
					"$1-$2",
					[
						"125"
					]
				],
				[
					"(1200)(\\d{3})(\\d{3})",
					"$1-$2-$3",
					[
						"120"
					]
				],
				[
					"(1212)(\\d{2})(\\d{2})",
					"$1-$2-$3",
					[
						"121"
					]
				],
				[
					"(1599)(\\d{6})",
					"$1-$2",
					[
						"15"
					]
				],
				[
					"(\\d{4})",
					"*$1",
					[
						"[2-689]"
					]
				]
			],
			"0",
			"$1"
		],
		"IM": [
			"44",
			"[135789]\\d{6,9}",
			[
				[
					"(7\\d{3})(\\d{6})",
					"$1 $2",
					[
						"7(?:[1-57-9]|62)",
						"7(?:[1-57-9]|624)"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2|5[56]|7[06]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:1|\\d1)|3|9[018]"
					]
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:387|5(?:24|39)|697|768|946)",
						"1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"
					]
				],
				[
					"(1\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(800)(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					]
				],
				[
					"(845)(46)(4\\d)",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					]
				],
				[
					"(8\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8(?:4[2-5]|7[0-3])"
					]
				],
				[
					"(80\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					]
				],
				[
					"([58]00)(\\d{6})",
					"$1 $2",
					[
						"[58]00"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"1624[5-8]\\d{5}",
				"7(?:4576|[59]24\\d)\\d{5}",
				"808162\\d{4}",
				"(?:872299|90[0167]624)\\d{4}",
				"70\\d{8}",
				null,
				"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",
				"7624[0-4689]\\d{5}",
				"56\\d{8}",
				"8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"
			]
		],
		"IN": [
			"91",
			"008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}",
			[
				[
					"(\\d{5})(\\d{5})",
					"$1 $2",
					[
						"600|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9",
						"600|7(?:[078]|19[0-5]|2(?:[02356-9]|[14][017-9]|9[389])|3(?:[025-9]|1[07-9]|[34][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02346-9]|1[017-9]|5[017-9])|6(?:[02-9]|1[0-257-9])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:0[07-9]|[14][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9",
						"600|7(?:0|19[0-5]|2(?:[0235679]|[14][017-9]|8(?:[0-569]|[78][089])|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[0-49][089])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2345][089]|40|7[0189]))|4(?:[056]|1(?:[0135-9]|[23][089]|2[089]|4[089])|2(?:0[089]|[1-7][089]|[89])|3(?:[0-8][089]|9)|4(?:[089]|11|7[02-8])|7(?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389])|9(?:[0-7][089]|[89]))|5(?:[0346-9]|1[017-9]|2(?:[03-9]|[12][089])|5[017-9])|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]\\d|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[0357-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|4(?:0[1-7]|[1-9])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|1(?:[089]|7[02-8])|3(?:[089]|7[02-68])|6(?:[08]|7[02-8]|9[01]))|7(?:0[07-9]|[1-69]|7(?:[089]|7[02-8])|8(?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"11|2[02]|33|4[04]|79[1-9]|80[2-46]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:2[0-249]|3[0-25]|4[145]|[59][14]|7[1257]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"
					]
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1(?:[23579]|[468][1-9])|[2-8]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"008"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"140"
					],
					"$1"
				],
				[
					"(\\d{4})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"160",
						"1600"
					],
					"$1"
				],
				[
					"(\\d{4})(\\d{4,5})",
					"$1 $2",
					[
						"180",
						"1800"
					],
					"$1"
				],
				[
					"(\\d{4})(\\d{2,4})(\\d{4})",
					"$1 $2 $3",
					[
						"180",
						"1800"
					],
					"$1"
				],
				[
					"(\\d{4})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"186",
						"1860"
					],
					"$1"
				],
				[
					"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"18[06]"
					],
					"$1"
				]
			],
			"0",
			"0$1",
			null,
			null,
			true
		],
		"IO": [
			"246",
			"3\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"IQ": [
			"964",
			"[1-7]\\d{7,9}",
			[
				[
					"(1)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"([2-6]\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[2-6]"
					]
				],
				[
					"(7\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					]
				]
			],
			"0",
			"0$1"
		],
		"IR": [
			"98",
			"[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})",
			[
				[
					"(21)(\\d{3,5})",
					"$1 $2",
					[
						"21"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-8]"
					]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"9990"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"9990"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"9"
					]
				]
			],
			"0",
			"0$1"
		],
		"IS": [
			"354",
			"[4-9]\\d{6}|38\\d{7}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[4-9]"
					]
				],
				[
					"(3\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"3"
					]
				]
			]
		],
		"IT": [
			"39",
			"[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",
			[
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"0[26]|55"
					]
				],
				[
					"(0[26])(\\d{4})(\\d{5})",
					"$1 $2 $3",
					[
						"0[26]"
					]
				],
				[
					"(0[26])(\\d{4,6})",
					"$1 $2",
					[
						"0[26]"
					]
				],
				[
					"(0\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"0[13-57-9][0159]"
					]
				],
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					[
						"0[13-57-9][0159]|8(?:03|4[17]|9[245])",
						"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"
					]
				],
				[
					"(0\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"0[13-57-9][2-46-8]"
					]
				],
				[
					"(0\\d{3})(\\d{2,6})",
					"$1 $2",
					[
						"0[13-57-9][2-46-8]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[13]|8(?:00|4[08]|9[59])",
						"[13]|8(?:00|4[08]|9(?:5[5-9]|9))"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"894",
						"894[5-9]"
					]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"3"
					]
				]
			],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})",
				"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",
				"80(?:0\\d{6}|3\\d{3})",
				"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
				"1(?:78\\d|99)\\d{6}",
				null,
				null,
				null,
				"55\\d{8}",
				"84(?:[08]\\d{6}|[17]\\d{3})"
			]
		],
		"JE": [
			"44",
			"[135789]\\d{6,9}",
			[
				[
					"(7\\d{3})(\\d{6})",
					"$1 $2",
					[
						"7(?:[1-57-9]|62)",
						"7(?:[1-57-9]|624)"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"2|5[56]|7[06]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:1|\\d1)|3|9[018]"
					]
				],
				[
					"(\\d{5})(\\d{4,5})",
					"$1 $2",
					[
						"1(?:38|5[23]|69|76|94)",
						"1(?:387|5(?:24|39)|697|768|946)",
						"1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"
					]
				],
				[
					"(1\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(800)(\\d{4})",
					"$1 $2",
					[
						"800",
						"8001",
						"80011",
						"800111",
						"8001111"
					]
				],
				[
					"(845)(46)(4\\d)",
					"$1 $2 $3",
					[
						"845",
						"8454",
						"84546",
						"845464"
					]
				],
				[
					"(8\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8(?:4[2-5]|7[0-3])"
					]
				],
				[
					"(80\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					]
				],
				[
					"([58]00)(\\d{6})",
					"$1 $2",
					[
						"[58]00"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"1534[0-24-8]\\d{5}",
				"7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}",
				"80(?:07(?:35|81)|8901)\\d{4}",
				"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
				"701511\\d{4}",
				null,
				"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}",
				"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",
				"56\\d{8}",
				"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"
			]
		],
		"JM": [
			"1",
			"[589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"876"
		],
		"JO": [
			"962",
			"[235-9]\\d{7,8}",
			[
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2356]|87"
					],
					"(0$1)"
				],
				[
					"(7)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"7[457-9]"
					]
				],
				[
					"(\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"70|8[0158]|9"
					]
				]
			],
			"0",
			"0$1"
		],
		"JP": [
			"81",
			"[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})",
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1-$2-$3",
					[
						"(?:12|57|99)0"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"800"
					]
				],
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					[
						"[2579]0|80[1-9]"
					]
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])",
						"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))",
						"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
						"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
						"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
						"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)",
						"1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])",
						"1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3",
					[
						"2(?:9[14-79]|74|[34]7|[56]9)|82|993"
					]
				],
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1-$2-$3",
					[
						"3|4(?:2[09]|7[01])|6[1-9]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"[2479][1-9]"
					]
				]
			],
			"0",
			"0$1"
		],
		"KE": [
			"254",
			"20\\d{6,7}|[4-9]\\d{6,9}",
			[
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					[
						"[24-6]"
					]
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"7"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[89]"
					]
				]
			],
			"0",
			"0$1",
			"005|0"
		],
		"KG": [
			"996",
			"[235-8]\\d{8,9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[25-7]|31[25]"
					]
				],
				[
					"(\\d{4})(\\d{5})",
					"$1 $2",
					[
						"3(?:1[36]|[2-9])"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d)(\\d{3})",
					"$1 $2 $3 $4",
					[
						"8"
					]
				]
			],
			"0",
			"0$1"
		],
		"KH": [
			"855",
			"[1-9]\\d{7,9}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"1\\d[1-9]|[2-9]"
					],
					"0$1"
				],
				[
					"(1[89]00)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1[89]0"
					]
				]
			],
			"0"
		],
		"KI": [
			"686",
			"[2458]\\d{4}|3\\d{4,7}|7\\d{7}",
			[],
			null,
			null,
			"0"
		],
		"KM": [
			"269",
			"[3478]\\d{6}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3"
				]
			]
		],
		"KN": [
			"1",
			"[589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"869"
		],
		"KP": [
			"850",
			"1\\d{9}|[28]\\d{7}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			],
			"0",
			"0$1"
		],
		"KR": [
			"82",
			"007\\d{9,11}|[1-7]\\d{3,9}|8\\d{8}",
			[
				[
					"(\\d{2})(\\d{4})(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:0|1[19]|[69]9|5[458])|[57]0",
						"1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"
					]
				],
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					[
						"1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]",
						"1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"
					]
				],
				[
					"(\\d{3})(\\d)(\\d{4})",
					"$1-$2-$3",
					[
						"131",
						"1312"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{4})",
					"$1-$2-$3",
					[
						"131",
						"131[13-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1-$2-$3",
					[
						"13[2-9]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})(\\d{4})",
					"$1-$2-$3-$4",
					[
						"30"
					]
				],
				[
					"(\\d)(\\d{3,4})(\\d{4})",
					"$1-$2-$3",
					[
						"2[1-9]"
					]
				],
				[
					"(\\d)(\\d{3,4})",
					"$1-$2",
					[
						"21[0-46-9]"
					]
				],
				[
					"(\\d{2})(\\d{3,4})",
					"$1-$2",
					[
						"[3-6][1-9]1",
						"[3-6][1-9]1(?:[0-46-9])"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"1(?:5[246-9]|6[04678]|8[03579])",
						"1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"
					],
					"$1"
				]
			],
			"0",
			"0$1",
			"0(8[1-46-8]|85\\d{2})?"
		],
		"KW": [
			"965",
			"[12569]\\d{6,7}",
			[
				[
					"(\\d{4})(\\d{3,4})",
					"$1 $2",
					[
						"[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]"
					]
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"244|5(?:[015]|66)"
					]
				]
			]
		],
		"KY": [
			"1",
			"[3589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"345"
		],
		"KZ": [
			"7",
			"(?:33\\d|7\\d{2}|80[09])\\d{7}",
			[
				[
					"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"[34689]"
					]
				],
				[
					"(7\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					]
				]
			],
			"8",
			null,
			null,
			null,
			null,
			null,
			[
				"33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",
				"7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}",
				"800\\d{7}",
				"809\\d{7}",
				null,
				null,
				null,
				null,
				"751\\d{7}"
			]
		],
		"LA": [
			"856",
			"[2-8]\\d{7,9}",
			[
				[
					"(20)(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"20"
					]
				],
				[
					"([2-8]\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2[13]|3[14]|[4-8]"
					]
				],
				[
					"(30)(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"30"
					]
				]
			],
			"0",
			"0$1"
		],
		"LB": [
			"961",
			"[13-9]\\d{6,7}",
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9"
					],
					"0$1"
				],
				[
					"([7-9]\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])"
					]
				]
			],
			"0"
		],
		"LC": [
			"1",
			"[5789]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"758"
		],
		"LI": [
			"423",
			"6\\d{8}|[23789]\\d{6}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[23789]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6[56]"
					]
				],
				[
					"(69)(7\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"697"
					]
				]
			],
			"0",
			null,
			"0|10(?:01|20|66)"
		],
		"LK": [
			"94",
			"[1-9]\\d{8}",
			[
				[
					"(\\d{2})(\\d{1})(\\d{6})",
					"$1 $2 $3",
					[
						"[1-689]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					]
				]
			],
			"0",
			"0$1"
		],
		"LR": [
			"231",
			"2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}",
			[
				[
					"(2\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					]
				],
				[
					"([4-5])(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[45]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[23578]"
					]
				]
			],
			"0",
			"0$1"
		],
		"LS": [
			"266",
			"[2568]\\d{7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"LT": [
			"370",
			"[3-9]\\d{7}",
			[
				[
					"([34]\\d)(\\d{6})",
					"$1 $2",
					[
						"37|4(?:1|5[45]|6[2-4])"
					]
				],
				[
					"([3-6]\\d{2})(\\d{5})",
					"$1 $2",
					[
						"3[148]|4(?:[24]|6[09])|528|6"
					]
				],
				[
					"([7-9]\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[7-9]"
					],
					"8 $1"
				],
				[
					"(5)(2\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"52[0-79]"
					]
				]
			],
			"8",
			"(8-$1)",
			"[08]",
			null,
			true
		],
		"LU": [
			"352",
			"[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})",
			[
				[
					"(\\d{2})(\\d{3})",
					"$1 $2",
					[
						"[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"20"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4",
					[
						"2(?:[0367]|4[3-8])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"20"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
					"$1 $2 $3 $4 $5",
					[
						"2(?:[0367]|4[3-8])"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})",
					"$1 $2 $3 $4",
					[
						"2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"70|80[01]|90[015]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"6"
					]
				]
			],
			null,
			null,
			"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"
		],
		"LV": [
			"371",
			"[2689]\\d{7}",
			[
				[
					"([2689]\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3"
				]
			]
		],
		"LY": [
			"218",
			"[25679]\\d{8}",
			[
				[
					"([25679]\\d)(\\d{7})",
					"$1-$2"
				]
			],
			"0",
			"0$1"
		],
		"MA": [
			"212",
			"[5-9]\\d{8}",
			[
				[
					"([5-7]\\d{2})(\\d{6})",
					"$1-$2",
					[
						"5(?:2[015-7]|3[0-4])|[67]"
					]
				],
				[
					"([58]\\d{3})(\\d{5})",
					"$1-$2",
					[
						"5(?:2[2-489]|3[5-9]|92)|892",
						"5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"
					]
				],
				[
					"(5\\d{4})(\\d{4})",
					"$1-$2",
					[
						"5(?:29|38)",
						"5(?:29|38)[89]"
					]
				],
				[
					"([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"5(?:4[067]|5[03])"
					]
				],
				[
					"(8[09])(\\d{7})",
					"$1-$2",
					[
						"8(?:0|9[013-9])"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			null,
			[
				"5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}",
				"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}",
				"80\\d{7}",
				"89\\d{7}",
				null,
				null,
				null,
				null,
				"5924[01]\\d{4}"
			]
		],
		"MC": [
			"377",
			"[34689]\\d{7,8}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[39]"
					],
					"$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"4"
					]
				],
				[
					"(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4 $5",
					[
						"6"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3",
					[
						"8"
					],
					"$1"
				]
			],
			"0",
			"0$1"
		],
		"MD": [
			"373",
			"[235-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"22|3"
					]
				],
				[
					"([25-7]\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"2[13-9]|[5-7]"
					]
				],
				[
					"([89]\\d{2})(\\d{5})",
					"$1 $2",
					[
						"[89]"
					]
				]
			],
			"0",
			"0$1"
		],
		"ME": [
			"382",
			"[2-9]\\d{7,8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-57-9]|6[036-9]"
					]
				]
			],
			"0",
			"0$1"
		],
		"MF": [
			"590",
			"[56]\\d{8}",
			[
				[
					"([56]90)(\\d{2})(\\d{4})",
					"$1 $2-$3"
				]
			],
			"0",
			null,
			null,
			null,
			null,
			null,
			[
				"590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}",
				"690(?:0[0-7]|[1-9]\\d)\\d{4}"
			]
		],
		"MG": [
			"261",
			"[23]\\d{8}",
			[
				[
					"([23]\\d)(\\d{2})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4"
				]
			],
			"0",
			"0$1"
		],
		"MH": [
			"692",
			"[2-6]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2"
				]
			],
			"1"
		],
		"MK": [
			"389",
			"[2-578]\\d{7}",
			[
				[
					"(2)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					]
				],
				[
					"([347]\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[347]"
					]
				],
				[
					"([58]\\d{2})(\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[58]"
					]
				]
			],
			"0",
			"0$1"
		],
		"ML": [
			"223",
			"[246-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[246-9]"
					]
				]
			]
		],
		"MM": [
			"95",
			"[1478]\\d{5,7}|[256]\\d{5,8}|9(?:[279]\\d{0,2}|[58]|[34]\\d{1,2}|6\\d?)\\d{6}",
			[
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"1|2[245]"
					]
				],
				[
					"(2)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"251"
					]
				],
				[
					"(\\d)(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"16|2"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"67|81"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[4-8]"
					]
				],
				[
					"(9)(\\d{3})(\\d{4,6})",
					"$1 $2 $3",
					[
						"9(?:2[0-4]|[35-9]|4[137-9])"
					]
				],
				[
					"(9)([34]\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"9(?:3[0-36]|4[0-57-9])"
					]
				],
				[
					"(9)(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"92[56]"
					]
				],
				[
					"(9)(\\d{3})(\\d{3})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"93"
					]
				]
			],
			"0",
			"0$1"
		],
		"MN": [
			"976",
			"[12]\\d{7,9}|[57-9]\\d{7}",
			[
				[
					"([12]\\d)(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[12]1"
					]
				],
				[
					"([12]2\\d)(\\d{5,6})",
					"$1 $2",
					[
						"[12]2[1-3]"
					]
				],
				[
					"([12]\\d{3})(\\d{5})",
					"$1 $2",
					[
						"[12](?:27|[3-5])",
						"[12](?:27|[3-5]\\d)2"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[57-9]"
					],
					"$1"
				],
				[
					"([12]\\d{4})(\\d{4,5})",
					"$1 $2",
					[
						"[12](?:27|[3-5])",
						"[12](?:27|[3-5]\\d)[4-9]"
					]
				]
			],
			"0",
			"0$1"
		],
		"MO": [
			"853",
			"[268]\\d{7}",
			[
				[
					"([268]\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"MP": [
			"1",
			"[5689]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"670"
		],
		"MQ": [
			"596",
			"[56]\\d{8}",
			[
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			],
			"0",
			"0$1"
		],
		"MR": [
			"222",
			"[2-48]\\d{7}",
			[
				[
					"([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"MS": [
			"1",
			"[5689]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"664"
		],
		"MT": [
			"356",
			"[2357-9]\\d{7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"MU": [
			"230",
			"[2-9]\\d{6,7}",
			[
				[
					"([2-46-9]\\d{2})(\\d{4})",
					"$1 $2",
					[
						"[2-46-9]"
					]
				],
				[
					"(5\\d{3})(\\d{4})",
					"$1 $2",
					[
						"5"
					]
				]
			]
		],
		"MV": [
			"960",
			"[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[3467]|9(?:[1-9]|0[1-9])"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]00"
					]
				]
			]
		],
		"MW": [
			"265",
			"(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}",
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(2\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[1789]"
					]
				]
			],
			"0",
			"0$1"
		],
		"MX": [
			"52",
			"[1-9]\\d{9,10}",
			[
				[
					"([358]\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"33|55|81"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"
					]
				],
				[
					"(1)([358]\\d)(\\d{4})(\\d{4})",
					"044 $2 $3 $4",
					[
						"1(?:33|55|81)"
					],
					"$1",
					null,
					"$1 $2 $3 $4"
				],
				[
					"(1)(\\d{3})(\\d{3})(\\d{4})",
					"044 $2 $3 $4",
					[
						"1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"
					],
					"$1",
					null,
					"$1 $2 $3 $4"
				]
			],
			"01",
			"01 $1",
			"0[12]|04[45](\\d{10})",
			"1$1",
			true
		],
		"MY": [
			"60",
			"[13-9]\\d{7,9}",
			[
				[
					"([4-79])(\\d{3})(\\d{4})",
					"$1-$2 $3",
					[
						"[4-79]"
					],
					"0$1"
				],
				[
					"(3)(\\d{4})(\\d{4})",
					"$1-$2 $3",
					[
						"3"
					],
					"0$1"
				],
				[
					"([18]\\d)(\\d{3})(\\d{3,4})",
					"$1-$2 $3",
					[
						"1[02-46-9][1-9]|8"
					],
					"0$1"
				],
				[
					"(1)([36-8]00)(\\d{2})(\\d{4})",
					"$1-$2-$3-$4",
					[
						"1[36-8]0"
					]
				],
				[
					"(11)(\\d{4})(\\d{4})",
					"$1-$2 $3",
					[
						"11"
					],
					"0$1"
				],
				[
					"(15[49])(\\d{3})(\\d{4})",
					"$1-$2 $3",
					[
						"15"
					],
					"0$1"
				]
			],
			"0"
		],
		"MZ": [
			"258",
			"[28]\\d{7,8}",
			[
				[
					"([28]\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2|8[2-7]"
					]
				],
				[
					"(80\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"80"
					]
				]
			]
		],
		"NA": [
			"264",
			"[68]\\d{7,8}",
			[
				[
					"(8\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8[1235]"
					]
				],
				[
					"(6\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"6"
					]
				],
				[
					"(88)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"88"
					]
				],
				[
					"(870)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"870"
					]
				]
			],
			"0",
			"0$1"
		],
		"NC": [
			"687",
			"[2-57-9]\\d{5}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1.$2.$3",
					[
						"[2-46-9]|5[0-4]"
					]
				]
			]
		],
		"NE": [
			"227",
			"[0289]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[289]|09"
					]
				],
				[
					"(08)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"08"
					]
				]
			]
		],
		"NF": [
			"672",
			"[13]\\d{5}",
			[
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"(\\d)(\\d{5})",
					"$1 $2",
					[
						"3"
					]
				]
			]
		],
		"NG": [
			"234",
			"[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}",
			[
				[
					"(\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[12]|9(?:0[3-9]|[1-9])"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					[
						"[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"70|8[01]|90[235-9]"
					]
				],
				[
					"([78]00)(\\d{4})(\\d{4,5})",
					"$1 $2 $3",
					[
						"[78]00"
					]
				],
				[
					"([78]00)(\\d{5})(\\d{5,6})",
					"$1 $2 $3",
					[
						"[78]00"
					]
				],
				[
					"(78)(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"78"
					]
				]
			],
			"0",
			"0$1"
		],
		"NI": [
			"505",
			"[12578]\\d{7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"NL": [
			"31",
			"1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",
			[
				[
					"([1-578]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"
					]
				],
				[
					"([1-5]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"
					]
				],
				[
					"(6)(\\d{8})",
					"$1 $2",
					[
						"6[0-57-9]"
					]
				],
				[
					"(66)(\\d{7})",
					"$1 $2",
					[
						"66"
					]
				],
				[
					"(14)(\\d{3,4})",
					"$1 $2",
					[
						"14"
					],
					"$1"
				],
				[
					"([89]0\\d)(\\d{4,7})",
					"$1 $2",
					[
						"80|9"
					]
				]
			],
			"0",
			"0$1"
		],
		"NO": [
			"47",
			"0\\d{4}|[2-9]\\d{7}",
			[
				[
					"([489]\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[489]"
					]
				],
				[
					"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[235-7]"
					]
				]
			],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",
				"(?:4[015-8]|5[89]|87|9\\d)\\d{6}",
				"80[01]\\d{5}",
				"82[09]\\d{5}",
				"880\\d{5}",
				"81[23]\\d{5}",
				"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",
				null,
				"85[0-5]\\d{5}",
				"810(?:0[0-6]|[2-8]\\d)\\d{3}"
			]
		],
		"NP": [
			"977",
			"[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})",
			[
				[
					"(1)(\\d{7})",
					"$1-$2",
					[
						"1[2-6]"
					]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1-$2",
					[
						"1[01]|[2-8]|9(?:[1-69]|7[15-9])"
					]
				],
				[
					"(9\\d{2})(\\d{7})",
					"$1-$2",
					[
						"9(?:6[013]|7[245]|8)"
					],
					"$1"
				]
			],
			"0",
			"0$1"
		],
		"NR": [
			"674",
			"[458]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"NU": [
			"683",
			"[1-5]\\d{3}"
		],
		"NZ": [
			"64",
			"6[235-9]\\d{6}|[2-57-9]\\d{7,10}",
			[
				[
					"([34679])(\\d{3})(\\d{4})",
					"$1-$2 $3",
					[
						"[346]|7[2-57-9]|9[1-9]"
					]
				],
				[
					"(24099)(\\d{3})",
					"$1 $2",
					[
						"240",
						"2409",
						"24099"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"21"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,5})",
					"$1 $2 $3",
					[
						"2(?:1[1-9]|[69]|7[0-35-9])|70|86"
					]
				],
				[
					"(2\\d)(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"2[028]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2(?:10|74)|5|[89]0"
					]
				]
			],
			"0",
			"0$1"
		],
		"OM": [
			"968",
			"(?:5|[279]\\d)\\d{6}|800\\d{5,6}",
			[
				[
					"(2\\d)(\\d{6})",
					"$1 $2",
					[
						"2"
					]
				],
				[
					"([79]\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[79]"
					]
				],
				[
					"([58]00)(\\d{4,6})",
					"$1 $2",
					[
						"[58]"
					]
				]
			]
		],
		"PA": [
			"507",
			"[1-9]\\d{6,7}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[1-57-9]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1-$2",
					[
						"6"
					]
				]
			]
		],
		"PE": [
			"51",
			"[14-9]\\d{7,8}",
			[
				[
					"(1)(\\d{7})",
					"$1 $2",
					[
						"1"
					]
				],
				[
					"([4-8]\\d)(\\d{6})",
					"$1 $2",
					[
						"[4-7]|8[2-4]"
					]
				],
				[
					"(\\d{3})(\\d{5})",
					"$1 $2",
					[
						"80"
					]
				],
				[
					"(9\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9"
					],
					"$1"
				]
			],
			"0",
			"(0$1)"
		],
		"PF": [
			"689",
			"4\\d{5,7}|8\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"4[09]|8[79]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3",
					[
						"44"
					]
				]
			]
		],
		"PG": [
			"675",
			"[1-9]\\d{6,7}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[13-689]|27"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"20|7"
					]
				]
			]
		],
		"PH": [
			"63",
			"2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}",
			[
				[
					"(2)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					],
					"(0$1)"
				],
				[
					"(2)(\\d{5})",
					"$1 $2",
					[
						"2"
					],
					"(0$1)"
				],
				[
					"(\\d{4})(\\d{4,6})",
					"$1 $2",
					[
						"3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])",
						"3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"
					],
					"(0$1)"
				],
				[
					"(\\d{5})(\\d{4})",
					"$1 $2",
					[
						"346|4(?:27|9[35])|883",
						"3469|4(?:279|9(?:30|56))|8834"
					],
					"(0$1)"
				],
				[
					"([3-8]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[3-8]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"81|9"
					],
					"0$1"
				],
				[
					"(1800)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1"
					]
				],
				[
					"(1800)(\\d{1,2})(\\d{3})(\\d{4})",
					"$1 $2 $3 $4",
					[
						"1"
					]
				]
			],
			"0"
		],
		"PK": [
			"92",
			"1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))",
			[
				[
					"(\\d{2})(111)(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1",
						"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11",
						"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"
					]
				],
				[
					"(\\d{3})(111)(\\d{3})(\\d{3})",
					"$1 $2 $3 $4",
					[
						"2[349]|45|54|60|72|8[2-5]|9[2-9]",
						"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1",
						"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11",
						"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"
					]
				],
				[
					"(\\d{2})(\\d{7,8})",
					"$1 $2",
					[
						"(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"
					]
				],
				[
					"(\\d{3})(\\d{6,7})",
					"$1 $2",
					[
						"2[349]|45|54|60|72|8[2-5]|9[2-9]",
						"(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"
					]
				],
				[
					"(3\\d{2})(\\d{7})",
					"$1 $2",
					[
						"3"
					],
					"0$1"
				],
				[
					"([15]\\d{3})(\\d{5,6})",
					"$1 $2",
					[
						"58[12]|1"
					]
				],
				[
					"(586\\d{2})(\\d{5})",
					"$1 $2",
					[
						"586"
					]
				],
				[
					"([89]00)(\\d{3})(\\d{2})",
					"$1 $2 $3",
					[
						"[89]00"
					],
					"0$1"
				]
			],
			"0",
			"(0$1)"
		],
		"PL": [
			"48",
			"[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"
					]
				],
				[
					"(\\d{2})(\\d{1})(\\d{4})",
					"$1 $2 $3",
					[
						"[12]2"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"26|39|5[0137]|6[0469]|7[02389]|8[08]"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2,3})",
					"$1 $2 $3",
					[
						"64"
					]
				],
				[
					"(\\d{3})(\\d{3})",
					"$1 $2",
					[
						"64"
					]
				]
			]
		],
		"PM": [
			"508",
			"[45]\\d{5}",
			[
				[
					"([45]\\d)(\\d{2})(\\d{2})",
					"$1 $2 $3"
				]
			],
			"0",
			"0$1"
		],
		"PR": [
			"1",
			"[5789]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"787|939"
		],
		"PS": [
			"970",
			"[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})",
			[
				[
					"([2489])(2\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[2489]"
					]
				],
				[
					"(5[69]\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"5"
					]
				],
				[
					"(1[78]00)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1[78]"
					],
					"$1"
				]
			],
			"0",
			"0$1"
		],
		"PT": [
			"351",
			"[2-46-9]\\d{8}",
			[
				[
					"(2\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2[12]"
					]
				],
				[
					"([2-46-9]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2[3-9]|[346-9]"
					]
				]
			]
		],
		"PW": [
			"680",
			"[2-8]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"PY": [
			"595",
			"5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}",
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"
					],
					"(0$1)"
				],
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					[
						"[2-9]0"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"9[1-9]"
					],
					"0$1"
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"8700"
					]
				],
				[
					"(\\d{3})(\\d{4,5})",
					"$1 $2",
					[
						"[2-8][1-9]"
					],
					"(0$1)"
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[2-8][1-9]"
					],
					"0$1"
				]
			],
			"0"
		],
		"QA": [
			"974",
			"[2-8]\\d{6,7}",
			[
				[
					"([28]\\d{2})(\\d{4})",
					"$1 $2",
					[
						"[28]"
					]
				],
				[
					"([3-7]\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[3-7]"
					]
				]
			]
		],
		"RE": [
			"262",
			"[268]\\d{8}",
			[
				[
					"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			"262|6[49]|8"
		],
		"RO": [
			"40",
			"[23]\\d{5,8}|[7-9]\\d{8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[23]1"
					]
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"[23]1"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[23][3-7]|[7-9]"
					]
				],
				[
					"(2\\d{2})(\\d{3})",
					"$1 $2",
					[
						"2[3-6]"
					]
				]
			],
			"0",
			"0$1"
		],
		"RS": [
			"381",
			"[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})",
			[
				[
					"([23]\\d{2})(\\d{4,9})",
					"$1 $2",
					[
						"(?:2[389]|39)0"
					]
				],
				[
					"([1-3]\\d)(\\d{5,10})",
					"$1 $2",
					[
						"1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"
					]
				],
				[
					"(6\\d)(\\d{6,8})",
					"$1 $2",
					[
						"6"
					]
				],
				[
					"([89]\\d{2})(\\d{3,9})",
					"$1 $2",
					[
						"[89]"
					]
				],
				[
					"(7[26])(\\d{4,9})",
					"$1 $2",
					[
						"7[26]"
					]
				],
				[
					"(7[08]\\d)(\\d{4,9})",
					"$1 $2",
					[
						"7[08]"
					]
				]
			],
			"0",
			"0$1"
		],
		"RU": [
			"7",
			"[3489]\\d{9}",
			[
				[
					"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"[34689]"
					]
				],
				[
					"(7\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"7"
					]
				]
			],
			"8",
			"8 ($1)",
			null,
			null,
			true,
			null,
			[
				"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
				"9\\d{9}",
				"80[04]\\d{7}",
				"80[39]\\d{7}"
			]
		],
		"RW": [
			"250",
			"[027-9]\\d{7,8}",
			[
				[
					"(2\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"2"
					],
					"$1"
				],
				[
					"([7-9]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[7-9]"
					],
					"0$1"
				],
				[
					"(0\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"0"
					]
				]
			],
			"0"
		],
		"SA": [
			"966",
			"1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}",
			[
				[
					"([1-467])(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-467]"
					]
				],
				[
					"(1\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1[1-467]"
					]
				],
				[
					"(5\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"5"
					]
				],
				[
					"(92\\d{2})(\\d{5})",
					"$1 $2",
					[
						"92"
					],
					"$1"
				],
				[
					"(800)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					],
					"$1"
				],
				[
					"(811)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"81"
					]
				]
			],
			"0",
			"0$1"
		],
		"SB": [
			"677",
			"[1-9]\\d{4,6}",
			[
				[
					"(\\d{2})(\\d{5})",
					"$1 $2",
					[
						"[7-9]"
					]
				]
			]
		],
		"SC": [
			"248",
			"[24689]\\d{5,6}",
			[
				[
					"(\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[246]"
					]
				]
			]
		],
		"SD": [
			"249",
			"[19]\\d{8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3"
				]
			],
			"0",
			"0$1"
		],
		"SE": [
			"46",
			"[1-35-9]\\d{5,11}|4\\d{6,8}",
			[
				[
					"(8)(\\d{2,3})(\\d{2,3})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"8"
					],
					null,
					null,
					"$1 $2 $3 $4"
				],
				[
					"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"
					],
					null,
					null,
					"$1 $2 $3 $4"
				],
				[
					"([1-469]\\d)(\\d{3})(\\d{2})",
					"$1-$2 $3",
					[
						"1[136]|2[136]|3[356]|4[0246]|6[03]|90"
					],
					null,
					null,
					"$1 $2 $3"
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
					],
					null,
					null,
					"$1 $2 $3 $4"
				],
				[
					"(\\d{3})(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					[
						"1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"
					],
					null,
					null,
					"$1 $2 $3"
				],
				[
					"(7\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4",
					[
						"7"
					],
					null,
					null,
					"$1 $2 $3 $4"
				],
				[
					"(77)(\\d{2})(\\d{2})",
					"$1-$2$3",
					[
						"7"
					],
					null,
					null,
					"$1 $2 $3"
				],
				[
					"(20)(\\d{2,3})(\\d{2})",
					"$1-$2 $3",
					[
						"20"
					],
					null,
					null,
					"$1 $2 $3"
				],
				[
					"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})",
					"$1-$2 $3 $4",
					[
						"9[034]"
					],
					null,
					null,
					"$1 $2 $3 $4"
				],
				[
					"(9[034]\\d)(\\d{4})",
					"$1-$2",
					[
						"9[034]"
					],
					null,
					null,
					"$1 $2"
				],
				[
					"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1-$2 $3 $4 $5",
					[
						"25[245]|67[3-6]"
					],
					null,
					null,
					"$1 $2 $3 $4 $5"
				]
			],
			"0",
			"0$1"
		],
		"SG": [
			"65",
			"[36]\\d{7}|[17-9]\\d{7,10}",
			[
				[
					"([3689]\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[369]|8[1-9]"
					]
				],
				[
					"(1[89]00)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1[89]"
					]
				],
				[
					"(7000)(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"70"
					]
				],
				[
					"(800)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					]
				]
			]
		],
		"SH": [
			"290",
			"[256]\\d{4}",
			[],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"2(?:[0-57-9]\\d|6[4-9])\\d{2}",
				"[56]\\d{4}",
				null,
				null,
				null,
				null,
				null,
				null,
				"262\\d{2}"
			]
		],
		"SI": [
			"386",
			"[1-7]\\d{6,7}|[89]\\d{4,7}",
			[
				[
					"(\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"
					],
					"(0$1)"
				],
				[
					"([3-7]\\d)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[37][01]|4[0139]|51|6"
					]
				],
				[
					"([89][09])(\\d{3,6})",
					"$1 $2",
					[
						"[89][09]"
					]
				],
				[
					"([58]\\d{2})(\\d{5})",
					"$1 $2",
					[
						"59|8[1-3]"
					]
				]
			],
			"0",
			"0$1"
		],
		"SJ": [
			"47",
			"0\\d{4}|[45789]\\d{7}",
			[
				[
					"([489]\\d{2})(\\d{2})(\\d{3})",
					"$1 $2 $3",
					[
						"[489]"
					]
				],
				[
					"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[235-7]"
					]
				]
			],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"79\\d{6}",
				"(?:4[015-8]|5[89]|9\\d)\\d{6}",
				"80[01]\\d{5}",
				"82[09]\\d{5}",
				"880\\d{5}",
				"81[23]\\d{5}",
				"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",
				null,
				"85[0-5]\\d{5}",
				"810(?:0[0-6]|[2-8]\\d)\\d{3}"
			]
		],
		"SK": [
			"421",
			"(?:[2-68]\\d{5,8}|9\\d{6,8})",
			[
				[
					"(2)(1[67])(\\d{3,4})",
					"$1 $2 $3",
					[
						"21[67]"
					]
				],
				[
					"([3-5]\\d)(1[67])(\\d{2,3})",
					"$1 $2 $3",
					[
						"[3-5]"
					]
				],
				[
					"(2)(\\d{3})(\\d{3})(\\d{2})",
					"$1/$2 $3 $4",
					[
						"2"
					]
				],
				[
					"([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1/$2 $3 $4",
					[
						"[3-5]"
					]
				],
				[
					"([689]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[689]"
					]
				],
				[
					"(9090)(\\d{3})",
					"$1 $2",
					[
						"9090"
					]
				]
			],
			"0",
			"0$1"
		],
		"SL": [
			"232",
			"[2-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{6})",
					"$1 $2"
				]
			],
			"0",
			"(0$1)"
		],
		"SM": [
			"378",
			"[05-7]\\d{7,9}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[5-7]"
					]
				],
				[
					"(0549)(\\d{6})",
					"$1 $2",
					[
						"0"
					],
					null,
					null,
					"($1) $2"
				],
				[
					"(\\d{6})",
					"0549 $1",
					[
						"[89]"
					],
					null,
					null,
					"(0549) $1"
				]
			],
			null,
			null,
			"(?:0549)?([89]\\d{5})",
			"0549$1"
		],
		"SN": [
			"221",
			"[3789]\\d{8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[379]"
					]
				],
				[
					"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"8"
					]
				]
			]
		],
		"SO": [
			"252",
			"[1-9]\\d{5,8}",
			[
				[
					"(\\d{6})",
					"$1",
					[
						"[134]"
					]
				],
				[
					"(\\d)(\\d{6})",
					"$1 $2",
					[
						"2[0-79]|[13-5]"
					]
				],
				[
					"(\\d)(\\d{7})",
					"$1 $2",
					[
						"24|[67]"
					]
				],
				[
					"(\\d{2})(\\d{4})",
					"$1 $2",
					[
						"8[125]"
					]
				],
				[
					"(\\d{2})(\\d{5,7})",
					"$1 $2",
					[
						"15|28|6[1-35-9]|799|9[2-9]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"3[59]|4[89]|6[24-6]|79|8[08]|90"
					]
				]
			],
			"0"
		],
		"SR": [
			"597",
			"[2-8]\\d{5,6}",
			[
				[
					"(\\d{3})(\\d{3})",
					"$1-$2",
					[
						"[2-4]|5[2-58]"
					]
				],
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1-$2-$3",
					[
						"56"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1-$2",
					[
						"[6-8]"
					]
				]
			]
		],
		"SS": [
			"211",
			"[19]\\d{8}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					null,
					"0$1"
				]
			],
			"0"
		],
		"ST": [
			"239",
			"[29]\\d{6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2"
				]
			]
		],
		"SV": [
			"503",
			"[267]\\d{7}|[89]\\d{6}(?:\\d{4})?",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[267]"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[89]"
					]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					]
				]
			]
		],
		"SX": [
			"1",
			"[5789]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"721"
		],
		"SY": [
			"963",
			"[1-59]\\d{7,8}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[1-5]"
					]
				],
				[
					"(9\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9"
					]
				]
			],
			"0",
			"0$1",
			null,
			null,
			true
		],
		"SZ": [
			"268",
			"[027]\\d{7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[027]"
					]
				]
			]
		],
		"TA": [
			"290",
			"8\\d{3}",
			[],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"8\\d{3}"
			]
		],
		"TC": [
			"1",
			"[5689]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"649"
		],
		"TD": [
			"235",
			"[2679]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			]
		],
		"TG": [
			"228",
			"[29]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[29]"
					]
				]
			]
		],
		"TH": [
			"66",
			"[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?",
			[
				[
					"(2)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"2"
					]
				],
				[
					"([13-9]\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"14|[3-9]"
					]
				],
				[
					"(1[89]00)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"1"
					],
					"$1"
				]
			],
			"0",
			"0$1"
		],
		"TJ": [
			"992",
			"[3-57-9]\\d{8}",
			[
				[
					"([349]\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[34]7|91[78]"
					]
				],
				[
					"([457-9]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"4[148]|[578]|9(?:1[59]|[0235-9])"
					]
				],
				[
					"(331700)(\\d)(\\d{2})",
					"$1 $2 $3",
					[
						"331",
						"3317",
						"33170",
						"331700"
					]
				],
				[
					"(\\d{4})(\\d)(\\d{4})",
					"$1 $2 $3",
					[
						"3[1-5]",
						"3(?:[1245]|3(?:[02-9]|1[0-589]))"
					]
				]
			],
			"8",
			"$1",
			null,
			null,
			true
		],
		"TK": [
			"690",
			"[2-47]\\d{3,6}"
		],
		"TL": [
			"670",
			"[2-489]\\d{6}|7\\d{6,7}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[2-489]"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"7"
					]
				]
			]
		],
		"TM": [
			"993",
			"[1-6]\\d{7}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"12"
					]
				],
				[
					"(\\d{2})(\\d{6})",
					"$1 $2",
					[
						"6"
					],
					"8 $1"
				],
				[
					"(\\d{3})(\\d)(\\d{2})(\\d{2})",
					"$1 $2-$3-$4",
					[
						"13|[2-5]"
					]
				]
			],
			"8",
			"(8 $1)"
		],
		"TN": [
			"216",
			"[2-57-9]\\d{7}",
			[
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3"
				]
			]
		],
		"TO": [
			"676",
			"[02-8]\\d{4,6}",
			[
				[
					"(\\d{2})(\\d{3})",
					"$1-$2",
					[
						"[1-6]|7[0-4]|8[05]"
					]
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"7[5-9]|8[47-9]"
					]
				],
				[
					"(\\d{4})(\\d{3})",
					"$1 $2",
					[
						"0"
					]
				]
			]
		],
		"TR": [
			"90",
			"[2-589]\\d{9}|444\\d{4}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"[23]|4(?:[0-35-9]|4[0-35-9])"
					],
					"(0$1)",
					"true"
				],
				[
					"(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"5[02-69]"
					],
					"0$1",
					"true"
				],
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"51|[89]"
					],
					"0$1",
					"true"
				],
				[
					"(444)(\\d{1})(\\d{3})",
					"$1 $2 $3",
					[
						"444"
					]
				]
			],
			"0"
		],
		"TT": [
			"1",
			"[589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"868"
		],
		"TV": [
			"688",
			"[279]\\d{4,6}"
		],
		"TW": [
			"886",
			"2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}",
			[
				[
					"(20)(\\d)(\\d{4})",
					"$1 $2 $3",
					[
						"202"
					]
				],
				[
					"(20)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"20[013-9]"
					]
				],
				[
					"([2-8])(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"2[23-8]|[3-6]|[78][1-9]"
					]
				],
				[
					"([89]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"80|9"
					]
				],
				[
					"(70)(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"70"
					]
				]
			],
			"0",
			"0$1"
		],
		"TZ": [
			"255",
			"\\d{9}",
			[
				[
					"([24]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[24]"
					]
				],
				[
					"([67]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"[67]"
					]
				],
				[
					"([89]\\d{2})(\\d{2})(\\d{4})",
					"$1 $2 $3",
					[
						"[89]"
					]
				]
			],
			"0",
			"0$1"
		],
		"UA": [
			"380",
			"[3-9]\\d{8}",
			[
				[
					"([3-9]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|7|9[1-9]",
						"[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"
					]
				],
				[
					"([3-689]\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90",
						"3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"
					]
				],
				[
					"([3-6]\\d{3})(\\d{5})",
					"$1 $2",
					[
						"3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])",
						"3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"
					]
				]
			],
			"0",
			"0$1"
		],
		"UG": [
			"256",
			"\\d{9}",
			[
				[
					"(\\d{3})(\\d{6})",
					"$1 $2",
					[
						"[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"
					]
				],
				[
					"(\\d{2})(\\d{7})",
					"$1 $2",
					[
						"3|4(?:[1-5]|6[0-36-9])"
					]
				],
				[
					"(2024)(\\d{5})",
					"$1 $2",
					[
						"2024"
					]
				]
			],
			"0",
			"0$1"
		],
		"US": [
			"1",
			"[2-9]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			true,
			null,
			[
				"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
				null,
				"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
				"900[2-9]\\d{6}",
				"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}"
			]
		],
		"UY": [
			"598",
			"[2489]\\d{6,7}",
			[
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"[24]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"9[1-9]"
					],
					"0$1"
				],
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[89]0"
					],
					"0$1"
				]
			],
			"0"
		],
		"UZ": [
			"998",
			"[679]\\d{8}",
			[
				[
					"([679]\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			],
			"8",
			"8 $1"
		],
		"VA": [
			"39",
			"(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))",
			[
				[
					"(\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"0[26]|55"
					]
				],
				[
					"(0[26])(\\d{4})(\\d{5})",
					"$1 $2 $3",
					[
						"0[26]"
					]
				],
				[
					"(0[26])(\\d{4,6})",
					"$1 $2",
					[
						"0[26]"
					]
				],
				[
					"(0\\d{2})(\\d{3,4})(\\d{4})",
					"$1 $2 $3",
					[
						"0[13-57-9][0159]"
					]
				],
				[
					"(\\d{3})(\\d{3,6})",
					"$1 $2",
					[
						"0[13-57-9][0159]|8(?:03|4[17]|9[245])",
						"0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"
					]
				],
				[
					"(0\\d{3})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"0[13-57-9][2-46-8]"
					]
				],
				[
					"(0\\d{3})(\\d{2,6})",
					"$1 $2",
					[
						"0[13-57-9][2-46-8]"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[13]|8(?:00|4[08]|9[59])",
						"[13]|8(?:00|4[08]|9(?:5[5-9]|9))"
					]
				],
				[
					"(\\d{4})(\\d{4})",
					"$1 $2",
					[
						"894",
						"894[5-9]"
					]
				],
				[
					"(\\d{3})(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"3"
					]
				]
			],
			null,
			null,
			null,
			null,
			null,
			null,
			[
				"06698\\d{5}",
				"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",
				"80(?:0\\d{6}|3\\d{3})",
				"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",
				"1(?:78\\d|99)\\d{6}",
				null,
				null,
				null,
				"55\\d{8}",
				"84(?:[08]\\d{6}|[17]\\d{3})"
			]
		],
		"VC": [
			"1",
			"[5789]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"784"
		],
		"VE": [
			"58",
			"[24589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{7})",
					"$1-$2"
				]
			],
			"0",
			"0$1"
		],
		"VG": [
			"1",
			"[2589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"284"
		],
		"VI": [
			"1",
			"[3589]\\d{9}",
			[
				[
					"(\\d{3})(\\d{3})(\\d{4})",
					"($1) $2-$3",
					null,
					null,
					null,
					"$1-$2-$3"
				]
			],
			"1",
			null,
			null,
			null,
			null,
			"340"
		],
		"VN": [
			"84",
			"[167]\\d{6,9}|[2-59]\\d{7,9}|8\\d{6,8}",
			[
				[
					"([17]99)(\\d{4})",
					"$1 $2",
					[
						"[17]99"
					]
				],
				[
					"([48])(\\d{4})(\\d{4})",
					"$1 $2 $3",
					[
						"4|8(?:[2-5]|6[236]|7[13])"
					]
				],
				[
					"([235-7]\\d)(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"2[5-7]|3[0136]|5[5-9]|6[0-46-8]|7[02-79]"
					]
				],
				[
					"(80)(\\d{5})",
					"$1 $2",
					[
						"80"
					]
				],
				[
					"(69\\d)(\\d{4,5})",
					"$1 $2",
					[
						"69"
					]
				],
				[
					"([235-7]\\d{2})(\\d{4})(\\d{3})",
					"$1 $2 $3",
					[
						"2(?:[0-489]|5[124-9]|6[0-39]|7[0-7])|3[25]|50|65|7[18]"
					]
				],
				[
					"([89]\\d)(\\d{3})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4",
					[
						"8(?:8|9[89])|9"
					]
				],
				[
					"(1[2689]\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"1(?:[26]|8[68]|99)"
					]
				],
				[
					"(86[89])(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"86[89]"
					]
				],
				[
					"(1[89]00)(\\d{4,6})",
					"$1 $2",
					[
						"1[89]0"
					],
					"$1"
				]
			],
			"0",
			"0$1",
			null,
			null,
			true
		],
		"VU": [
			"678",
			"[2-57-9]\\d{4,6}",
			[
				[
					"(\\d{3})(\\d{4})",
					"$1 $2",
					[
						"[579]"
					]
				]
			]
		],
		"WF": [
			"681",
			"[4-8]\\d{5}",
			[
				[
					"(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3"
				]
			]
		],
		"WS": [
			"685",
			"[2-8]\\d{4,6}",
			[
				[
					"(8\\d{2})(\\d{3,4})",
					"$1 $2",
					[
						"8"
					]
				],
				[
					"(7\\d)(\\d{5})",
					"$1 $2",
					[
						"7"
					]
				],
				[
					"(\\d{5})",
					"$1",
					[
						"[2-6]"
					]
				]
			]
		],
		"YE": [
			"967",
			"[1-7]\\d{6,8}",
			[
				[
					"([1-7])(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[1-6]|7[24-68]"
					]
				],
				[
					"(7\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"7[0137]"
					]
				]
			],
			"0",
			"0$1"
		],
		"YT": [
			"262",
			"[268]\\d{8}",
			[
				[
					"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})",
					"$1 $2 $3 $4"
				]
			],
			"0",
			"0$1",
			null,
			null,
			null,
			"269|63"
		],
		"ZA": [
			"27",
			"[1-79]\\d{8}|8\\d{4,8}",
			[
				[
					"(860)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"860"
					]
				],
				[
					"(\\d{2})(\\d{3,4})",
					"$1 $2",
					[
						"8[1-4]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{2,3})",
					"$1 $2 $3",
					[
						"8[1-4]"
					]
				],
				[
					"(\\d{2})(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"[1-79]|8(?:[0-57]|6[1-9])"
					]
				]
			],
			"0",
			"0$1"
		],
		"ZM": [
			"260",
			"[289]\\d{8}",
			[
				[
					"([29]\\d)(\\d{7})",
					"$1 $2",
					[
						"[29]"
					]
				],
				[
					"(800)(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"8"
					]
				]
			],
			"0",
			"0$1"
		],
		"ZW": [
			"263",
			"2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}",
			[
				[
					"([49])(\\d{3})(\\d{2,4})",
					"$1 $2 $3",
					[
						"4|9[2-9]"
					]
				],
				[
					"(7\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"7"
					]
				],
				[
					"(86\\d{2})(\\d{3})(\\d{3})",
					"$1 $2 $3",
					[
						"86[24]"
					]
				],
				[
					"([2356]\\d{2})(\\d{3,5})",
					"$1 $2",
					[
						"2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)"
					]
				],
				[
					"(\\d{3})(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"
					]
				],
				[
					"([1-356]\\d)(\\d{3,5})",
					"$1 $2",
					[
						"1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"
					]
				],
				[
					"([235]\\d)(\\d{3})(\\d{3,4})",
					"$1 $2 $3",
					[
						"[23]9|54"
					]
				],
				[
					"([25]\\d{3})(\\d{3,5})",
					"$1 $2",
					[
						"(?:25|54)8",
						"258[23]|5483"
					]
				],
				[
					"(8\\d{3})(\\d{6})",
					"$1 $2",
					[
						"86"
					]
				],
				[
					"(80\\d)(\\d{3})(\\d{4})",
					"$1 $2 $3",
					[
						"80"
					]
				]
			],
			"0",
			"0$1"
		],
		"001": [
			"979",
			"\\d{9}",
			[
				[
					"(\\d)(\\d{4})(\\d{4})",
					"$1 $2 $3"
				]
			]
		]
	}
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["parse"] = parse;
/* harmony export (immutable) */ __webpack_exports__["format"] = format;
/* harmony export (immutable) */ __webpack_exports__["get_number_type"] = get_number_type;
/* harmony export (immutable) */ __webpack_exports__["getNumberType"] = getNumberType;
/* harmony export (immutable) */ __webpack_exports__["is_valid_number"] = is_valid_number;
/* harmony export (immutable) */ __webpack_exports__["isValidNumber"] = isValidNumber;
/* harmony export (immutable) */ __webpack_exports__["as_you_type"] = as_you_type;
/* harmony export (immutable) */ __webpack_exports__["asYouType"] = asYouType;
/* harmony export (immutable) */ __webpack_exports__["getPhoneCode"] = getPhoneCode;
/* harmony export (immutable) */ __webpack_exports__["getPhoneCodeCustom"] = getPhoneCodeCustom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata_min_json__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__metadata_min_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__es6_parse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__es6_get_number_type__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__es6_format__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__es6_validate__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__es6_metadata__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseCustom", function() { return __WEBPACK_IMPORTED_MODULE_1__es6_parse__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formatCustom", function() { return __WEBPACK_IMPORTED_MODULE_3__es6_format__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumberCustom", function() { return __WEBPACK_IMPORTED_MODULE_4__es6_validate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberTypeCustom", function() { return __WEBPACK_IMPORTED_MODULE_2__es6_get_number_type__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "asYouTypeCustom", function() { return __WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function() { return __WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__["b"]; });










function parse()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(__WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
	return __WEBPACK_IMPORTED_MODULE_1__es6_parse__["a" /* default */].apply(this, parameters)
}

function format()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(__WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
	return __WEBPACK_IMPORTED_MODULE_3__es6_format__["a" /* default */].apply(this, parameters)
}

function get_number_type()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(__WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
	return __WEBPACK_IMPORTED_MODULE_2__es6_get_number_type__["a" /* default */].apply(this, parameters)
}

// camelCase alias
function getNumberType()
{
	return is_valid_number.apply(this, arguments)
}

function is_valid_number()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(__WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
	return __WEBPACK_IMPORTED_MODULE_4__es6_validate__["a" /* default */].apply(this, parameters)
}

// camelCase alias
function isValidNumber()
{
	return is_valid_number.apply(this, arguments)
}

function as_you_type(country)
{
	__WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__["a" /* default */].call(this, country, __WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
}

as_you_type.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__["a" /* default */].prototype, {})
as_you_type.prototype.constructor = as_you_type

// camelCase alias

function asYouType(country)
{
	__WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__["a" /* default */].call(this, country, __WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
}

asYouType.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_5__es6_as_you_type__["a" /* default */].prototype, {})
asYouType.prototype.constructor = asYouType








function getPhoneCode(country)
{
	return getPhoneCodeCustom(country, __WEBPACK_IMPORTED_MODULE_0__metadata_min_json___default.a)
}

function getPhoneCodeCustom(country, metadata)
{
	if (!metadata.countries[country])
	{
		throw new Error('Unknown country: "' + country + '"')
	}

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__es6_metadata__["a" /* get_phone_code */])(metadata.countries[country])
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(90);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(89);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(32)
  , TAG = __webpack_require__(1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(102);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(10)(function(){
  return Object.defineProperty(__webpack_require__(61)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(35)
  , $export        = __webpack_require__(5)
  , redefine       = __webpack_require__(70)
  , hide           = __webpack_require__(11)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(19)
  , $iterCreate    = __webpack_require__(108)
  , setToStringTag = __webpack_require__(38)
  , getPrototypeOf = __webpack_require__(67)
  , ITERATOR       = __webpack_require__(1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(22)
  , createDesc     = __webpack_require__(23)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(42)
  , has            = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(62)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(68)
  , hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(24)
  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(104)(false)
  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(10);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(47);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_formatter__ = __webpack_require__(75);


// Formats `value` value preserving `caret` at the same character.
//
// `{ value, caret }` attribute is the result of `parse()` function call.
//
// Returns `{ text, caret }` where the new `caret` is the caret position
// inside `text` text corresponding to the original `caret` position inside `value`.
//
// `formatter(value)` is a function returning `{ text, template }`.
//
// `text` is the `value` value formatted using `template`.
// It may either cut off the non-filled right part of the `template`
// or it may fill the non-filled character placeholders
// in the right part of the `template` with `spacer`
// which is a space (' ') character by default.
//
// `template` is the template used to format the `value`.
// It can be either a full-length template or a partial template.
//
// `formatter` can also be a string — a `template`
// where character placeholders are denoted by 'x'es.
// In this case `formatter` function is automatically created.
//
// Example:
//
// `value` is '880',
// `caret` is `2` (before the first `0`)
//
// `formatter` is `'880' =>
//   { text: '8 (80 )', template: 'x (xxx) xxx-xx-xx' }`
//
// The result is `{ text: '8 (80 )', caret: 4 }`.
//
function format(value, caret, formatter) {
	if (typeof formatter === 'string') {
		formatter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__template_formatter__["a" /* default */])(formatter);
	}

	var _ref = formatter(value) || {},
	    text = _ref.text,
	    template = _ref.template;

	if (text === undefined) {
		text = value;
	}

	if (template) {
		if (caret === undefined) {
			caret = text.length;
		} else {
			var index = 0;
			var found = false;

			var possibly_last_input_character_index = -1;

			while (index < text.length && index < template.length) {
				// Character placeholder found
				if (text[index] !== template[index]) {
					if (caret === 0) {
						found = true;
						caret = index;
						break;
					}

					possibly_last_input_character_index = index;

					caret--;
				}

				index++;
			}

			// If the caret was positioned after last input character,
			// then the text caret index is just after the last input character.
			if (!found) {
				caret = possibly_last_input_character_index + 1;
			}
		}
	}

	return { text: text, caret: caret };
}
//# sourceMappingURL=format.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__format__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom__ = __webpack_require__(134);








var Input_controller = function () {
	function Input_controller(get_input_element, parse, format, on_change) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Input_controller);

		if (typeof get_input_element !== 'function') {
			(function () {
				var element = get_input_element;
				get_input_element = function get_input_element() {
					return element;
				};
			})();
		}

		this.get_input_element = get_input_element;
		this.parse = parse;
		this.format = format;
		this.on_change = on_change;

		this.onCut = this.onCut.bind(this);
		this.onPaste = this.onPaste.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.format_input_text = this.format_input_text.bind(this);
	}

	// Special handling for "Cut" event because
	// it wouldn't copy to clipboard otherwise.


	__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Input_controller, [{
		key: 'onCut',
		value: function onCut(event) {
			setTimeout(this.format_input_text, 0);
		}
	}, {
		key: 'onPaste',
		value: function onPaste(event) {
			var input = this.get_input_element();

			var selection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom__["a" /* getSelection */])(input);

			// If selection is made,
			// just erase the selected text
			// prior to pasting
			if (selection) {
				this.erase_selection(input, selection);
			}

			this.format_input_text();
		}
	}, {
		key: 'onChange',
		value: function onChange(event) {
			this.format_input_text();
		}

		// Intercepts "Delete" and "Backspace" keys
		// (hitting "Delete" or "Backspace"
		//  at any caret position should always result in
		//  erasing a digit)

	}, {
		key: 'onKeyDown',
		value: function onKeyDown(event) {
			var operation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom__["b" /* getOperation */])(event);

			switch (operation) {
				case 'Delete':
				case 'Backspace':
					// Intercept this operation and perform it manually.
					event.preventDefault();

					var input = this.get_input_element();

					var selection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom__["a" /* getSelection */])(input);

					// If selection is made,
					// just erase the selected text,
					// and don't apply any more operations to it.
					if (selection) {
						this.erase_selection(input, selection);
						return this.format_input_text();
					}

					// Else, perform the (character erasing) operation manually
					return this.format_input_text(operation);
			}
		}

		// Erases the selected text inside an `<input/>`

	}, {
		key: 'erase_selection',
		value: function erase_selection(input, selection) {
			var text = input.value;
			text = text.slice(0, selection.start) + text.slice(selection.end);

			input.value = text;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom__["c" /* setCaretPosition */])(input, selection.start);

			return this.format_input_text();
		}

		// Formats <input/> textual value as a phone number

	}, {
		key: 'format_input_text',
		value: function format_input_text(operation) {
			// <input/> DOM element
			var input = this.get_input_element();

			var _parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__parse__["a" /* default */])(input.value, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom__["d" /* getCaretPosition */])(input), this.parse),
			    value = _parse.value,
			    caret = _parse.caret;

			// Apply the pending operation to the <input/> textual value (if any)


			if (operation) {
				var edit_result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__edit__["a" /* default */])(value, caret, operation);

				value = edit_result.value;
				caret = edit_result.caret;
			}

			// Format the <input/> textual value as a phone number
			// (and reposition the caret accordingly)

			var format_result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__format__["a" /* default */])(value, caret, this.format);

			var text = format_result.text;
			caret = format_result.caret;

			// Set <input/> textual value manually to also set caret position
			// and prevent React from resetting the caret position later
			// inside subsequent `render()`.
			input.value = text;
			// Set caret position (with the neccessary adjustments)
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom__["c" /* setCaretPosition */])(input, caret);

			// <input/> textual value may have been changed,
			// so `value` may have been changed too.
			this.on_change(value);
		}

		// Parses `<input/>` text

	}, {
		key: 'getParsedValue',
		value: function getParsedValue() {
			// <input/> DOM element
			var input = this.get_input_element();

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__parse__["a" /* default */])(input.value, undefined, this.parse);
		}
	}]);

	return Input_controller;
}();

/* harmony default export */ __webpack_exports__["a"] = (Input_controller);
//# sourceMappingURL=input controller.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
// Parses the `text`.
//
// Returns `{ value, caret }` where `caret` is
// the caret position inside `value`
// corresponding to the `caret_position` inside `text`.
//
// The `text` is parsed by feeding each character sequentially to
// `parse_character(character, value)` function
// and appending the result (if it's not `undefined`) to `value`.
//
// Example:
//
// `text` is `8 (800) 555-35-35`,
// `caret_position` is `4` (before the first `0`).
// `parse_character` is `(character, value) =>
//   if (character >= '0' && character <= '9') { return character }`.
//
// then `parse()` outputs `{ value: '88005553535', caret: 2 }`.
//
function parse(text, caret_position, parse_character) {
	var value = '';

	var focused_input_character_index = 0;

	var index = 0;
	while (index < text.length) {
		var character = parse_character(text[index], value);

		if (character !== undefined) {
			value += character;

			if (caret_position !== undefined) {
				if (caret_position === index) {
					focused_input_character_index = value.length - 1;
				} else if (caret_position > index) {
					focused_input_character_index = value.length;
				}
			}
		}

		index++;
	}

	// If caret position wasn't specified
	if (caret_position === undefined) {
		// Then set caret position to "after the last input character"
		focused_input_character_index = value.length;
	}

	var result = {
		value: value,
		caret: focused_input_character_index
	};

	return result;
}
//# sourceMappingURL=parse.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = template_formatter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_braces__ = __webpack_require__(133);




// Takes a `template` where character placeholders
// are denoted by 'x'es (e.g. 'x (xxx) xxx-xx-xx').
//
// Returns a function which takes `value` characters
// and returns the `template` filled with those characters.
// If the `template` can only be partially filled
// then it is cut off.
//
// If `should_close_braces` is `true`,
// then it will also make sure all dangling braces are closed,
// e.g. "8 (8" -> "8 (8  )" (iPhone style phone number input).
//
function template_formatter(template) {
	var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
	var should_close_braces = arguments[2];

	if (!template) {
		return function (value) {
			return { text: value };
		};
	}

	var characters_in_template = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* count_occurences */])(placeholder, template);

	return function (value) {
		if (!value) {
			return { text: '', template: template };
		}

		var value_character_index = 0;
		var filled_in_template = '';

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(template), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var character = _step.value;

				if (character !== placeholder) {
					filled_in_template += character;
					continue;
				}

				filled_in_template += value[value_character_index];
				value_character_index++;

				// If the last available value character has been filled in,
				// then return the filled in template
				// (either trim the right part or retain it,
				//  if no more character placeholders in there)
				if (value_character_index === value.length) {
					// If there are more character placeholders
					// in the right part of the template
					// then simply trim it.
					if (value.length < characters_in_template) {
						break;
					}
				}
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

		if (should_close_braces) {
			filled_in_template = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__close_braces__["a" /* default */])(filled_in_template, template);
		}

		return { text: filled_in_template, template: template };
	};
}
//# sourceMappingURL=template formatter.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIGIT_PLACEHOLDER; });
/* unused harmony export close_dangling_braces */
/* unused harmony export count_occurences */
/* unused harmony export repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(26);



// This is an enhanced port of Google Android `libphonenumber`'s
// `asyoutypeformatter.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/blob/8d21a365061de2ba0675c878a710a7b24f74d2ae/javascript/i18n/phonenumbers/asyoutypeformatter.js









// Used in phone number format template creation.
// Could be any digit, I guess.
var DUMMY_DIGIT = '9';
var DUMMY_DIGIT_MATCHER = new RegExp(DUMMY_DIGIT, 'g');
// I don't know why is it exactly `15`
var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
// Create a phone number consisting only of the digit 9 that matches the
// `number_pattern` by applying the pattern to the "longest phone number" string.
var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);

// The digits that have not been entered yet will be represented by a \u2008,
// the punctuation space.
var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
var DIGIT_PLACEHOLDER_MATCHER_GLOBAL = new RegExp(DIGIT_PLACEHOLDER, 'g');

// A pattern that is used to match character classes in regular expressions.
// An example of a character class is "[1-4]".
var CHARACTER_CLASS_PATTERN = /\[([^\[\]])*\]/g;

// Any digit in a regular expression that actually denotes a digit. For
// example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
// (8 and 0) are standalone digits, but the rest are not.
// Two look-aheads are needed because the number following \\d could be a
// two-digit number, since the phone number can be as long as 15 digits.
var STANDALONE_DIGIT_PATTERN = /\d(?=[^,}][^,}])/g;

// A pattern that is used to determine if a `format` is eligible
// to be used by the "as you type formatter".
// It is eligible when the `format` contains groups of the dollar sign
// followed by a single digit, separated by valid phone number punctuation.
// This prevents invalid punctuation (such as the star sign in Israeli star numbers)
// getting into the output of the "as you type formatter".
var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + __WEBPACK_IMPORTED_MODULE_4__parse__["b" /* VALID_PUNCTUATION */] + ']*' + '(\\$\\d[' + __WEBPACK_IMPORTED_MODULE_4__parse__["b" /* VALID_PUNCTUATION */] + ']*)+' + '$');

// This is the minimum length of the leading digits of a phone number
// to guarantee the first "leading digits pattern" for a phone number format
// to be preemptive.
var MIN_LEADING_DIGITS_LENGTH = 3;

var VALID_INCOMPLETE_PHONE_NUMBER = '[' + __WEBPACK_IMPORTED_MODULE_4__parse__["c" /* PLUS_CHARS */] + ']{0,1}' + '[' + __WEBPACK_IMPORTED_MODULE_4__parse__["b" /* VALID_PUNCTUATION */] + __WEBPACK_IMPORTED_MODULE_4__parse__["d" /* VALID_DIGITS */] + ']*';

var VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp('^' + VALID_INCOMPLETE_PHONE_NUMBER + '$', 'i');

var as_you_type = function () {
	function as_you_type(country_code, metadata) {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, as_you_type);

		// Sanity check
		if (!metadata) {
			throw new Error('Metadata not passed');
		}

		if (country_code && metadata.countries[country_code]) {
			this.default_country = country_code;
		}

		this.metadata = metadata;

		this.reset();
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(as_you_type, [{
		key: 'input',
		value: function input(text) {
			// Parse input

			var extracted_number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["e" /* extract_formatted_phone_number */])(text);

			// Special case for a lone '+' sign
			// since it's not considered a possible phone number.
			if (!extracted_number) {
				if (text && text.indexOf('+') >= 0) {
					extracted_number = '+';
				}
			}

			// Validate possible first part of a phone number
			if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* matches_entirely */])(extracted_number, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN)) {
				return this.current_output;
			}

			return this.process_input(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["f" /* parse_phone_number */])(extracted_number));
		}
	}, {
		key: 'process_input',
		value: function process_input(input) {
			// If an out of position '+' sign detected
			// (or a second '+' sign),
			// then just drop it from the input.
			if (input[0] === '+') {
				if (!this.parsed_input) {
					this.parsed_input += '+';

					// If a default country was set
					// then reset it because an explicitly international
					// phone number is being entered
					this.reset_countriness();
				}

				input = input.slice(1);
			}

			// Raw phone number
			this.parsed_input += input;

			// // Reset phone number validation state
			// this.valid = false

			// Add digits to the national number
			this.national_number += input;

			// Try to format the parsed input

			if (this.is_international()) {
				if (!this.country_phone_code) {
					// If one looks at country phone codes
					// then he can notice that no one country phone code
					// is ever a (leftmost) substring of another country phone code.
					// So if a valid country code is extracted so far
					// then it means that this is the country code.

					// If no country phone code could be extracted so far,
					// then just return the raw phone number,
					// because it has no way of knowing
					// how to format the phone number so far.
					if (!this.extract_country_phone_code()) {
						// Return raw phone number
						return this.parsed_input;
					}

					// Initialize country-specific data
					this.initialize_phone_number_formats_for_this_country_phone_code();
					this.reset_format();
					this.determine_the_country();
				}
				// `this.country` could be `undefined`,
				// for instance, when there is ambiguity
				// in a form of several different countries
				// each corresponding to the same country phone code
				// (e.g. NANPA: USA, Canada, etc),
				// and there's not enough digits entered
				// to reliably determine the country
				// the phone number belongs to.
				// Therefore, in cases of such ambiguity,
				// each time something is input,
				// try to determine the country
				// (if it's not determined yet).
				else if (!this.country) {
						this.determine_the_country();
					}
			} else {
				// Some national prefixes are substrings of other national prefixes
				// (for the same country), therefore try to extract national prefix each time
				// because a longer national prefix might be available at some point in time.

				var previous_national_prefix = this.national_prefix;
				this.national_number = this.national_prefix + this.national_number;

				// Possibly extract a national prefix
				this.extract_national_prefix();

				if (this.national_prefix !== previous_national_prefix) {
					// National number has changed
					// (due to another national prefix been extracted)
					// therefore national number has changed
					// therefore reset all previous formatting data.
					// (and leading digits matching state)
					this.matching_formats = this.available_formats;
					this.reset_format();
				}
			}

			// Check the available phone number formats
			// based on the currently available leading digits.
			this.match_formats_by_leading_digits();

			// Format the phone number (given the next digits)
			var formatted_national_phone_number = this.format_national_phone_number(input);

			// If the phone number could be formatted,
			// then return it, possibly prepending with country phone code
			// (for international phone numbers only)
			if (formatted_national_phone_number) {
				return this.full_phone_number(formatted_national_phone_number);
			}

			// If the phone number couldn't be formatted,
			// then just fall back to the raw phone number.
			return this.parsed_input;
		}
	}, {
		key: 'format_national_phone_number',
		value: function format_national_phone_number(next_digits) {
			// Format the next phone number digits
			// using the previously chosen phone number format.
			//
			// This is done here because if `attempt_to_format_complete_phone_number`
			// was placed before this call then the `template`
			// wouldn't reflect the situation correctly (and would therefore be inconsistent)
			//
			var national_number_formatted_with_previous_format = void 0;
			if (this.chosen_format) {
				national_number_formatted_with_previous_format = this.format_next_national_number_digits(next_digits);
			}

			// See if the input digits can be formatted properly already. If not,
			// use the results from format_next_national_number_digits(), which does formatting
			// based on the formatting pattern chosen.

			var formatted_number = this.attempt_to_format_complete_phone_number();

			// Just because a phone number doesn't have a suitable format
			// that doesn't mean that the phone is invalid
			// because phone number formats only format phone numbers,
			// they don't validate them and some (rare) phone numbers
			// are meant to stay non-formatted.
			if (formatted_number) {
				// if (this.country)
				// {
				// 	this.valid = true
				// }

				return formatted_number;
			}

			// For some phone number formats national prefix

			// If the previously chosen phone number format
			// didn't match the next (current) digit being input
			// (leading digits pattern didn't match).
			if (this.choose_another_format()) {
				// And a more appropriate phone number format
				// has been chosen for these `leading digits`,
				// then format the national phone number (so far)
				// using the newly selected phone number pattern.

				// Will return `undefined` if it couldn't format
				// the supplied national number
				// using the selected phone number pattern.

				return this.reformat_national_number();
			}

			// If could format the next (current) digit
			// using the previously chosen phone number format
			// then return the formatted number so far.

			// If no new phone number format could be chosen,
			// and couldn't format the supplied national number
			// using the selected phone number pattern,
			// then it will return `undefined`.

			return national_number_formatted_with_previous_format;
		}
	}, {
		key: 'reset',
		value: function reset() {
			// Input stripped of non-phone-number characters.
			// Can only contain a possible leading '+' sign and digits.
			this.parsed_input = '';

			this.current_output = '';

			// This contains the national prefix that has been extracted. It contains only
			// digits without formatting.
			this.national_prefix = '';

			this.national_number = '';

			this.reset_countriness();

			this.reset_format();

			// this.valid = false

			return this;
		}
	}, {
		key: 'reset_country',
		value: function reset_country() {
			if (this.default_country && !this.is_international()) {
				this.country = this.default_country;
			} else {
				this.country = undefined;
			}
		}
	}, {
		key: 'reset_countriness',
		value: function reset_countriness() {
			this.reset_country();

			if (this.default_country && !this.is_international()) {
				this.country_metadata = this.metadata.countries[this.default_country];
				this.country_phone_code = this.country_metadata.phone_code;

				this.initialize_phone_number_formats_for_this_country_phone_code();
			} else {
				this.country_metadata = undefined;
				this.country_phone_code = undefined;

				this.available_formats = [];
				this.matching_formats = this.available_formats;
			}
		}
	}, {
		key: 'reset_format',
		value: function reset_format() {
			this.chosen_format = undefined;
			this.template = undefined;
			this.partially_populated_template = undefined;
			this.last_match_position = -1;
		}

		// Format each digit of national phone number (so far)
		// using the newly selected phone number pattern.

	}, {
		key: 'reformat_national_number',
		value: function reformat_national_number() {
			// Format each digit of national phone number (so far)
			// using the selected phone number pattern.
			return this.format_next_national_number_digits(this.national_number);
		}
	}, {
		key: 'initialize_phone_number_formats_for_this_country_phone_code',
		value: function initialize_phone_number_formats_for_this_country_phone_code() {
			// Get all "eligible" phone number formats for this country
			this.available_formats = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["b" /* get_formats */])(this.country_metadata).filter(function (format) {
				return ELIGIBLE_FORMAT_PATTERN.test(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["c" /* get_format_international_format */])(format));
			});

			this.matching_formats = this.available_formats;
		}
	}, {
		key: 'match_formats_by_leading_digits',
		value: function match_formats_by_leading_digits() {
			var leading_digits = this.national_number;

			// "leading digits" patterns start with a maximum 3 digits,
			// and then with each additional digit
			// a more precise "leading digits" pattern is specified.
			// They could make "leading digits" patterns start
			// with a maximum of a single digit, but they didn't,
			// so it's possible that some phone number formats
			// will be falsely rejected until there are at least
			// 3 digits in the national (significant) number being input.

			var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;

			if (index_of_leading_digits_pattern < 0) {
				index_of_leading_digits_pattern = 0;
			}

			this.matching_formats = this.get_relevant_phone_number_formats().filter(function (format) {
				var leading_digits_pattern_count = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* get_format_leading_digits_patterns */])(format).length;

				// Keep everything that isn't restricted by leading digits.
				if (leading_digits_pattern_count === 0) {
					return true;
				}

				var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_pattern_count - 1);
				var leading_digits_pattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* get_format_leading_digits_patterns */])(format)[leading_digits_pattern_index];

				// Brackets are required for `^` to be applied to
				// all or-ed (`|`) parts, not just the first one.
				return new RegExp('^(' + leading_digits_pattern + ')').test(leading_digits);
			});

			// If there was a phone number format chosen
			// and it no longer holds given the new leading digits then reset it
			if (this.chosen_format && this.matching_formats.indexOf(this.chosen_format) === -1) {
				this.reset_format();
			}
		}
	}, {
		key: 'get_relevant_phone_number_formats',
		value: function get_relevant_phone_number_formats() {
			var leading_digits = this.national_number;

			// "leading digits" patterns start with a maximum 3 digits,
			// and then with each additional digit
			// a more precise "leading digits" pattern is specified.
			// They could make "leading digits" patterns start
			// with a maximum of a single digit, but they didn't,
			// so it's possible that some phone number formats
			// will be falsely rejected until there are at least
			// 3 digits in the national (significant) number being input.

			if (leading_digits.length <= MIN_LEADING_DIGITS_LENGTH) {
				return this.available_formats;
			}

			return this.matching_formats;
		}

		// Check to see if there is an exact pattern match for these digits. If so, we
		// should use this instead of any other formatting template whose
		// leadingDigitsPattern also matches the input.

	}, {
		key: 'attempt_to_format_complete_phone_number',
		value: function attempt_to_format_complete_phone_number() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.get_relevant_phone_number_formats()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var format = _step.value;

					var matcher = new RegExp('^(?:' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* get_format_pattern */])(format) + ')$');

					if (!matcher.test(this.national_number)) {
						continue;
					}

					if (!this.validate_format(format)) {
						continue;
					}

					// To leave the formatter in a consistent state
					this.reset_format();
					this.chosen_format = format;

					var formatted_number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__format__["b" /* format_national_number_using_format */])(this.national_number, format, this.is_international(), this.national_prefix.length > 0, this.country_metadata);

					// Set `this.template` and `this.partially_populated_template`
					//
					// `else` case doesn't ever happen
					// with the current metadata,
					// but just in case.
					//
					/* istanbul ignore else */
					if (this.create_formatting_template(format)) {
						// Populate `this.partially_populated_template`
						this.reformat_national_number();
					} else {
						var full_number = this.full_phone_number(formatted_number);

						this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
						this.partially_populated_template = full_number;
					}

					return formatted_number;
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
		}

		// Combines the national number with the appropriate prefix

	}, {
		key: 'full_phone_number',
		value: function full_phone_number(formatted_national_number) {
			if (this.is_international()) {
				return '+' + this.country_phone_code + ' ' + formatted_national_number;
			}

			return formatted_national_number;
		}

		// Extracts the country calling code from the beginning
		// of the entered `national_number` (so far),
		// and places the remaining input into the `national_number`.

	}, {
		key: 'extract_country_phone_code',
		value: function extract_country_phone_code() {
			if (!this.national_number) {
				return;
			}

			var _parse_phone_number_a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["g" /* parse_phone_number_and_country_phone_code */])(this.parsed_input, this.metadata),
			    country_phone_code = _parse_phone_number_a.country_phone_code,
			    number = _parse_phone_number_a.number;

			if (!country_phone_code) {
				return;
			}

			this.country_phone_code = country_phone_code;
			this.national_number = number;

			return this.country_metadata = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["f" /* get_metadata_by_country_phone_code */])(country_phone_code, this.metadata);
		}
	}, {
		key: 'extract_national_prefix',
		value: function extract_national_prefix() {
			this.national_prefix = '';

			if (!this.country_metadata) {
				return;
			}

			var national_number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["h" /* strip_national_prefix */])(this.national_number, this.country_metadata);

			if (national_number !== this.national_number) {
				this.national_prefix = this.national_number.slice(0, this.national_number.length - national_number.length);
				this.national_number = national_number;
			}

			return this.national_prefix;
		}
	}, {
		key: 'choose_another_format',
		value: function choose_another_format() {
			// When there are multiple available formats, the formatter uses the first
			// format where a formatting template could be created.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.get_relevant_phone_number_formats()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var format = _step2.value;

					// If this format is currently being used
					// and is still possible, then stick to it.
					if (this.chosen_format === format) {
						return;
					}

					// If this `format` is suitable for "as you type",
					// then extract the template from this format
					// and use it to format the phone number being input.

					if (!this.validate_format(format)) {
						continue;
					}

					if (!this.create_formatting_template(format)) {
						continue;
					}

					this.chosen_format = format;

					// With a new formatting template, the matched position
					// using the old template needs to be reset.
					this.last_match_position = -1;

					return true;
				}

				// No format matches the phone number,
				// therefore set `country` to `undefined`
				// (or to the default country).
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

			this.reset_country();

			// No format matches the national phone number entered
			this.reset_format();
		}
	}, {
		key: 'validate_format',
		value: function validate_format(format) {
			// If national prefix is mandatory for this phone number format
			// and the user didn't input the national prefix,
			// then this phone number format isn't suitable.
			if (!this.is_international() && !this.national_prefix && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["g" /* get_format_national_prefix_is_mandatory_when_formatting */])(format, this.country_metadata)) {
				return;
			}

			return true;
		}
	}, {
		key: 'create_formatting_template',
		value: function create_formatting_template(format) {
			// The formatter doesn't format numbers when numberPattern contains '|', e.g.
			// (20|3)\d{4}. In those cases we quickly return.
			// (Though there's no such format in current metadata)
			/* istanbul ignore if */
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* get_format_pattern */])(format).indexOf('|') >= 0) {
				return;
			}

			var national_prefix_formatting_rule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["h" /* get_format_national_prefix_formatting_rule */])(format, this.country_metadata);

			// A very smart trick by the guys at Google
			var number_pattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* get_format_pattern */])(format)
			// Replace anything in the form of [..] with \d
			.replace(CHARACTER_CLASS_PATTERN, '\\d')
			// Replace any standalone digit (not the one in `{}`) with \d
			.replace(STANDALONE_DIGIT_PATTERN, '\\d');

			// This match will always succeed,
			// because the "longest dummy phone number"
			// has enough length to accomodate any possible
			// national phone number format pattern.
			var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0];

			// If the national number entered is too long
			// for any phone number format, then abort.
			if (this.national_number.length > dummy_phone_number_matching_format_pattern.length) {
				return;
			}

			// Now prepare phone number format
			var number_format = this.get_format_format(format);

			// If national prefix formatting rule is set
			// for this phone number format
			if (national_prefix_formatting_rule) {
				// If the user did input the national prefix
				// (or if the national prefix formatting rule does not require national prefix)
				// then maybe make it part of the phone number template
				if (this.national_prefix || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["i" /* get_format_uses_national_prefix */])(national_prefix_formatting_rule)) {
					// Make the national prefix part of the phone number template
					number_format = number_format.replace(__WEBPACK_IMPORTED_MODULE_5__format__["c" /* FIRST_GROUP_PATTERN */], national_prefix_formatting_rule);
				}
			}

			// Get a formatting template which can be used to efficiently format
			// a partial number where digits are added one by one.

			// Create formatting template for this phone number format
			var template = dummy_phone_number_matching_format_pattern
			// Format the dummy phone number according to the format
			.replace(new RegExp(number_pattern, 'g'), number_format)
			// Replace each dummy digit with a DIGIT_PLACEHOLDER
			.replace(DUMMY_DIGIT_MATCHER, DIGIT_PLACEHOLDER);

			// This one is for national number only
			this.partially_populated_template = template;

			// For convenience, the public `.template` property
			// is gonna contain the whole international number
			// if the phone number being input is international.
			if (this.is_international()) {
				template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + template;
			}
			// For local numbers, replace national prefix
			// with a digit placeholder.
			else {
					template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
				}

			// This one is for the full phone number
			return this.template = template;
		}
	}, {
		key: 'format_next_national_number_digits',
		value: function format_next_national_number_digits(digits) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(digits), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var digit = _step3.value;

					// If there is room for more digits in current `template`,
					// then set the next digit in the `template`,
					// and return the formatted digits so far.

					// If more digits are entered than the current format could handle
					if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
						// Reset the current format,
						// so that the new format will be chosen
						// in a subsequent `this.choose_another_format()` call
						// later in code.
						this.chosen_format = undefined;
						this.template = undefined;
						this.partially_populated_template = undefined;
						return;
					}

					this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
					this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
				}

				// Return the formatted phone number so far
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1).replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, ' ');
		}
	}, {
		key: 'is_international',
		value: function is_international() {
			return this.parsed_input && this.parsed_input[0] === '+';
		}
	}, {
		key: 'get_format_format',
		value: function get_format_format(format) {
			if (this.is_international()) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__format__["d" /* local_to_international_style */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["c" /* get_format_international_format */])(format));
			}

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__metadata__["j" /* get_format_format */])(format);
		}

		// Determines the country of the phone number
		// entered so far based on the country phone code
		// and the national phone number.

	}, {
		key: 'determine_the_country',
		value: function determine_the_country() {
			this.country = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__parse__["i" /* find_country_code */])(this.country_phone_code, this.national_number, this.metadata);
		}
	}]);

	return as_you_type;
}();

/* harmony default export */ __webpack_exports__["a"] = (as_you_type);


function close_dangling_braces(template, cut_before) {
	var retained_template = template.slice(0, cut_before);

	var opening_braces = count_occurences('(', retained_template);
	var closing_braces = count_occurences(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		if (template[cut_before] === ')') {
			dangling_braces--;
		}
		cut_before++;
	}

	return template.slice(0, cut_before);
}

// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(string), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var character = _step4.value;

			if (character === symbol) {
				count++;
			}
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return count;
}

// Repeats a string (or a symbol) N times.
// http://stackoverflow.com/questions/202605/repeat-string-javascript
function repeat(string, times) {
	if (times < 1) {
		return '';
	}

	var result = '';

	while (times > 1) {
		if (times & 1) {
			result += string;
		}

		times >>= 1;
		string += string;
	}

	return result + string;
}
//# sourceMappingURL=as you type.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is_valid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_number_type__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata__ = __webpack_require__(13);





// Checks if a given phone number is valid
//
// Example use cases:
//
// ```js
// is_valid('8005553535', 'RU')
// is_valid('8005553535', 'RU', metadata)
// is_valid({ phone: '8005553535', country: 'RU' })
// is_valid({ phone: '8005553535', country: 'RU' }, metadata)
// is_valid('+78005553535')
// is_valid('+78005553535', metadata)
// ```
//
function is_valid(first_argument, second_argument, third_argument) {
	var _sort_out_arguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_number_type__["b" /* sort_out_arguments */])(first_argument, second_argument, third_argument),
	    input = _sort_out_arguments.input,
	    metadata = _sort_out_arguments.metadata;

	// Sanity check


	if (!metadata) {
		throw new Error('Metadata not passed');
	}

	if (!input) {
		return false;
	}

	if (!input.country) {
		return false;
	}

	var country_metadata = metadata.countries[input.country];

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__metadata__["p" /* get_types */])(country_metadata)) {
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_number_type__["a" /* default */])(input, metadata)) {
			return false;
		}
	}

	return true;
}
//# sourceMappingURL=validate.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = __webpack_require__(91);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(56);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(50);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(52);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _libphonenumberJs = __webpack_require__(55);

var _inputFormat = __webpack_require__(139);

var _classnames = __webpack_require__(58);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactResponsiveUi = __webpack_require__(80);

var _countryNames = __webpack_require__(140);

var _countryNames2 = _interopRequireDefault(_countryNames);

var _internationalIcon = __webpack_require__(79);

var _internationalIcon2 = _interopRequireDefault(_internationalIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A list of all country codes
var all_countries = [];

// Country code to country name map


// Not importing here directly from `react-responsive-ui` npm package
// just to reduce the overall bundle size.
var default_dictionary = {
	International: 'International'
};

// Populate `all_countries` and `default_dictionary`
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = (0, _getIterator3.default)(_countryNames2.default), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var item = _step.value;

		var _item = (0, _slicedToArray3.default)(item, 2),
		    code = _item[0],
		    name = _item[1];

		all_countries.push(code.toUpperCase());
		default_dictionary[code.toUpperCase()] = name;
	}

	// Allows passing custom `libphonenumber-js` metadata
	// to reduce the overall bundle size.
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

var Input = function (_Component) {
	(0, _inherits3.default)(Input, _Component);

	function Input(props) {
		(0, _classCallCheck3.default)(this, Input);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

		_initialiseProps.call(_this);

		var _this$props = _this.props,
		    countries = _this$props.countries,
		    value = _this$props.value,
		    dictionary = _this$props.dictionary,
		    international = _this$props.international,
		    internationalIcon = _this$props.internationalIcon,
		    flags = _this$props.flags;
		var country = _this.props.country;

		// Normalize `country` code

		country = normalize_country_code(country);

		// Autodetect country if value is set
		// and is international (which it should be)
		if (!country && value && value[0] === '+') {
			// Will be left `undefined` in case of non-detection
			country = (0, _libphonenumberJs.parse)(value).country;
		}

		// If there will be no "International" option
		// then a `country` must be selected.
		if (!should_add_international_option(_this.props) && !country) {
			country = countries[0];
		}

		// Set the currently selected country
		_this.state.country_code = country;

		// If a phone number `value` is passed then format it
		if (value) {
			// Take note of the current `value` property
			_this.state.value_property = value;
			// Set the currently entered `value`.
			// State `value` is either in international plaintext or just plaintext format.
			// (e.g. `+78005553535`, `1234567`)
			_this.state.value = _this.correct_value_depending_on_the_country_selected(value, country);
		}

		// `<Select/>` options
		_this.select_options = [];

		// Whether custom country names are supplied
		var using_custom_country_names = false;

		// Add a `<Select/>` option for each country
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = (0, _getIterator3.default)(countries), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var country_code = _step2.value;

				if (dictionary[country_code]) {
					using_custom_country_names = true;
				}

				_this.select_options.push({
					value: country_code,
					label: dictionary[country_code] || default_dictionary[country_code],
					icon: get_country_option_icon(country_code, _this.props)
				});
			}

			// Sort the list of countries alphabetically
			// (if `String.localeCompare` is available).
			// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
			// (Which means: IE >= 11, and does not work in Safari as of May 2017)
			//
			// This is only done when custom country names
			// are supplied via `dictionary` property
			// because by default all country names are already sorted.
			//
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

		if (using_custom_country_names && String.prototype.localeCompare) {
			console.log('disable sort');
			// this.select_options.sort((a, b) => a.label.localeCompare(b.label))
		}

		// Add the "International" option to the country list (if suitable)
		if (should_add_international_option(_this.props)) {
			_this.select_options.unshift({
				label: dictionary['International'] || default_dictionary['International'],
				icon: flags === false ? undefined : internationalIcon
			});
		}
		return _this;
	}

	// If the country code is specified
	//   If the value has a leading plus sign
	//     If it converts into a valid national number for this country
	//       Then the value is set to be that national number
	//     Else
	//       The leading + sign is trimmed
	//   Else
	//     The value stays as it is
	// Else
	//   If the value has a leading + sign
	//     The value stays as it is
	//   Else
	//     The + sign is prepended
	//


	(0, _createClass3.default)(Input, [{
		key: 'correct_value_depending_on_the_country_selected',
		value: function correct_value_depending_on_the_country_selected(value, country_code) {
			var _props = this.props,
			    metadata = _props.metadata,
			    convertToNational = _props.convertToNational;

			if (!value) {
				return;
			}

			// If the country code is specified
			if (country_code) {
				// If the value has a leading plus sign
				if (value[0] === '+' && convertToNational) {
					// If it's a fully-entered phone number
					// that converts into a valid national number for this country
					// then the value is set to be that national number.

					var parsed = (0, _libphonenumberJs.parse)(value, metadata);

					if (parsed.country === country_code) {
						return this.format(parsed.phone, country_code).text;
					}

					// Else the leading + sign is trimmed.
					return value.slice(1);
				}

				// Else the value stays as it is
				return value;
			}

			// The country is not set.
			// Assuming that's an international phone number.

			// If the value has a leading + sign
			if (value[0] === '+') {
				// The value is correct
				return value;
			}

			// The + sign is prepended
			return '+' + value;
		}
	}, {
		key: 'set_country_code_value',
		value: function set_country_code_value(country_code) {
			var onCountryChange = this.props.onCountryChange;

			if (onCountryChange) {
				onCountryChange(country_code);
			}

			this.setState({ country_code: country_code });
		}

		// `<select/>` `onChange` handler


		// `input-format` `parse` character function
		// https://github.com/halt-hammerzeit/input-format


		// `input-format` `format` function
		// https://github.com/halt-hammerzeit/input-format


		// Can be called externally


		// `<input/>` `onKeyDown` handler


		// `<input/>` `onChange` handler.
		// Updates `this.props.value` (in e.164 phone number format)
		// according to the new `this.state.value`.
		// (keeps them in sync)


		// When country `<select/>` is toggled


		// Focuses the `<input/>` field
		// on tab out of the country `<select/>`

	}, {
		key: 'can_change_country',

		// Can a user change the default country or not.
		value: function can_change_country() {
			var countries = this.props.countries;

			// If `countries` is empty,
			// then only "International" option is available,
			// so can't switch it.
			//
			// If `countries` is a single allowed country,
			// then cant's switch it.
			//

			return countries.length > 1;
		}

		// Listen for default country property:
		// if it is set after the page loads
		// and the user hasn't selected a country yet
		// then select the default country.

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(new_props) {
			var _props2 = this.props,
			    countries = _props2.countries,
			    value = _props2.value;

			// Normalize `country` codes

			var country = normalize_country_code(this.props.country);
			var new_country = normalize_country_code(new_props.country);

			// If the default country changed
			// (e.g. in case of IP detection)
			if (new_country !== country) {
				// If the phone number input field is currently empty
				// (e.g. not touched yet) then change the selected `country`
				// to the newly passed one (e.g. as a result of a GeoIP query)
				if (!value) {
					// If the passed `country` allowed then update it
					if (countries.indexOf(new_country) !== -1) {
						// Set the new `country`
						this.set_country(new_country, false);
					}
				}
			}

			// This code is executed:
			// * after `onChange` is called
			// * if the `value` was eternally set
			if (new_props.value !== value) {
				// Ignore self `onChange` calls
				// (because the library called `onChange` by itself).
				// Because if the current `value` property representation
				// corresponds to `new_props.value`, then there's no need to update anything.
				if (new_props.value !== this.state.value_property) {
					// Update the `value` because it was externally set

					// Country code gets updated too
					var country_code = this.state.country_code;

					// Autodetect country if value is set
					// and is international (which it should be)
					if (new_props.value && new_props.value[0] === '+') {
						// `parse().country` will be `undefined` in case of non-detection
						country_code = (0, _libphonenumberJs.parse)(new_props.value).country || country_code;
					}

					this.setState({
						country_code: country_code,
						value: this.correct_value_depending_on_the_country_selected(new_props.value, country_code)
					});
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props3 = this.props,
			    saveOnIcons = _props3.saveOnIcons,
			    showCountrySelect = _props3.showCountrySelect,
			    nativeExpanded = _props3.nativeExpanded,
			    disabled = _props3.disabled,
			    selectTabIndex = _props3.selectTabIndex,
			    selectMaxItems = _props3.selectMaxItems,
			    inputTabIndex = _props3.inputTabIndex,
			    style = _props3.style,
			    className = _props3.className,
			    inputClassName = _props3.inputClassName,
			    dictionary = _props3.dictionary,
			    countries = _props3.countries,
			    country = _props3.country,
			    onCountryChange = _props3.onCountryChange,
			    flags = _props3.flags,
			    flagsPath = _props3.flagsPath,
			    international = _props3.international,
			    internationalIcon = _props3.internationalIcon,
			    convertToNational = _props3.convertToNational,
			    metadata = _props3.metadata,
			    input_props = (0, _objectWithoutProperties3.default)(_props3, ['saveOnIcons', 'showCountrySelect', 'nativeExpanded', 'disabled', 'selectTabIndex', 'selectMaxItems', 'inputTabIndex', 'style', 'className', 'inputClassName', 'dictionary', 'countries', 'country', 'onCountryChange', 'flags', 'flagsPath', 'international', 'internationalIcon', 'convertToNational', 'metadata']);

			var _state = this.state,
			    value = _state.value,
			    country_code = _state.country_code,
			    country_select_is_shown = _state.country_select_is_shown;

			var markup = _react2.default.createElement('div', { style: style, className: (0, _classnames2.default)('react-phone-number-input', className) }, showCountrySelect && this.can_change_country() && _react2.default.createElement(_reactResponsiveUi.Select, {
				ref: function ref(_ref) {
					return _this2.select = _ref;
				},
				value: country_code,
				options: this.select_options,
				onChange: this.set_country,
				disabled: disabled,
				onToggle: this.country_select_toggled,
				onTabOut: this.on_country_select_tab_out,
				nativeExpanded: nativeExpanded,
				autocomplete: true,
				autocompleteShowAll: true,
				maxItems: selectMaxItems,
				concise: true,
				tabIndex: selectTabIndex,
				focusUponSelection: false,
				saveOnIcons: saveOnIcons,
				name: input_props.name ? input_props.name + '__country' : undefined,
				className: 'react-phone-number-input__country',
				inputClassName: inputClassName,
				style: select_style }), !country_select_is_shown && _react2.default.createElement(_inputFormat.ReactInput, (0, _extends3.default)({}, input_props, {
				ref: function ref(_ref2) {
					return _this2.input = _ref2;
				},
				value: value,
				onChange: this.on_change,
				disabled: disabled,
				type: 'tel',
				tabIndex: inputTabIndex,
				parse: this.parse,
				format: this.format,
				onKeyDown: this.on_key_down,
				className: (0, _classnames2.default)('rrui__input', 'rrui__input-field', 'react-phone-number-input__phone', inputClassName),
				style: input_style })));

			return markup;
		}
	}]);

	return Input;
}(_react.Component);

// Parses a partially entered phone number
// and returns the national number so far.
// Not using `libphonenumber-js`'s `parse`
// function here because `parse` only works
// when the number is fully entered,
// and this one is for partially entered number.


Input.propTypes = {
	// Phone number `value`.
	// Is a plaintext international phone number
	// (e.g. "+12223333333" for USA)
	value: _propTypes2.default.string,

	// This handler is called each time
	// the phone number <input/> changes its textual value.
	onChange: _propTypes2.default.func.isRequired,

	// This `onBlur` interceptor is a workaround for `redux-form`,
	// so that it gets a parsed `value` in its `onBlur` handler,
	// not the formatted one.
	// (`redux-form` passed `onBlur` to this component
	//  and this component intercepts that `onBlur`
	//  to make sure it works correctly with `redux-form`)
	onBlur: _propTypes2.default.func,

	// Set `onKeyDown` handler.
	// Can be used in special cases to handle e.g. enter pressed
	onKeyDown: _propTypes2.default.func,

	// Disables both the <input/> and the <select/>
	// (is `false` by default)
	disabled: _propTypes2.default.bool.isRequired,

	// Two-letter country code
	// to be used as the default country
	// for local (non-international) phone numbers.
	country: _propTypes2.default.string,

	// Is called when the selected country changes
	// (either by a user manually, or by autoparsing
	//  an international phone number being input).
	// This handler does not need to update the `country` property.
	// It's simply a listener for those who might need that for whatever purpose.
	onCountryChange: _propTypes2.default.func,

	// Localization dictionary:
	// `{ International: 'Международный', RU: 'Россия', US: 'США', ... }`
	dictionary: _propTypes2.default.objectOf(_propTypes2.default.string),

	// An optional list of allowed countries
	countries: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,

	// Custom national flag icons
	flags: _propTypes2.default.oneOfType([_propTypes2.default.objectOf(_propTypes2.default.element), _propTypes2.default.bool]),

	// A base URL path for national flag SVG icons.
	// By default it uses the ones from `flag-icon-css` github repo.
	flagsPath: _propTypes2.default.string.isRequired,

	// Whether to use native `<select/>` when expanded
	nativeExpanded: _propTypes2.default.bool.isRequired,

	// If set to `false`, then country flags will be shown
	// for all countries in the options list
	// (not just for selected country).
	saveOnIcons: _propTypes2.default.bool.isRequired,

	// Whether to show country `<Select/>`
	// (is `true` by default)
	showCountrySelect: _propTypes2.default.bool.isRequired,

	// Whether to add the "International" option
	// to the list of countries.
	international: _propTypes2.default.bool,

	// Custom "International" phone number type icon.
	internationalIcon: _propTypes2.default.element.isRequired,

	// Should the initially passed phone number `value`
	// be converted to a national phone number for its country.
	// (is `true` by default)
	convertToNational: _propTypes2.default.bool.isRequired,

	// HTML `tabindex` attribute for the country select
	selectTabIndex: _propTypes2.default.number,

	// Defines the height of the dropdown country select list
	selectMaxItems: _propTypes2.default.number,

	// HTML `tabindex` attribute for the phone number input
	inputTabIndex: _propTypes2.default.number,

	// CSS style object
	style: _propTypes2.default.object,

	// Component CSS class
	className: _propTypes2.default.string,

	// `<input/>` CSS class
	inputClassName: _propTypes2.default.string,

	// `libphonenumber-js` metadata
	metadata: _propTypes2.default.shape({
		countries: _propTypes2.default.object.isRequired
	}).isRequired
};
Input.defaultProps = {
	// Is enabled
	disabled: false,

	// Include all countries by default
	countries: all_countries,

	// By default use the ones from `flag-icon-css` github repo.
	flagsPath: 'https://lipis.github.io/flag-icon-css/flags/4x3/',

	// Default international icon (globe)
	internationalIcon: _react2.default.createElement('div', { className: 'react-phone-number-input__icon react-phone-number-input__icon--international' }, _react2.default.createElement(_internationalIcon2.default, null)),

	// Custom country names
	dictionary: {},

	// Whether to use native `<select/>` when expanded
	nativeExpanded: false,

	// Don't show flags for all countries in the options list
	// (show it just for selected country).
	// (to save user's traffic because all flags are about 3 MegaBytes)
	saveOnIcons: true,

	// Show country `<Select/>` by default
	showCountrySelect: true,

	// Convert the initially passed phone number `value`
	// to a national phone number for its country.
	convertToNational: true
};

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.state = {};

	this.set_country = function (country_code, focus) {
		var metadata = _this3.props.metadata;

		// Previously selected country

		var previous_country_code = _this3.state.country_code;

		_this3.set_country_code_value(country_code);

		// Adjust the phone number (`value`)
		// according to the selected `country_code`

		var value = _this3.state.value;

		// If switching to a country from International
		//   If the international number belongs to this country
		//     Convert it to a national number
		//   Else
		//     Trim the leading + sign
		//
		// If switching to a country from a country
		//   If the value has a leading + sign
		//     If the international number belongs to this country
		//       Convert it to a national number
		//     Else
		//       Trim the leading + sign
		//   Else
		//     The value stays as it is
		//
		// If switching to International from a country
		//   If the value has a leading + sign
		//     The value stays as it is
		//   Else
		//     Take the international plaintext value

		if (value) {
			// If switching to a country from International
			if (!previous_country_code && country_code) {
				// The value is international plaintext
				var parsed = (0, _libphonenumberJs.parse)(value, metadata);

				// If it's for this country,
				// then convert it to a national number
				if (parsed.country === country_code) {
					value = _this3.format(parsed.phone, country_code).text;
				}
				// Else just trim the + sign
				else {
						value = value.slice(1);
					}
			}

			if (previous_country_code && country_code) {
				if (value[0] === '+') {
					var _parsed = (0, _libphonenumberJs.parse)(value, metadata);

					if (_parsed.country === country_code) {
						value = _this3.format(_parsed.phone, country_code).text;
					} else {
						value = value.slice(1);
					}
				}
			}

			// If switching to International from a country
			if (previous_country_code && !country_code) {
				// If no leading + sign
				if (value[0] !== '+') {
					// Take the international plaintext value
					var national_number = parse_partial_number(value, previous_country_code, metadata).national_number;
					value = (0, _libphonenumberJs.format)(national_number, previous_country_code, 'International_plaintext', metadata);
				}
			}

			// Update the adjusted `value`
			// and update `this.props.value` (in e.164 phone number format)
			// according to the new `this.state.value`.
			// (keep them in sync)
			_this3.on_change(value, country_code, true);
		}

		// Focus the phone number input upon country selection
		// (do it in a timeout because the `<input/>`
		//  is hidden while selecting a country)
		if (focus !== false) {
			setTimeout(_this3.focus, 0);
		}
	};

	this.parse = function (character, value) {
		var countries = _this3.props.countries;

		if (character === '+') {
			// Only allow a leading `+`
			if (!value) {
				// If the "International" option is available
				// then allow the leading `+` because it's meant to be this way.
				//
				// Otherwise, the leading `+` will either erase all subsequent digits
				// (if they're not appropriate for the selected country)
				// or the subsequent digits (if any) will join the `+`
				// forming an international phone number. Because a user
				// might be comfortable with entering an international phone number
				// (i.e. with country code) rather than the local one.
				// Therefore such possibility is given.
				//
				return character;
			}
		}
		// For digits
		else if (character >= '0' && character <= '9') {
				var metadata = _this3.props.metadata;
				var country_code = _this3.state.country_code;

				// If the "International" option is not available
				// and if the value has a leading `+`
				// then it means that the phone number being entered
				// is an international one, so only allow the country phone code
				// for the selected country to be entered.

				if (!should_add_international_option(_this3.props) && value && value[0] === '+') {
					if (!could_phone_number_belong_to_country(value + character, country_code, metadata)) {
						return;
					}
				}

				return character;
			}
	};

	this.format = function (value) {
		var country_code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this3.state.country_code;
		var metadata = _this3.props.metadata;

		// `value` is already parsed input, i.e.
		// either International plaintext phone number
		// or just local phone number digits.

		// "As you type" formatter

		var formatter = new _libphonenumberJs.as_you_type(country_code, metadata);

		// Is used to check if a country code can already be derived
		_this3.formatter = formatter;

		// Format phone number
		var text = formatter.input(value);

		return { text: text, template: formatter.template };
	};

	this.focus = function () {
		_reactDom2.default.findDOMNode(_this3.input).focus();
	};

	this.on_key_down = function (event) {
		var onKeyDown = _this3.props.onKeyDown;

		// Expand country `<select/>`` on "Down arrow" key press

		if (event.keyCode === 40) {
			_this3.select.toggle();
		}

		if (onKeyDown) {
			onKeyDown(event);
		}
	};

	this.on_change = function (value) {
		var country_code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this3.state.country_code;
		var changed_country = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
		var _props4 = _this3.props,
		    metadata = _props4.metadata,
		    onChange = _props4.onChange;

		// If the `<input/>` is empty then just exit

		if (!value) {
			return _this3.setState({
				// State `value` is the parsed input value
				// (e.g. `+78005553535`, `1234567`).
				value: value,
				// `value_property` holds the `value` property value
				// which is being set by this library.
				value_property: value
			},
			// Write the new `this.props.value`.
			function () {
				return onChange(value);
			});
		}

		// For international phone numbers
		if (value[0] === '+') {
			// If an international phone number is being erased up to the first `+` sign
			// or if an international phone number is just starting (with a `+` sign)
			// then unset the current country because it's clear that a user intends to change it.
			if (value.length === 1) {
				// If "International" country option has not been disabled
				// then reset the currently selected country.
				if (should_add_international_option(_this3.props)) {
					country_code = undefined;
					_this3.set_country_code_value(country_code);
				}
			}
			// If a phone number is being input as an international one
			// and the country code can already be derived,
			// then switch the country.
			// (`001` is a special "non-geograpical entity" code in `libphonenumber` library)
			else if (!changed_country && _this3.formatter.country && _this3.formatter.country !== '001') {
					country_code = _this3.formatter.country;
					_this3.set_country_code_value(country_code);
				}
		}
		// If "International" mode is selected
		// and the `value` doesn't start with a + sign,
		// then prepend it to the `value`.
		else if (!country_code) {
				value = '+' + value;
			}

		// `value` in E.164 phone number format
		var value_property = void 0;

		// `value` equal to `+` makes no sense
		if (value === '+') {
			value_property = undefined;
		}
		// If a phone number is in international format then check
		// that the phone number entered belongs to the selected country.
		else if (country_code && value[0] === '+' && !(value.indexOf('+' + (0, _libphonenumberJs.getPhoneCode)(country_code)) === 0 && value.length > ('+' + (0, _libphonenumberJs.getPhoneCode)(country_code)).length)) {
				value_property = undefined;
			}
			// Should be a most-probably-valid phone number
			else {
					// Convert `value` to E.164 phone number format
					value_property = e164(value, country_code, metadata);
				}

		_this3.setState({
			// State `value` is the parsed input value
			// (e.g. `+78005553535`, `1234567`).
			value: value,
			// `value_property` holds the `value` property value
			// which is being set by this library.
			value_property: value_property
		},
		// Write the new `this.props.value`.
		function () {
			return onChange(value_property);
		});
	};

	this.country_select_toggled = function (is_shown) {
		_this3.setState({ country_select_is_shown: is_shown });
	};

	this.on_country_select_tab_out = function (event) {
		event.preventDefault();

		// Focus the phone number input upon country selection
		// (do it in a timeout because the `<input/>`
		//  is hidden while selecting a country)
		setTimeout(_this3.focus, 0);
	};
};

exports.default = Input;

function parse_partial_number(value, country_code, metadata) {
	// "As you type" formatter
	var formatter = new _libphonenumberJs.as_you_type(country_code, metadata);

	// Input partially entered phone number
	formatter.input(value);

	// Return the parsed partial phone number
	// (has `.national_number`, `.country`, etc)
	return formatter;
}

// Converts `value` to E.164 phone number format
function e164(value, country_code, metadata) {
	// If the phone number is being input in a country-specific format
	//   If the value has a leading + sign
	//     The value stays as it is
	//   Else
	//     The value is converted to international plaintext
	// Else, the phone number is being input in an international format
	//   If the value has a leading + sign
	//     The value stays as it is
	//   Else
	//     The value is prepended with a + sign

	if (country_code) {
		if (value[0] === '+') {
			return value;
		}

		var partial_national_number = parse_partial_number(value, country_code).national_number;
		return (0, _libphonenumberJs.format)(partial_national_number, country_code, 'International_plaintext', metadata);
	}

	if (value[0] === '+') {
		return value;
	}

	return '+' + value;
}

var select_style = {
	display: 'inline-block',
	verticalAlign: 'bottom'
};

var input_style = select_style;

// Gets country flag element by country code
function get_country_option_icon(country_code, _ref3) {
	var flags = _ref3.flags,
	    flagsPath = _ref3.flagsPath;

	if (flags === false) {
		return undefined;
	}

	if (flags && flags[country_code]) {
		return flags[country_code];
	}

	return _react2.default.createElement('img', {
		className: 'react-phone-number-input__icon',
		src: '' + flagsPath + country_code.toLowerCase() + '.svg' });
}

// Whether to add the "International" option to the list of countries
function should_add_international_option(properties) {
	var countries = properties.countries,
	    international = properties.international;

	// If this behaviour is explicitly set, then do as it says.

	if (international !== undefined) {
		return international;
	}

	// If `countries` is empty,
	// then only "International" option is available, so add it.
	if (countries.length === 0) {
		return true;
	}

	// If `countries` is a single allowed country,
	// then don't add the "International" option
	// because it would make no sense.
	if (countries.length === 1) {
		return false;
	}

	// Show the "International" option by default
	return true;
}

// Is it possible that the partially entered  phone number belongs to the given country
function could_phone_number_belong_to_country(phone_number, country_code, metadata) {
	// Strip the leading `+`
	var phone_number_digits = phone_number.slice(1);

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(metadata.country_phone_code_to_countries)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var country_phone_code = _step3.value;

			var possible_country_phone_code = phone_number_digits.substring(0, country_phone_code.length);
			if (country_phone_code.indexOf(possible_country_phone_code) === 0) {
				// This country phone code is possible.
				// Does the given country correspond to this country phone code.
				if (metadata.country_phone_code_to_countries[country_phone_code].indexOf(country_code) >= 0) {
					return true;
				}
			}
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
}

// Validates country code
function normalize_country_code(country) {
	// Normalize `country` if it's an empty string
	if (country === '') {
		country = undefined;
	}

	// No country is selected ("International")
	if (country === undefined || country === null) {
		return country;
	}

	// Check that `country` code exists
	if (default_dictionary[country]) {
		return country;
	}

	throw new Error('Unknown country: "' + country + '"');
}
//# sourceMappingURL=input.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = International_icon;

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function International_icon() {
	var markup = _react2.default.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink",
		viewBox: "0 0 356.926 356.926" }, _react2.default.createElement("g", null, _react2.default.createElement("g", null, _react2.default.createElement("path", { d: "M211.89,213.669c0-10.475-8.521-18.997-18.996-18.997c-0.401,0-0.799,0.017-1.193,0.041v2.406\r c0.396-0.028,0.79-0.061,1.193-0.061c9.158,0,16.608,7.452,16.608,16.611s-7.45,16.61-16.608,16.61\r c-0.269,0-0.53-0.027-0.795-0.041v0.897v1.509v4.723H186.2v3.182h13.388v-3.182h-5.104v-4.774\r C204.218,231.781,211.89,223.607,211.89,213.669z" }), _react2.default.createElement("g", null, _react2.default.createElement("polygon", { points: "260.072,79.408 260.398,82.045 256.447,82.882 255.913,88.517 260.677,88.517 266.998,87.913 270.251,84.021\r 266.788,82.678 264.883,80.488 262.024,75.858 260.677,69.329 255.286,70.409 253.799,72.721 253.799,75.312 256.378,77.084\r " }), _react2.default.createElement("polygon", { points: "255.495,81.569 255.773,78.037 252.637,76.683 248.233,77.706 244.945,82.94 244.945,86.344 248.768,86.344\r " }), _react2.default.createElement("path", { d: "M164.852,96.598l-0.976,2.498h-4.7v2.428h1.121c0,0,0.07,0.511,0.168,1.191l2.876-0.238l1.783-1.121l0.465-2.248\r l2.335-0.204l0.912-1.888l-2.138-0.442L164.852,96.598z" }), _react2.default.createElement("polygon", { points: "152.739,101.001 152.565,103.366 155.976,103.081 156.324,100.705 154.279,99.096 \t\t\t" }), _react2.default.createElement("path", { d: "M356.868,176.633c-0.047-5.223-0.313-10.398-0.802-15.505c-1.662-17.01-5.717-33.311-11.828-48.589\r c-0.441-1.127-0.859-2.283-1.336-3.41c-8.121-19.183-19.531-36.646-33.474-51.721c-0.906-0.987-1.835-1.952-2.765-2.916\r c-2.649-2.736-5.333-5.415-8.156-7.971C266.788,17.631,224.642,0,178.463,0C131.896,0,89.447,17.957,57.635,47.271\r c-7.413,6.832-14.221,14.303-20.408,22.285C13.919,99.717,0,137.49,0,178.463c0,98.398,80.059,178.463,178.463,178.463\r c69.225,0,129.316-39.643,158.897-97.399c6.32-12.327,11.247-25.491,14.569-39.294c0.837-3.486,1.58-7.018,2.208-10.585\r c1.801-10.137,2.788-20.56,2.788-31.196C356.902,177.859,356.868,177.249,356.868,176.633z M323.278,105.306l1.022-1.162\r c1.359,2.637,2.649,5.304,3.846,8.028l-1.708-0.07l-3.172,0.436v-7.233H323.278z M297.484,74.156l0.023-7.971\r c2.812,2.975,5.508,6.036,8.087,9.214l-3.207,4.781l-11.247-0.111l-0.696-2.341L297.484,74.156z M82.214,54.364v-0.302h3.567\r l0.325-1.226h5.838v2.55l-1.691,2.236h-8.052v-3.259H82.214z M87.925,62.323c0,0,3.578-0.61,3.892-0.61c0.296,0,0,3.573,0,3.573\r l-8.081,0.511l-1.534-1.847L87.925,62.323z M334.642,133.156h-13.06l-7.971-5.92l-8.365,0.808v5.112h-2.648l-2.848-2.033\r l-14.512-3.671v-9.4l-18.38,1.423l-5.705,3.062h-7.285l-3.59-0.36l-8.854,4.926v9.254l-18.097,13.065l1.5,5.583h3.677\r l-0.964,5.315l-2.58,0.953l-0.133,13.884l15.633,17.823h6.819l0.407-1.081h12.246l3.531-3.265h6.948l3.812,3.811l10.328,1.069\r l-1.359,13.757l11.503,20.28l-6.064,11.572l0.406,5.438l4.775,4.752v13.095l6.251,8.412v10.897h5.391\r c-30.046,36.913-75.823,60.534-127.026,60.534c-90.312,0-163.783-73.454-163.783-163.777c0-22.732,4.665-44.401,13.077-64.089\r v-5.106l5.855-7.11c2.033-3.846,4.212-7.582,6.542-11.235l0.25,2.974l-6.791,8.261c-2.108,3.985-4.084,8.052-5.855,12.217v9.312\r l6.791,3.276v12.955l6.535,11.136l5.316,0.808l0.68-3.817l-6.245-9.661l-1.237-9.388h3.677l1.557,9.673l9.051,13.193l-2.33,4.27\r l5.734,8.795l14.291,3.532v-2.306l5.711,0.808l-0.534,4.078l4.484,0.825l6.948,1.888l9.8,11.171l12.507,0.941l1.237,10.207\r l-8.58,5.984l-0.39,9.115l-1.237,5.588l12.386,15.5l0.947,5.32c0,0,4.49,1.209,5.048,1.209c0.535,0,10.062,7.227,10.062,7.227\r v28.024l3.393,0.964l-2.294,12.92l5.71,7.634l-1.068,12.827l7.563,13.269l9.696,8.47l9.731,0.197l0.952-3.148l-7.163-6.029\r l0.418-2.986l1.272-3.684l0.273-3.741l-4.839-0.14l-2.44-3.066l4.021-3.881l0.546-2.916l-4.496-1.29l0.261-2.719l6.402-0.976\r l9.73-4.672l3.265-6.006l10.196-13.06l-2.312-10.213l3.131-5.438l9.399,0.278l6.327-5.02l2.051-19.693l7.04-8.877l1.237-5.704\r l-6.39-2.045l-4.224-6.942l-14.419-0.145l-11.444-4.351l-0.534-8.162l-3.811-6.675l-10.335-0.145l-5.995-9.382l-5.298-2.585\r l-0.273,2.858l-9.672,0.569l-3.532-4.926l-10.079-2.045l-8.302,9.603l-13.065-2.23l-0.953-14.727l-9.527-1.632l3.805-7.221\r l-1.092-4.148l-12.531,8.371l-7.877-0.964l-2.817-6.158l1.737-6.355l4.339-8.005l9.998-5.072h19.322l-0.064,5.891l6.948,3.235\r l-0.558-10.062l5.007-5.037l10.103-6.64l0.703-4.659l10.068-10.486l10.707-5.937l-0.941-0.773l7.256-6.826l2.655,0.703\r l1.214,1.522l2.76-3.062l0.68-0.296l-3.021-0.43l-3.084-0.987v-2.963l1.632-1.33h3.579l1.655,0.726l1.418,2.858l1.737-0.267\r v-0.244l0.5,0.163l5.02-0.772l0.714-2.463l2.852,0.726v2.667l-2.666,1.818h0.018l0.377,2.928l9.115,2.794c0,0,0,0.035,0.023,0.11\r l2.079-0.18l0.146-3.939l-7.209-3.282l-0.396-1.894l5.972-2.033l0.273-5.722l-6.245-3.805l-0.412-9.667l-8.581,4.218h-3.143\r l0.837-7.355l-11.688-2.748l-4.816,3.654v11.119l-8.673,2.754l-3.486,7.244l-3.758,0.604v-9.277l-8.162-1.133l-4.096-2.667\r l-1.639-6.007l14.611-8.54l7.14-2.179l0.72,4.804l3.991-0.215l0.308-2.411l4.166-0.599l0.07-0.842l-1.784-0.738l-0.407-2.544\r l5.118-0.43l3.091-3.213l0.18-0.238l0.035,0.012l0.941-0.976l10.753-1.354l4.746,4.032l-12.467,6.64l15.871,3.747l2.045-5.31\r h6.948l2.44-4.625l-4.903-1.226v-5.856l-15.359-6.803l-10.62,1.226l-6.001,3.125l0.407,7.628l-6.257-0.953l-0.964-4.212\r l6.007-5.449l-10.898-0.535l-3.125,0.953l-1.359,3.677l4.084,0.686l-0.813,4.084l-6.936,0.406l-1.092,2.725L118.987,52.4\r c0,0-0.273-5.711-0.703-5.711c-0.389,0,7.901-0.145,7.901-0.145l5.995-5.85l-3.271-1.632l-4.339,4.223l-7.222-0.406l-4.403-6.019\r h-9.254L94.03,44.07h8.848l0.796,2.597l-2.307,2.172l9.807,0.279l1.487,3.532l-11.032-0.407l-0.546-2.725l-6.925-1.499\r l-3.689-2.033l-8.255,0.069c27.043-19.699,60.284-31.358,96.226-31.358c41.403,0,79.263,15.476,108.124,40.915l-1.929,3.474\r l-7.564,2.962l-3.194,3.462l0.743,4.02l3.893,0.546l2.358,5.867l6.704-2.713l1.127,7.86h-2.045l-5.519-0.819l-6.111,1.022\r l-5.926,8.377l-8.458,1.319l-1.221,7.25l3.579,0.842l-1.046,4.665l-8.412-1.69l-7.703,1.69l-1.639,4.293l1.325,9.01l4.531,2.115\r l7.61-0.046l5.123-0.465l1.58-4.078l8.018-10.422l5.264,1.081l5.193-4.7l0.976,3.678l12.78,8.621l-1.557,2.108l-5.763-0.308\r l2.23,3.137l3.556,0.79l4.159-1.737l-0.093-5.002l1.859-0.923l-1.487-1.575l-8.528-4.758l-2.254-6.314h7.099l2.243,2.248\r l6.134,5.257l0.244,6.367l6.332,6.733l2.348-9.231l4.392-2.394l0.802,7.552l4.287,4.7l8.54-0.139\r c1.661,4.247,3.148,8.563,4.427,12.978L334.642,133.156z M97.324,81.092l4.27-2.044l3.881,0.929l-1.324,5.211l-4.183,1.319\r L97.324,81.092z M120.073,93.35v3.37h-9.783l-3.689-1.028l0.918-2.341l4.7-1.94h6.437v1.94H120.073z M124.582,98.05v3.259\r l-2.463,1.58l-3.044,0.575c0,0,0-4.903,0-5.415H124.582z M121.822,96.72v-3.893l3.363,3.067L121.822,96.72z M123.355,104.568\r v3.178l-2.347,2.347h-5.211l0.813-3.573l2.463-0.215l0.5-1.226L123.355,104.568z M110.39,98.05h5.408l-6.948,9.696l-2.852-1.534\r l0.616-4.084L110.39,98.05z M132.529,103.464v3.166h-5.211l-1.417-2.062v-2.951h0.406L132.529,103.464z M127.748,99.096\r l1.475-1.557l2.498,1.557l-1.999,1.656L127.748,99.096z M337.291,141.428l0.511-0.61c0.232,0.93,0.441,1.859,0.662,2.789\r L337.291,141.428z" }), _react2.default.createElement("path", { d: "M27.734,109.268v5.106c1.771-4.177,3.747-8.231,5.855-12.223L27.734,109.268z" })))));

	return markup;
}
//# sourceMappingURL=international icon.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(82);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_select).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.submit_parent_form = submit_parent_form;
exports.get_scrollbar_width = get_scrollbar_width;
// https://github.com/halt-hammerzeit/react-responsive-ui/blob/master/source/misc/dom.js

function submit_parent_form(node) {
	while (node.parentElement) {
		node = node.parentElement;
		if (node instanceof HTMLFormElement) {
			// Won't use `node.submit()` because it bypasses `onSubmit`.
			// Will click the submit button instead.
			var submit = node.querySelector('button[type=submit]');
			if (submit) {
				submit.click();
				return true;
			}
		}
	}
}

function get_scrollbar_width() {
	// // `window.innerWidth` has a bug:
	// // it's decreases as the page scale is increased.
	// // Therefore not using it.
	// // (Full width) - (Width minus scrollbar)
	// return document.body.clientWidth - window.innerWidth

	return 17;
}
//# sourceMappingURL=dom.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(21);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(50);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(52);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(58);

var _classnames2 = _interopRequireDefault(_classnames);

var _dom = __webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Possible enhancements:
//
//  * If the menu is close to a screen edge,
//    automatically reposition it so that it fits on the screen
//  * Maybe show menu immediately above the toggler
//    (like in Material design), not below it.
//
// https://material.google.com/components/menus.html

var Empty_value_option_value = '';
// https://github.com/halt-hammerzeit/react-responsive-ui/blob/master/source/select.js

var value_prop_type = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]);

var Select = function (_PureComponent) {
	(0, _inherits3.default)(Select, _PureComponent);

	function Select(props) {
		(0, _classCallCheck3.default)(this, Select);

		// Shouldn't memory leak because
		// the set of options is assumed to be constant.
		var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

		_initialiseProps.call(_this);

		_this.options = {};

		var value = props.value,
		    autocomplete = props.autocomplete,
		    options = props.options,
		    children = props.children,
		    menu = props.menu,
		    toggler = props.toggler,
		    onChange = props.onChange;

		if (autocomplete) {
			if (!options) {
				throw new Error('"options" property is required for an "autocomplete" select');
			}

			_this.state.matching_options = _this.get_matching_options(options, value);
		}

		if (children && !menu) {
			_react2.default.Children.forEach(children, function (element) {
				if (!element.props.value) {
					throw new Error('You must specify "value" prop on each child of <Select/>');
				}

				if (!element.props.label) {
					throw new Error('You must specify "label" prop on each child of <Select/>');
				}
			});
		}

		if (menu && !toggler) {
			throw new Error('Supply a "toggler" component when enabling "menu" in <Select/>');
		}

		if (!menu && !onChange) {
			throw new Error('"onChange" property must be specified for <Select/>');
		}
		return _this;
	}

	// Client side rendering, javascript is enabled


	(0, _createClass3.default)(Select, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    fallback = _props.fallback,
			    nativeExpanded = _props.nativeExpanded;

			document.addEventListener('click', this.document_clicked);

			if (fallback) {
				this.setState({ javascript: true });
			}

			if (nativeExpanded) {
				this.resize_native_expanded_select();
				window.addEventListener('resize', this.resize_native_expanded_select);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(previous_props, previous_state) {
			var _props2 = this.props,
			    nativeExpanded = _props2.nativeExpanded,
			    value = _props2.value;
			var _state = this.state,
			    expanded = _state.expanded,
			    height = _state.height;

			if (expanded !== previous_state.expanded) {
				if (expanded && this.should_animate()) {
					if (height === undefined) {
						this.calculate_height();
					}
				}
			}

			// If the `value` changed then resize the native expanded `<select/>`
			if (nativeExpanded && value !== previous_props.value) {
				this.resize_native_expanded_select();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var nativeExpanded = this.props.nativeExpanded;

			document.removeEventListener('click', this.document_clicked);

			if (nativeExpanded) {
				window.removeEventListener('resize', this.resize_native_expanded_select);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props3 = this.props,
			    id = _props3.id,
			    upward = _props3.upward,
			    scroll = _props3.scroll,
			    children = _props3.children,
			    menu = _props3.menu,
			    toggler = _props3.toggler,
			    alignment = _props3.alignment,
			    autocomplete = _props3.autocomplete,
			    saveOnIcons = _props3.saveOnIcons,
			    fallback = _props3.fallback,
			    native = _props3.native,
			    nativeExpanded = _props3.nativeExpanded,
			    disabled = _props3.disabled,
			    required = _props3.required,
			    placeholder = _props3.placeholder,
			    label = _props3.label,
			    value = _props3.value,
			    error = _props3.error,
			    style = _props3.style,
			    className = _props3.className;
			var _state2 = this.state,
			    expanded = _state2.expanded,
			    list_height = _state2.list_height;

			var options = this.get_options();

			var list_style = void 0;

			// Makes the options list scrollable (only when not in `autocomplete` mode).
			if (this.is_scrollable() && this.state.list_height !== undefined) {
				list_style = { maxHeight: list_height + 'px' };
			}

			var overflow = scroll && options && this.overflown();

			var list_items = void 0;

			// If a list of options is supplied as an array of `{ value, label }`,
			// then transform those elements to <buttons/>
			if (options) {
				list_items = options.map(function (_ref, index) {
					var value = _ref.value,
					    label = _ref.label,
					    icon = _ref.icon;

					return _this2.render_list_item({ index: index, value: value, label: label, icon: !saveOnIcons && icon, overflow: overflow });
				});
			}
			// Else, if a list of options is supplied as a set of child React elements,
			// then render those elements.
			else {
					list_items = _react2.default.Children.map(children, function (element, index) {
						if (!element) {
							return;
						}

						return _this2.render_list_item({ index: index, element: element });
					});
				}

			var wrapper_style = { textAlign: alignment };

			var selected = this.get_selected_option();

			var markup = _react2.default.createElement('div', {
				ref: function ref(_ref4) {
					return _this2.select = _ref4;
				},
				onKeyDown: this.on_key_down_in_container,
				style: style ? (0, _extends3.default)({}, wrapper_style, style) : wrapper_style,
				className: (0, _classnames2.default)('rrui__select', {
					'rrui__rich': fallback,
					'rrui__select--menu': menu,
					'rrui__select--upward': upward,
					'rrui__select--expanded': expanded,
					'rrui__select--collapsed': !expanded,
					'rrui__select--disabled': disabled
				}, className) }, _react2.default.createElement('div', {
				className: (0, _classnames2.default)({
					'rrui__input': !menu
				}) }, !menu && !native && this.render_selected_item(), label && (this.get_selected_option() || placeholder) && _react2.default.createElement('label', {
				htmlFor: id,
				className: (0, _classnames2.default)('rrui__input-label', {
					'rrui__input-label--required': required && value_is_empty(value),
					'rrui__input-label--invalid': this.should_indicate_invalid()
				}) }, label), menu && _react2.default.createElement('div', {
				ref: function ref(_ref2) {
					return _this2.menu_toggler;
				},
				className: 'rrui__select__toggler' }, _react2.default.cloneElement(toggler, { onClick: this.toggle })), !native && !nativeExpanded && list_items.length > 0 && _react2.default.createElement('ul', {
				ref: function ref(_ref3) {
					return _this2.list = _ref3;
				},
				style: list_style,
				className: (0, _classnames2.default)('rrui__expandable', 'rrui__expandable--overlay', 'rrui__select__options', 'rrui__shadow', {
					'rrui__select__options--menu': menu,
					'rrui__expandable--expanded': expanded,
					'rrui__select__options--expanded': expanded,
					'rrui__expandable--left-aligned': alignment === 'left',
					'rrui__expandable--right-aligned': alignment === 'right',
					'rrui__select__options--left-aligned': !children && alignment === 'left',
					'rrui__select__options--right-aligned': !children && alignment === 'right',
					// CSS selector performance optimization
					'rrui__select__options--upward': upward,
					'rrui__select__options--downward': !upward
				}) }, list_items), (native || fallback && !this.state.javascript) && this.render_static()), this.should_indicate_invalid() && _react2.default.createElement('div', { className: 'rrui__input-error' }, error));

			return markup;
		}
	}, {
		key: 'render_list_item',
		value: function render_list_item(_ref5) // , first, last
		{
			var _this3 = this;

			var index = _ref5.index,
			    element = _ref5.element,
			    value = _ref5.value,
			    label = _ref5.label,
			    icon = _ref5.icon,
			    overflow = _ref5.overflow;
			var _props4 = this.props,
			    disabled = _props4.disabled,
			    menu = _props4.menu,
			    scrollbarPadding = _props4.scrollbarPadding;
			var _state3 = this.state,
			    focused_option_value = _state3.focused_option_value,
			    expanded = _state3.expanded;

			// If a list of options is supplied as a set of child React elements,
			// then extract values from their props.

			if (element) {
				value = element.props.value;
			}

			var is_focused = !menu && value === focused_option_value;

			var item_style = void 0;

			// on overflow the vertical scrollbar will take up space
			// reducing padding-right and the only way to fix that
			// is to add additional padding-right
			//
			// a hack to restore padding-right taken up by a vertical scrollbar
			if (overflow && scrollbarPadding) {
				item_style = { marginRight: (0, _dom.get_scrollbar_width)() + 'px' };
			}

			var button = void 0;

			// If a list of options is supplied as a set of child React elements,
			// then enhance those elements with extra props.
			if (element) {
				var extra_props = {
					style: item_style ? (0, _extends3.default)({}, item_style, element.props.style) : element.props.style,
					className: (0, _classnames2.default)('rrui__select__option', {
						'rrui__select__option--focused': is_focused
					}, element.props.className)
				};

				var onClick = element.props.onClick;

				extra_props.onClick = function (event) {
					if (menu) {
						_this3.toggle();
					} else {
						_this3.item_clicked(value, event);
					}

					if (onClick) {
						onClick(event);
					}
				};

				button = _react2.default.cloneElement(element, extra_props);
			}
			// Else, if a list of options is supplied as an array of `{ value, label }`,
			// then transform those options to <buttons/>
			else {
					button = _react2.default.createElement('button', {
						type: 'button',
						onClick: function onClick(event) {
							return _this3.item_clicked(value, event);
						},
						disabled: disabled,
						tabIndex: '-1',
						className: (0, _classnames2.default)('rrui__select__option', {
							'rrui__select__option--focused': is_focused,
							// CSS selector performance optimization
							'rrui__select__option--disabled': disabled
						}),
						style: item_style }, icon && _react2.default.cloneElement(icon, { className: (0, _classnames2.default)(icon.props.className, 'rrui__select__option-icon') }), label);
				}

			var markup = _react2.default.createElement('li', {
				key: get_option_key(value),
				ref: function ref(_ref6) {
					return _this3.options[get_option_key(value)] = _ref6;
				},
				className: (0, _classnames2.default)('rrui__expandable__content', 'rrui__select__options-list-item', {
					'rrui__select__separator-option': element && element.type === Select.Separator,
					'rrui__expandable__content--expanded': expanded,
					// CSS selector performance optimization
					'rrui__select__options-list-item--expanded': expanded
				}) }, button);

			return markup;
		}

		// Renders the selected option
		// and possibly a transparent native `<select/>` above it
		// so that the native `<select/>` expands upon click
		// on the selected option
		// (in case of `nativeExpanded` setting).

	}, {
		key: 'render_selected_item',
		value: function render_selected_item() {
			var nativeExpanded = this.props.nativeExpanded;

			var selected = this.render_selected_item_only();

			if (!nativeExpanded) {
				return selected;
			}

			var markup = _react2.default.createElement('div', { style: native_expanded_select_container_style }, this.render_static(), selected);

			return markup;
		}
	}, {
		key: 'render_selected_item_only',
		value: function render_selected_item_only() {
			var _this4 = this;

			var _props5 = this.props,
			    children = _props5.children,
			    value = _props5.value,
			    placeholder = _props5.placeholder,
			    label = _props5.label,
			    disabled = _props5.disabled,
			    autocomplete = _props5.autocomplete,
			    concise = _props5.concise,
			    tabIndex = _props5.tabIndex,
			    onFocus = _props5.onFocus,
			    inputClassName = _props5.inputClassName;
			var _state4 = this.state,
			    expanded = _state4.expanded,
			    autocomplete_width = _state4.autocomplete_width,
			    autocomplete_input_value = _state4.autocomplete_input_value;

			var selected = this.get_selected_option();
			var selected_label = this.get_selected_option_label();

			var selected_text = selected ? selected_label : placeholder || label;

			if (autocomplete && expanded) {
				// style = { ...style, width: autocomplete_width + 'px' }

				var _markup = _react2.default.createElement('input', {
					type: 'text',
					ref: function ref(_ref7) {
						return _this4.autocomplete = _ref7;
					},
					placeholder: selected_text,
					value: autocomplete_input_value,
					onChange: this.on_autocomplete_input_change,
					onKeyDown: this.on_key_down,
					onFocus: onFocus,
					onBlur: this.on_blur,
					tabIndex: tabIndex,
					className: (0, _classnames2.default)('rrui__input-field', 'rrui__select__selected', 'rrui__select__selected--autocomplete', {
						'rrui__select__selected--nothing': !selected_label,
						// CSS selector performance optimization
						'rrui__select__selected--expanded': expanded,
						'rrui__select__selected--disabled': disabled
					}, inputClassName) });

				return _markup;
			}

			var markup = _react2.default.createElement('button', {
				ref: function ref(_ref8) {
					return _this4.selected = _ref8;
				},
				type: 'button',
				disabled: disabled,
				onClick: this.toggle,
				onKeyDown: this.on_key_down,
				onFocus: onFocus,
				onBlur: this.on_blur,
				tabIndex: tabIndex,
				className: (0, _classnames2.default)('rrui__input-field', 'rrui__select__selected', {
					'rrui__input-field--invalid': this.should_indicate_invalid(),
					'rrui__select__selected--nothing': !selected_label
				}) }, _react2.default.createElement('div', { className: 'rrui__select__selected-content' }, _react2.default.createElement('div', { className: 'rrui__select__selected-label' }, concise && selected && selected.icon ? _react2.default.cloneElement(selected.icon, { title: selected_label }) : selected_text), _react2.default.createElement('div', {
				className: (0, _classnames2.default)('rrui__select__arrow', {
					// CSS selector performance optimization
					'rrui__select__arrow--expanded': expanded
				}) })));

			return markup;
		}

		// supports disabled javascript

	}, {
		key: 'render_static',
		value: function render_static() {
			var _this5 = this;

			var _props6 = this.props,
			    id = _props6.id,
			    name = _props6.name,
			    value = _props6.value,
			    label = _props6.label,
			    disabled = _props6.disabled,
			    options = _props6.options,
			    menu = _props6.menu,
			    toggler = _props6.toggler,
			    fallback = _props6.fallback,
			    nativeExpanded = _props6.nativeExpanded,
			    children = _props6.children;

			if (menu) {
				var _markup2 = _react2.default.createElement('div', {
					className: (0, _classnames2.default)({
						'rrui__rich__fallback': fallback
					}) }, toggler);

				return _markup2;
			}

			var markup = _react2.default.createElement('select', {
				ref: function ref(_ref9) {
					return _this5.native = _ref9;
				},
				id: id,
				name: name,
				value: value_is_empty(value) ? Empty_value_option_value : value,
				disabled: disabled,
				onChange: this.native_select_on_change,
				className: (0, _classnames2.default)('rrui__input', 'rrui__select__native', {
					'rrui__select__native-expanded': nativeExpanded,
					'rrui__rich__fallback': fallback
				}) }, options ? this.render_native_select_options(options, value_is_empty(value)) : _react2.default.Children.map(children, function (child) {
				if (!child) {
					return;
				}

				var markup = _react2.default.createElement('option', {
					className: 'rrui__select__native-option',
					key: child.props.value,
					value: child.props.value }, child.props.label);

				return markup;
			}));

			return markup;
		}
	}, {
		key: 'render_native_select_options',
		value: function render_native_select_options(options, empty_option_is_selected) {
			var placeholder = this.props.placeholder;

			var empty_option_present = false;

			var rendered_options = options.map(function (option) {
				var value = option.value,
				    label = option.label;

				if (value_is_empty(value)) {
					empty_option_present = true;
					value = Empty_value_option_value;
				}

				var markup = _react2.default.createElement('option', {
					className: 'rrui__select__native-option',
					key: get_option_key(value),
					value: value }, label);

				return markup;
			});

			if (empty_option_is_selected && !empty_option_present) {
				rendered_options.unshift(_react2.default.createElement('option', {
					className: 'rrui__select__native-option',
					key: get_option_key(undefined),
					value: '' }, placeholder));
			}

			return rendered_options;
		}

		// Whether should indicate that the input value is invalid

	}, {
		key: 'should_indicate_invalid',
		value: function should_indicate_invalid() {
			var _props7 = this.props,
			    indicateInvalid = _props7.indicateInvalid,
			    error = _props7.error;

			return indicateInvalid && error;
		}
	}, {
		key: 'get_selected_option',
		value: function get_selected_option() {
			var value = this.props.value;

			return this.get_option(value);
		}
	}, {
		key: 'get_option',
		value: function get_option(value) {
			var _props8 = this.props,
			    options = _props8.options,
			    children = _props8.children;

			if (options) {
				return options.filter(function (x) {
					return x.value === value;
				})[0];
			}

			var option = void 0;

			_react2.default.Children.forEach(children, function (child) {
				if (child.props.value === value) {
					option = child;
				}
			});

			return option;
		}
	}, {
		key: 'get_option_index',
		value: function get_option_index(option) {
			var _props9 = this.props,
			    options = _props9.options,
			    children = _props9.children;

			if (options) {
				return options.indexOf(option);
			}

			var option_index = void 0;

			_react2.default.Children.forEach(children, function (child, index) {
				if (child.props.value === option.value) {
					option_index = index;
				}
			});

			return option_index;
		}
	}, {
		key: 'get_selected_option_label',
		value: function get_selected_option_label() {
			var options = this.props.options;

			var selected = this.get_selected_option();

			if (!selected) {
				return;
			}

			if (options) {
				return selected.label;
			}

			return selected.props.label;
		}
	}, {
		key: 'overflown',
		value: function overflown() {
			var _props10 = this.props,
			    options = _props10.options,
			    maxItems = _props10.maxItems;

			return options.length > maxItems;
		}
	}, {
		key: 'scrollable_list_height',
		value: function scrollable_list_height() {
			var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
			var maxItems = this.props.maxItems;

			// (Adding vertical padding so that it shows these `maxItems` options fully)

			return (state.height - 2 * state.vertical_padding) * (maxItems / this.get_options().length) + state.vertical_padding;
		}
	}, {
		key: 'should_animate',
		value: function should_animate() {
			return true;

			// return this.props.options.length >= this.props.transition_item_count_min
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (this.autocomplete) {
				this.autocomplete.focus();
			} else {
				this.selected.focus();
			}
		}
	}, {
		key: 'item_clicked',
		value: function item_clicked(value, event) {
			if (event) {
				event.preventDefault();
			}

			var onChange = this.props.onChange;

			this.toggle(undefined, { callback: function callback() {
					return onChange(value);
				} });
		}

		// Would have used `onBlur={...}` event handler here
		// with `if (container.contains(event.relatedTarget))` condition,
		// but it doesn't work in IE in React.
		// https://github.com/facebook/react/issues/3751
		//
		// Therefore, using the hacky `document.onClick` handlers
		// and this `onKeyDown` Tab handler
		// until `event.relatedTarget` support is consistent in React.
		//


		// This handler is a workaround for `redux-form`

	}, {
		key: 'get_options',
		value: function get_options() {
			var _props11 = this.props,
			    autocomplete = _props11.autocomplete,
			    autocompleteShowAll = _props11.autocompleteShowAll,
			    maxItems = _props11.maxItems,
			    options = _props11.options;
			var matching_options = this.state.matching_options;

			if (!autocomplete) {
				return options;
			}

			if (autocompleteShowAll) {
				return matching_options;
			}

			return matching_options.slice(0, maxItems);
		}

		// Get the previous option (relative to the currently focused option)

	}, {
		key: 'previous_focusable_option',
		value: function previous_focusable_option() {
			var options = this.get_options();
			var focused_option_value = this.state.focused_option_value;

			var i = 0;
			while (i < options.length) {
				if (options[i].value === focused_option_value) {
					if (i - 1 >= 0) {
						return options[i - 1];
					}
				}
				i++;
			}
		}

		// Get the next option (relative to the currently focused option)

	}, {
		key: 'next_focusable_option',
		value: function next_focusable_option() {
			var options = this.get_options();
			var focused_option_value = this.state.focused_option_value;

			var i = 0;
			while (i < options.length) {
				if (options[i].value === focused_option_value) {
					if (i + 1 < options.length) {
						return options[i + 1];
					}
				}
				i++;
			}
		}

		// Scrolls to an option having the value

	}, {
		key: 'scroll_to',
		value: function scroll_to(value) {
			var vertical_padding = this.state.vertical_padding;

			var option_element = _reactDom2.default.findDOMNode(this.options[get_option_key(value)]);
			var list = _reactDom2.default.findDOMNode(this.list);

			// If this option isn't even shown
			// (e.g. autocomplete)
			// then don't scroll to it because there's nothing to scroll to.
			if (!option_element) {
				return;
			}

			var offset_top = option_element.offsetTop;

			var is_first_option = list.firstChild === option_element;

			// If it's the first one - then scroll to list top
			if (is_first_option) {
				offset_top -= vertical_padding;
			}

			list.scrollTop = offset_top;
		}

		// Fully shows an option having the `value` (scrolls to it if neccessary)

	}, {
		key: 'show_option',
		value: function show_option(value, gravity) {
			var vertical_padding = this.state.vertical_padding;

			var option_element = _reactDom2.default.findDOMNode(this.options[get_option_key(value)]);
			var list = _reactDom2.default.findDOMNode(this.list);

			var is_first_option = list.firstChild === option_element;
			var is_last_option = list.lastChild === option_element;

			switch (gravity) {
				case 'top':
					var top_line = option_element.offsetTop;

					if (is_first_option) {
						top_line -= vertical_padding;
					}

					if (top_line < list.scrollTop) {
						list.scrollTop = top_line;
					}

					return;

				case 'bottom':
					var bottom_line = option_element.offsetTop + option_element.offsetHeight;

					if (is_last_option) {
						bottom_line += vertical_padding;
					}

					if (bottom_line > list.scrollTop + list.offsetHeight) {
						list.scrollTop = bottom_line - list.offsetHeight;
					}

					return;
			}
		}

		// Calculates height of the expanded item list

	}, {
		key: 'calculate_height',
		value: function calculate_height() {
			var options = this.props.options;

			var list_dom_node = _reactDom2.default.findDOMNode(this.list);
			var border = parseInt(window.getComputedStyle(list_dom_node).borderTopWidth);
			var height = list_dom_node.scrollHeight;

			var vertical_padding = parseInt(window.getComputedStyle(list_dom_node).paddingTop);

			// For things like "accordeon".
			//
			// const images = list_dom_node.querySelectorAll('img')
			//
			// if (images.length > 0)
			// {
			// 	return this.preload_images(list_dom_node, images)
			// }

			var state = { height: height, vertical_padding: vertical_padding, border: border };

			if (this.is_scrollable() && options && this.overflown()) {
				state.list_height = this.scrollable_list_height(state);
			}

			this.setState(state);
		}
	}, {
		key: 'is_scrollable',
		value: function is_scrollable() {
			var _props12 = this.props,
			    menu = _props12.menu,
			    autocomplete = _props12.autocomplete,
			    autocompleteShowAll = _props12.autocompleteShowAll,
			    scroll = _props12.scroll;

			return !menu && (autocomplete && autocompleteShowAll || !autocomplete) && scroll;
		}

		// This turned out not to work for `autocomplete`
		// because not all options are ever shown.
		// get_widest_label_width()
		// {
		// 	// <ul/> -> <li/> -> <button/>
		// 	const label = ReactDOM.findDOMNode(this.list).firstChild.firstChild
		//
		// 	const style = getComputedStyle(label)
		//
		// 	const width = parseFloat(style.width)
		// 	const side_padding = parseFloat(style.paddingLeft)
		//
		// 	return width - 2 * side_padding
		// }

	}, {
		key: 'get_matching_options',

		// // https://github.com/daviferreira/react-sanfona/blob/master/src/AccordionItem/index.jsx#L54
		// // Wait for images to load before calculating maxHeight
		// preload_images(node, images)
		// {
		// 	let images_loaded = 0
		//
		// 	const image_loaded = () =>
		// 	{
		// 		images_loaded++
		//
		// 		if (images_loaded === images.length)
		// 		{
		// 			this.setState
		// 			({
		// 				height: this.props.expanded ? node.scrollHeight : 0
		// 			})
		// 		}
		// 	}
		//
		// 	for (let i = 0; i < images.length; i += 1)
		// 	{
		// 		const image = new Image()
		// 		image.src = images[i].src
		// 		image.onload = image.onerror = image_loaded
		// 	}
		// }
		value: function get_matching_options(options, value) {
			// If the autocomplete value is `undefined` or empty
			if (!value) {
				return options;
			}

			value = value.toLowerCase();

			return options.filter(function (_ref10) {
				var label = _ref10.label,
				    verbose = _ref10.verbose;

				return (verbose || label).toLowerCase().indexOf(value) >= 0;
			});
		}
	}]);

	return Select;
}(_react.PureComponent);

Select.propTypes = {
	// A list of selectable options
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		// Option value (may be `undefined`)
		value: value_prop_type,
		// Option label (may be `undefined`)
		label: _propTypes2.default.string,
		// Option icon
		icon: _propTypes2.default.node
	})),

	// HTML form input `name` attribute
	name: _propTypes2.default.string,

	// Label which is placed above the select
	label: _propTypes2.default.string,

	// Placeholder (like "Choose")
	placeholder: _propTypes2.default.string,

	// Whether to use native `<select/>`
	native: _propTypes2.default.bool.isRequired,

	// Whether to use native `<select/>` when expanded
	nativeExpanded: _propTypes2.default.bool.isRequired,

	// Show icon only for selected item,
	// and only if `concise` is `true`.
	saveOnIcons: _propTypes2.default.bool,

	// Disables this control
	disabled: _propTypes2.default.bool,

	// Set to `true` to mark the field as required
	required: _propTypes2.default.bool.isRequired,

	// Selected option value
	value: value_prop_type,

	// Is called when an option is selected
	onChange: _propTypes2.default.func,

	// Is called when the select is focused
	onFocus: _propTypes2.default.func,

	// Is called when the select is blurred.
	// This `onBlur` interceptor is a workaround for `redux-form`,
	// so that it gets the parsed `value` in its `onBlur` handler,
	// not the formatted text.
	onBlur: _propTypes2.default.func,

	// (exotic use case)
	// Falls back to a plain HTML input
	// when javascript is disabled (e.g. Tor)
	fallback: _propTypes2.default.bool.isRequired,

	// Component CSS class
	className: _propTypes2.default.string,

	// Autocomplete `<input/>` CSS class
	inputClassName: _propTypes2.default.string,

	// CSS style object
	style: _propTypes2.default.object,

	// If this flag is set to `true`,
	// and `icon` is specified for a selected option,
	// then the selected option will be displayed
	// as icon only, without the label.
	concise: _propTypes2.default.bool,

	// HTML `tabindex` attribute
	tabIndex: _propTypes2.default.number,

	// If set to `true`, autocompletion is available
	// upon expanding the options list.
	autocomplete: _propTypes2.default.bool,

	// If set to `true`, autocomple will show all
	// matching options instead of just `maxItems`.
	autocompleteShowAll: _propTypes2.default.bool,

	// Options list alignment ("left", "right")
	alignment: _propTypes2.default.oneOf(['left', 'right']),

	// If `menu` flag is set to `true`
	// then it's gonna be a dropdown menu
	// with `children` elements inside.
	menu: _propTypes2.default.bool,

	// If `menu` flag is set to `true`
	// then `toggler` is the dropdown menu button.
	toggler: _propTypes2.default.element,

	// If `scroll` is `false`, then options list
	// is not limited in height.
	// Is `true` by default (scrollable).
	scroll: _propTypes2.default.bool.isRequired,

	// If this flag is set to `true`,
	// then the dropdown expands itself upward.
	// (as opposed to the default downward)
	upward: _propTypes2.default.bool,

	// Maximum items fitting the options list height (scrollable).
	// In case of `autocomplete` that's the maximum number of matched items shown.
	// Is `6` by default.
	maxItems: _propTypes2.default.number.isRequired,

	// Is `true` by default (only when the list of options is scrollable)
	scrollbarPadding: _propTypes2.default.bool,

	focusUponSelection: _propTypes2.default.bool.isRequired,

	onTabOut: _propTypes2.default.func,

	onToggle: _propTypes2.default.func

	// transition_item_count_min : PropTypes.number,
	// transition_duration_min : PropTypes.number,
	// transition_duration_max : PropTypes.number
};
Select.defaultProps = {
	alignment: 'left',
	scroll: true,
	maxItems: 6,
	scrollbarPadding: true,
	focusUponSelection: true,
	fallback: false,
	native: false,
	nativeExpanded: false,

	// Set to `true` to mark the field as required
	required: false

};

var _initialiseProps = function _initialiseProps() {
	var _this6 = this;

	this.state = {
		// Is initialized during the first `componentDidUpdate()` call
		vertical_padding: 0
	};

	this.native_select_on_change = function (event) {
		var onChange = _this6.props.onChange;

		var value = event.target.value;

		// Convert back from an empty string to `undefined`
		if (value === Empty_value_option_value) {
			// `null` is not accounted for, use `undefined` instead.
			value = undefined;
		}

		onChange(value);
	};

	this.resize_native_expanded_select = function () {
		// For some strange reason 1px on the right side of the `<select/>`
		// still falls through to the underlying selected option label.
		_reactDom2.default.findDOMNode(_this6.native).style.width = _reactDom2.default.findDOMNode(_this6.selected).offsetWidth + 1 + 'px';
	};

	this.toggle = function (event) {
		var toggle_options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		if (event) {
			// Don't navigate away when clicking links
			event.preventDefault();

			// Not discarding the click event because
			// other expanded selects may be listening to it.
			// // Discard the click event so that it won't reach `document` click listener
			// event.stopPropagation() // doesn't work
			// event.nativeEvent.stopImmediatePropagation()
		}

		var _props13 = _this6.props,
		    menu = _props13.menu,
		    disabled = _props13.disabled,
		    autocomplete = _props13.autocomplete,
		    options = _props13.options,
		    value = _props13.value,
		    focusUponSelection = _props13.focusUponSelection,
		    onToggle = _props13.onToggle,
		    nativeExpanded = _props13.nativeExpanded;

		if (nativeExpanded) {
			return;
		}

		if (disabled) {
			return;
		}

		var expanded = _this6.state.expanded;

		if (!expanded && autocomplete) {
			_this6.setState({
				// The input value can't be `undefined`
				// because in that case React would complain
				// about it being an "uncontrolled input"
				autocomplete_input_value: '',
				matching_options: options
			});

			// if (!this.state.autocomplete_width)
			// {
			// 	this.setState({ autocomplete_width: this.get_widest_label_width() })
			// }
		}

		// Deferring expanding the select upon click
		// because document.onClick should finish first,
		// otherwise `event.target` may be detached from the DOM
		// and it would immediately toggle back to collapsed state.
		setTimeout(function () {
			_this6.setState({
				expanded: !expanded
			});

			if (!expanded && options) {
				// Focus either the selected option
				// or the first option in the list.

				var focused_option_value = value || options[0].value;

				_this6.setState({ focused_option_value: focused_option_value });

				// Scroll down to the focused option
				_this6.scroll_to(focused_option_value);
			}

			// If it's autocomplete, then focus <input/> field
			// upon toggling the select component.
			if (!toggle_options.dont_focus_after_toggle) {
				if (autocomplete) {
					if (!expanded || expanded && focusUponSelection) {
						setTimeout(function () {
							// Focus the toggler
							if (expanded) {
								_this6.selected.focus();
							} else {
								_this6.autocomplete.focus();
							}
						}, 0);
					}
				} else {
					// For some reason Firefox loses focus
					// upon select expansion via a click,
					// so this extra `.focus()` works around that issue.
					if (!menu) {
						_this6.selected.focus();
					}
				}
			}

			if (onToggle) {
				onToggle(!expanded);
			}

			if (toggle_options.callback) {
				toggle_options.callback();
			}
		}, 0);
	};

	this.document_clicked = function (event) {
		var autocomplete = _reactDom2.default.findDOMNode(_this6.autocomplete);
		var selected_option = _reactDom2.default.findDOMNode(_this6.selected);
		var options_list = _reactDom2.default.findDOMNode(_this6.list);

		// Don't close the select if its expander button has been clicked,
		// or if autocomplete has been clicked,
		// or if an option was selected from the list.
		if (options_list && options_list.contains(event.target) || autocomplete && autocomplete.contains(event.target) || selected_option && selected_option.contains(event.target)) {
			return;
		}

		_this6.setState({ expanded: false });

		var onToggle = _this6.props.onToggle;

		if (onToggle) {
			onToggle(false);
		}
	};

	this.on_key_down_in_container = function (event) {
		if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
			return;
		}

		var expanded = _this6.state.expanded;

		switch (event.keyCode) {
			// Toggle on Tab out
			case 9:
				if (expanded) {
					_this6.toggle(undefined, { dont_focus_after_toggle: true });

					var onTabOut = _this6.props.onTabOut;

					if (onTabOut) {
						onTabOut(event);
					}
				}
				return;
		}
	};

	this.on_key_down = function (event) {
		if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
			return;
		}

		var _props14 = _this6.props,
		    options = _props14.options,
		    value = _props14.value,
		    autocomplete = _props14.autocomplete;
		var _state5 = _this6.state,
		    expanded = _state5.expanded,
		    focused_option_value = _state5.focused_option_value;

		// Maybe add support for `children` arrow navigation in future

		if (options) {
			switch (event.keyCode) {
				// Select the previous option (if present) on up arrow
				case 38:
					event.preventDefault();

					var previous = _this6.previous_focusable_option();

					if (previous) {
						_this6.show_option(previous.value, 'top');
						return _this6.setState({ focused_option_value: previous.value });
					}

					return;

				// Select the next option (if present) on down arrow
				case 40:
					event.preventDefault();

					var next = _this6.next_focusable_option();

					if (next) {
						_this6.show_option(next.value, 'bottom');
						return _this6.setState({ focused_option_value: next.value });
					}

					return;

				// Collapse on Escape
				//
				// Maybe add this kind of support for "Escape" key in some future:
				//  hiding the item list, cancelling current item selection process
				//  and restoring the selection present before the item list was toggled.
				//
				case 27:
					// Collapse the list if it's expanded
					if (_this6.state.expanded) {
						_this6.toggle();

						// Restore focus when the list is collapsed
						setTimeout(function () {
							_this6.selected.focus();
						}, 0);
					}

					return;

				// on Enter
				case 13:
					// Choose the focused item on Enter
					if (expanded) {
						event.preventDefault();

						// If an item is focused
						// (which may not be a case
						//  when autocomplete is matching no items)
						// (still for non-autocomplete select
						//  it is valid to have a default option)
						if (_this6.get_options() && _this6.get_options().length > 0) {
							// Choose the focused item
							_this6.item_clicked(focused_option_value);
							// And collapse the select
							_this6.toggle();
						}
					}
					// Else it should have just submitted the form on Enter,
					// but it wouldn't because the select element activator is a <button/>
					// therefore hitting Enter while being focused on it just pushes that button.
					// So submit the enclosing form manually.
					else {
							if ((0, _dom.submit_parent_form)(_reactDom2.default.findDOMNode(_this6.select))) {
								event.preventDefault();
							}
						}

					return;

				// on Spacebar
				case 32:
					// Choose the focused item on Enter
					if (expanded) {
						// only if it it's an `options` select
						// and also if it's not an autocomplete
						if (_this6.get_options() && !autocomplete) {
							event.preventDefault();

							// `focused_option_value` could be non-existent
							// in case of `autocomplete`, but since
							// we're explicitly not handling autocomplete here
							// it is valid to select any options including the default ones.
							_this6.item_clicked(focused_option_value);
							_this6.toggle();
						}
					}
					// Otherwise, the spacebar keydown event on a `<button/>`
					// will trigger `onClick` and `.toggle()` will be called.

					return;
			}
		}
	};

	this.on_blur = function (event) {
		var _props15 = _this6.props,
		    onBlur = _props15.onBlur,
		    value = _props15.value;

		// This `onBlur` interceptor is a workaround for `redux-form`,
		// so that it gets the right (parsed, not the formatted one)
		// `event.target.value` in its `onBlur` handler.

		if (onBlur) {
			var _event = (0, _extends3.default)({}, event, {
				target: (0, _extends3.default)({}, event.target, {
					value: value
				})
			});

			// For `redux-form` event detection.
			// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
			_event.stopPropagation = event.stopPropagation;
			_event.preventDefault = event.preventDefault;

			onBlur(_event);
		}
	};

	this.on_autocomplete_input_change = function (event) {
		var options = _this6.props.options;

		var input = event.target.value;
		var matching_options = _this6.get_matching_options(options, input);

		_this6.setState({
			autocomplete_input_value: input,
			matching_options: matching_options,
			focused_option_value: matching_options.length > 0 ? matching_options[0].value : undefined
		});
	};
};

exports.default = Select;


Select.Separator = function (props) {
	return _react2.default.createElement('div', { className: 'rrui__select__separator' });
};

var native_expanded_select_container_style = {
	display: 'inline-block'
};

// There can be an `undefined` value,
// so just `{ value }` won't do here.
function get_option_key(value) {
	return value_is_empty(value) ? '@@rrui/select/undefined' : value;
}

function value_is_empty(value) {
	return value === null || value === undefined;
}
//# sourceMappingURL=select.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isValidPhoneNumber = exports.is_valid_phone_number = exports.formatPhoneNumber = exports.format_phone_number = exports.parsePhoneNumber = exports.parse_phone_number = exports.Input = undefined;

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

exports.default = Phone;

var _libphonenumberJs = __webpack_require__(55);

Object.defineProperty(exports, 'parse_phone_number', {
	enumerable: true,
	get: function get() {
		return _libphonenumberJs.parse;
	}
});
Object.defineProperty(exports, 'parsePhoneNumber', {
	enumerable: true,
	get: function get() {
		return _libphonenumberJs.parse;
	}
});
Object.defineProperty(exports, 'format_phone_number', {
	enumerable: true,
	get: function get() {
		return _libphonenumberJs.format;
	}
});
Object.defineProperty(exports, 'formatPhoneNumber', {
	enumerable: true,
	get: function get() {
		return _libphonenumberJs.format;
	}
});
Object.defineProperty(exports, 'is_valid_phone_number', {
	enumerable: true,
	get: function get() {
		return _libphonenumberJs.is_valid_number;
	}
});
Object.defineProperty(exports, 'isValidPhoneNumber', {
	enumerable: true,
	get: function get() {
		return _libphonenumberJs.is_valid_number;
	}
});

var _react = __webpack_require__(15);

var _metadataMin = __webpack_require__(54);

var _metadataMin2 = _interopRequireDefault(_metadataMin);

var _input = __webpack_require__(78);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = _input2.default;

function Phone(props) {
	var properties = (0, _keys2.default)(props).reduce(function (reduced, property) {
		reduced[property] = props[property];
		return reduced;
	}, { metadata: _metadataMin2.default });

	return (0, _react.createElement)(Input, properties);
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(84);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(3);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(45);
module.exports = __webpack_require__(120);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(45);
module.exports = __webpack_require__(121);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
__webpack_require__(129);
__webpack_require__(131);
__webpack_require__(132);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(46);
module.exports = __webpack_require__(44).f('iterator');

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(118)
  , toIndex   = __webpack_require__(117);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12)
  , gOPS    = __webpack_require__(37)
  , pIE     = __webpack_require__(22);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(36)
  , descriptor     = __webpack_require__(23)
  , setToStringTag = __webpack_require__(38)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(12)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(25)('meta')
  , isObject = __webpack_require__(18)
  , has      = __webpack_require__(6)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(10)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(12)
  , gOPS     = __webpack_require__(37)
  , pIE      = __webpack_require__(22)
  , toObject = __webpack_require__(24)
  , IObject  = __webpack_require__(63)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(9)
  , getKeys  = __webpack_require__(12);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(66).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(18)
  , anObject = __webpack_require__(9);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(60)(Function.call, __webpack_require__(65).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(41)
  , defined   = __webpack_require__(33);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(41)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(41)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9)
  , get      = __webpack_require__(119);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(103)
  , step             = __webpack_require__(109)
  , Iterators        = __webpack_require__(19)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(64)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(112)});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(36)});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(24)
  , $getPrototypeOf = __webpack_require__(67);

__webpack_require__(69)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(24)
  , $keys    = __webpack_require__(12);

__webpack_require__(69)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(5);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(115).set});

/***/ }),
/* 129 */
/***/ (function(module, exports) {



/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(6)
  , DESCRIPTORS    = __webpack_require__(4)
  , $export        = __webpack_require__(5)
  , redefine       = __webpack_require__(70)
  , META           = __webpack_require__(111).KEY
  , $fails         = __webpack_require__(10)
  , shared         = __webpack_require__(40)
  , setToStringTag = __webpack_require__(38)
  , uid            = __webpack_require__(25)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(44)
  , wksDefine      = __webpack_require__(43)
  , keyOf          = __webpack_require__(110)
  , enumKeys       = __webpack_require__(105)
  , isArray        = __webpack_require__(107)
  , anObject       = __webpack_require__(9)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(42)
  , createDesc     = __webpack_require__(23)
  , _create        = __webpack_require__(36)
  , gOPNExt        = __webpack_require__(114)
  , $GOPD          = __webpack_require__(65)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(12)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f  = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(35)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = close_braces;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(49);


function close_braces(retained_template, template) {
	var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
	var empty_placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

	var cut_before = retained_template.length;

	var opening_braces = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* count_occurences */])('(', retained_template);
	var closing_braces = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* count_occurences */])(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		retained_template += template[cut_before].replace(placeholder, empty_placeholder);

		if (template[cut_before] === ')') {
			dangling_braces--;
		}

		cut_before++;
	}

	return retained_template;
}
//# sourceMappingURL=close braces.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSelection;
/* harmony export (immutable) */ __webpack_exports__["b"] = getOperation;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCaretPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = setCaretPosition;
// Gets <input/> selection bounds
function getSelection(element) {
	// If no selection, return nothing
	if (element.selectionStart === element.selectionEnd) {
		return;
	}

	return { start: element.selectionStart, end: element.selectionEnd };
}

// Key codes
var Keys = {
	Backspace: 8,
	Delete: 46
};

// Finds out the operation to be intercepted and performed
// based on the key down event `keyCode`.
function getOperation(event) {
	switch (event.keyCode) {
		case Keys.Backspace:
			return 'Backspace';

		case Keys.Delete:
			return 'Delete';
	}
}

// Gets <input/> caret position
function getCaretPosition(element) {
	return element.selectionStart;
}

// Sets <input/> caret position
function setCaretPosition(element, caret_position) {
	// Sanity check
	if (caret_position === undefined) {
		return;
	}

	// Set caret position
	element.setSelectionRange(caret_position, caret_position);
}
//# sourceMappingURL=dom.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = edit;
// Edits text `value` (if `operation` is passed) and repositions the `caret` if needed.
//
// Example:
//
// value - '88005553535'
// caret - 2 // starting from 0; is positioned before the first zero
// operation - 'Backspace'
//
// Returns
// {
// 	value: '8005553535'
// 	caret: 1
// }
//
// Currently supports just 'Delete' and 'Backspace' operations
//
function edit(value, caret, operation) {
	switch (operation) {
		case 'Backspace':
			// If there exists the previous character,
			// then erase it and reposition the caret.
			if (caret > 0) {
				// Remove the previous character
				value = value.slice(0, caret - 1) + value.slice(caret);
				// Position the caret where the previous (erased) character was
				caret--;
			}
			break;

		case 'Delete':
			// Remove current digit (if any)
			value = value.slice(0, caret) + value.slice(caret + 1);
			break;
	}

	return { value: value, caret: caret };
}
//# sourceMappingURL=edit.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (character, value) {
	if (character >= '0' && character <= '9') {
		return character;
	}
});
//# sourceMappingURL=parse digit.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__input_controller__ = __webpack_require__(73);













// Usage:
//
// <ReactInput
// 	value={this.state.phone}
// 	onChange={phone => this.setState({ phone })}
// 	parse={character => character}
// 	format={value => ({ text: value, template: 'xxxxxxxx' })}/>
//

var ReactInput = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ReactInput, _React$Component);

	function ReactInput(props) {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ReactInput);

		var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReactInput.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ReactInput)).call(this));

		_this.on_blur = _this.on_blur.bind(_this);
		_this.on_key_down = _this.on_key_down.bind(_this);
		_this.get_input_element = _this.get_input_element.bind(_this);

		_this.input_controller = new __WEBPACK_IMPORTED_MODULE_10__input_controller__["a" /* default */](_this.get_input_element, props.parse, props.format, props.onChange);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ReactInput, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    value = _props.value,
			    parse = _props.parse,
			    format = _props.format,
			    rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['value', 'parse', 'format']);

			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
				ref: function ref(_ref) {
					return _this2.input = _ref;
				},
				value: format(value === undefined ? '' : value).text,
				onKeyDown: this.on_key_down,
				onChange: this.input_controller.onChange,
				onPaste: this.input_controller.onPaste,
				onCut: this.input_controller.onCut,
				onBlur: this.on_blur }));
		}

		// Returns <input/> DOM Element

	}, {
		key: 'get_input_element',
		value: function get_input_element() {
			return __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(this.input);
		}

		// This handler is a workaround for `redux-form`

	}, {
		key: 'on_blur',
		value: function on_blur(event) {
			var onBlur = this.props.onBlur;

			// This `onBlur` interceptor is a workaround for `redux-form`,
			// so that it gets the right (parsed, not the formatted one)
			// `event.target.value` in its `onBlur` handler.

			if (onBlur) {
				var _event = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, event, {
					target: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, event.target, {
						value: this.input_controller.getParsedValue().value
					})
				});

				// For `redux-form` event detection.
				// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
				_event.stopPropagation = event.stopPropagation;
				_event.preventDefault = event.preventDefault;

				onBlur(_event);
			}
		}
	}, {
		key: 'on_key_down',
		value: function on_key_down(event) {
			var onKeyDown = this.props.onKeyDown;


			if (onKeyDown) {
				onKeyDown(event);
			}

			this.input_controller.onKeyDown(event);
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.get_input_element().focus();
		}
	}]);

	return ReactInput;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

ReactInput.propTypes = {
	// Parses a single characher of `<input/>` text
	parse: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,

	// Formats `value` into `<input/>` text
	format: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,

	// Is parsed from <input/> text
	value: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

	// This handler is called each time `<input/>` text is changed
	onChange: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,

	// This `onBlur` interceptor is a workaround for `redux-form`,
	// so that it gets the parsed `value` in its `onBlur` handler,
	// not the formatted text.
	onBlur: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

	// Passthrough
	onKeyDown: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (ReactInput);
//# sourceMappingURL=react input.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = template_parser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(49);


function template_parser(template, placeholder, parse) {
	if (typeof placeholder === 'function') {
		parse = placeholder;
		placeholder = 'x';
	}

	var max_characters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* count_occurences */])(placeholder, template);

	return function parse_character(character, value) {
		if (value.length >= max_characters) {
			return;
		}

		return parse(character, value);
	};
}
//# sourceMappingURL=template parser.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__es6_template_parser__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "templateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__es6_template_parser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__es6_template_formatter__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "templateFormatter", function() { return __WEBPACK_IMPORTED_MODULE_1__es6_template_formatter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__es6_input_controller__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputController", function() { return __WEBPACK_IMPORTED_MODULE_2__es6_input_controller__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__es6_react_input__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReactInput", function() { return __WEBPACK_IMPORTED_MODULE_3__es6_react_input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__es6_parse_digit__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseDigit", function() { return __WEBPACK_IMPORTED_MODULE_4__es6_parse_digit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__es6_parse__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return __WEBPACK_IMPORTED_MODULE_5__es6_parse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__es6_format__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return __WEBPACK_IMPORTED_MODULE_6__es6_format__["a"]; });














/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = [
	[
		"ru",
		"+7 Russia (Россия)"
	],
	[
		"by",
		"+375 Belarus (Беларусь)"
	],
	[
		"ua",
		"+380 Ukraine (Україна)"
	],
	[
		"kz",
		"+77 Kazakhstan (Казахстан)"
	],
	[
		"kg",
		"+996 Kyrgyzstan (Кыргызстан)"
	],
	[
		"tj",
		"+992 Tajikistan (Ҷумҳурии Тоҷикистон)"
	],
	[
		"uz",
		"+998 Uzbekistan (Oʻzbekiston)"
	],
	[
		"ge",
		"+7995 Georgia (საქართველო)"
	],
	[
		"lv",
		"+371 Latvia (Latvija)"
	],
	[
		"az",
		"+994 Azerbaijan (Azərbaycan)"
	],
	[
		"af",
		"+93 Afghanistan (‫افغانستان‬‎)"
	],
	[
		"al",
		"+355 Albania (Shqipëri)"
	],
	[
		"dz",
		"+213 Algeria (‫الجزائر‬‎)"
	],
	[
		"ad",
		"+376 Andorra"
	],
	[
		"ao",
		"+244 Angola"
	],
	[
		"ar",
		"+54 Argentina"
	],
	[
		"am",
		"+374 Armenia (Հայաստան)"
	],
	[
		"aw",
		"+297 Aruba"
	],
	[
		"au",
		"+61 Australia"
	],
	[
		"at",
		"+43 Austria (Österreich)"
	],
	[
		"bh",
		"+973 Bahrain (‫البحرين‬‎)"
	],
	[
		"bd",
		"+880 Bangladesh (বাংলাদেশ)"
	],
	[
		"bb",
		"+809 Barbados"
	],
	[
		"be",
		"+32 Belgium (België)"
	],
	[
		"bz",
		"+501 Belize"
	],
	[
		"bj",
		"+229 Benin (Bénin)"
	],
	[
		"bt",
		"+975 Bhutan (འབྲུག)"
	],
	[
		"bo",
		"+591 Bolivia"
	],
	[
		"ba",
		"+387 Bosnia and Herzegovina"
	],
	[
		"bw",
		"+267 Botswana"
	],
	[
		"br",
		"+55 Brazil (Brasil)"
	],
	[
		"bn",
		"+673 Brunei (Negara Brunei Darussalam)"
	],
	[
		"bg",
		"+359 Bulgaria (България)"
	],
	[
		"bf",
		"+226 Burkina Faso"
	],
	[
		"bi",
		"+257 Burundi (Uburundi)"
	],
	[
		"kh",
		"+855 Cambodia (កម្ពុជា)"
	],
	[
		"cm",
		"+237 Cameroon (Cameroun)"
	],
	[
		"ca",
		"+1 Canada"
	],
	[
		"cv",
		"+238 Cape Verde (Kabu Verdi)"
	],
	[
		"cf",
		"+236 Central African Republic"
	],
	[
		"td",
		"+235 Chad (Tchad)"
	],
	[
		"cl",
		"+56 Chile"
	],
	[
		"cn",
		"+86 China (中国)"
	],
	[
		"cx",
		"+61 Christmas Island"
	],
	[
		"cc",
		"+61 Cocos (Keeling) Islands"
	],
	[
		"co",
		"+57 Colombia"
	],
	[
		"km",
		"+269 Comoros (‫جزر القمر‬‎)"
	],
	[
		"cd",
		"+242 Congo (DRC) (Kongo)"
	],
	[
		"cg",
		"+243 Congo (Republic) (Congo-Brazzaville)"
	],
	[
		"ck",
		"+682 Cook Islands"
	],
	[
		"cr",
		"+506 Costa Rica"
	],
	[
		"hr",
		"+385 Croatia (Hrvatska)"
	],
	[
		"cu",
		"+53 Cuba"
	],
	[
		"cy",
		"+357 Cyprus (Κύπρος)"
	],
	[
		"cz",
		"+420 Czech Republic (Česká republika)"
	],
	[
		"dk",
		"+45 Denmark (Danmark)"
	],
	[
		"dj",
		"+253 Djibouti"
	],
	[
		"ec",
		"+593 Ecuador"
	],
	[
		"eg",
		"+20 Egypt (‫مصر‬‎)"
	],
	[
		"sv",
		"+503 El Salvador"
	],
	[
		"gq",
		"+240 Equatorial Guinea (Guinea Ecuatorial)"
	],
	[
		"er",
		"+291 Eritrea"
	],
	[
		"ee",
		"+372 Estonia (Eesti)"
	],
	[
		"et",
		"+251 Ethiopia"
	],
	[
		"fk",
		"+500 Falkland Islands (Islas Malvinas)"
	],
	[
		"fo",
		"+298 Faroe Islands (Føroyar)"
	],
	[
		"fj",
		"+679 Fiji (Matanitu Tugalala o Viti)"
	],
	[
		"fi",
		"+358 Finland (Suomi)"
	],
	[
		"fr",
		"+33 France (République française)"
	],
	[
		"gf",
		"+594 French Guiana (Guyane française)"
	],
	[
		"pf",
		"+689 French Polynesia (Polynésie française)"
	],
	[
		"ga",
		"+241 Gabon (République gabonaise)"
	],
	[
		"gm",
		"+220 Gambia"
	],
	[
		"de",
		"+49 Germany (Deutschland)"
	],
	[
		"gh",
		"+233 Ghana (Gaana)"
	],
	[
		"gi",
		"+350 Gibraltar"
	],
	[
		"gr",
		"+30 Greece (Ελλάδα)"
	],
	[
		"gl",
		"+299 Greenland (Kalaallit Nunaat)"
	],
	[
		"gp",
		"+590 Guadeloupe"
	],
	[
		"gu",
		"+671 Guam (Guåhån)"
	],
	[
		"gt",
		"+502 Guatemala"
	],
	[
		"gn",
		"+224 Guinea (Guinée)"
	],
	[
		"gw",
		"+245 Guinea-Bissau (Guiné Bissau)"
	],
	[
		"gy",
		"+592 Guyana"
	],
	[
		"ht",
		"+509 Haiti (République d'Haïti)"
	],
	[
		"hn",
		"+504 Honduras"
	],
	[
		"hk",
		"+852 Hong Kong (香港)"
	],
	[
		"hu",
		"+36 Hungary (Magyarország)"
	],
	[
		"is",
		"+354 Iceland (Ísland)"
	],
	[
		"in",
		"+91 India (भारत)"
	],
	[
		"id",
		"+62 Indonesia"
	],
	[
		"ir",
		"+98 Iran (‫ایران‬‎)"
	],
	[
		"iq",
		"+964 Iraq (‫العراق‬‎)"
	],
	[
		"ie",
		"+353 Ireland"
	],
	[
		"il",
		"+972 Israel (‫ישראל‬‎)"
	],
	[
		"it",
		"+39 Italy (Italia)"
	],
	[
		"jp",
		"+81 Japan (日本)"
	],
	[
		"jo",
		"+962 Jordan (‫الأردن‬‎)"
	],
	[
		"ke",
		"+254 Kenya"
	],
	[
		"ki",
		"+686 Kiribati"
	],
	[
		"kw",
		"+965 Kuwait (‫الكويت‬‎)"
	],
	[
		"la",
		"+856 Laos (ລາວ)"
	],
	[
		"lb",
		"+961 Lebanon (‫لبنان‬‎)"
	],
	[
		"ls",
		"+266 Lesotho"
	],
	[
		"lr",
		"+231 Liberia"
	],
	[
		"ly",
		"+218 Libya (‫ليبيا‬‎)"
	],
	[
		"li",
		"+4175 Liechtenstein"
	],
	[
		"lt",
		"+370 Lithuania (Lietuva)"
	],
	[
		"lu",
		"+352 Luxembourg (Lëtzebuerg)"
	],
	[
		"mo",
		"+853 Macau (澳門)"
	],
	[
		"mk",
		"+389 Macedonia (FYROM) (Македонија)"
	],
	[
		"mg",
		"+261 Madagascar (Madagasikara)"
	],
	[
		"mw",
		"+265 Malawi (Malaŵi)"
	],
	[
		"my",
		"+60 Malaysia"
	],
	[
		"mv",
		"+960 Maldives"
	],
	[
		"ml",
		"+223 Mali"
	],
	[
		"mt",
		"+356 Malta"
	],
	[
		"mh",
		"+692 Marshall Islands"
	],
	[
		"mq",
		"+596 Martinique"
	],
	[
		"mr",
		"+222 Mauritania (‫موريتانيا‬‎)"
	],
	[
		"mu",
		"+230 Mauritius (Moris)"
	],
	[
		"yt",
		"+269 Mayotte"
	],
	[
		"mx",
		"+52 Mexico (México)"
	],
	[
		"fm",
		"+691 Micronesia"
	],
	[
		"md",
		"+373 Moldova (Republica Moldova)"
	],
	[
		"mc",
		"+377 Monaco"
	],
	[
		"mn",
		"+976 Mongolia (Монгол)"
	],
	[
		"ma",
		"+212 Morocco (‫المغرب‬‎)"
	],
	[
		"mz",
		"+258 Mozambique (Moçambique)"
	],
	[
		"mm",
		"+95 Myanmar (Burma) (မြန်မာ)"
	],
	[
		"na",
		"+264 Namibia (Namibië)"
	],
	[
		"nr",
		"+674 Nauru (Repubrikin Naoero)"
	],
	[
		"np",
		"+977 Nepal (नेपाल)"
	],
	[
		"nl",
		"+31 Netherlands (Nederland)"
	],
	[
		"nc",
		"+687 New Caledonia (Nouvelle-Calédonie)"
	],
	[
		"nz",
		"+64 New Zealand"
	],
	[
		"ni",
		"+505 Nicaragua"
	],
	[
		"ne",
		"+227 Niger (Nijar)"
	],
	[
		"ng",
		"+234 Nigeria"
	],
	[
		"no",
		"+47 Norway (Norge)"
	],
	[
		"om",
		"+968 Oman (‫عُمان‬‎)"
	],
	[
		"pk",
		"+92 Pakistan (‫پاکستان‬‎)"
	],
	[
		"pa",
		"+507 Panama (Panamá)"
	],
	[
		"pg",
		"+675 Papua New Guinea"
	],
	[
		"py",
		"+595 Paraguay (Tetã Paraguái)"
	],
	[
		"pe",
		"+51 Peru (Perú)"
	],
	[
		"ph",
		"+649 Philippines (Republika ng Pilipinas)"
	],
	[
		"pl",
		"+48 Poland (Polska)"
	],
	[
		"pt",
		"+351 Portugal (República Portuguesa)"
	],
	[
		"qa",
		"+974 Qatar (‫قطر‬‎)"
	],
	[
		"re",
		"+262 Réunion (La Réunion)"
	],
	[
		"ro",
		"+40 Romania (România)"
	],
	[
		"rw",
		"+250 Rwanda"
	],
	[
		"sh",
		"+290 Saint Helena"
	],
	[
		"ws",
		"+685 Samoa (Sāmoa)"
	],
	[
		"sm",
		"+378 San Marino"
	],
	[
		"sa",
		"+966 Saudi Arabia (‫المملكة العربية السعودية‬‎)"
	],
	[
		"sn",
		"+221 Senegal (Sénégal)"
	],
	[
		"sc",
		"+248 Seychelles (Repiblik Sesel)"
	],
	[
		"sl",
		"+232 Sierra Leone"
	],
	[
		"sg",
		"+65 Singapore (Singapura) (新加坡共和国)"
	],
	[
		"sk",
		"+421 Slovakia (Slovensko)"
	],
	[
		"si",
		"+386 Slovenia (Slovenija)"
	],
	[
		"sb",
		"+677 Solomon Islands"
	],
	[
		"so",
		"+252 Somalia (Soomaaliya)"
	],
	[
		"za",
		"+27 South Africa"
	],
	[
		"es",
		"+34 Spain (España)"
	],
	[
		"lk",
		"+94 Sri Lanka (ශ්‍රී ලංකාව)"
	],
	[
		"sd",
		"+249 Sudan (‫السودان‬‎)"
	],
	[
		"sr",
		"+597 Suriname"
	],
	[
		"sz",
		"+268 Swaziland (Umbuso weSwatini)"
	],
	[
		"se",
		"+46 Sweden (Sverige)"
	],
	[
		"ch",
		"+41 Switzerland (Schweiz)"
	],
	[
		"sy",
		"+963 Syria (‫سوريا‬‎)"
	],
	[
		"tw",
		"+886 Taiwan (台灣)"
	],
	[
		"tz",
		"+255 Tanzania"
	],
	[
		"th",
		"+66 Thailand (ไทย)"
	],
	[
		"tg",
		"+228 Togo (République togolaise)"
	],
	[
		"to",
		"+676 Tonga"
	],
	[
		"tn",
		"+216 Tunisia (‫تونس‬‎)"
	],
	[
		"tr",
		"+90 Turkey (Türkiye)"
	],
	[
		"tm",
		"+993 Turkmenistan (Türkmenistan)"
	],
	[
		"tv",
		"+688 Tuvalu"
	],
	[
		"ug",
		"+256 Uganda"
	],
	[
		"ae",
		"+971 United Arab Emirates (‫الإمارات العربية المتحدة‬‎)"
	],
	[
		"gb",
		"+44 United Kingdom"
	],
	[
		"us",
		"+1 United States"
	],
	[
		"uy",
		"+598 Uruguay"
	],
	[
		"vu",
		"+678 Vanuatu"
	],
	[
		"va",
		"+39 Vatican City (Città del Vaticano)"
	],
	[
		"ve",
		"+58 Venezuela"
	],
	[
		"vn",
		"+84 Vietnam (Việt Nam)"
	],
	[
		"ye",
		"+967 Yemen (‫اليمن‬‎)"
	],
	[
		"zm",
		"+260 Zambia"
	],
	[
		"zw",
		"+263 Zimbabwe"
	]
];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(48);
  var warning = __webpack_require__(71);
  var ReactPropTypesSecret = __webpack_require__(51);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(47);
var invariant = __webpack_require__(48);
var ReactPropTypesSecret = __webpack_require__(51);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(47);
var invariant = __webpack_require__(48);
var warning = __webpack_require__(71);

var ReactPropTypesSecret = __webpack_require__(51);
var checkPropTypes = __webpack_require__(141);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-phone-number-input.js.map