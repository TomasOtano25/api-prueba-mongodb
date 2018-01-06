const config = {
    port: process.env.PORT/*NODE_ENV*/ || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'miclavedetokens'
}

export default config
