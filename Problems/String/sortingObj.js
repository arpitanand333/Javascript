const sortObj = (obj)=>{
    return obj.sort( function(a,b){return a-b});
}
console.log(sortObj([1,2,33,10,100, 0,3,4,5]))
// let result = sortObj([1,2,10,3,4,5]);
// console.log(result);
// let a = [2,1,2,10,3,4,5]
// a.sort();
// console.log(a)