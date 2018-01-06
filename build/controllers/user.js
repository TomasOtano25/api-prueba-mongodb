"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const services_1 = require("../services");
function signUp(req, res) {
    let user = new user_1.default({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password //Si funciona el pre no es necesario este parametro
    });
    user.save((err, user) => {
        if (err)
            return res.status(500).send({ message: `Error al crear el usuario ${err}` });
        res.status(200).send({ token: "Bearer " + services_1.createToken(user) });
    });
}
exports.signUp = signUp;
function signIn(req, res) {
    let email = req.body.email;
    user_1.default.find({ email: email }, (err, user) => {
        if (err)
            return res.status(500).send({ message: `Error al buscar el usuario: ${err}` });
        if (!user)
            return res.status(404).send({ message: "Usuario no existe" });
        req.user = user;
        res.status(200).send({
            message: "Te has logueado correctamente",
            token: "Bearer " + services_1.createToken(user)
        });
    });
}
exports.signIn = signIn;
//# sourceMappingURL=user.js.map