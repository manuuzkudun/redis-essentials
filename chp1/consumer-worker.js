"use strict";

const redis = require("redis");
const client = redis.createClient();
const queue = require("./queue");

const logsQueue = new queue.Queue("logs", client);

function logMessages() {
  logsQueue.pop(function(err, replies) {
    var queueName = replies[0];
    var message = replies[1];
    console.log("[consumer] Got log: " + message);

    logsQueue.size(function(err, size) {
      console.log(size + " logs left");
    });
    logMessages();
  });
}
logMessages();
