const Logger = require("./event_emitter_example");

const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});

logger.log("message");
