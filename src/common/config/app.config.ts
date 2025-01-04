export const EnvConfiguration = () => ({
    environment: process.env.node_env || 'dev',
    port: process.env.PORT || 3001,
    mongodb: process.env.MONGODB,
    defaultLimit: process.env.DEFAULT_LIMIT || 10
})