/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host{display:inline-block;border:solid 8px #bdbdbd;max-width:100%;font-size:0;white-space:nowrap}*,*::after,*::before{-webkit-box-sizing:border-box;box-sizing:border-box}.svg-container{height:0;width:0;overflow:hidden;display:inline-block}.sweeper-container{display:-webkit-box;display:-ms-flexbox;display:flex;border:3px solid;border-color:#7b7b7b #fff #fff #7b7b7b;background-color:#bdbdbd;overflow-x:auto}.sweeper-box{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;place-items:center;place-content:center}.sweeper-row{display:inline-block}.sweeper-field{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;height:40px;width:40px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;cursor:pointer}.sweeper-field.unselectable{cursor:default}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 921:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><defs><path d=\"M2 74L2 2L74 2L74 74L74 74L2 74Z\" id=\"e1cjUtGijV\"></path><mask id=\"maske5Vz1Zki6\" x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" maskUnits=\"userSpaceOnUse\"><rect x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" fill=\"white\"></rect><use xlink:href=\"#e1cjUtGijV\" opacity=\"1\" fill=\"black\"></use></mask></defs><g id=\"bomb-explode\"><g><use xlink:href=\"#e1cjUtGijV\" opacity=\"1\" fill=\"#ff0000\" fill-opacity=\"1\"></use><g mask=\"url(#maske5Vz1Zki6)\"><use xlink:href=\"#e1cjUtGijV\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#757575\" stroke-width=\"4\" stroke-opacity=\"1\"></use></g></g><use xlink:href=\"#bomb-element\"></use></g></svg>"

/***/ }),

/***/ 415:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><defs><path d=\"M2 74L2 2L74 2L74 74L74 74L2 74Z\" id=\"e2iiwvZd6v\"></path><mask id=\"maskaXtlGt3qy\" x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" maskUnits=\"userSpaceOnUse\"><rect x=\"-2\" y=\"-2\" width=\"80\" height=\"80\" fill=\"white\"></rect><use xlink:href=\"#e2iiwvZd6v\" opacity=\"1\" fill=\"black\"></use></mask><path d=\"M35.6 6.8L40.4 6.8L40.4 69.2L35.6 69.2L35.6 6.8Z\" id=\"c9eN9knBh\"></path><clipPath id=\"clipd1zPYXGAwy\"><use xlink:href=\"#c9eN9knBh\" opacity=\"1\"></use></clipPath><path d=\"M40.4 16.4L50 16.4L50 59.6L40.4 59.6L40.4 16.4Z\" id=\"gx4drqHvY\"></path><clipPath id=\"clipa2yM9RkR6\"><use xlink:href=\"#gx4drqHvY\" opacity=\"1\"></use></clipPath><path d=\"M50 21.2L54.8 21.2L54.8 54.8L50 54.8L50 21.2Z\" id=\"fgtYUnw8A\"></path><clipPath id=\"clipk32QKT1MaU\"><use xlink:href=\"#fgtYUnw8A\" opacity=\"1\"></use></clipPath><path d=\"M54.8 26L59.6 26L59.6 50L54.8 50L54.8 26Z\" id=\"cgzxabwz1\"></path><clipPath id=\"cliph2KpOi7P9O\"><use xlink:href=\"#cgzxabwz1\" opacity=\"1\"></use></clipPath><path d=\"M59.6 35.6L69.2 35.6L69.2 40.4L59.6 40.4L59.6 35.6Z\" id=\"b3gPwqEoX\"></path><clipPath id=\"clipe23gtVrUJ\"><use xlink:href=\"#b3gPwqEoX\" opacity=\"1\"></use></clipPath><path d=\"M26 16.4L35.6 16.4L35.6 59.6L26 59.6L26 16.4Z\" id=\"ad99VAl8I\"></path><clipPath id=\"clipd1v1rV6sj4\"><use xlink:href=\"#ad99VAl8I\" opacity=\"1\"></use></clipPath><path d=\"M21.2 21.2L26 21.2L26 54.8L21.2 54.8L21.2 21.2Z\" id=\"c13ZaXjO2p\"></path><clipPath id=\"cliph399Xr21VH\"><use xlink:href=\"#c13ZaXjO2p\" opacity=\"1\"></use></clipPath><path d=\"M16.4 26L21.2 26L21.2 50L16.4 50L16.4 26Z\" id=\"b2SwHVIyUf\"></path><clipPath id=\"clipbgmy6Y3Gb\"><use xlink:href=\"#b2SwHVIyUf\" opacity=\"1\"></use></clipPath><path d=\"M6.8 35.6L16.4 35.6L16.4 40.4L6.8 40.4L6.8 35.6Z\" id=\"g3CI8RzO6L\"></path><clipPath id=\"clipb4iPMKkLd9\"><use xlink:href=\"#g3CI8RzO6L\" opacity=\"1\"></use></clipPath><path d=\"M54.8 16.4L59.6 16.4L59.6 21.2L54.8 21.2L54.8 16.4Z\" id=\"bVu929Gr\"></path><clipPath id=\"clipb5eim9AY4T\"><use xlink:href=\"#bVu929Gr\" opacity=\"1\"></use></clipPath><path d=\"M16.4 16.4L21.2 16.4L21.2 21.2L16.4 21.2L16.4 16.4Z\" id=\"bbmkl5w40\"></path><clipPath id=\"clipdILmNb1DZ\"><use xlink:href=\"#bbmkl5w40\" opacity=\"1\"></use></clipPath><path d=\"M54.8 54.8L59.6 54.8L59.6 59.6L54.8 59.6L54.8 54.8Z\" id=\"afRzpmA7F\"></path><clipPath id=\"clipa1MHsUZSGO\"><use xlink:href=\"#afRzpmA7F\" opacity=\"1\"></use></clipPath><path d=\"M16.4 54.8L21.2 54.8L21.2 59.6L16.4 59.6L16.4 54.8Z\" id=\"f34Z0Cg2H2\"></path><clipPath id=\"clipaiMYuA5gL\"><use xlink:href=\"#f34Z0Cg2H2\" opacity=\"1\"></use></clipPath><path d=\"M26 26L35.6 26L35.6 35.6L26 35.6L26 26Z\" id=\"a7XCqe2jKp\"></path></defs><g id=\"bomb\"><g id=\"bomb-background\"><use xlink:href=\"#e2iiwvZd6v\" opacity=\"1\" fill=\"#b9b9b9\" fill-opacity=\"1\"></use><g mask=\"url(#maskaXtlGt3qy)\"><use xlink:href=\"#e2iiwvZd6v\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#757575\" stroke-width=\"4\" stroke-opacity=\"1\"></use></g></g><g id=\"bomb-element\"><g><use xlink:href=\"#c9eN9knBh\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipd1zPYXGAwy)\"><use xlink:href=\"#c9eN9knBh\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#gx4drqHvY\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipa2yM9RkR6)\"><use xlink:href=\"#gx4drqHvY\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#fgtYUnw8A\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipk32QKT1MaU)\"><use xlink:href=\"#fgtYUnw8A\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#cgzxabwz1\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#cliph2KpOi7P9O)\"><use xlink:href=\"#cgzxabwz1\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#b3gPwqEoX\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipe23gtVrUJ)\"><use xlink:href=\"#b3gPwqEoX\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#ad99VAl8I\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipd1v1rV6sj4)\"><use xlink:href=\"#ad99VAl8I\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#c13ZaXjO2p\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#cliph399Xr21VH)\"><use xlink:href=\"#c13ZaXjO2p\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#b2SwHVIyUf\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipbgmy6Y3Gb)\"><use xlink:href=\"#b2SwHVIyUf\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#g3CI8RzO6L\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipb4iPMKkLd9)\"><use xlink:href=\"#g3CI8RzO6L\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#bVu929Gr\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipb5eim9AY4T)\"><use xlink:href=\"#bVu929Gr\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#bbmkl5w40\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipdILmNb1DZ)\"><use xlink:href=\"#bbmkl5w40\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#afRzpmA7F\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipa1MHsUZSGO)\"><use xlink:href=\"#afRzpmA7F\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#f34Z0Cg2H2\" opacity=\"1\" fill=\"#000000\" fill-opacity=\"1\"></use><g clip-path=\"url(#clipaiMYuA5gL)\"><use xlink:href=\"#f34Z0Cg2H2\" opacity=\"1\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" stroke-opacity=\"1\"></use></g></g><g><use xlink:href=\"#a7XCqe2jKp\" opacity=\"1\" fill=\"#ffffff\" fill-opacity=\"1\"></use></g></g></g></svg>"

