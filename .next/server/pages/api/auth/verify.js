"use strict";
(() => {
var exports = {};
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 2711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  const results = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:3000/api/auth/verify", {
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

/***/ 9161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2711);

async function handler(req, res) {
  if (req.method === "GET") {
    const token = req.headers.authorization;
    const verifiedToken = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__/* .verifyToken */ .WX)(token);

    if (verifiedToken) {
      res.status(200).json(verifiedToken);
    } else {
      res.status(401).json({
        status: {
          code: 401,
          message: "Unauthorized"
        }
      });
    }
  }
}

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9161));
module.exports = __webpack_exports__;

})();