exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 3454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/header.module.css
var header_module = __webpack_require__(9107);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./lib/auth.js
var auth = __webpack_require__(2711);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/header.js









function Header() {
  const router = (0,router_.useRouter)();
  const {
    0: profile,
    1: setProfile
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(async () => {
    const token = external_js_cookie_default().get('token');
    if (token) setProfile(await (0,auth/* checkLogin */.Xx)(token));
  }, []);

  async function handleLogout(e) {
    e.preventDefault();
    external_js_cookie_default().remove('token');
    external_js_cookie_default().remove('user');
    router.push('/');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "navbar-brand",
        href: "#",
        children: "Mystore"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "collapse navbar-collapse",
        id: "navbarNavAltMarkup",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          class: "nav nav-pills",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            class: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: router.pathname == "/" ? "nav-link active " + (header_module_default()).linkactive : "nav-link",
                "aria-current": "page",
                children: "Home"
              })
            })
          }), profile ? /*#__PURE__*/jsx_runtime_.jsx("li", {
            class: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/cart/user/" + profile.id,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: router.pathname == "/cart/user/[userid]" ? "nav-link active " + (header_module_default()).linkactive : "nav-link",
                children: "Cart"
              })
            })
          }) : '', /*#__PURE__*/jsx_runtime_.jsx("li", {
            class: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: router.pathname == "/about" ? "nav-link active " + (header_module_default()).linkactive : "nav-link",
                children: "About"
              })
            })
          })]
        })
      })]
    }), profile ? /*#__PURE__*/jsx_runtime_.jsx("form", {
      class: "d-flex",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        class: "btn btn-outline-success",
        type: "submit",
        onClick: handleLogout,
        children: "Logout"
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/login",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "nav-link",
        children: "Login"
      })
    })]
  });
}
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/footer.js



function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    class: "d-flex flex-wrap justify-content-between align-items-center",
    className: "jsx-662788771",
    children: [/*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "662788771",
      children: ["span.jsx-662788771{font-weight :bold;}"]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "col-md-4 d-flex align-items-center",
      className: "jsx-662788771",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        class: "text-muted",
        style: {
          backgroundColor: 'aqua'
        },
        className: "jsx-662788771",
        children: "\xA9 2021 Company, Inc"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/layout.js






function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU",
        crossorigin: "anonymous"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ",
        crossorigin: "anonymous"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 2711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eJ": () => (/* binding */ checkapiKey),
/* harmony export */   "WX": () => (/* binding */ verifyToken),
/* harmony export */   "Xx": () => (/* binding */ checkLogin)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const APIKEY = "3d7d052a031e864ee9c1b04b5a4d0f11";
const secretKEY = "MySecretKey";
function checkapiKey(apikey) {
  if (apikey === APIKEY) {
    return true;
  } else {
    return false;
  }
}
function verifyToken(token) {
  const jwtToken = token.split(' ')[1];

  try {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(jwtToken, secretKEY);
  } catch {
    return false;
  }
}
async function checkLogin(token) {
  const results = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://fullweb.herokuapp.com/api/auth/verify", {
    headers: {
      Authorization: token
    }
  }).then(res => {
    return res.data;
  }).catch(err => {
    return false;
  });
  return results;
}

/***/ }),

/***/ 9107:
/***/ ((module) => {

// Exports
module.exports = {
	"linkactive": "header_linkactive__1nBg4"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;