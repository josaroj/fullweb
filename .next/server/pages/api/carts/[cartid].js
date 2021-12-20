"use strict";
(() => {
var exports = {};
exports.id = 281;
exports.ids = [281];
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

/***/ 7912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ query)
});

// UNUSED EXPORTS: db

;// CONCATENATED MODULE: external "serverless-mysql"
const external_serverless_mysql_namespaceObject = require("serverless-mysql");
var external_serverless_mysql_default = /*#__PURE__*/__webpack_require__.n(external_serverless_mysql_namespaceObject);
;// CONCATENATED MODULE: ./lib/db.js

const db = external_serverless_mysql_default()({
  config: {
    host: "l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database: "zhkcu9m0hc9kaxts",
    user: "o4df6vmumhtysfos",
    password: "vm1tosa23w74tqt4",
    port: 3306
  }
});
async function query(query, params) {
  try {
    const results = await db.query(query, params);
    await db.end();
    return {
      status: {
        code: 200,
        message: 'OK'
      },
      data: results
    };
  } catch (e) {
    console.log(e);
    return {
      status: {
        code: 400,
        message: 'Bad Request'
      }
    };
  }
}

/***/ }),

/***/ 5161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7912);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2711);


async function handler(req, res) {
  if (req.method === "GET") {
    const {
      authorization
    } = req.headers;
    const {
      cartid
    } = req.query;
    const verifiedToken = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .verifyToken */ .WX)(authorization);

    if (verifiedToken && verifiedToken.role === "admin") {
      const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * FROM cart WHERE id=?", cartid);
      res.status(results.status.code).json(results);
    } else if (verifiedToken && verifiedToken.role === "user") {
      const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * FROM cart WHERE id=? AND userid=?", [cartid, verifiedToken.id]);
      res.status(results.status.code).json(results);
    } else {
      res.status(401).json({
        status: {
          code: 401,
          message: 'Unauthorized'
        }
      });
    }
  } else if (req.method === "PUT") {
    const {
      authorization
    } = req.headers;
    const {
      cartid
    } = req.query;
    const {
      products
    } = req.body;
    const verifiedToken = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .verifyToken */ .WX)(authorization);

    if (verifiedToken && verifiedToken.role === "admin") {
      const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("UPDATE cart SET products=? WHERE id=?", [JSON.stringify(products), cartid]);
      res.status(204).json(results);
    } else if (verifiedToken && verifiedToken.role === "user") {
      const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("UPDATE cart SET products=? WHERE id=? AND userid=?", [JSON.stringify(products), cartid, verifiedToken.id]);
      res.status(204).json(results);
    } else {
      res.status(401).json({
        status: {
          code: 401,
          message: 'Unauthorized'
        }
      });
    }
  } else if (req.method === "DELETE") {
    const {
      authorization
    } = req.headers;
    const {
      cartid
    } = req.query;
    const verifiedToken = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .verifyToken */ .WX)(authorization);

    if (verifiedToken && verifiedToken.role === "admin") {
      const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("DELETE FROM cart WHERE id=?", cartid);
      res.status(204).json(results);
    } else if (verifiedToken && verifiedToken.role === "user") {
      const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("DELETE FROM cart WHERE id=? AND userid=?", [cartid, verifiedToken.id]);
      console.log(results);
      if (results.data.affectedRows > 0) res.status(204).json(results);else res.status(304).json(results);
    } else {
      res.status(401).json({
        status: {
          code: 401,
          message: 'Unauthorized'
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
var __webpack_exports__ = (__webpack_exec__(5161));
module.exports = __webpack_exports__;

})();