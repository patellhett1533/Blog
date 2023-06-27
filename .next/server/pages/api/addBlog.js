"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addBlog";
exports.ids = ["pages/api/addBlog"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./lib/dbconnect.js":
/*!**************************!*\
  !*** ./lib/dbconnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectMongo\": () => (/* binding */ connectMongo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    }\n    return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJjb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxlQUFlO0lBQzFCLElBQUlELHVFQUE4QkcsS0FBSyxHQUFHO1FBQ3hDLE9BQU9ILG9FQUE2Qkk7SUFDdEM7SUFFQSxPQUFPLE1BQU1KLHVEQUFnQkssQ0FBQ0MsUUFBUUMsSUFBSUM7QUFDNUMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1c2luZXNzLy4vbGliL2RiY29ubmVjdC5qcz9lMWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb25nbyA9IGFzeW5jICgpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ28iLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/dbconnect.js\n");

/***/ }),

/***/ "(api)/./model/Blog.js":
/*!***********************!*\
  !*** ./model/Blog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst blogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    cover: {\n        type: String,\n        required: true\n    },\n    content: [\n        {\n            option: String,\n            data: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.Mixed)\n        }\n    ]\n}, {\n    timestamps: true\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Blog\", blogSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9CbG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhLElBQUlELHdEQUFlRSxDQUNwQztJQUNFQyxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRSxTQUFTO1FBQ1A7WUFDRUMsUUFBUUo7WUFDUkssTUFBTVYsb0VBQTJCWTtRQUNuQztLQUNEO0FBQ0gsR0FDQTtJQUFFQyxZQUFZO0FBQUs7QUFHckJiLHdEQUFlYyxHQUFHLENBQUM7QUFFbkIsaUVBQWVkLHFEQUFjZSxDQUFDLFFBQVFkLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXNpbmVzcy8uL21vZGVsL0Jsb2cuanM/MGJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGJsb2dTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY292ZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29udGVudDogW1xuICAgICAge1xuICAgICAgICBvcHRpb246IFN0cmluZyxcbiAgICAgICAgZGF0YTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk1peGVkLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxubW9uZ29vc2UubW9kZWxzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiQmxvZ1wiLCBibG9nU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImJsb2dTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvdmVyIiwiY29udGVudCIsIm9wdGlvbiIsImRhdGEiLCJUeXBlcyIsIk1peGVkIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./model/Blog.js\n");

/***/ }),

