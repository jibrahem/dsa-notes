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
        let mult = 1
        mult = mult * nums[i]
        output.push(mult)
        output[i] = output[i]/nums[i]
    }
    return output
};

let arr = [1, 2, 3, 4]

productExceptSelf(arr)

module.exports = productExceptSelf;
