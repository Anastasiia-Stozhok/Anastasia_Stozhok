function nextBigger(givenNumber) {
  let digitsArray = givenNumber.toString().split("");
  const length = digitsArray.length;
  let i = 0;
  for (i = length - 1; i > 0; i--) {
    if (digitsArray[i] > digitsArray[i - 1]) break;
  }

  if (i === 0) return -1;

  for (let j = length - 1; j > i - 1; j--) {
    if (digitsArray[i - 1] < digitsArray[j]) {
      let tempDigit = digitsArray[i - 1];
      digitsArray[i - 1] = digitsArray[j];
      digitsArray[j] = tempDigit;
      break;
    }
  }

  let partToSort = digitsArray.slice(i);
  partToSort.sort((a, b) => a - b);
  let partIndex = partToSort.length - 1;
  for (let k = length - 1; k > i - 1; k--) {
    digitsArray[k] = partToSort[partIndex];
    partIndex--;
  }

  let result = digitsArray.reduce(
    (res, digit) => res * 10 + parseInt(digit),
    0
  );
  return result;
}

module.exports = nextBigger;
