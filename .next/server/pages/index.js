"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(3454);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/productcard.js



function ProductCard(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: props.image,
        class: "card-img-top",
        alt: props.title,
        height: "200px"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "card-body",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          class: "card-title",
          children: props.name
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/product/[id]",
          as: `/product/${props.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            class: "btn btn-primary",
            children: "View detail"
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/index.js




function HomePage(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row row-cols-3",
      children: props.data.map(prod => /*#__PURE__*/jsx_runtime_.jsx(ProductCard, {
        name: prod.title,
        image: prod.image,
        id: prod.id
      }))
    })
  });
}
async function getStaticProps() {
  const res = await external_axios_default().get('https://fakestoreapi.com/products');
  const data = res.data;
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,502], () => (__webpack_exec__(4050)));
module.exports = __webpack_exports__;

})();