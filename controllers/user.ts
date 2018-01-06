import User from '../models/user'
import { createToken } from '../services'

export function signUp(req, res) {
    let user = new User({
        email:req.body.email,
        displayName: req.body.displayName,
        password: req.body.password //Si funciona el pre no es necesario este parametro
    })
    user.save((err, user) => {
        if(err) return res.status(500).send({message: `Error al crear el usuario ${err}`})
        
        res.status(200).send({ token: "Bearer " + createToken(user) })
    })

}
export function signIn(req, res) {
    let email = req.body.email
    User.find({ email:email  }, (err, user) => {
        if(err) return res.status(500).send({ message: `Error al buscar el usuario: ${err}`})
        if(!user) return res.status(404).send({ message: "Usuario no existe"})
        
        req.user = user
        res.status(200).send({ 
            message: "Te has logueado correctamente",
            token: "Bearer " + createToken(user)
        })
    })
}

