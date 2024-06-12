import { createClient, print } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

const UpdateHash = (hashName, key, value) => {
  client.hset(hashName, key, value, print);
};

const printHash = (hashName) => {
  client.hgetall(hashName, (_err, res) => {
    console.log(res);
  });
};

const main = () => {
  const hashObjects = {
    Portland:0,
    Seattle:80,
    'New York':20,
    Bogota:20,
    Cali:40,
    Paris:2
  };
  for (const key in hashObjects) {
    if (Object.hasOwnProperty.call(hashObjects, key)) {
    UpdateHash('HolbertonSchools', key, hashObjects[key]);
  }
}
printHash('HolbertonSchools');
};

client.on('connect', () => {
  console.log('Redis client connected to the server');
  main()
});
