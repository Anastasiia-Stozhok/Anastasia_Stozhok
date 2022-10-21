function countPairs(numberArray, target) {
  let countNumber = 0;

  numberArray.forEach((number, index) => {
    for (let j = index + 1; j < numberArray.length; j++) {
      if (number + numberArray[j] === target) countNumber++;
    }
  });

  return countNumber;
}

module.exports = countPairs;