/***/ }),

/***/ 149:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"flag-missed\"><use href=\"#bomb\"></use><line stroke-width=\"4\" stroke-linecap=\"undefined\" stroke-linejoin=\"undefined\" id=\"svg_78\" y2=\"72\" x2=\"72\" y1=\"4\" x1=\"4\" stroke=\"#ff0000\" fill=\"none\"></line><line stroke-linecap=\"undefined\" stroke-linejoin=\"undefined\" id=\"svg_79\" y2=\"72\" x2=\"4\" y1=\"4\" x1=\"72\" stroke-width=\"4\" stroke=\"#ff0000\" fill=\"none\"></line></g></svg>"

/***/ }),

/***/ 223:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"flag\"><use href=\"#unopened-square\"></use><g><polygon points=\"35.999,55.5 35.999,16.5 40,16.5 40,55.5 35.999,55.5 \"></polygon><polygon fill=\"#FF0000\" points=\"40,13.875 19.375,27 40,40.125 \"></polygon><rect x=\"28.571\" y=\"51.625\" width=\"18.857\" height=\"5.5\"></rect><rect x=\"20.222\" y=\"56.459\" width=\"35.555\" height=\"7.041\"></rect></g></g></svg>"

/***/ }),

/***/ 583:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"blank\"><polygon fill=\"#B9B9B9\" points=\"75.001,75.001 1,75.001 1,1 75.001,1 75.001,75.001 \"></polygon><path fill=\"#757575\" d=\"M75.991,0C75.996,0,76,0.004,76,0.009V75.99c0,0.006-0.004,0.01-0.009,0.01H0.009 C0.004,76,0,75.996,0,75.99V0.009C0,0.004,0.004,0,0.009,0H75.991 M74,2H2v72h72V2L74,2z\"></path></g></svg>"

/***/ }),

/***/ 101:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-1\"><use href=\"#blank\"></use><polygon fill=\"#0000FF\" points=\"40.857,8.928 18,26.071 18,31.785 32.286,31.785 32.286,54.644 18,54.644 18,66.071 58,66.071 58,54.644 46.571,54.644 46.571,8.928 \"></polygon></g></svg>"

/***/ }),

/***/ 37:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-2\"><use href=\"#blank\"></use><path fill=\"#008200\" d=\"M51.256,26.134v-4.545c0-1.545-1.293-2.796-2.892-2.796H27.393c-1.593,0-2.892,1.251-2.892,2.796v4.545 H8.593v-5.942C8.593,14.011,13.778,9,20.163,9h35.433c6.388,0,11.569,5.011,11.569,11.191c0,4.064,1.287,8.448-2.521,11.417 c-2.649,2.062-5.948,3.822-8.757,5.743c-6.993,4.777-14.083,9.431-21.093,14.188c-0.91,0.621-3.707,3.276-4.87,3.276 c0.012,0,37.602,0,37.602,0V66H8.774c0-4.529-1.605-9.863,2.609-13.253c2.949-2.372,6.773-4.315,9.932-6.502 c8-5.557,16.259-10.779,24.287-16.306C46.188,29.535,51.256,26.874,51.256,26.134z\"></path></g></svg>"

/***/ }),

