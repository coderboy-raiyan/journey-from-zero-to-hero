const os = require("os");

console.log("Platform: ", os.platform());
console.log("Platform Arch: ", os.arch());
console.log("Os type: ", os.type());
console.log("Os release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("-".repeat(100));

const cpus = os.cpus();

console.log("CPU Model: ", cpus[0].model);
console.log("CPU cores: ", cpus.length);
console.log("CPU speed: ", cpus[0].speed);

console.log("-".repeat(100));

const totalMem = os.totalmem();
const freemem = os.freemem();

console.log("Total Memory: ", Math.ceil(totalMem / 1024 / 1024 / 1024), "GB");
console.log("Total Memory: ", Math.ceil(freemem / 1024 / 1024 / 1024), "GB");
