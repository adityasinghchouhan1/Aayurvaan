// redisClient.js (CommonJS version)
const redis = require('redis')

const client = redis.createClient({
  url: 'redis://localhost:6379',
}) 

client.on('error', (err) => console.error('Redis Client Error:', err))

// Use async function instead of top-level await
async function connectRedis() {
  if (!client.isOpen) {
    await client.connect()
    console.log('✅ Redis connected')
  }
}

connectRedis()

module.exports = client
