const EventEmitter = require("events");

class EngineEmitter extends EventEmitter {}

const myEvent = new EngineEmitter();

myEvent.on("event", (name) => {
  console.log("Hello", name);
});

myEvent.emit("event", "Rai");
