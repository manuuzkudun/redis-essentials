"use strict";

const redis = require("redis");
const client = redis.createClient();
const queue = require("./queue");

const logsQueue = new queue.Queue("logs", client);
const MAX = 5;

for (let i = 0 ; i < MAX ; i++) {
  logsQueue.push("Hello world #" + i);
}

console.log("Created " + MAX + " logs");
client.quit();
