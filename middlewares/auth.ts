/*const jwt = require('jwt-simple')
const moment = require('moment')*/
/*const config = require('../config')*/
/*const service = require('../services')*/
import { decodeToken } from '../services'

export default function isAuth(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion'})
    }

    const token = req.headers.authorization.split(" ")[1]
    /*const payload = jwt.decode(token, config.SECRET_TOKEN)
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'El Token ha expirado'})
    }*/
    decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(response => {
            res.status(response.status).send({ message: response.message })
        })
    /*req.user = payload.sub*/
    /*next()*/
}
