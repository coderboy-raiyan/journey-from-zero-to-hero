const path = require("path");

console.log("Filename : ", __filename);
console.log("Dirname : ", __dirname);

console.log("\n" + "-".repeat(100), "\n");

const filePath = "./coder/rabbit/run.ts";

console.log(path.dirname(filePath));
console.log(path.basename(filePath, path.extname(filePath)));
console.log(path.extname(filePath));
