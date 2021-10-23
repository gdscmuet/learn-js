/*
  NOTE: The provided solution is not copied


  RECURSION Example in JavaScript

  Problem: sum_of_1d_array ( from leetcode )

  Explanation for problem: {
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.
  }

  Demo:{
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
  }
  
*/

// Test case [1,2,3,4]
// Expected output [1,3,6,10]

const array = [1, 2, 3, 4];

// Recursive Solution

const runningSum = (nums) => {
  let result = [nums[0]];
  const recursive = (loop) => {
    if (nums.length <= loop) return;
    else result.push(nums[loop] + result[loop - 1]);
    recursive(loop + 1);
  };
  recursive(1);
  return result;
};

runningSum(array); // function call

/*
  Funtion runningSum takes an array of numbers as an argument
  returns an array of running sum of given array

  Note: recursive functions starts from index 1 of given array because we already assign index 0 value to result at the start
  recursive function runs until the index given to recursive function is greater than equal to the length or array given to runningSum function


  Happy Coding!!!


  Author: https://github.com/officialabdulrehman
*/
