/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of
all the elements of nums except nums[i].

Example:
Input: [1,2,3,4]
Output: [24,12,8,6]

*/

const productExceptSelf = function (nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums.splice(0, 1)
        let mult = nums.reduce((a, b) => a * b)
        nums.push(num)
        output.push(mult)
    }
    console.log('output', output)
    return output
};


/*
for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        let sumOfProduct = 1
        for (let j = nums.length-1; j > 0; j--) {
            let nextNumber = nums[j]
            console.log("nextNumber: ", nextNumber)
            if (i !== j) {
                sumOfProduct = sumOfProduct * nextNumber
                console.log("SUM Of PRODUCT: ", sumOfProduct)
            }
        }
        if (sumOfProduct !== 1) {
            output.push(sumOfProduct)
        }
    }
*/

let arr = [1, 2, 3, 4]

productExceptSelf(arr)

module.exports = productExceptSelf;
