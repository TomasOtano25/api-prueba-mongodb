import * as mongoose from 'mongoose';
const Schema = mongoose.Schema
/*const bcryt = require('bcryt-nodejs')*/
const crypto = require('crypto')

const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    displayName:String,
    avatar:String,
    password:{
        type:String,
        select:false
    },
    signupDate: {
        type:Date,
        default:Date.now()
    },
    lastLogin:Date
})

/*UserSchema.pre('save',(next) => {
    let user = this
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err)
        
        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if(err) return next(err)
            
            user.password = hash
            next()
        })
    })
})*/

/*UserSchema.methods.gavatar = function () {
    if(!this.email) return `http://gravatar.com/avatar/?s=200&d=retro`
    
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `http://gravatar.com/avatar/${md5}?s=200&d=retro`
}*/

 export default mongoose.model('User', UserSchema)