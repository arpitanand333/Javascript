function calculateResult(expression) {
    class Stack{
        constructor(){
            this.item = [];
        }
    }let stack = new Stack()
    var operators = expression.match(/[+\-*/]/g);
    let str ;
    let result = 0;
    str = expression.split('');
    for(let i=0 ; i < operators.length ; i++){
        if(str.length){
            for(let j = 0; j < str.length; j++ ){
                if(str[j] === '/'){
                    result = str[j-1]

                    str.pop(str[j-1]);
                    str.pop(str[j]);
                    str.pop(str[j+1]);
                
                }else if(str[j] === '*'){
                    stack.item.push(str[j-1]);
                    stack.item.push(str[j]);
                    stack.item.push(str[j+1]);

                    str.pop(str[j-1]);
                    str.pop(str[j]);
                    str.pop(str[j+1]);

                }else if(str[j] === '+'){
                    stack.item.push(str[j-1]);
                    stack.item.push(str[j]);
                    stack.item.push(str[j+1]);

                    str.pop(str[j-1]);
                    str.pop(str[j]);
                    str.pop(str[j+1]);
                    
                }
                
            }
        }
    }
    console.log(stack)
    
}
const result = calculateResult("2+2*8+5");
console.log(result)

