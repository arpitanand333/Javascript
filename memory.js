//window
//console.log(global);
console.log("var name", varName);
var varName;
console.log("var name", varName);
varName = "caption";
console.log("var name", varName);

fn();
function fn(){
    console.log("hello from fn");
}
fn();
//fncontainers();
var fncontainers = function (){
    console.log("i'm a expression");
}
fncontainers();




