let utility = require('./utility.js');
let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
console.log(inputArr);
// node main.js tree "directry path"
// node main.js oraganize "directry path"

let command = inputArr[0];
switch(command){
    case "tree":
        treeFn(inputArr[1])
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("please.input right command");
        break;
}

function treeFn(dirpath){
    console.log("tree command implemented for ", dirpath);
}
function organizeFn(dirpath){
    if(dirpath == undefined){
        console.log("kidly provide correct path");
        return;
    }else{
        let doesExist = fs.existsSync(dirpath); 
        if(doesExist){
            let destinationpath = path.join(dirpath, "organized_files");
            if(fs.existsSync(dirpath) == false){
                fs.mkdirSync(destinationpath);
            }
        }else{
            console.log("kidly provide correct path");
        return;
        }
    }

    console.log("tree command implemented for ", dirpath);
}
function helpFn(){
    console.log(`list of all command
    .........
    ` );
}