let str = ["anurag", "arpit", "bhavin", "dasty","Panchal vedant"];
// function longStr(arr){
//     let longest = " ";
//     for(let i = 0; i< arr.length; i++){
        
//         if(longest.length < arr[i].length){
//             longest = arr[i];
//         }
       
//     }
//     return longest;
    
// }
// let result = longStr(arr);
// console.log(result);

const longestStr = (str) =>{
    let longest = "";
    str.forEach((item) => {
        if(item.length > longest.length )
        longest = item;
        
    });
    return longest;
}


console.log(longestStr(str));