import * as express from 'express'
import * as mongoose from 'mongoose'
import extras from './extras'
import router from './router'
import config from './config'

const app = express()

extras(app)

router(app)

mongoose.connect(config.db, (err, res) => {
    if (err){/*throw err*/
        return console.log(`Error al conectar a la base de datos: ${err}`) 
    }
    console.log('Conexion a la base de datos establecida...')

    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})

