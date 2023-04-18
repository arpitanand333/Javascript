const countchar = (str) =>{
    const charObj ={};
    let maxcount = 0;
    let result = "";

    for(let i=0; i < str.length; i++){
        charObj[str[i]] = ++charObj[str[i]] || 1;
    }
   console.log(charObj)
    //return charObj;
    for(let key in charObj){
        if(charObj[key] > maxcount ){
            maxcount = charObj[key];
            result = key
        }
    }
    return result;
    
}

console.log(countchar("arpitananddddd"));