/***/ 58:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-3\"><use href=\"#blank\"></use><path fill=\"#FF0000\" d=\"M66.322,20.4c0-6.295-5.104-11.4-11.4-11.4H9.678v10.688H48.51c1.575,0,2.85,1.275,2.85,2.85v6.413 c0,1.569-1.274,2.85-2.85,2.85H26.778v12.825H48.51c1.575,0,2.85,1.274,2.85,2.85v6.413c0,1.569-1.274,2.85-2.85,2.85H9.678V66 h45.244c6.296,0,11.4-5.11,11.4-11.4V43.912c0-2.376-0.729-4.586-1.977-6.412c1.247-1.832,1.977-4.036,1.977-6.413V20.4z\"></path></g></svg>"

/***/ }),

/***/ 206:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-4\"><use href=\"#blank\"></use><polygon fill=\"#000084\" points=\"25.8,9 6.922,42.765 47.584,42.765 47.584,66 63.559,65.637 63.559,42.765 69.078,42.765 69.078,31.873 63.559,31.873 63.559,9 47.584,9 47.584,32.236 29.192,32.236 41.774,9 \"></polygon></g></svg>"

/***/ }),

/***/ 158:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-5\"><use href=\"#blank\"></use><path fill=\"#840000\" d=\"M60.78,32.065c1.765,0.757,3.006,1.726,3.869,2.922c1.324,1.837,1.736,4.211,1.736,7.139 c0,0.012,0,10.689,0,10.689c0,6.291-2.494,12.48-11.401,13.182H9.497V54.953h39.074c1.576,0,2.851-1.279,2.851-2.85v-6.412 c0-1.57-1.274-2.852-2.851-2.852L9.497,42.852V9.001l57.006,0v11.396H26.031v11.668\"></path></g></svg>"

/***/ }),

/***/ 876:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-6\"><use href=\"#blank\"></use><path fill=\"#008284\" d=\"M66.856,23.967v-3.565c0-6.296-5.109-11.4-11.399-11.4H20.544c-6.29,0-11.4,5.104-11.4,11.4v34.197 c0,6.29,5.11,11.4,11.4,11.4h34.913c6.29,0,11.399-5.11,11.399-11.4V43.911c0-4.984-4.921-12.11-11.405-12.11H27.669 c-1.569,0-2.85-1.28-2.85-2.85v-6.412c0-1.575,1.28-2.851,2.85-2.851h20.663c1.569,0,2.85,1.275,2.85,2.851v1.005L66.856,23.967z M25.531,47.474c0-1.569,1.28-2.85,2.851-2.85h20.662c1.57,0,2.851,1.28,2.851,2.85v6.412c0,1.57-1.28,2.851-2.851,2.851H28.382 c-1.57,0-2.851-1.28-2.851-2.851V47.474z\"></path></g></svg>"

/***/ }),

/***/ 503:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-7\"><use href=\"#blank\"></use><polygon fill=\"#840084\" points=\"10.363,9.001 10.363,21.783 44.834,21.78 10.018,65.999 30.464,65.999 65.291,21.78 65.982,9.001 \"></polygon></g></svg>"

/***/ }),

/***/ 321:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"number-8\"><use href=\"#blank\"></use><path fill=\"#757575\" d=\"M66.856,31.087c0,2.377-0.729,4.581-1.977,6.413c1.247,1.826,1.977,4.036,1.977,6.412V54.6 c0,6.29-5.104,11.4-11.4,11.4H20.544c-6.29,0-11.4-5.11-11.4-11.4V43.912c0-2.376,0.729-4.586,1.982-6.412 c-1.252-1.832-1.982-4.036-1.982-6.413V20.4c0-6.295,5.11-11.4,11.4-11.4h34.912c6.296,0,11.4,5.104,11.4,11.4V31.087z M51.182,22.538c0-1.575-1.275-2.85-2.851-2.85H27.669c-1.57,0-2.851,1.275-2.851,2.85v6.413c0,1.569,1.28,2.85,2.851,2.85h20.662 c1.575,0,2.851-1.28,2.851-2.85V22.538z M51.182,46.05c0-1.575-1.275-2.85-2.851-2.85H27.669c-1.57,0-2.851,1.274-2.851,2.85v6.413 c0,1.569,1.28,2.85,2.851,2.85h20.662c1.575,0,2.851-1.28,2.851-2.85V46.05z\"></path></g></svg>"

/***/ }),

/***/ 86:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"question-mark\"><use href=\"#unopened-square\"></use><path d=\"M24.684,28.694c0-4.57,1.569-8.347,4.716-11.338c2.219-2.109,5.175-3.164,8.877-3.164c4.065,0,7.213,1.055,9.433,3.164 c2.4,2.285,3.606,5.186,3.606,8.701c0,2.991-1.109,5.537-3.329,7.646c-1.295,1.23-3.052,2.9-5.271,5.01 c-1.664,1.582-2.497,3.955-2.497,7.119h-4.993c0-3.864,0.647-6.765,1.942-8.701c0.924-1.406,2.678-3.337,5.271-5.801 c1.479-1.406,2.22-3.073,2.22-5.01c0-2.461-0.65-4.307-1.942-5.537c-1.109-1.055-2.681-1.582-4.716-1.582 c-1.665,0-3.052,0.527-4.161,1.582c-1.85,1.758-2.774,4.395-2.774,7.91H24.684z M34.671,53.479h6.104v6.328h-6.104V53.479z\"></path></g></svg>"

/***/ }),

