webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ContextProvider.js":
false,

/***/ "./components/Header.js":
false,

/***/ "./components/Nav.js":
false,

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Daniel\\Documents\\code\\StreetSmarts\\street-smarts-prototype\\newFrontend\\frontend\\components\\Page.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n@font-face {\n  font-family: 'radnika_next';\n  src: url('/static/radnikanext-medium-webfont.woff2')\n  format('woff2');\n  font-weight: normal;\n  font-style: normal;\n}\nhtml {\n  box-sizing: border-box;\n  font-size: 10px;\n}\n*, *:before, *:after{\n  box-sizing: inherit;\n}\nbody{\n  padding: 0;\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 2;\n  font-family: 'radnika_next';\n}\na {\n  text-decoration: none;\n  color: ", ";\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])(_templateObject(), theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/core/AppBar/AppBar.js":
false,

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/Paper/Paper.js":
false,

/***/ "./node_modules/@material-ui/core/Paper/index.js":
false,

/***/ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/Toolbar/Toolbar.js":
false,

/***/ "./node_modules/@material-ui/core/Toolbar/index.js":
false,

/***/ "./node_modules/@material-ui/core/Typography/Typography.js":
false,

/***/ "./node_modules/@material-ui/core/Typography/index.js":
false,

/***/ "./node_modules/@material-ui/core/colors/common.js":
false,

/***/ "./node_modules/@material-ui/core/colors/grey.js":
false,

/***/ "./node_modules/@material-ui/core/colors/indigo.js":
false,

/***/ "./node_modules/@material-ui/core/colors/pink.js":
false,

/***/ "./node_modules/@material-ui/core/colors/red.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@material-ui/core/node_modules/warning/warning.js":
false,

/***/ "./node_modules/@material-ui/core/styles/colorManipulator.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createBreakpoints.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createGenerateClassName.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createMixins.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createMuiTheme.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createPalette.js":
false,

/***/ "./node_modules/@material-ui/core/styles/createTypography.js":
false,

/***/ "./node_modules/@material-ui/core/styles/getStylesCreator.js":
false,

/***/ "./node_modules/@material-ui/core/styles/getThemeProps.js":
false,

/***/ "./node_modules/@material-ui/core/styles/jssPreset.js":
false,

/***/ "./node_modules/@material-ui/core/styles/mergeClasses.js":
false,

/***/ "./node_modules/@material-ui/core/styles/reactJssContext.js":
false,

/***/ "./node_modules/@material-ui/core/styles/shadows.js":
false,

/***/ "./node_modules/@material-ui/core/styles/shape.js":
false,

/***/ "./node_modules/@material-ui/core/styles/spacing.js":
false,

/***/ "./node_modules/@material-ui/core/styles/themeListener.js":
false,

/***/ "./node_modules/@material-ui/core/styles/transitions.js":
false,

/***/ "./node_modules/@material-ui/core/styles/typographyMigration.js":
false,

/***/ "./node_modules/@material-ui/core/styles/withStyles.js":
false,

/***/ "./node_modules/@material-ui/core/styles/zIndex.js":
false,

/***/ "./node_modules/@material-ui/core/utils/getDisplayName.js":
false,

/***/ "./node_modules/@material-ui/core/utils/helpers.js":
false,

/***/ "./node_modules/@material-ui/core/utils/ownerDocument.js":
false,

/***/ "./node_modules/@material-ui/core/utils/ownerWindow.js":
false,

/***/ "./node_modules/@material-ui/icons/AccountCircle.js":
false,

/***/ "./node_modules/@material-ui/icons/Menu.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/getDisplayName.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/pure.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/setDisplayName.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/setStatic.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/shallowEqual.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/shouldUpdate.js":
false,

/***/ "./node_modules/@material-ui/icons/node_modules/recompose/wrapDisplayName.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/css-vendor/lib/camelize.js":
false,

/***/ "./node_modules/css-vendor/lib/index.js":
false,

/***/ "./node_modules/css-vendor/lib/prefix.js":
false,

/***/ "./node_modules/css-vendor/lib/supported-property.js":
false,

/***/ "./node_modules/css-vendor/lib/supported-value.js":
false,

/***/ "./node_modules/deepmerge/dist/es.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/hyphenate-style-name/index.js":
false,

/***/ "./node_modules/is-in-browser/dist/module.js":
false,

/***/ "./node_modules/is-plain-object/index.js":
false,

/***/ "./node_modules/isobject/index.js":
false,

/***/ "./node_modules/jss-camel-case/lib/index.js":
false,

/***/ "./node_modules/jss-default-unit/lib/defaultUnits.js":
false,

/***/ "./node_modules/jss-default-unit/lib/index.js":
false,

/***/ "./node_modules/jss-global/lib/index.js":
false,

/***/ "./node_modules/jss-nested/lib/index.js":
false,

/***/ "./node_modules/jss-props-sort/lib/index.js":
false,

/***/ "./node_modules/jss-vendor-prefixer/lib/index.js":
false,

/***/ "./node_modules/jss/lib/Jss.js":
false,

/***/ "./node_modules/jss/lib/PluginsRegistry.js":
false,

/***/ "./node_modules/jss/lib/RuleList.js":
false,

/***/ "./node_modules/jss/lib/SheetsManager.js":
false,

/***/ "./node_modules/jss/lib/SheetsRegistry.js":
false,

/***/ "./node_modules/jss/lib/StyleSheet.js":
false,

/***/ "./node_modules/jss/lib/index.js":
false,

/***/ "./node_modules/jss/lib/plugins/functions.js":
false,

/***/ "./node_modules/jss/lib/plugins/observables.js":
false,

/***/ "./node_modules/jss/lib/plugins/rules.js":
false,

/***/ "./node_modules/jss/lib/renderers/DomRenderer.js":
false,

/***/ "./node_modules/jss/lib/renderers/VirtualRenderer.js":
false,

/***/ "./node_modules/jss/lib/rules/ConditionalRule.js":
false,

/***/ "./node_modules/jss/lib/rules/FontFaceRule.js":
false,

/***/ "./node_modules/jss/lib/rules/KeyframesRule.js":
false,

/***/ "./node_modules/jss/lib/rules/SimpleRule.js":
false,

/***/ "./node_modules/jss/lib/rules/StyleRule.js":
false,

/***/ "./node_modules/jss/lib/rules/ViewportRule.js":
false,

/***/ "./node_modules/jss/lib/sheets.js":
false,

/***/ "./node_modules/jss/lib/utils/cloneStyle.js":
false,

/***/ "./node_modules/jss/lib/utils/createGenerateClassName.js":
false,

/***/ "./node_modules/jss/lib/utils/createRule.js":
false,

/***/ "./node_modules/jss/lib/utils/escape.js":
false,

/***/ "./node_modules/jss/lib/utils/getDynamicStyles.js":
false,

/***/ "./node_modules/jss/lib/utils/isObservable.js":
false,

/***/ "./node_modules/jss/lib/utils/linkRule.js":
false,

/***/ "./node_modules/jss/lib/utils/moduleId.js":
false,

/***/ "./node_modules/jss/lib/utils/toCss.js":
false,

/***/ "./node_modules/jss/lib/utils/toCssValue.js":
false,

/***/ "./node_modules/keycode/index.js":
false,

/***/ "./node_modules/next/dist/lib/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/nprogress/nprogress.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-transition-group/Transition.js":
false,

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
false,

/***/ "./node_modules/recompose/getDisplayName.js":
false,

/***/ "./node_modules/recompose/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/recompose/wrapDisplayName.js":
false,

/***/ "./node_modules/warning/browser.js":
false

})
//# sourceMappingURL=_app.js.9c83a9911a2df4f3bf4a.hot-update.js.map