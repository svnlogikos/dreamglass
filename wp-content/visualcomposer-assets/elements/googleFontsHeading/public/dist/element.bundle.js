webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(\"./googleFontsHeading/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(\"./googleFontsHeading/settings.json\"),\n// Component callback\nfunction (component) {\n  //\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  css: __webpack_require__(\"./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css\"),\n  editorCss: __webpack_require__(\"./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css\"),\n  mixins: {\n    textColor: {\n      mixin: __webpack_require__(\"./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss\")\n    }\n  }\n},\n// javascript callback\n'');\n\n/*****************\n ** WEBPACK FOOTER\n ** ./googleFontsHeading/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./googleFontsHeading/index.js?");

/***/ },

/***/ "./googleFontsHeading/component.js":
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(\"./node_modules/react/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\n\nvar GoogleFontsHeadingElement = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(GoogleFontsHeadingElement, _vcvAPI$elementCompon);\n\n  function GoogleFontsHeadingElement() {\n    (0, _classCallCheck3.default)(this, GoogleFontsHeadingElement);\n    return (0, _possibleConstructorReturn3.default)(this, (GoogleFontsHeadingElement.__proto__ || (0, _getPrototypeOf2.default)(GoogleFontsHeadingElement)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(GoogleFontsHeadingElement, [{\n    key: 'validateSize',\n    value: function validateSize(value) {\n      var units = ['px', 'em', 'rem', '%', 'vw', 'vh'];\n      var re = new RegExp('^-?\\\\d*(\\\\.\\\\d{0,9})?(' + units.join('|') + ')?$');\n      if (value === '' || value.match(re)) {\n        return value;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var text = atts.text,\n          font = atts.font,\n          elementTag = atts.elementTag,\n          fontSize = atts.fontSize,\n          alignment = atts.alignment,\n          lineHeight = atts.lineHeight,\n          letterSpacing = atts.letterSpacing,\n          link = atts.link,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n\n      var classes = 'vce-google-fonts-heading';\n      var wrapperClasses = 'vce-google-fonts-heading-wrapper';\n      var customProps = {};\n      var innerClasses = 'vce-google-fonts-heading-inner vce';\n      var innerCustomProps = {};\n      innerCustomProps.style = {};\n      var CustomTag = elementTag;\n      var headingHtml = text;\n      var googleFontLink = '';\n\n      if (link && link.url) {\n        var url = link.url,\n            title = link.title,\n            targetBlank = link.targetBlank,\n            relNofollow = link.relNofollow;\n\n        var linkProps = {\n          'href': url,\n          'title': title,\n          'target': targetBlank ? '_blank' : undefined,\n          'rel': relNofollow ? 'nofollow' : undefined\n        };\n\n        headingHtml = _react2.default.createElement(\n          'a',\n          (0, _extends3.default)({ className: 'vce-google-fonts-heading-link' }, linkProps),\n          headingHtml\n        );\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        classes += ' ' + customClass;\n      }\n\n      if (fontSize) {\n        fontSize = this.validateSize(fontSize);\n\n        if (fontSize) {\n          fontSize = /^\\d+$/.test(fontSize) ? fontSize + 'px' : fontSize;\n          innerCustomProps.style.fontSize = fontSize;\n        }\n      }\n\n      if (lineHeight) {\n        lineHeight = this.validateSize(lineHeight);\n\n        if (lineHeight) {\n          innerCustomProps.style.lineHeight = lineHeight;\n        }\n      }\n\n      if (letterSpacing) {\n        letterSpacing = this.validateSize(letterSpacing);\n\n        if (letterSpacing) {\n          letterSpacing = /^\\d+$/.test(letterSpacing) ? letterSpacing + 'px' : letterSpacing;\n          innerCustomProps.style.letterSpacing = letterSpacing;\n        }\n      }\n\n      if (alignment) {\n        classes += ' vce-google-fonts-heading--align-' + alignment;\n      }\n\n      var mixinData = this.getMixinData('textColor');\n\n      if (mixinData) {\n        classes += ' vce-google-fonts-heading--color-' + mixinData.selector;\n      }\n\n      if (font) {\n        var fontStyle = font.fontStyle ? font.fontStyle.style === 'regular' ? '' : font.fontStyle.style : null;\n        var fontHref = '';\n\n        if (font.fontStyle) {\n          fontHref = 'https://fonts.googleapis.com/css?family=' + font.fontFamily + ':' + (font.fontStyle.weight + fontStyle);\n        } else {\n          fontHref = 'https://fonts.googleapis.com/css?family=' + font.fontFamily;\n        }\n\n        googleFontLink = _react2.default.createElement('link', { href: fontHref, rel: 'stylesheet' });\n\n        innerCustomProps.style.fontFamily = font.fontFamily;\n        innerCustomProps.style.fontWeight = font.fontStyle ? font.fontStyle.weight : null;\n        innerCustomProps.style.fontStyle = fontStyle;\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({}, customProps, { className: classes }, editor),\n        _react2.default.createElement(\n          'div',\n          { className: wrapperClasses },\n          _react2.default.createElement(\n            'vcvhelper',\n            null,\n            googleFontLink\n          ),\n          _react2.default.createElement(\n            CustomTag,\n            (0, _extends3.default)({ className: innerClasses }, innerCustomProps, { id: 'el-' + id }, doAll),\n            headingHtml\n          )\n        )\n      );\n    }\n  }]);\n  return GoogleFontsHeadingElement;\n}(vcvAPI.elementComponent);\n\nexports.default = GoogleFontsHeadingElement;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./googleFontsHeading/component.js\n ** module id = ./googleFontsHeading/component.js\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./googleFontsHeading/component.js?");

