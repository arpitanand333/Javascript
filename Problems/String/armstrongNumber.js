const arm = (num)=>{
let temp = num;
let sum = 0;
let len = num.toString().length;
//console.log(typeof(len));
for(let i=0; i< len; i++){
    if(num){
        let n = num%10;
        //console.log(n);
        sum += n**len;
        //console.log(sum);
        num = Math.floor(num/10);
    }
}
if(temp === sum){
    console.log("armstrong number");
}
else{
    console.log("Given string is not an armstrong number");
}
}
 arm(1523);
 arm(153);
 arm(8208);
