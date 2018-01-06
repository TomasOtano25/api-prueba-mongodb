import * as express from 'express'
import productapi from './routes/product' 
import userapi from './routes/user'



const api = express.Router()

/*const auth = require('../middlewares/auth')*/

productapi(api)
userapi(api)

// Ejemplos de direcciones privada
/*api.get('/private', auth, (req, res) =>{
    res.status(200).send({ message: "Tienes acceso" })
})*/

/*api.post('/product', auth, productCtrl.saveProduct)

api.put('/product/:productId', auth, productCtrl.updateProduct)

api.delete('/product/:productId', auth, productCtrl.deleteProduct)*/

export default api