import { response } from 'express';
import redis from 'redis';
import util from 'util';

// Description: Redis client configuration.

const client = redis.createClient();
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

client.on('connect', () => {
  console.log('Redis client connected to the server');
}).on('err', () => {
  console.log('Redis client not connected to the server');
});

function setNewSchool(schoolName, value){
  client.set(schoolName, value, (error, response) => {
    redis.print(`Reply: ${response}`);
  })
}

let displaySchoolValue = schoolName => {
  client.get(schoolName, (_err, reply) => {
    console.log(reply);
  });
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

