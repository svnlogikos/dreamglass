webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(\"./twitterGrid/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(\"./twitterGrid/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{ \"css\": __webpack_require__(\"./node_modules/raw-loader/index.js!./twitterGrid/styles.css\"), \"editorCss\": __webpack_require__(\"./node_modules/raw-loader/index.js!./twitterGrid/editor.css\"), \"mixins\": { \"gridWidth\": { \"mixin\": __webpack_require__(\"./node_modules/raw-loader/index.js!./twitterGrid/cssMixins/gridWidth.pcss\") } } }, '');\n\n/*****************\n ** WEBPACK FOOTER\n ** ./twitterGrid/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./twitterGrid/index.js?");

/***/ },

/***/ "./twitterGrid/component.js":
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(\"./node_modules/react/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(\"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\nvar cook = _vcCake2.default.getService(\"cook\");\n\nvar TwitterGrid = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(TwitterGrid, _vcvAPI$elementCompon);\n\n  function TwitterGrid() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    (0, _classCallCheck3.default)(this, TwitterGrid);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TwitterGrid.__proto__ || (0, _getPrototypeOf2.default)(TwitterGrid)).call.apply(_ref, [this].concat(args))), _this), _this.tweetCount = '5', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);\n  }\n\n  (0, _createClass3.default)(TwitterGrid, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _props$atts = this.props.atts,\n          gridUrl = _props$atts.gridUrl,\n          tweetCount = _props$atts.tweetCount,\n          width = _props$atts.width;\n\n      if (!tweetCount) {\n        tweetCount = this.tweetCount;\n      }\n\n      if (width) {\n        this.checkCustomSize(width);\n      }\n\n      if (gridUrl) {\n        this.insertTwitter(gridUrl, tweetCount);\n      }\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      var _props$atts2 = this.props.atts,\n          gridUrl = _props$atts2.gridUrl,\n          tweetCount = _props$atts2.tweetCount;\n\n      if (!tweetCount) {\n        tweetCount = this.tweetCount;\n      }\n      var elementKey = 'customProps:' + this.props.id + '-' + gridUrl + '-' + tweetCount;\n\n      var nextAtts = nextProps.atts;\n\n      if (!nextAtts.tweetCount) {\n        nextAtts.tweetCount = this.tweetCount;\n      }\n      if (nextAtts.width) {\n        this.checkCustomSize(nextAtts.width);\n      } else {\n        this.setState({\n          size: null\n        });\n      }\n      var nextElementKey = 'customProps:' + nextProps.id + '-' + nextAtts.gridUrl + '-' + nextAtts.tweetCount;\n\n      if (nextAtts.gridUrl && elementKey !== nextElementKey) {\n        this.insertTwitter(nextAtts.gridUrl, nextAtts.tweetCount);\n      }\n    }\n  }, {\n    key: 'loadJSONP',\n    value: function loadJSONP(url, callback, context) {\n      var name = '_jsonp_twitterGrid_' + TwitterGrid.unique++;\n      if (url.indexOf('?') >= 0) {\n        url += '&callback=' + name;\n      } else {\n        url += '?callback=' + name;\n      }\n\n      var script = document.createElement('script');\n      script.type = 'text/javascript';\n      script.async = true;\n      script.src = url;\n\n      var clearScript = function clearScript() {\n        document.getElementsByTagName('head')[0].removeChild(script);\n        script = null;\n        delete window[name];\n      };\n\n      var timeout = 10; // 10 second by default\n      var timeoutTrigger = window.setTimeout(function () {\n        clearScript();\n      }, timeout * 1000);\n\n      window[name] = function (data) {\n        window.clearTimeout(timeoutTrigger);\n        callback.call(context || window, data);\n        clearScript();\n      };\n\n      document.getElementsByTagName('head')[0].appendChild(script);\n    }\n  }, {\n    key: 'insertTwitter',\n    value: function insertTwitter(url, tweetCount) {\n      var _this2 = this;\n\n      var createdUrl = 'https://publish.twitter.com/oembed.json?url=' + url + '&limit=' + tweetCount + '&widget_type=grid';\n      this.loadJSONP(createdUrl, function (data) {\n        _this2.appendTwitter(data.html);\n        _this2.props.api.request('layout:rendered', true);\n      });\n    }\n  }, {\n    key: 'appendTwitter',\n    value: function appendTwitter() {\n      var tagString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n      var component = this.getDomNode().querySelector('.vce-twitter-grid-inner');\n      this.updateInlineHtml(component, tagString);\n    }\n  }, {\n    key: 'checkCustomSize',\n    value: function checkCustomSize(width) {\n      width = this.validateSize(width);\n      width = /^\\d+$/.test(width) ? width + 'px' : width;\n      var size = { width: width };\n      this.setSizeState(size);\n    }\n  }, {\n    key: 'validateSize',\n    value: function validateSize(value) {\n      var units = ['px', 'em', 'rem', '%', 'vw', 'vh'];\n      var re = new RegExp('^-?\\\\d*(\\\\.\\\\d{0,9})?(' + units.join('|') + ')?$');\n      if (value === '' || value.match(re)) {\n        return value;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: 'setSizeState',\n    value: function setSizeState(size) {\n      this.setState({ size: size });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var customClass = atts.customClass,\n          alignment = atts.alignment,\n          width = atts.width,\n          metaCustomId = atts.metaCustomId;\n\n      var classes = 'vce-twitter-grid';\n      var innerClasses = 'vce-twitter-grid-inner';\n      var wrapperClasses = 'vce-twitter-grid-wrapper vce';\n      var customProps = {};\n      var innerCustomProps = {};\n\n      if (typeof customClass === 'string' && customClass) {\n        classes += ' ' + customClass;\n      }\n\n      if (alignment) {\n        classes += ' vce-twitter-grid--align-' + alignment;\n      }\n\n      if (width) {\n        innerCustomProps.style = this.state ? this.state.size : null;\n      }\n\n      customProps.key = 'customProps:' + id;\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({}, customProps, { className: classes }, editor),\n        _react2.default.createElement(\n          'div',\n          (0, _extends3.default)({ className: wrapperClasses, id: 'el-' + id }, doAll),\n          _react2.default.createElement('div', (0, _extends3.default)({ className: innerClasses }, innerCustomProps))\n        )\n      );\n    }\n  }]);\n  return TwitterGrid;\n}(vcvAPI.elementComponent);\n\nTwitterGrid.unique = 0;\nexports.default = TwitterGrid;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./twitterGrid/component.js\n ** module id = ./twitterGrid/component.js\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./twitterGrid/component.js?");

