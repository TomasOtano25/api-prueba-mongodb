import * as express from 'express'
import { 
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct 
} from '../../controllers/product'
import auth from '../../middlewares/auth'

export default (api) => {
    const productapi = express.Router() 
    
    productapi.get('/', getProducts)
    productapi.get('/:productId', getProduct)
    productapi.post('/', saveProduct)
    productapi.put('/:productId', updateProduct)
    productapi.delete('/:productId', deleteProduct)
    
    productapi.get('/private', auth, (req, res) =>{
        res.status(200).send({ message: "Tienes acceso" })
    })
    
    api.use('/product', productapi)

}
