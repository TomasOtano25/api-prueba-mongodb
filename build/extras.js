"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
exports.default = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
};
//# sourceMappingURL=extras.js.map