/***/ "(api)/./pages/api/addBlog.js":
/*!******************************!*\
  !*** ./pages/api/addBlog.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbconnect */ \"(api)/./lib/dbconnect.js\");\n/* harmony import */ var _model_Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/Blog */ \"(api)/./model/Blog.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst multer = __webpack_require__(/*! multer */ \"multer\");\nconst shortid = __webpack_require__(/*! shortid */ \"shortid\");\nconst path = __webpack_require__(/*! path */ \"path\");\n// upload prifle picture to folder using multer\nconst storage = multer.diskStorage({\n    destination: function(req, file, cb) {\n        cb(null, path.join(path.dirname(__dirname), \"blogImg\"));\n    },\n    filename: function(req, file, cb) {\n        cb(null, shortid.generate() + \"-\" + file.originalname);\n    }\n});\nconst upload = multer({\n    storage\n});\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nhandler.use(upload.single(\"cover\"));\nhandler.config = {\n    api: {\n        bodyParser: false\n    }\n};\nhandler.post(async (req, res)=>{\n    await (0,_lib_dbconnect__WEBPACK_IMPORTED_MODULE_0__.connectMongo)(); // Establish MongoDB connection\n    const { title , content  } = req.body; // Retrieve text data from the request\n    const { filename  } = req.file; // Retrieve the uploaded file information\n    // Create an instance of the Mongoose model\n    const blog = new _model_Blog__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        title,\n        content,\n        filename\n    });\n    try {\n        const savedBlog = await blog.save(); // Save the data to the database\n        res.status(200).json(savedBlog);\n    } catch (error) {\n        console.error(error);\n        res.status(500).json({\n            error: \"Failed to save blog\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQmxvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBQ2Y7QUFDTztBQUN2QyxNQUFNRyxTQUFTQyxtQkFBT0EsQ0FBQyxzQkFBUTtBQUMvQixNQUFNQyxVQUFVRCxtQkFBT0EsQ0FBQyx3QkFBUztBQUNqQyxNQUFNRSxPQUFPRixtQkFBT0EsQ0FBQyxrQkFBTTtBQUUzQiwrQ0FBK0M7QUFDL0MsTUFBTUcsVUFBVUosT0FBT0ssWUFBWTtJQUNqQ0MsYUFBYSxTQUFVQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsRUFBRTtRQUNsQ0EsR0FBRyxNQUFNTixLQUFLTyxLQUFLUCxLQUFLUSxRQUFRQyxZQUFZO0lBQzlDO0lBQ0FDLFVBQVUsU0FBVU4sR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEVBQUU7UUFDL0JBLEdBQUcsTUFBTVAsUUFBUVksYUFBYSxNQUFNTixLQUFLTztJQUMzQztBQUNGO0FBRUEsTUFBTUMsU0FBU2hCLE9BQU87SUFBRUk7QUFBUTtBQUVoQyxNQUFNYSxVQUFVbEIsd0RBQVdBO0FBRTNCa0IsUUFBUUMsSUFBSUYsT0FBT0csT0FBTztBQUUxQkYsUUFBUUcsU0FBUztJQUNmQyxLQUFLO1FBQ0hDLFlBQVk7SUFDZDtBQUNGO0FBRUFMLFFBQVFNLEtBQUssT0FBT2hCLEtBQUtpQjtJQUN2QixNQUFNM0IsNERBQVlBLElBQUksK0JBQStCO0lBRXJELE1BQU0sRUFBRTRCLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUduQixJQUFJb0IsTUFBTSxzQ0FBc0M7SUFDM0UsTUFBTSxFQUFFZCxTQUFRLEVBQUUsR0FBR04sSUFBSUMsTUFBTSx5Q0FBeUM7SUFFeEUsMkNBQTJDO0lBQzNDLE1BQU1vQixPQUFPLElBQUk5QixtREFBSUEsQ0FBQztRQUNwQjJCO1FBQ0FDO1FBQ0FiO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTWdCLFlBQVksTUFBTUQsS0FBS0UsUUFBUSxnQ0FBZ0M7UUFDckVOLElBQUlPLE9BQU8sS0FBS0MsS0FBS0g7SUFDdkIsRUFBRSxPQUFPSSxPQUFPO1FBQ2RDLFFBQVFELE1BQU1BO1FBQ2RULElBQUlPLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxPQUFPO1FBQXNCO0lBQ3REO0FBQ0Y7QUFFQSxpRUFBZWhCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXNpbmVzcy8uL3BhZ2VzL2FwaS9hZGRCbG9nLmpzP2ZiNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdE1vbmdvIH0gZnJvbSBcIkAvbGliL2RiY29ubmVjdFwiO1xuaW1wb3J0IEJsb2cgZnJvbSBcIkAvbW9kZWwvQmxvZ1wiO1xuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoXCJtdWx0ZXJcIik7XG5jb25zdCBzaG9ydGlkID0gcmVxdWlyZShcInNob3J0aWRcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbi8vIHVwbG9hZCBwcmlmbGUgcGljdHVyZSB0byBmb2xkZXIgdXNpbmcgbXVsdGVyXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgZGVzdGluYXRpb246IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XG4gICAgY2IobnVsbCwgcGF0aC5qb2luKHBhdGguZGlybmFtZShfX2Rpcm5hbWUpLCBcImJsb2dJbWdcIikpO1xuICB9LFxuICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICBjYihudWxsLCBzaG9ydGlkLmdlbmVyYXRlKCkgKyBcIi1cIiArIGZpbGUub3JpZ2luYWxuYW1lKTtcbiAgfSxcbn0pO1xuXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlIH0pO1xuXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcblxuaGFuZGxlci51c2UodXBsb2FkLnNpbmdsZShcImNvdmVyXCIpKTtcblxuaGFuZGxlci5jb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBjb25uZWN0TW9uZ28oKTsgLy8gRXN0YWJsaXNoIE1vbmdvREIgY29ubmVjdGlvblxuXG4gIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHJlcS5ib2R5OyAvLyBSZXRyaWV2ZSB0ZXh0IGRhdGEgZnJvbSB0aGUgcmVxdWVzdFxuICBjb25zdCB7IGZpbGVuYW1lIH0gPSByZXEuZmlsZTsgLy8gUmV0cmlldmUgdGhlIHVwbG9hZGVkIGZpbGUgaW5mb3JtYXRpb25cblxuICAvLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIE1vbmdvb3NlIG1vZGVsXG4gIGNvbnN0IGJsb2cgPSBuZXcgQmxvZyh7XG4gICAgdGl0bGUsXG4gICAgY29udGVudCxcbiAgICBmaWxlbmFtZSxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzYXZlZEJsb2cgPSBhd2FpdCBibG9nLnNhdmUoKTsgLy8gU2F2ZSB0aGUgZGF0YSB0byB0aGUgZGF0YWJhc2VcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzYXZlZEJsb2cpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIHNhdmUgYmxvZ1wiIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJCbG9nIiwibmV4dENvbm5lY3QiLCJtdWx0ZXIiLCJyZXF1aXJlIiwic2hvcnRpZCIsInBhdGgiLCJzdG9yYWdlIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsInJlcSIsImZpbGUiLCJjYiIsImpvaW4iLCJkaXJuYW1lIiwiX19kaXJuYW1lIiwiZmlsZW5hbWUiLCJnZW5lcmF0ZSIsIm9yaWdpbmFsbmFtZSIsInVwbG9hZCIsImhhbmRsZXIiLCJ1c2UiLCJzaW5nbGUiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwicG9zdCIsInJlcyIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJibG9nIiwic2F2ZWRCbG9nIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addBlog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addBlog.js"));
module.exports = __webpack_exports__;

})();