/***/ 897:
/***/ (function(module) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><g id=\"unopened-square\"><path id=\"rect1313_65_\" fill=\"#FDFCFD\" d=\"M0.009,0h75.982C75.996,0,76,0.004,76,0.009V75.99c0,0.006-0.004,0.01-0.009,0.01H0.009 C0.004,76,0,75.996,0,75.99V0.009C0,0.004,0.004,0,0.009,0z\"></path><path id=\"path1341_65_\" fill=\"#757575\" d=\"M75.99,0C75.995,0,76,0.005,76,0.01v75.981C76,75.996,75.995,76,75.99,76H0.009 C0.004,76,0,75.996,0,75.991L75.99,0z\"></path><polygon id=\"rect1311_65_\" fill=\"#B9B9B9\" points=\"8.508,8.5 67.492,8.5 67.5,8.508 67.5,67.491 67.492,67.5 8.508,67.5 8.5,67.491 8.5,8.508 \"></polygon></g></svg>"

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// UNUSED EXPORTS: Minesweeper

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class s{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return css_tag_t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",e),r=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s(o,e)},i=(e,n)=>{css_tag_t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n)}))},S=css_tag_t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window.trustedTypes,reactive_element_r=reactive_element_e?reactive_element_e.emptyScript:"",h=window.reactiveElementPolyfillSupport,reactive_element_o={toAttribute(t,i){switch(i){case Boolean:t=t?reactive_element_r:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},reactive_element_n=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_o,reflect:!1,hasChanged:reactive_element_n};class a extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S(i))}else void 0!==i&&s.push(S(i));return s}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=l){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:reactive_element_o.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:reactive_element_o.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||reactive_element_n)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:a}),(null!==(reactive_element_s=globalThis.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:globalThis.reactiveElementVersions=[]).push("1.3.0");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=globalThis.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_e=`lit$${(Math.random()+"").slice(9)}$`,lit_html_o="?"+lit_html_e,lit_html_n=`<${lit_html_o}>`,lit_html_l=document,lit_html_h=(t="")=>lit_html_l.createComment(t),lit_html_r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,lit_html_a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),y=p(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(lit_html_h(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},A=lit_html_l.createTreeWalker(lit_html_l,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=lit_html_a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===lit_html_a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+lit_html_n:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+lit_html_e+y):s+lit_html_e+(-2===p?(l.push(void 0),i):y)}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_s?lit_html_s.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:lit_html_S})}else c.push({type:6,index:r})}for(const i of t)l.removeAttribute(i)}if(g.test(l.tagName)){const t=l.textContent.split(lit_html_e),s=t.length-1;if(s>0){l.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],lit_html_h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],lit_html_h())}}}else if(8===l.nodeType)if(l.data===lit_html_o)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_e,t+1));)c.push({type:7,index:r}),t+=lit_html_e.length-1}r++}}static createElement(t,i){const s=lit_html_l.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=lit_html_r(i)?void 0:i._$litDirective$;return(null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_l).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),lit_html_r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==w&&lit_html_r(this._$AH)?this._$AA.nextSibling.data=t:this.k(lit_html_l.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(lit_html_h()),this.A(lit_html_h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class lit_html_S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!lit_html_r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!lit_html_r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends lit_html_S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}}const k=lit_html_i?lit_html_i.emptyScript:"";class H extends lit_html_S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends lit_html_S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const R={P:"$lit$",L:lit_html_e,V:lit_html_o,I:1,N:C,R:V,D:u,j:P,H:N,O:lit_html_S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(lit_html_t=globalThis.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:globalThis.litHtmlVersions=[]).push("2.2.0");
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends a{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return b}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.2.0");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/base.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const base_e=(e,t,o)=>{Object.defineProperty(t,o,e)},base_t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),base_o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};
//# sourceMappingURL=base.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/event-options.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function event_options_e(e){return base_o({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}
//# sourceMappingURL=event-options.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends directive_i{constructor(i){if(super(i),this.it=w,i.type!==directive_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===w||null==r)return this.ft=void 0,this.it=r;if(r===b)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this.ft;this.it=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const unsafe_html_o=directive_e(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-svg.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_svg_t extends unsafe_html_e{}unsafe_svg_t.directiveName="unsafeSVG",unsafe_svg_t.resultType=2;const unsafe_svg_o=directive_e(unsafe_svg_t);
//# sourceMappingURL=unsafe-svg.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/unsafe-svg.js

//# sourceMappingURL=unsafe-svg.js.map

;// CONCATENATED MODULE: ./src/MinesweeperBoard.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MinesweeperBoard = /*#__PURE__*/function () {
  function MinesweeperBoard(gameModeConfiguration) {
    _classCallCheck(this, MinesweeperBoard);

    this.positions = null;
    this.flags = null;
    this.flagCounter = 0;
    this.questionMarks = null;
    this.revealedFields = null;
    this.rows = gameModeConfiguration.rows;
    this.columns = gameModeConfiguration.columns;
    this.bombs = gameModeConfiguration.bombs;
  }

  _createClass(MinesweeperBoard, [{
    key: "build",
    value: function build() {
      // First: Generate 2d field
      this.positions = this.generate2dFields(0);
      this.flags = this.generate2dFields(false);
      this.flagCounter = 0;
      this.questionMarks = this.generate2dFields(false);
      this.revealedFields = this.generate2dFields(false); // Second: Place the bombs on the field

      this.placeBombs(); // Third: Calculate the fields number, based on neighbor bombs

      this.applyFieldNumbers();
    }
  }, {
    key: "generate2dFields",
    value: function generate2dFields(value) {
      var _this = this;

      return Array(this.rows).fill().map(function () {
        return Array(_this.columns).fill(value);
      });
    }
  }, {
    key: "placeBombs",
    value: function placeBombs() {
      var bombIndices = this.calculateBombIndices();
      var fieldIndex = 0;

      for (var row = 0; row < this.rows; row += 1) {
        for (var column = 0; column < this.columns; column += 1) {
          if (bombIndices.includes(fieldIndex)) {
            this.positions[row][column] = 'bomb';
          }

          fieldIndex += 1;
        }
      }
    }
    /**
     * Calculates a random set of indices where bombs are located on the field
     * @returns List of indices of bomb positions
     */

  }, {
    key: "calculateBombIndices",
    value: function calculateBombIndices() {
      var result = [];
      var size = this.rows * this.columns;
      var desiredBombAmount = Math.min(this.bombs, size);

      while (result.length !== desiredBombAmount) {
        var newBombPosition = Math.floor(Math.random() * size);

        if (!result.includes(newBombPosition)) {
          result.push(newBombPosition);
        }
      }

      return result;
    }
  }, {
    key: "applyFieldNumbers",
    value: function applyFieldNumbers() {
      var _this2 = this;

      for (var row = 0; row < this.rows; row += 1) {
        for (var column = 0; column < this.columns; column += 1) {
          if (this.positions[row][column] !== 'bomb') {
            var bombCounter = this.getNeighbors(row, column).filter(function (neighbor) {
              return _this2.positions[neighbor[0]][neighbor[1]] === 'bomb';
            }).length;
            this.positions[row][column] = bombCounter;
          }
        }
      }
    }
  }, {
    key: "revealFieldEntry",
    value: function revealFieldEntry(row, column) {
      if (this.flags[row][column]) {
        return null;
      }

      if (this.questionMarks[row][column]) {
        this.questionMarks[row][column] = false;
      }

      var field = this.positions[row][column];

      if (field === 'bomb') {
        // position contains bomb
        this.revealBombs();
        this.positions[row][column] = 'bomb-explode';
      } else if (field === 0) {
        // position contains no bomb and has no neighbor-bombs
        this.expand(row, column);
      } else {
        // position contains no bomb but neighbor-bombs
        this.revealedFields[row][column] = true;
      }

      return field;
    }
  }, {
    key: "expand",
    value: function expand(row, column) {
      var field = this.positions[row][column];

      if (field === 'bomb' || this.revealedFields[row][column]) {
        return;
      }

      this.revealedFields[row][column] = true;

      if (this.flags[row][column]) {
        this.removeFlag(row, column);
      }

      if (this.questionMarks[row][column]) {
        this.removeQuestionMark(row, column);
      }

      if (field === 0) {
        var neighbors = this.getNeighbors(row, column);

        var _iterator = _createForOfIteratorHelper(neighbors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var neighbor = _step.value;
            this.expand(neighbor[0], neighbor[1]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     *
     * @param {number} currentRow
     * @param {number} currentColumn
     * @returns {[number, number][]} List of Neighbors, every entry contains a row and a column index
     */

  }, {
    key: "getNeighbors",
    value: function getNeighbors(currentRow, currentColumn) {
      var neighbors = [];
      /** xoo
       *  oxo
       *  ooo
       */

      if (currentRow > 0 && currentColumn > 0) {
        neighbors.push([currentRow - 1, currentColumn - 1]);
      }
      /** oxo
       *  oxo
       *  ooo
       */


      if (currentRow > 0) {
        neighbors.push([currentRow - 1, currentColumn]);
      }
      /** oox
       *  oxo
       *  ooo
       */


      if (currentRow > 0 && currentColumn < this.columns - 1) {
        neighbors.push([currentRow - 1, currentColumn + 1]);
      }
      /** ooo
       *  oxx
       *  ooo
       */


      if (currentColumn < this.columns - 1) {
        neighbors.push([currentRow, currentColumn + 1]);
      }
      /** ooo
       *  oxo
       *  oox
       */


      if (currentRow < this.rows - 1 && currentColumn < this.columns - 1) {
        neighbors.push([currentRow + 1, currentColumn + 1]);
      }
      /** ooo
       *  oxo
       *  oxo
       */


      if (currentRow < this.rows - 1) {
        neighbors.push([currentRow + 1, currentColumn]);
      }
      /** ooo
       *  oxo
       *  xoo
       */


      if (currentRow < this.rows - 1 && currentColumn > 0) {
        neighbors.push([currentRow + 1, currentColumn - 1]);
      }
      /** ooo
       *  xxo
       *  ooo
       */


      if (currentColumn > 0) {
        neighbors.push([currentRow, currentColumn - 1]);
      }

      return neighbors;
    }
  }, {
    key: "addFlag",
    value: function addFlag(selectedRow, selectedColumn) {
      if (!this.flags[selectedRow][selectedColumn]) {
        this.flags[selectedRow][selectedColumn] = true;
        this.flagCounter += 1;
        this.removeQuestionMark(selectedRow, selectedColumn);
      }
    }
  }, {
    key: "removeFlag",
    value: function removeFlag(selectedRow, selectedColumn) {
      if (this.flags[selectedRow][selectedColumn]) {
        this.flags[selectedRow][selectedColumn] = false;
        this.flagCounter -= 1;
      }
    }
  }, {
    key: "addQuestionMark",
    value: function addQuestionMark(selectedRow, selectedColumn) {
      if (!this.questionMarks[selectedRow][selectedColumn]) {
        this.questionMarks[selectedRow][selectedColumn] = true;
        this.removeFlag(selectedRow, selectedColumn);
      }
    }
  }, {
    key: "removeQuestionMark",
    value: function removeQuestionMark(selectedRow, selectedColumn) {
      if (this.questionMarks[selectedRow][selectedColumn]) {
        this.questionMarks[selectedRow][selectedColumn] = false;
      }
    }
  }, {
    key: "revealBombs",
    value: function revealBombs() {
      var bombsAsFlags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      for (var row = 0; row < this.rows; row += 1) {
        for (var column = 0; column < this.columns; column += 1) {
          if (this.positions[row][column] === 'bomb') {
            this.revealedFields[row][column] = true;

            if (bombsAsFlags) {
              this.addFlag(row, column);
            } else if (this.questionMarks[row][column]) {
              this.removeQuestionMark(row, column);
            }
          }

          if (this.flags[row][column]) {
            this.revealedFields[row][column] = true;
          }
        }
      }
    }
  }]);

  return MinesweeperBoard;
}();
;// CONCATENATED MODULE: ./src/MinesweeperGame.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || MinesweeperGame_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MinesweeperGame_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MinesweeperGame_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MinesweeperGame_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return MinesweeperGame_arrayLikeToArray(arr); }

function MinesweeperGame_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MinesweeperGame_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MinesweeperGame_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MinesweeperGame_createClass(Constructor, protoProps, staticProps) { if (protoProps) MinesweeperGame_defineProperties(Constructor.prototype, protoProps); if (staticProps) MinesweeperGame_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * @typedef GameModeConfiguration
 * @property {number} columns
 * @property {number} rows
 * @property {number} bombs
 */

var MinesweeperGame = /*#__PURE__*/function () {
  /**
   * @param {() => {}} onWinCallback
   * @param {() => {}} onLoseCallback
   */
  function MinesweeperGame(onWinCallback, onLoseCallback) {
    MinesweeperGame_classCallCheck(this, MinesweeperGame);

    this.onWinCallback = onWinCallback;
    this.onLoseCallback = onLoseCallback;
    /**
     * @type {MinesweeperBoard}
     */

    this.board = null;
    /**
     * @type {GameModeConfiguration}
     */

    this.gameModeConfiguration = null;
    this.isGameOver = true;
  }

  MinesweeperGame_createClass(MinesweeperGame, [{
    key: "createBoard",
    value: function createBoard() {
      var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
      var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
      var bombs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      this.gameModeConfiguration = {
        columns: columns,
        rows: rows,
        bombs: bombs
      };
      this.board = new MinesweeperBoard(this.gameModeConfiguration);
      this.board.build();
      this.isGameOver = false;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.board.build();
      this.isGameOver = false;
    }
  }, {
    key: "toggleFlag",
    value: function toggleFlag(selectedRow, selectedColumn) {
      if (this.board.revealedFields[selectedRow][selectedColumn]) {
        return;
      }

      if (this.board.flags[selectedRow][selectedColumn]) {
        // removing a flag is always possible
        this.board.removeFlag(selectedRow, selectedColumn);
      } else if (this.board.flagCounter < this.board.bombs) {
        // it should not be possible to place more flags than bombs
        this.board.addFlag(selectedRow, selectedColumn);
      }
    }
  }, {
    key: "toggleQuestionMark",
    value: function toggleQuestionMark(selectedRow, selectedColumn) {
      if (this.board.revealedFields[selectedRow][selectedColumn]) {
        return;
      }

      if (this.board.questionMarks[selectedRow][selectedColumn]) {
        this.board.removeQuestionMark(selectedRow, selectedColumn);
      } else {
        this.board.addQuestionMark(selectedRow, selectedColumn);
      }
    }
  }, {
    key: "selectField",
    value: function selectField(selectedRow, selectedColumn) {
      var _ref;

      var field = this.board.revealFieldEntry(selectedRow, selectedColumn);

      if (field === 'bomb') {
        this.onLoseCallback();
        this.isGameOver = true;
        return;
      } // flatten the 2d boolean array and count false values


      var unrevealedFieldsAmount = (_ref = []).concat.apply(_ref, _toConsumableArray(this.board.revealedFields)).filter(function (revealedField) {
        return !revealedField;
      }).length;

      if (unrevealedFieldsAmount === this.board.bombs) {
        this.board.revealBombs(true);
        this.onWinCallback();
        this.isGameOver = true;
      }
    }
  }]);

  return MinesweeperGame;
}();
// EXTERNAL MODULE: ./assets/icons/bomb.svg
var bomb = __webpack_require__(415);
// EXTERNAL MODULE: ./assets/icons/bomb-explode.svg
var bomb_explode = __webpack_require__(921);
// EXTERNAL MODULE: ./assets/icons/flag.svg
var flag = __webpack_require__(223);
// EXTERNAL MODULE: ./assets/icons/flag-missed.svg
var flag_missed = __webpack_require__(149);
// EXTERNAL MODULE: ./assets/icons/question-mark.svg
var question_mark = __webpack_require__(86);
// EXTERNAL MODULE: ./assets/icons/unopened-square.svg
var unopened_square = __webpack_require__(897);
// EXTERNAL MODULE: ./assets/icons/number-0.svg
var number_0 = __webpack_require__(583);
// EXTERNAL MODULE: ./assets/icons/number-1.svg
var number_1 = __webpack_require__(101);
// EXTERNAL MODULE: ./assets/icons/number-2.svg
var number_2 = __webpack_require__(37);
// EXTERNAL MODULE: ./assets/icons/number-3.svg
var number_3 = __webpack_require__(58);
// EXTERNAL MODULE: ./assets/icons/number-4.svg
var number_4 = __webpack_require__(206);
// EXTERNAL MODULE: ./assets/icons/number-5.svg
var number_5 = __webpack_require__(158);
// EXTERNAL MODULE: ./assets/icons/number-6.svg
var number_6 = __webpack_require__(876);
// EXTERNAL MODULE: ./assets/icons/number-7.svg
var number_7 = __webpack_require__(503);
// EXTERNAL MODULE: ./assets/icons/number-8.svg
var number_8 = __webpack_require__(321);
;// CONCATENATED MODULE: ./src/Icons.js















/* harmony default export */ var Icons = ({
  Bomb: bomb,
  BombExplode: bomb_explode,
  Flag: flag,
  FlagMissed: flag_missed,
  QuestionMark: question_mark,
  UnopenedSquare: unopened_square,
  Number0: number_0,
  Number1: number_1,
  Number2: number_2,
  Number3: number_3,
  Number4: number_4,
  Number5: number_5,
  Number6: number_6,
  Number7: number_7,
  Number8: number_8
});
// EXTERNAL MODULE: ./src/minesweeper.scss
var minesweeper = __webpack_require__(637);
;// CONCATENATED MODULE: ./src/Minesweeper.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function Minesweeper_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Minesweeper_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Minesweeper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Minesweeper_createClass(Constructor, protoProps, staticProps) { if (protoProps) Minesweeper_defineProperties(Constructor.prototype, protoProps); if (staticProps) Minesweeper_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function Minesweeper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || Minesweeper_iterableToArray(arr) || Minesweeper_unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Minesweeper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Minesweeper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Minesweeper_arrayLikeToArray(o, minLen); }

function Minesweeper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Minesweeper_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable lit-a11y/click-events-have-key-events */







function getSVGReference(id) {
  return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 76 76\" preserveAspectRatio=\"xMidYMid meet\" enable-background=\"new 0 0 76 76\"><use href=\"#".concat(id, "\" /></svg>");
}

var Minesweeper = _decorate(null, function (_initialize, _LitElement) {
  var Minesweeper = /*#__PURE__*/function (_LitElement2) {
    _inherits(Minesweeper, _LitElement2);

    var _super = _createSuper(Minesweeper);

    function Minesweeper() {
      var _this;

      Minesweeper_classCallCheck(this, Minesweeper);

      _this = _super.call(this);

      _initialize(_assertThisInitialized(_this));

      _this.columns = 9;
      _this.rows = 9;
      _this.bombs = 10;
      return _this;
    }

    return Minesweeper_createClass(Minesweeper);
  }(_LitElement);

  return {
    F: Minesweeper,
    d: [{
      kind: "field",
      "static": true,
      key: "ICONS",
      value: function value() {
        return {
          BOMB: getSVGReference('bomb'),
          BOMB_EXPLODE: getSVGReference('bomb-explode'),
          FLAG: getSVGReference('flag'),
          FLAG_MISSED: getSVGReference('flag-missed'),
          QUESTION_MARK: getSVGReference('question-mark'),
          UNOPENED_SQUARE: getSVGReference('unopened-square'),
          NUMBER_0: getSVGReference('blank'),
          NUMBER_1: getSVGReference('number-1'),
          NUMBER_2: getSVGReference('number-2'),
          NUMBER_3: getSVGReference('number-3'),
          NUMBER_4: getSVGReference('number-4'),
          NUMBER_5: getSVGReference('number-5'),
          NUMBER_6: getSVGReference('number-6'),
          NUMBER_7: getSVGReference('number-7'),
          NUMBER_8: getSVGReference('number-8')
        };
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return o(minesweeper/* default */.Z);
      }
    }, {
      kind: "get",
      "static": true,
      key: "properties",
      value: function properties() {
        return {
          restartSelector: {
            attribute: 'restart-selector',
            type: String
          },
          bombCounterSelector: {
            attribute: 'bomb-counter-selector',
            type: String
          },
          columns: {
            type: Number
          },
          rows: {
            type: Number
          },
          bombs: {
            type: Number
          },

          /** @type {MinesweeperGame} */
          __game: {
            state: true,
            attribute: false
          },

          /** @type {Number} */
          __pressStartTimestamp: {
            state: true,
            type: Number
          },

          /** @type {HTMLElement} */
          __pressStartSweeperField: {
            state: true,
            attribute: false
          },

          /** @type {Number} */
          __longPressTimer: {
            state: true,
            type: Number
          }
        };
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        _get(_getPrototypeOf(Minesweeper.prototype), "connectedCallback", this).call(this);

        if (this.restartSelector) {
          var restartElements = document.querySelectorAll(this.restartSelector);
          restartElements.forEach(function (restartElement) {
            restartElement.addEventListener('click', _this2.restartGame.bind(_this2));
          });
        }

        this.__game = new MinesweeperGame(this.__gameWonCallback.bind(this), this.__gameLostCallback.bind(this));

        this.__createGameBoard();
      }
    }, {
      kind: "method",
      key: "__createGameBoard",
      value: function __createGameBoard() {
        if (this.__game) {
          this.__game.createBoard(this.columns, this.rows, this.bombs);

          this.requestUpdate();
        }
      }
    }, {
      kind: "method",
      key: "__gameWonCallback",
      value: function __gameWonCallback() {
        var options = {
          detail: {},
          bubbles: true,
          composed: true
        };
        this.dispatchEvent(new CustomEvent('game-won', options));
      }
    }, {
      kind: "method",
      key: "__gameLostCallback",
      value: function __gameLostCallback() {
        var options = {
          detail: {},
          bubbles: true,
          composed: true
        };
        this.dispatchEvent(new CustomEvent('game-lost', options));
      }
      /**
       * @param {GameModeConfiguration} gameModeConfiguration
       */

    }, {
      kind: "method",
      key: "setGameModeConfiguration",
      value: function setGameModeConfiguration(gameModeConfiguration) {
        this.columns = gameModeConfiguration.columns;
        this.rows = gameModeConfiguration.rows;
        this.bombs = gameModeConfiguration.bombs;

        this.__createGameBoard();
      }
    }, {
      kind: "method",
      key: "restartGame",
      value: function restartGame() {
        if (this.__game) {
          this.__game.restart();

          this.requestUpdate();
        }
      }
    }, {
      kind: "method",
      key: "__resetLongPressStates",
      value: function __resetLongPressStates() {
        clearTimeout(this.__longPressTimer);
      }
      /**
       * @param {TouchEvent|MouseEvent} event
       */

    }, {
      kind: "method",
      decorators: [event_options_e({
        passive: true
      })],
      key: "__handleFieldClickStart",
      value: function __handleFieldClickStart(event) {
        if (typeof window.ontouchstart !== 'undefined' && event.type === 'mousedown') {
          this.__resetLongPressStates();

          return;
        }

        var currentSweeperField = event.currentTarget;
        this.__pressStartSweeperField = currentSweeperField;
        this.__pressStartTimestamp = event.timeStamp;

        if (this.__game && this.__game.board && !this.__game.isGameOver) {
          this.__longPressTimer = setTimeout(function () {
            var animationInterval = null;
            var flagSvg = currentSweeperField.querySelector('svg');
            var currentScale = 1;

            function scale() {
              if (currentScale >= 1.25) {
                clearInterval(animationInterval);
                flagSvg.style.transform = 'none';
              } else {
                currentScale += 0.01;
                flagSvg.style.transform = "scale(".concat(currentScale, ")");
              }
            }

            animationInterval = setInterval(scale, 2);
          }, 500);
        }
      }
    }, {
      kind: "method",
      decorators: [event_options_e({
        passive: true
      })],
      key: "__handleFieldClickLeave",
      value: function __handleFieldClickLeave() {
        this.__resetLongPressStates();
      }
      /**
       * @param {PointerEvent} event
       */

    }, {
      kind: "method",
      key: "__handleFieldClickEnd",
      value: function __handleFieldClickEnd(event) {
        var currentSweeperField = event.currentTarget;
        var wasLongPress = event.timeStamp - this.__pressStartTimestamp > 500;
        var stillSameSweeperField = this.__pressStartSweeperField === currentSweeperField;

        this.__resetLongPressStates();

        if (this.__game && this.__game.board && !this.__game.isGameOver && stillSameSweeperField) {
          this.dispatchEvent(new CustomEvent('field-click', {
            detail: {
              field: currentSweeperField
            },
            bubbles: true,
            composed: true
          }));
          var selectedRow = parseInt(currentSweeperField.dataset.row, 10);
          var selectedColumn = parseInt(currentSweeperField.dataset.column, 10);
          var gameBoard = this.__game.board;
          var hasFlag = gameBoard.flags[selectedRow][selectedColumn];

          if (wasLongPress || event.ctrlKey || event.altKey || event.metaKey) {
            var hasQuestionMark = gameBoard.questionMarks[selectedRow][selectedColumn];

            if (hasQuestionMark || hasFlag) {
              this.__game.toggleQuestionMark(selectedRow, selectedColumn);
            } else {
              this.__game.toggleFlag(selectedRow, selectedColumn);
            }
          } else if (hasFlag) {
            // if user performs a regular click on a field with a flag on it cancel it
            return;
          } else {
            this.__game.selectField(selectedRow, selectedColumn);
          }

          this.requestUpdate();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this3 = this;

        if (!this.__game || !this.__game.board) {
          return $(_templateObject || (_templateObject = _taggedTemplateLiteral(["No Board :("])));
        }

        var gameBoard = this.__game.board;

        if (this.bombCounterSelector) {
          var bombCounterElements = document.querySelectorAll(this.bombCounterSelector);

          var _iterator = Minesweeper_createForOfIteratorHelper(bombCounterElements),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var bombCounterElement = _step.value;
              bombCounterElement.textContent = gameBoard.bombs - gameBoard.flagCounter;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return $(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<div class=\"sweeper-container\">\n        <div class=\"sweeper-box\" @click=\"", "\">\n          ", "\n        </div>\n        <div class=\"svg-container\">", "</div>\n      </div>\n    </div>"])), function (event) {
          return event.preventDefault();
        }, gameBoard.positions.map(function (row, rowIndex) {
          return $(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div class=\"sweeper-row\">\n                ", "\n              </div>"])), row.map(function (field, columnIndex) {
            return _this3.getSweeperFieldHtml(rowIndex, columnIndex);
          }));
        }), Object.values(Icons).map(unsafe_svg_o));
      }
    }, {
      kind: "method",
      key: "getSweeperFieldHtml",
      value: function getSweeperFieldHtml(rowIndex, columnIndex) {
        var gameBoard = this.__game.board;
        var isRevealed = gameBoard.revealedFields[rowIndex][columnIndex];
        var hasFlag = gameBoard.flags[rowIndex][columnIndex];
        var hasQuestionMark = gameBoard.questionMarks[rowIndex][columnIndex];
        var sweeperFieldContent = Minesweeper.ICONS.UNOPENED_SQUARE;

        if (isRevealed) {
          var fieldValue = gameBoard.positions[rowIndex][columnIndex];

          if (fieldValue === 'bomb') {
            if (hasFlag) {
              sweeperFieldContent = Minesweeper.ICONS.FLAG;
            } else {
              sweeperFieldContent = Minesweeper.ICONS.BOMB;
            }
          } else if (fieldValue === 'bomb-explode') {
            sweeperFieldContent = Minesweeper.ICONS.BOMB_EXPLODE;
          } else if (hasFlag) {
            sweeperFieldContent = Minesweeper.ICONS.FLAG_MISSED;
          } else {
            sweeperFieldContent = Minesweeper.ICONS["NUMBER_".concat(fieldValue)];
          }
        } else if (hasQuestionMark) {
          sweeperFieldContent = Minesweeper.ICONS.QUESTION_MARK;
        } else if (hasFlag) {
          sweeperFieldContent = Minesweeper.ICONS.FLAG;
        }

        var sweeperFieldClass = isRevealed || hasFlag || this.__game.isGameOver ? ' unselectable' : '';
        var attachEventListener = !isRevealed && !this.__game.isGameOver;

        if (attachEventListener) {
          return $(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div\n        class=\"sweeper-field", "\"\n        @touchstart=\"", "\"\n        @touchend=\"", "\"\n        @touchcancel=\"", "\"\n        @mousedown=\"", "\"\n        @mouseup=\"", "\"\n        @mouseleave=\"", "\"\n        @click=\"", "\"\n        data-row=\"", "\"\n        data-column=\"", "\"\n      >\n        ", "\n      </div>"])), sweeperFieldClass, this.__handleFieldClickStart, this.__handleFieldClickLeave, this.__handleFieldClickLeave, this.__handleFieldClickStart, this.__handleFieldClickLeave, this.__handleFieldClickLeave, this.__handleFieldClickEnd, rowIndex, columnIndex, unsafe_svg_o(sweeperFieldContent));
        }

        return $(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<div\n      class=\"sweeper-field", "\"\n      data-row=\"", "\"\n      data-column=\"", "\"\n    >\n      ", "\n    </div>"])), sweeperFieldClass, rowIndex, columnIndex, unsafe_svg_o(sweeperFieldContent));
      }
    }]
  };
}, lit_element_s);
window.customElements.define('minesweeper-game', Minesweeper);
}();
/******/ })()
;