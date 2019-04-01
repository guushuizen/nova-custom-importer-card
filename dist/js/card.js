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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    Vue.component('NovaImporter', __webpack_require__(2));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9bc2c0a", Component.options)
  } else {
    hotAPI.reload("data-v-b9bc2c0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['card'],

    data: function data() {
        return {
            file: undefined,
            fileName: this.card.not_chosen
        };
    },


    methods: {
        change: function change() {
            this.file = this.$refs.xmlUpload.files[0];
            this.fileName = this.file.name;
        },
        clickUpload: function clickUpload(e) {
            e.preventDefault();

            this.$refs.xmlUpload.click();
        },
        startUpload: function startUpload(e) {
            var _this = this;

            e.preventDefault();

            if (!this.file) {
                this.$toasted.show('Er is nog geen bestand geselecteerd!', { type: 'error' });
                return;
            }

            var formData = new FormData();
            formData.append('file', this.file);

            Nova.request().post('/nova-vendor/nova-importer/upload/' + this.card.resourceSlug, formData).then(function (response) {
                console.log(response);
                if (response.data.messages) {
                    response.data.messages.forEach(function (el) {
                        _this.$toasted.show(el.text, el);
                    });
                }

                if (response.data.refresh) {
                    _this.$parent.$parent.$parent.$parent.getResources();
                }
            }).finally(function () {
                _this.$refs.xmlUpload.value = "";
                _this.fileName = _this.card.begin_upload;
            });

            //     axios({
            //         method: 'post',
            //         url: '/nova-vendor/import-xml/upload',
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         },
            //         data: formData
            //     }).then(response => {
            //         this.$toasted.show('Import was succesvol, er zijn ' + response.data.count + ' klanten aangemaakt/geupdated!', {
            //             type: 'success',
            //             duration: 5000
            //         });
            //
            //         if (Object.keys(response.data.skipped).length > 0) {
            //             this.$toasted.show('Let op: klanten met de volgende id\'s konden niet worden geïmporteerd:', {
            //                 type: 'error',
            //                 duration: 5000
            //             });
            //             Object.keys(response.data.skipped).forEach((skipped) => {
            //                 this.$toasted.show(skipped + ': ' + response.data.skipped[skipped], {
            //                     type: 'error',
            //                     duration: 5000
            //                 });
            //             })
            //         }
            //
            //         this.$parent.$parent.$parent.$parent.getResources();
            //
            //         this.file = {};
            //         this.$refs.xmlUpload.value = "";
            //         this.fileName = "Er is nog geen bestand geüpload.";
            //     });
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { staticClass: "flex flex-col items-center justify-center" },
    [
      _c("p", { staticClass: "text-lg font-bold self-start pl-2 " }, [
        _vm._v(_vm._s(_vm.card.uploadTitle))
      ]),
      _vm._v(" "),
      _c("input", {
        ref: "xmlUpload",
        staticClass: "hidden",
        attrs: { type: "file", required: "" },
        on: { change: _vm.change }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mt-4 flex justify-between items-center " }, [
        _c(
          "a",
          {
            staticClass: "btn btn-default btn-primary",
            on: { click: _vm.clickUpload }
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(this.card.choose_button_text) +
                "\n        "
            )
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "ml-4" }, [_vm._v(_vm._s(_vm.fileName))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "start-upload-wrapper w-full px-3 pt-3 flex justify-end"
        },
        [
          _c(
            "a",
            {
              staticClass: "btn btn-default btn-primary self-end",
              on: { click: _vm.startUpload }
            },
            [
              _vm._v(
                "\n            " + _vm._s(this.card.begin_upload) + "\n        "
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9bc2c0a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);