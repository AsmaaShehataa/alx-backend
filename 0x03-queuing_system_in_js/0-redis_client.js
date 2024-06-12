import redis from 'redis';

// Description: Redis client configuration.

const client = redis.createClient();
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

client.on('connect', () => {
  console.log('Redis client connected to the server');
}).on('err', () => {
  console.log('Redis client not connected to the server');
});
