import * as express from 'express'
import { 
    signUp,
    signIn
} from '../../controllers/user'

export default (api) => {

const userapi = express.Router()

userapi.post('/signup', signUp)
userapi.post('/signin', signIn)

api.use('/', userapi)

}