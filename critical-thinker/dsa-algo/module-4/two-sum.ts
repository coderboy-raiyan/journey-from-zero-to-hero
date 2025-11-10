// Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)

// ===============

// Two pointers if needed to be a sorted array
function twoSum(nums: number[] = [2, 11, 7, 15], k: number = 9) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left]! + nums[right]!;
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
}

// Two sum math + hashMap
function twoSumMath(nums: number[] = [2, 11, 7, 15], k: number = 9) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let diff = Math.abs((num as number) - k);
    map.set(diff, i);
    if (map.has(diff)) {
      return [map.get(diff), num];
    }
  }
}

console.log(twoSumMath());
