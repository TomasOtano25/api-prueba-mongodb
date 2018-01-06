"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../../controllers/user");
exports.default = (api) => {
    const userapi = express.Router();
    userapi.post('/signup', user_1.signUp);
    userapi.post('/signin', user_1.signIn);
    api.use('/', userapi);
};
//# sourceMappingURL=user.js.map