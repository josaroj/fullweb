"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 6471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(3454);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
// EXTERNAL MODULE: ./lib/auth.js
var auth = __webpack_require__(2711);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/product/[id].js






function ProductPage({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "card mb-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "row g-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "col-md-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: data.image,
            class: "img-fluid rounded-start",
            alt: "..."
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "col-md-8",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "card-body",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              class: "card-title",
              children: data.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              class: "card-text",
              children: data.description
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              class: "card-text",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("small", {
                class: "text-muted",
                children: ["$", data.price]
              })
            })]
          })
        })]
      })
    })
  });
}
async function getServerSideProps(context) {
  const {
    req
  } = context; // const {token, user} = cookie.parse(context.req.headers.cookie)

  if (!req.headers.cookie) {
    const {
      res
    } = context;
    res.writeHead(301, {
      Location: "/login"
    });
    res.end();
    return true;
  } else {
    const {
      token
    } = external_cookie_default().parse(req.headers.cookie);
    const profile = await (0,auth/* checkLogin */.Xx)(token);

    if (!profile) {
      const {
        res
      } = context;
      res.writeHead(301, {
        Location: "/login"
      });
      res.end();
      return true;
    }
  }

  const res = await external_axios_default().get('https://fakestoreapi.com/products/' + context.params.id);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,502], () => (__webpack_exec__(6471)));
module.exports = __webpack_exports__;

})();