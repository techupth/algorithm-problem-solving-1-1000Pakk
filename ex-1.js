function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1 + i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
      }
    }
    if (result.length === 2) {
      break;
    }
  }
  return result;
}

let numbers1 = [2, 7, 11, 15];
let target1 = 9;

console.log(twoSum(numbers1, target1));
