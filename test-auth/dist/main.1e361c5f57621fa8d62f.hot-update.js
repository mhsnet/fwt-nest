exports.id = "main";
exports.modules = {

/***/ "./src/users/users.controller.ts":
/*!***************************************!*\
  !*** ./src/users/users.controller.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst users_service_1 = __webpack_require__(/*! ./users.service */ \"./src/users/users.service.ts\");\r\nlet UsersController = class UsersController {\r\n    constructor(usersService) {\r\n        this.usersService = usersService;\r\n    }\r\n    getAll() {\r\n        return 'cs';\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Get('all'),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", String)\r\n], UsersController.prototype, \"getAll\", null);\r\nUsersController = __decorate([\r\n    common_1.Controller('users'),\r\n    __metadata(\"design:paramtypes\", [users_service_1.UsersService])\r\n], UsersController);\r\nexports.UsersController = UsersController;\r\n\n\n//# sourceURL=webpack:///./src/users/users.controller.ts?");

/***/ })

};