const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index-1),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index+2)
  ]

  
function test(str){
    let presedance = ['/','*','+','-'];
    let numbers = str.match(/\d+/g);
    //console.log(numbers);
  
    let operators = str.match(/[+\-*/]/g);
    //console.log(operators);
    let str1 = str.split('');
   // console.log(str1)

    for(let i = 0; i< presedance.length; i++){
        for(let j=0; j<str1.length; j++ ){
            if(presedance[i] === str1[j]){
                if(presedance[i] == '/'){
                    let val = parseInt(str1[j-1]) / parseInt(str1[j+1]);
                   // console.log(val);
                    str1 = insert(str1, j, val);

                }
                else if(presedance[i] == '*'){
                    let val = parseInt(str1[j-1]) * parseInt(str1[j+1]);
                    //console.log(val);
                    str1 = insert(str1, j, val);
                    
                }
                else if(presedance[i] == '+'){
                    let val = parseInt(str1[j-1]) + parseInt(str1[j+1]);
                    //console.log(val);
                    str1 = insert(str1, j, val);
                }
                else {
                    let val = parseInt(str1[j-1]) - parseInt(str1[j+1]);
                    //console.log(val);
                    str1 = insert(str1, j, val);
                }
                
                
                
            }
        }
    }return str1[0];
}
const result = test("2+2+2");
console.log(result);

