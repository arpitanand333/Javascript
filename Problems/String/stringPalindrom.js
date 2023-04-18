const palindromStr = (str) =>{
    let revstr ;

    revstr = str.split('').reverse().join('');
    if(str == revstr){
        return true;
    }
    else{
        return false;
    }
    // revstr = revstr.reverse();
    // revstr = revstr.join('');
    //console.log(revstr);
}
const result = palindromStr("abcba");
console.log(result);