"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

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

/***/ 9064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7912);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


const secretKEY = "MySecretKey";
async function handler(req, res) {
  if (req.method === "POST") {
    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: {
          code: 400,
          message: "Missing email and password"
        }
      });
    }

    const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)("SELECT * from user WHERE email=? AND password=?", [email, password]);
    console.log(results);
    const data = results.data[0];

    if (data) {
      const payload = {
        id: data.id,
        email: data.email,
        name: data.name,
        role: data.role
      };
      jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, secretKEY, {
        expiresIn: "1d"
      }, (err, token) => {
        return res.status(200).json({
          status: {
            code: 200,
            message: "Authorized"
          },
          data: payload,
          token: token
        });
      });
    } else {
      res.status(401).json({
        status: {
          code: 401,
          message: "Unauthorized"
        }
      });
    }
  } else {
    res.status(405).json({
      status: {
        code: 405,
        message: "Method Not Allowed"
      }
    });
  }
}

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9064));
module.exports = __webpack_exports__;

})();