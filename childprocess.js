let cp = require("child_process");
console.log("trying to open calculator");
//cp.execSync("code");
//cp.execSync("start chrome https://google.com");
let output = cp.execSync("node array.js");
console.log("output" + output);