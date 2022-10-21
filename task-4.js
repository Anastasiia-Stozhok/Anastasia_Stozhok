function countPairs(numberArray, target) {
  let countNumber = 0;

  numberArray.forEach((number, index) => {
    for (let j = index + 1; j < numberArray.length; j++) {
      if (number + numberArray[j] === target) countNumber++;
    }
  });

  return countNumber;
}

console.log(
  `1. The number of pairs is ${countPairs([1, 3, 6, 2, 2, 0, 4, 5], 5)} `
);
console.log(
  `2. The number of pairs is ${countPairs([1, 3, 6, 2, 2, 0, 4, 5], 2)} `
);
console.log(`3. The number of pairs is ${countPairs([], 5)} `);
console.log(`4. The number of pairs is ${countPairs([5], 5)} `);