/***/ },

/***/ "./twitterGrid/settings.json":
/***/ function(module, exports) {

	eval("module.exports = {\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"gridUrl\",\"width\",\"alignment\",\"tweetCount\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"assetsLibrary\":{\"access\":\"public\",\"type\":\"string\",\"value\":[\"animate\"]},\"gridUrl\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"https://twitter.com/Twitter/timelines/539487832448843776\",\"options\":{\"label\":\"Twitter grid URL (Link)\",\"link\":true}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"left\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Center\",\"value\":\"center\",\"icon\":\"vcv-ui-icon-attribute-alignment-center\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"tweetCount\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"5\",\"options\":{\"min\":\"0\",\"label\":\"Count of visible tweets\"}},\"width\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"500px\",\"options\":{\"label\":\"Width\",\"description\":\"Enter width in pixels. Minimal width 220px (Example: 220px).\"}},\"metaDisableInteractionInEditor\":{\"type\":\"toggle\",\"access\":\"protected\",\"value\":true},\"metaBackendLabels\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[{\"value\":[\"gridUrl\"]}]},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"twitterGrid\"}}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./twitterGrid/settings.json\n ** module id = ./twitterGrid/settings.json\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./twitterGrid/settings.json?");

/***/ },

/***/ "./node_modules/raw-loader/index.js!./twitterGrid/styles.css":
/***/ function(module, exports) {

	eval("module.exports = \".vce-twitter-grid iframe {\\n  display: block;\\n  vertical-align: top;\\n}\\n\\n.vce-twitter-grid-wrapper {\\n  display: inline-block;\\n  max-width: 100%;\\n}\\n\\n.vce-twitter-grid--align-center {\\n  text-align: center;\\n}\\n\\n.vce-twitter-grid--align-right {\\n  text-align: right;\\n}\\n\\n.vce-twitter-grid--align-left {\\n  text-align: left;\\n}\\n\\n.vce-twitter-grid-inner {\\n  vertical-align: top;\\n  display: inline-block;\\n  width: 100%;\\n  min-width: 220px;\\n  max-width: 100%;\\n}\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./twitterGrid/styles.css\n ** module id = ./node_modules/raw-loader/index.js!./twitterGrid/styles.css\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./twitterGrid/styles.css?./~/raw-loader");

/***/ },

/***/ "./node_modules/raw-loader/index.js!./twitterGrid/editor.css":
/***/ function(module, exports) {

	eval("module.exports = \"[data-vcv-element-disable-interaction=\\\"true\\\"] .vce-twitter-grid-inner {\\n  position: relative;\\n}\\n\\n[data-vcv-element-disable-interaction=\\\"true\\\"] .vce-twitter-grid-inner::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 999;\\n}\\n\\n.vce-twitter-grid {\\n  min-height: 1em;\\n}\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./twitterGrid/editor.css\n ** module id = ./node_modules/raw-loader/index.js!./twitterGrid/editor.css\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./twitterGrid/editor.css?./~/raw-loader");

/***/ },

/***/ "./node_modules/raw-loader/index.js!./twitterGrid/cssMixins/gridWidth.pcss":
/***/ function(module, exports) {

	eval("module.exports = \".vce-twitter-grid {\\n  &--width-$selector {\\n    @if $width != false {\\n      width: $(width)px;\\n    }\\n  }\\n}\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./twitterGrid/cssMixins/gridWidth.pcss\n ** module id = ./node_modules/raw-loader/index.js!./twitterGrid/cssMixins/gridWidth.pcss\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./twitterGrid/cssMixins/gridWidth.pcss?./~/raw-loader");

/***/ }

});