const fs = require("fs");

const logTime = `${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./output/app.log", logTime);
