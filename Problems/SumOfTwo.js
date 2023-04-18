
var twoSum = function(nums, target) {
    for(let i=0; i<= nums.length ;i++){
        for(let j = i+1; j<= nums.length; i++){
            if(nums[i]+nums[j] == target){
            return [i, j];
            }
       
        }
        
    }
    

};
let nums = [2,7,11,15];
let target = 9;
twoSum(nums, target);
let num1 = [3,2,4]
let target1 = 6
twoSum(num1, target1);

let num2 = [3,3]
let target2 = 6;
twoSum(num2, target2);
