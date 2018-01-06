"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const extras_1 = require("./extras");
const router_1 = require("./router");
const config_1 = require("./config");
const app = express();
extras_1.default(app);
router_1.default(app);
mongoose.connect(config_1.default.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`);
    }
    console.log('Conexion a la base de datos establecida...');
    app.listen(config_1.default.port, () => {
        console.log(`API REST corriendo en http://localhost:${config_1.default.port}`);
    });
});
//# sourceMappingURL=index.js.map