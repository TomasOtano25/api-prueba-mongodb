"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const product_1 = require("./routes/product");
const user_1 = require("./routes/user");
const api = express.Router();
/*const auth = require('../middlewares/auth')*/
product_1.default(api);
user_1.default(api);
// Ejemplos de direcciones privada
/*api.get('/private', auth, (req, res) =>{
    res.status(200).send({ message: "Tienes acceso" })
})*/
/*api.post('/product', auth, productCtrl.saveProduct)

api.put('/product/:productId', auth, productCtrl.updateProduct)

api.delete('/product/:productId', auth, productCtrl.deleteProduct)*/
exports.default = api;
//# sourceMappingURL=v1.js.map