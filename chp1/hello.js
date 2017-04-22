const redis = require("redis");
const client = redis.createClient();
client.set("my_key", "Hello World using Node.js and Redis");
client.get("my_key", redis.print);
client.quit();
