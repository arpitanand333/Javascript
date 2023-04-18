let fs = require("fs");
let buffer = fs.readFileSync("./basicInfo.json");
let data = require("./basicInfo.json");
//console.log(buffer);
//console.log("*******************");
//let data = JSON.parse(buffer);
console.log(data);
// data.push({
    
//     "name": "raju",
//     "degisnation": "Blockchain dev",
//     "home": "shivranjani"

// });

//let stringData = JSON.stringify(data);
//fs.writeFileSync("basicInfo.json", stringData);