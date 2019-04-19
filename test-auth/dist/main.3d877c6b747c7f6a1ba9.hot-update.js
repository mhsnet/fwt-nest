exports.id = "main";
exports.modules = {

/***/ "./src/users/users.module.ts":
/*!***********************************!*\
  !*** ./src/users/users.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst users_service_1 = __webpack_require__(/*! ./users.service */ \"./src/users/users.service.ts\");\r\nlet UsersModule = class UsersModule {\r\n};\r\nUsersModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [AuthController],\r\n        providers: [users_service_1.UsersService],\r\n    })\r\n], UsersModule);\r\nexports.UsersModule = UsersModule;\r\n\n\n//# sourceURL=webpack:///./src/users/users.module.ts?");

/***/ })

};