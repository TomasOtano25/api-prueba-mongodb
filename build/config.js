"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT /*NODE_ENV*/ || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'miclavedetokens'
};
exports.default = config;
//# sourceMappingURL=config.js.map