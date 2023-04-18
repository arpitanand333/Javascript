let singleQuote = '   single quote string ';
let doubleQuote = "double quote string";

console.log(singleQuote);

let char = singleQuote.charAt(4);
// console.log(char);

let substr = singleQuote.substring(2,8);
console.log(substr);

let asciicode = singleQuote.charCodeAt(4);
console.log(asciicode);

let arrstr = singleQuote.split("");
console.log(arrstr);

// to join string 
let str = arrstr.join("$");
console.log(str);

// trim()-- to remove space from both end of string

let strr = '  hello how are you  '
let strr1 = strr.trim();
console.log(strr1);
// join() to concetinate string by given sign
let arstr = doubleQuote.split("");
let newstr = arstr.join("+");
console.log(newstr);