/***/ },

/***/ "./googleFontsHeading/settings.json":
/***/ function(module, exports) {

	eval("module.exports = {\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"text\",\"font\",\"elementTag\",\"color\",\"fontSize\",\"alignment\",\"lineHeight\",\"letterSpacing\",\"link\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"text\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"The sky was cloudless and of a deep dark blue.\",\"options\":{\"label\":\"Title text\",\"inline\":true,\"inlineMode\":\"text\"}},\"font\":{\"type\":\"googleFonts\",\"access\":\"public\",\"value\":{\"fontFamily\":\"Lato\",\"fontStyle\":{\"weight\":\"400\",\"style\":\"regular\"},\"status\":\"active\",\"fontText\":\"The sky was cloudless and of a deep dark blue.\"},\"options\":{\"label\":\"\"}},\"elementTag\":{\"type\":\"dropdown\",\"access\":\"public\",\"value\":\"h2\",\"options\":{\"label\":\"Element tag\",\"values\":[{\"label\":\"h1\",\"value\":\"h1\"},{\"label\":\"h2\",\"value\":\"h2\"},{\"label\":\"h3\",\"value\":\"h3\"},{\"label\":\"h4\",\"value\":\"h4\"},{\"label\":\"h5\",\"value\":\"h5\"},{\"label\":\"h6\",\"value\":\"h6\"},{\"label\":\"p\",\"value\":\"p\"},{\"label\":\"div\",\"value\":\"div\"}]}},\"color\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Title color\",\"cssMixin\":{\"mixin\":\"textColor\",\"property\":\"color\",\"namePattern\":\"[\\\\da-f]+\"}}},\"fontSize\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Font size\"}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"left\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Center\",\"value\":\"center\",\"icon\":\"vcv-ui-icon-attribute-alignment-center\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"lineHeight\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Line height\"}},\"letterSpacing\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Letter spacing\"}},\"link\":{\"type\":\"url\",\"access\":\"public\",\"value\":{\"url\":\"\",\"title\":\"\",\"targetBlank\":true,\"relNofollow\":false},\"options\":{\"label\":\"Link selection\"}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"assetsLibrary\":{\"access\":\"public\",\"type\":\"string\",\"value\":[\"animate\"]},\"metaBackendLabels\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[{\"value\":[\"font\"]},{\"value\":[\"text\"]}]},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).\"}},\"tag\":{\"type\":\"string\",\"access\":\"protected\",\"value\":\"googleFontsHeading\"}}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./googleFontsHeading/settings.json\n ** module id = ./googleFontsHeading/settings.json\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./googleFontsHeading/settings.json?");

/***/ },

/***/ "./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css":
/***/ function(module, exports) {

	eval("module.exports = \".vce-google-fonts-heading-inner {\\n  display: inline-block;\\n}\\n\\n.vce-google-fonts-heading-wrapper {\\n  max-width: 100%;\\n  display: inline-block;\\n}\\n\\n.vce-google-fonts-heading-link,\\n.vce-google-fonts-heading-link:hover,\\n.vce-google-fonts-heading-link:focus,\\n.vce-google-fonts-heading-link:visited {\\n  border: none;\\n  text-decoration: inherit;\\n  color: inherit;\\n}\\n\\n.vce-google-fonts-heading--align-center {\\n  text-align: center;\\n}\\n\\n.vce-google-fonts-heading--align-right {\\n  text-align: right;\\n}\\n\\n.vce-google-fonts-heading--align-left {\\n  text-align: left;\\n}\\n\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./googleFontsHeading/styles.css\n ** module id = ./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./googleFontsHeading/styles.css?./~/raw-loader");

/***/ },

/***/ "./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css":
/***/ function(module, exports) {

	eval("module.exports = \".vce-google-fonts-heading {\\n  min-height: 1em;\\n}\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./googleFontsHeading/editor.css\n ** module id = ./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./googleFontsHeading/editor.css?./~/raw-loader");

/***/ },

/***/ "./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss":
/***/ function(module, exports) {

	eval("module.exports = \".vce-google-fonts-heading {\\n  &--color-$selector {\\n    @if $color != false {\\n      .vce-google-fonts-heading-inner {\\n        color: $color;\\n      }\\n    }\\n  }\\n}\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./googleFontsHeading/cssMixins/textColor.pcss\n ** module id = ./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./googleFontsHeading/cssMixins/textColor.pcss?./~/raw-loader");

/***/ }

});