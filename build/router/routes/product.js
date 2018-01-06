"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const product_1 = require("../../controllers/product");
const auth_1 = require("../../middlewares/auth");
exports.default = (api) => {
    const productapi = express.Router();
    productapi.get('/', product_1.getProducts);
    productapi.get('/:productId', product_1.getProduct);
    productapi.post('/', product_1.saveProduct);
    productapi.put('/:productId', product_1.updateProduct);
    productapi.delete('/:productId', product_1.deleteProduct);
    productapi.get('/private', auth_1.default, (req, res) => {
        res.status(200).send({ message: "Tienes acceso" });
    });
    api.use('/product', productapi);
};
//# sourceMappingURL=product.js.map